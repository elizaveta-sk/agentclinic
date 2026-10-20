# Validation: Phase 1, Project init

Phase 1 can be merged into `master` when every box below is checked.

Checks marked 🧪 are covered by Vitest tests and verified by `npm test` (see "Testing and validation" in `specs/tech-stack.md`). The rest are manual.

## Files exist and are valid

- [x] 🧪 `package.json` exists, parses as JSON, and has `"type": "module"` and `"engines": { "node": ">=24" }`. (`src/project.test.ts` › package.json)
- [x] `package-lock.json` is committed.
- [x] 🧪 `tsconfig.json` exists and has `"strict": true`. (`src/project.test.ts` › tsconfig.json)
- [x] `npx tsc --showConfig` prints the resolved config without errors.
- [x] 🧪 `.gitignore` lists `node_modules/` and `dist/`. (`src/project.test.ts` › .gitignore) `git status` shows no files from `node_modules/`.
- [x] 🧪 `tsconfig.json` has `"erasableSyntaxOnly": true` and `"verbatimModuleSyntax": true`. (`src/project.test.ts` › tsconfig.json)

## Type-check

- [x] `npx tsc --noEmit` exits with 0.

## Home page

Phase 2 replaced the `node:http` server, so the home page checks below were verified by hand with `curl` at the time. Their lasting equivalents are the 🧪 checks in `specs/2026-10-20-hello-hono/validation.md`.

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
