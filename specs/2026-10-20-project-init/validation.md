# Validation: Phase 1, Project init

Phase 1 can be merged into `master` when every box below is checked.

## Files exist and are valid

- [x] `package.json` exists, parses as JSON, and has `"type": "module"` and `"engines": { "node": ">=24" }`.
- [x] `package-lock.json` is committed.
- [x] `tsconfig.json` exists and has `"strict": true`.
- [x] `npx tsc --showConfig` prints the resolved config without errors.
- [x] `.gitignore` lists `node_modules/` and `dist/`, and `git status` shows no files from `node_modules/`.
- [x] `tsconfig.json` has `"erasableSyntaxOnly": true` and `"verbatimModuleSyntax": true`.

## Type-check

- [x] `npx tsc --noEmit` exits with 0.

## Home page

- [x] `npm start` starts the server and logs `http://localhost:3000`.
- [x] `PORT=4000 npm start` serves on port 4000 instead.
- [x] `curl -i http://localhost:3000/` returns `200` with `Content-Type: text/html; charset=utf-8`.
- [x] The page has the title "AgentClinic", an `<h1>AgentClinic</h1>`, the tagline "A place for AI agents to get relief from their humans.", and a welcome line.
- [x] `curl -i http://localhost:3000/nope` returns `404`.
- [ ] The page opens in a modern browser and shows the heading and tagline.

## README

- [x] `README.md` has a "Getting started" section naming Node.js 24 LTS, `npm install`, `npm start`, and http://localhost:3000.

## Roadmap

- [x] Phase 1 is marked done in `specs/roadmap.md`, and its description mentions the home page.

## Scope check

- [x] No dependencies other than `typescript` and `@types/node`.
- [x] No files outside the scope in `requirements.md`: the only source file is `src/index.ts`, and the only script is `start`.
