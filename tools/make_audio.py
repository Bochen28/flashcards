"""Records the Ukrainian course audio with the open Piper voice "tetiana" (Apache 2.0).

Setup once (from the Flashcards folder; .tts/ is git-ignored):
    python -m venv .tts/venv
    .tts/venv/Scripts/python -m pip install piper-tts lameenc
    download uk_UA-tetiana-high.onnx and .onnx.json from
    https://huggingface.co/rhasspy/piper-voices/tree/main/uk/uk_UA/tetiana/high into .tts/

Run (only records texts that have no file yet, so it is quick after content changes):
    .tts/venv/Scripts/python tools/make_audio.py ukrainian
Options: --limit N (record only N texts), --prune (delete files no text uses any more),
         --takes N (takes per text, shortest kept; default 3), --redo list.json (record listed files again),
         --workers N (parallel processes, default half the CPU cores), --threads N (per worker, default 2)
"""
import argparse
import json
import os
import subprocess
import sys
from concurrent.futures import ProcessPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL = os.path.join(ROOT, '.tts', 'uk_UA-tetiana-high.onnx')
LENGTH_SCALE = 1.1   # a little slower than the voice's default, easier for learners
BITRATE = 40         # kbps, mono MP3

_voice = None


def _init(threads):
    global _voice
    # each worker gets a few threads; by default every worker would use all cores and they would fight
    import onnxruntime
    make_opts = onnxruntime.SessionOptions

    def limited():
        o = make_opts()
        o.intra_op_num_threads = threads
        o.inter_op_num_threads = 1
        return o
    onnxruntime.SessionOptions = limited
    from piper import PiperVoice
    _voice = PiperVoice.load(MODEL)


def _record(job):
    # The voice varies a little between takes and now and then stretches a sound or adds a long pause,
    # so record a few takes and keep the shortest. With an existing file (--redo) keep the new one only if shorter.
    text, path, takes, only_shorter = job
    import lameenc
    from piper import SynthesisConfig
    cfg = SynthesisConfig(length_scale=LENGTH_SCALE)
    pcm, rate = None, 22050
    for _ in range(max(1, takes)):
        take = b''
        for chunk in _voice.synthesize(text, syn_config=cfg):
            take += chunk.audio_int16_bytes
            rate = chunk.sample_rate
        if pcm is None or len(take) < len(pcm):
            pcm = take
    enc = lameenc.Encoder()
    enc.set_bit_rate(BITRATE)
    enc.set_in_sample_rate(rate)
    enc.set_channels(1)
    enc.set_quality(2)
    data = enc.encode(pcm) + enc.flush()
    if only_shorter and os.path.exists(path) and len(data) >= os.path.getsize(path):
        return 0
    tmp = path + '.part'
    with open(tmp, 'wb') as f:
        f.write(data)
    os.replace(tmp, path)
    return len(data)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('lang', help='language folder, e.g. ukrainian')
    ap.add_argument('--limit', type=int, default=0)
    ap.add_argument('--prune', action='store_true')
    ap.add_argument('--workers', type=int, default=max(1, (os.cpu_count() or 4) // 2))
    ap.add_argument('--threads', type=int, default=2)
    ap.add_argument('--takes', type=int, default=3, help='takes per text; the shortest is kept')
    ap.add_argument('--redo', help='JSON list of file names (without .mp3) to record again, kept only if shorter')
    a = ap.parse_args()

    lang_dir = os.path.join(ROOT, a.lang)
    out_dir = os.path.join(lang_dir, 'audio')
    os.makedirs(out_dir, exist_ok=True)
    listing = subprocess.run(['node', os.path.join(ROOT, 'tools', 'saylist.js'), lang_dir],
                             capture_output=True, check=True)
    items = json.loads(listing.stdout.decode('utf-8'))
    wanted = {it['f'] for it in items}
    if a.redo:
        with open(a.redo, encoding='utf-8') as f:
            redo = {(x['f'] if isinstance(x, dict) else x).replace('.mp3', '') + '.mp3' for x in json.load(f)}
        jobs = [(it['t'], os.path.join(out_dir, it['f']), a.takes, True) for it in items if it['f'] in redo]
        print(f'recording {len(jobs)} texts again ({a.takes} takes each)', flush=True)
    else:
        jobs = [(it['t'], os.path.join(out_dir, it['f']), a.takes, False) for it in items
                if not os.path.exists(os.path.join(out_dir, it['f']))]
        done = len(items) - len(jobs)
        if a.limit:
            jobs = jobs[:a.limit]
        print(f'{len(items)} texts, {done} already recorded, recording {len(jobs)}', flush=True)

    total = changed = 0
    if jobs:
        with ProcessPoolExecutor(max_workers=a.workers, initializer=_init, initargs=(a.threads,)) as ex:
            for i, size in enumerate(ex.map(_record, jobs, chunksize=4), 1):
                total += size
                changed += 1 if size else 0
                if i % 250 == 0 or i == len(jobs):
                    print(f'  {i}/{len(jobs)} done, {changed} files written, {total / 1e6:.1f} MB', flush=True)

    if a.prune:
        gone = [f for f in os.listdir(out_dir) if f.endswith('.mp3') and f not in wanted]
        for f in gone:
            os.remove(os.path.join(out_dir, f))
        print(f'removed {len(gone)} unused files')


if __name__ == '__main__':
    sys.exit(main())
