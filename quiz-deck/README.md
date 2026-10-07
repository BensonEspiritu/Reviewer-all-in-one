# Quiz Deck

A no-dependency quiz and flashcard site. Import your own questions, study locally.

## Run it
- Easiest: double-click `index.html` (works from `file://`).
- Or serve it: `python3 -m http.server 8000` then open http://localhost:8000

## Publish on GitHub Pages

This folder is the website root: `index.html`, `css/`, `js/`, and `data/` belong
at the top level of the GitHub repository. No build command is needed.
The `.nojekyll` file tells GitHub Pages to serve the static files directly.

1. Push this folder to a GitHub repository. A public repository supports Pages
   on GitHub Free; private repositories require a plan that includes Pages.
2. In the repository, open **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **main** and **/(root)**, then click **Save**.
5. Wait for deployment, then open the URL shown under **Visit site** on your phone.
   A project site usually has the form `https://USERNAME.github.io/REPOSITORY/`.

Future pushes to `main` update the website automatically. Publishing can take
up to 10 minutes. See the [GitHub Pages setup guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

The published site includes the question banks in `data/`. Questions created or
imported through the app stay in that browser's localStorage and do not sync
between your computer and phone.

## Add a subject and questions
Choose **Create a subject** in the sidebar, enter a subject name, then add questions on its page.
Question and answer are required. Choices are optional; separate them with `|`. Topic/module and
explanation are optional. Subjects and questions created this way are saved in this browser.

## Structure
```
quiz-deck/
├── index.html            page shell
├── css/style.css         all styling
├── js/app.js             import, storage, quiz + flashcard logic
├── data/
│   ├── questions.js          built-in question bank (edit this)
│   ├── sample-questions.json
│   └── sample-questions.csv
└── README.md
```

## Built-in questions (no import needed)
Edit `data/questions.js`. Its sets load automatically on page load and can't be deleted from
the UI. It's a `.js` file rather than `.json` because browsers block `fetch()` of local files
when you open `index.html` directly. For more subjects, add more `window.QUESTION_BANK.push({...})`
blocks, or copy the file and add another `<script>` tag above `js/app.js` in `index.html`.

## Import formats (optional extras)
**JSON**: `{ "title": "...", "questions": [ { "question", "answer", "choices"?, "explanation"? } ] }`
(a bare array of questions also works).

**Modules / subjects:** replace `questions` with `modules`:
```json
{ "title": "Biology 101",
  "modules": [
    { "title": "Organelles", "questions": [ { "question": "...", "answer": "..." } ] },
    { "title": "Genetics",   "questions": [ ... ] }
  ] }
```
Or keep a flat `questions` list and tag each one with `"module": "Genetics"`.
In CSV, add a `module` column. The set page then shows a chip per module, plus "All modules".

**CSV**: header row `question,answer,choices,explanation`; separate choices with `|`.

- With `choices`: multiple choice (the answer is added if missing).
- Without `choices`: typed answer in quiz mode, reveal-and-grade in flashcard mode.

User-created and imported sets are saved in your browser's localStorage (per browser, per origin; opening via
`file://` and via `localhost` keep separate libraries). Clear them by deleting sets in the sidebar.

## Extending
All logic is in `js/app.js`: `normalize()` defines the question shape, `actions` handles
clicks, `render*()` functions build each view. To add a field (e.g. images, tags), update
`normalize()` and the matching `renderSession()` branch.
