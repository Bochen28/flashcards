# Fiszki

Flashcards and short exercises for Polish speakers, from first words to C1:

- `english/`: English, over 10,000 exercises
- `ukrainian/`: Ukrainian, over 10,000 exercises, with the alphabet, transliteration and an on-screen Cyrillic keyboard
- `spanish/`: Spanish (Spain, with notes on Latin America), over 10,000 exercises; conjugation drills are generated from verb rules in `data/gen-verbs.js`, and typing has an á é ñ ¿ ¡ key row

For Ukrainian speakers:

- `uk/english/`: English with a Ukrainian interface, translations and lessons (see "Other interface languages" below)

A static site with no build step. `shared/` holds the app and styles used by every language. Each language folder has `data.js`, content files in `data/`, and generators (`gen-*.js`) that load last. Progress is saved in the browser's localStorage.

Run locally: `python -m http.server` in this folder, then open http://localhost:8000/.

## Ukrainian audio

Most browsers have no Ukrainian voice, so every Ukrainian word and sentence the app reads aloud is pre-recorded in `ukrainian/audio/` (MP3, file name = hash of the text). The voice is "tetiana" from [Piper](https://github.com/OHF-Voice/piper1-gpl) (model licence Apache 2.0). English uses the browser's own voices.

After adding or changing Ukrainian content, record the new texts (only missing files are recorded):

```
.tts/venv/Scripts/python tools/make_audio.py ukrainian --prune
```

Setup instructions for `.tts/` (git-ignored) are at the top of `tools/make_audio.py`. A text without a recording falls back to the device's Ukrainian voice, if it has one.

## Lessons

Each language has short lessons in `lessons/*.js` that explain the rules in Polish. On the home screen a lesson sits right before the level given in `before`, and its end screen links to the levels in `practice`. Lesson text uses a simple line format:

```
## Heading                 - list item               | table | row |   (first row = header)
> foreign sentence | Polish translation   (example with audio)
! tip                      !! warning                plain lines = paragraph, **bold**
```

Check lessons with `node tools/check_lessons.js english` (or `ukrainian`). Ukrainian example sentences need recordings too: run `tools/make_audio.py` after adding lessons.

## Other interface languages

The interface strings live in a dictionary in `shared/app.js` (Polish by default). A course in another interface language loads a file such as `shared/ui-uk.js`, which sets `window.UI` with the same keys.

`uk/english/` reuses the English course's data instead of copying it. Its page loads `english/data.js`, the content files and the generators, then `shared/overlay.js` and the translation files in `uk/english/tr/`:

- `TR({ id: { t, d, qp, i, full, en } })` translates a hand-written level. `i` has one line per original line, in the same order (f levels: `translation|tip`, m levels: `meaning|wrong1,wrong2|tip`). `full` replaces all lines (used for false friends, which depend on the learner's language). `en` swaps text in the English sentences, e.g. `[['from Poland', 'from Ukraine']]`.
- `TRG({ 'gv-m-#': { t, d, qp, item, map } })` translates generated levels by id pattern; `TRM({...}, 'v')` gives the word meanings they use.
- `tr/zz-apply.js` runs `APPLY_TR()` last.

Check it with `node tools/check_overlay.js uk/english` (untranslated levels, line counts, Polish left over) and `node tools/check_lessons.js uk/english`. When you add or change a level in `english/`, update its line in `uk/english/tr/` too.
