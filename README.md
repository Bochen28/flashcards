# Fiszki

Flashcards and short exercises for Polish speakers, from first words to C1:

- `english/`: English, over 10,000 exercises
- `ukrainian/`: Ukrainian, over 10,000 exercises, with the alphabet, transliteration and an on-screen Cyrillic keyboard

A static site with no build step. `shared/` holds the app and styles used by every language. Each language folder has `data.js`, content files in `data/`, and generators (`gen-*.js`) that load last. Progress is saved in the browser's localStorage.

Run locally: `python -m http.server` in this folder, then open http://localhost:8000/.

## Ukrainian audio

Most browsers have no Ukrainian voice, so every Ukrainian word and sentence the app reads aloud is pre-recorded in `ukrainian/audio/` (MP3, file name = hash of the text). The voice is "tetiana" from [Piper](https://github.com/OHF-Voice/piper1-gpl) (model licence Apache 2.0). English uses the browser's own voices.

After adding or changing Ukrainian content, record the new texts (only missing files are recorded):

```
.tts/venv/Scripts/python tools/make_audio.py ukrainian --prune
```

Setup instructions for `.tts/` (git-ignored) are at the top of `tools/make_audio.py`. A text without a recording falls back to the device's Ukrainian voice, if it has one.
