# Notes CLI (08-notes)

A small Node.js notes application used in the learning course. It demonstrates simple note management (add, remove, list, read) using a JSON file for storage and a small command-line interface.

## Why this project is useful

- Lightweight example for learning Node.js file I/O and CLI patterns.
- Demonstrates use of `fs` for persistence and simple command parsing.
- Good starting point to extend with features like tagging, search, or persistent databases.

## Getting started

Requirements: Node.js (v14+ recommended).

1. Install dependencies (if any):

```bash
npm install
```

2. Run the app (examples):

- Add a note:

```bash
node app.js add --title "Shopping" --body "Buy milk"
```

- Remove a note:

```bash
node app.js remove --title "Shopping"
```

- List notes:

```bash
node app.js list
```

The CLI commands are implemented in `app.js` and note operations live in `notes.js`.

## Key files

- [app.js](app.js) — CLI entrypoint and command definitions.
- [notes.js](notes.js) — note helper functions (`getNotes`, `addNote`, `removeNote`, `saveNote`).
- [notes.json](notes.json) — local JSON storage used by the app.

## Where to get help

If you run into issues, open an issue in the repository or inspect the files above to trace behavior. For quick debugging, add `console.log` statements in `notes.js` to inspect variables like the `duplicateNote` check.

## Maintainers & Contributing

Maintainer: repository owner (see project settings). Contributions are welcome — open issues or pull requests with focused changes.
