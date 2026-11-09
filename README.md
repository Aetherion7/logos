# ΛΟΓΟΣ

A minimal reading app for Ancient Greek. Learn the alphabet, then read complete works sentence by sentence: tap a word for its meaning and pronunciation, double-tap a sentence for the full translation, hold a word to colour-mark or copy it, and take a short quiz after every page.

Open `index.html` in a browser. It is a single self-contained file.

## Works

| Work | Pages |
|---|---|
| Plato, *Apology of Socrates* (complete) | 64 |
| Heraclitus, *Fragments* (Diels–Kranz B, all fragments preserved in Greek) | 20 |
| Epicurus, *Letter to Menoeceus* (complete) | 12 |

## Build

```bash
python3 build.py
```

- `src/app.html`: app shell (styles and code) with placeholders
- `src/texts.js`, `src/abc.js`: text metadata and the alphabet unit
- `src/*.json` + `src/glosses/*.txt`: Greek sentence units and their English translation and word glosses (`index|translation|gloss;gloss;…`, one gloss per Greek word)
- `src/build_pages.py`: splits the units into pages (`src/full.json`)
- `src/images/`, `src/portraits.js`: drawings and portraits

## Sources and licences

- Plato, *Apology*, ed. Burnet; digital text by the Perseus Digital Library, CC BY-SA 4.0
- Heraclitus, Diels–Kranz, via Greek Wikisource, CC BY-SA
- Epicurus, *Letter to Menoeceus* (Diogenes Laertius X 122–135), ed. Hicks; digital text by the Perseus Digital Library, CC BY-SA 4.0
- English translations and word glosses: written for this app
- Portraits from Wikimedia Commons: Plato and Epicurus public domain; Heraclitus bust photo by Yair Haklai, CC BY-SA 4.0 (background removed, converted to grayscale)

Because the Greek texts and the Heraclitus photo are CC BY-SA, those parts are shared under the same licence.
