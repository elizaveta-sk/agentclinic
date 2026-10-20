# Validation: Phase 1, Project init

Phase 1 can be merged into `master` when every box below is checked.

## Files exist and are valid

- [x] `package.json` exists, parses as JSON, and has `"type": "module"` and `"engines": { "node": ">=24" }`.
- [x] `package-lock.json` is committed.
- [x] `tsconfig.json` exists and has `"strict": true`.
- [x] `npx tsc --showConfig` prints the resolved config without errors.
- [x] `.gitignore` lists `node_modules/` and `dist/`, and `git status` shows no files from `node_modules/`.

## README

- [x] `README.md` has a "Getting started" section naming Node.js 24 LTS and `npm install`.

## Roadmap

- [x] Phase 1 is marked done in `specs/roadmap.md`.

## Scope check

- [x] No dependencies other than `typescript` and `@types/node`.
- [x] No files outside the scope in `requirements.md` (no `src/`, no extra scripts).
