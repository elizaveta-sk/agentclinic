# Validation: Phase 2, Dev server and lint/format

This work can be merged into `master` when every box below is checked.

Checks marked 🧪 are covered by Vitest tests and verified by `npm test` (see "Testing and validation" in `specs/tech-stack.md`). The rest are manual.

## One command

- [x] `npm run check` exits with 0 (type-check, lint, format check, and tests all pass).
- [x] 🧪 `package.json` has the `dev`, `typecheck`, `lint`, `format`, `format:check`, and `check` scripts. (`src/project.test.ts` › has dev, typecheck, lint, format, and check scripts)

## Dev server

- [x] `npm run dev` starts the server and logs its URL.
- [x] Changing a file under `src/` restarts the server, and the next request shows the change.

## TypeScript

- [x] `typescript` is pinned to `~6.0` and `npm run typecheck` passes.
- [x] `npm install` completes without dependency conflicts.

## Lint and format

- [x] `npm run lint` reports no problems.
- [x] `npm run format:check` reports all files formatted.
- [x] `.prettierignore` keeps Markdown, `package-lock.json`, and `dist/` out of formatting.
- [x] No `any` remains in `src/`.

## Specs and docs

- [x] `specs/tech-stack.md` records TypeScript 6.0 and why, plus the lint and format setup.
- [x] `specs/roadmap.md` marks both steps and Phase 2 done.
- [x] The README mentions `npm run dev` and `npm run check`.
