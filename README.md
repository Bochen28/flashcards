# Fiszki

Flashcards and short exercises for Polish speakers, from first words to C1:

- `english/`: English, over 10,000 exercises
- `ukrainian/`: Ukrainian, over 10,000 exercises, with the alphabet, transliteration and an on-screen Cyrillic keyboard

A static site with no build step. `shared/` holds the app and styles used by every language. Each language folder has `data.js`, content files in `data/`, and generators (`gen-*.js`) that load last. Progress is saved in the browser's localStorage.

Run locally: `python -m http.server` in this folder, then open http://localhost:8000/.
