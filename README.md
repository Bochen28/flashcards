# Fiszki

Flashcards and short exercises for Polish speakers, from first words to C1:

- `english/`: English, over 10,000 exercises
- `ukrainian/`: Ukrainian, over 10,000 exercises, with the alphabet, transliteration and an on-screen Cyrillic keyboard
- `spanish/`: Spanish (Spain, with notes on Latin America), over 10,000 exercises; conjugation drills are generated from verb rules in `data/gen-verbs.js`, and typing has an á é ñ ¿ ¡ key row
- `italian/`: Italian, over 10,000 exercises; conjugation, noun, adjective, number and clock drills are generated in `data/gen-verbs.js` and `data/gen-more.js`, typing has an à è é ì ò ù key row, and a missing accent or article counts as a typo

For Ukrainian speakers:

- `uk/english/`: English with a Ukrainian interface, translations and lessons (see "Other interface languages" below)

A static site with no build step. `shared/` holds the app and styles used by every language. Each language folder has `data.js`, content files in `data/`, and generators (`gen-*.js`) that load last. Progress is saved in the browser's localStorage.

Run locally: `python -m http.server` in this folder, then open http://localhost:8000/.

## Site-wide features

- `shared/prefs.js` loads in every page's `<head>`: it applies the theme and text size chosen in settings (shared by all courses, stored as `fiszki-theme` / `fiszki-size`) and registers `sw.js`.
- `sw.js` makes the site work offline: it always tries the network first and falls back to a saved copy of anything already opened (pages, data, lessons, played recordings). Bump `CACHE` in it only to drop old copies.
- Each course has a `manifest.webmanifest` and PNG icons in `icons/`, so it can be installed on a phone's home screen.
- The language picker (`index.html`) shows progress from each course's localStorage key (`data-key` on its card) and marks the course opened last (`fiszki-last`).
- Spaced repetition: every exercise answered in a quiz (or marked "Umiem" on a flashcard) gets a review date. A wrong answer makes it due today; each right answer on or after its due date moves it on to the next gap of 1, 3, 7, 16, 35 or 90 days. A review session takes up to 20 due exercises, oldest first, from any level. Once a day, when something from earlier days is due, the review becomes the home screen's next step, with a link to carry on in the course instead. Progress saved before reviews existed is converted on load: levels with stars are spread over the next four weeks, and old mistakes are due today. State is `srs` in each course's localStorage entry (`{hash of the item key: [box, day number]}`) and `revDay`, the last day a review was finished.
- The home screen greets the learner, shows the next step (today's review, a lesson or a level), the review count, today's answers against a daily goal (10/20/40, set in settings), the day streak, stars and course progress. A short "How it works" card shows for new learners until closed.
- On a course page: search finds levels and lessons by title or by any word inside (either language, accents optional); press `/` to jump to it. Settings also hold auto-advance after a correct answer and progress backup to a JSON file.

When adding a course, give its page the same `<head>` lines (manifest, apple-touch-icon, `prefs.js`) and add a card with its `data-key` to the picker.

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

Check lessons with `node tools/check_lessons.js english` (or `ukrainian`, `spanish`, `italian`). Ukrainian example sentences need recordings too: run `tools/make_audio.py` after adding lessons.

## Other interface languages

The interface strings live in a dictionary in `shared/app.js` (Polish by default). A course in another interface language loads a file such as `shared/ui-uk.js`, which sets `window.UI` with the same keys.

`uk/english/` reuses the English course's data instead of copying it. Its page loads `english/data.js`, the content files and the generators, then `shared/overlay.js` and the translation files in `uk/english/tr/`:

- `TR({ id: { t, d, qp, i, full, en } })` translates a hand-written level. `i` has one line per original line, in the same order (f levels: `translation|tip`, m levels: `meaning|wrong1,wrong2|tip`). `full` replaces all lines (used for false friends, which depend on the learner's language). `en` swaps text in the English sentences, e.g. `[['from Poland', 'from Ukraine']]`.
- `TRG({ 'gv-m-#': { t, d, qp, item, map } })` translates generated levels by id pattern; `TRM({...}, 'v')` gives the word meanings they use.
- `tr/zz-apply.js` runs `APPLY_TR()` last.

Check it with `node tools/check_overlay.js uk/english` (untranslated levels, line counts, Polish left over) and `node tools/check_lessons.js uk/english`. When you add or change a level in `english/`, update its line in `uk/english/tr/` too.
