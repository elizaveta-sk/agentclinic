# Plan: Phase 2, Dev server and lint/format

See `requirements.md` for scope and decisions, and `validation.md` for the merge checklist.

## 1. Dev server

1. Add `"dev": "tsx watch src/index.ts"` to `package.json`.
2. Start `npm run dev`, change a file, and confirm the server restarts and serves the change.

## 2. TypeScript version

1. Pin `typescript@~6.0`, because typescript-eslint doesn't support TypeScript 7 yet.
2. Confirm `npx tsc --noEmit` and `npm test` still pass.

## 3. ESLint

1. Install `eslint`, `@eslint/js`, and `typescript-eslint` as dev dependencies.
2. Create `eslint.config.js` with `js.configs.recommended` and `tseslint.configs.recommended`, ignoring `dist/`.
3. Add `"lint": "eslint ."`.
4. Run it and fix what it finds (the `any` in `src/project.test.ts`).

## 4. Prettier

1. Install `prettier` as a dev dependency.
2. Create `.prettierrc.json` (`{}`, the defaults) and `.prettierignore` (`*.md`, `package-lock.json`, `dist/`).
3. Add `"format": "prettier --write ."` and `"format:check": "prettier --check ."`.
4. Run `npm run format` on the existing code.

## 5. One command for every check

1. Add `"typecheck": "tsc --noEmit"`.
2. Add `"check": "npm run typecheck && npm run lint && npm run format:check && npm test"`.
3. Add a test in `src/project.test.ts` that the new scripts exist.
4. Run `npm run check` and make sure it passes.

## 6. Specs and docs

1. Update `specs/tech-stack.md`: TypeScript 6.0 and why, the lint and format setup, and the scripts.
2. Update `specs/roadmap.md`: mark the "Dev server" and "Lint and format" steps and Phase 2 done; CI (Phase 5) runs `npm run check`.
3. Add `npm run dev` and `npm run check` to the README's "Getting started".

## 7. Wrap up

1. Run through `validation.md`.
2. Run `/changelog` before merging.
3. Commit on the `phase-2-dev-and-lint` branch.
