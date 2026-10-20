# Requirements: Phase 2, Dev server and lint/format

## Context

Roadmap Phase 2 ("App foundation") has four steps. "Hello Hono" and "Vitest" are done (see `specs/2026-10-20-hello-hono/`). This spec covers the last two, "Dev server" and "Lint and format", which complete Phase 2.

It follows `specs/mission.md` ("Small steps", "Boring and reliable") and `specs/tech-stack.md` (ESLint + Prettier, `tsx watch`, and the rule that every phase ends with passing type-check, lint, and tests).

## Scope

In scope:

- `npm run dev`: run the app with `tsx watch`, restarting on every file change
- ESLint with typescript-eslint's recommended rules: `npm run lint`
- Prettier with default settings: `npm run format` and `npm run format:check`
- `npm run typecheck` and `npm run check`, which runs every check in one go
- Formatting the existing code with Prettier and fixing what ESLint finds
- Tests for the new scripts, and updates to the tech stack, roadmap, and README

Out of scope (later phases):

- Running `npm run check` in CI (Phase 5)
- Type-aware lint rules (`strictTypeChecked`)
- Pre-commit hooks

## Decisions

| Decision | Choice | Why |
|---|---|---|
| Dev server | `"dev": "tsx watch src/index.ts"` | `tsx` already runs the app; `watch` restarts it on change, so a code change shows up on refresh without restarting by hand |
| TypeScript version | Pin `typescript@~6.0` (6.0.3), down from 7.0.2 | typescript-eslint 8.72 supports TypeScript `>=4.8.4 <6.1.0` only, and npm refuses to install it next to TypeScript 7. TypeScript 6 supports every compiler option we use. Move back to 7 when typescript-eslint supports it |
| Lint tool | ESLint 10 with `@eslint/js` and `typescript-eslint`, configured in `eslint.config.js` (flat config) | Per the tech stack; the standard setup |
| Lint rules | `js.configs.recommended` + `tseslint.configs.recommended`; ignore `dist/` | Catches real bugs without noise; easy for students to follow |
| Format tool | Prettier 3 with defaults (`.prettierrc.json` is `{}`) | The existing code already uses Prettier's default style (double quotes, semicolons, trailing commas), so only line wrapping changes |
| What Prettier formats | Code, CSS, and JSON. Markdown, `package-lock.json`, and `dist/` are listed in `.prettierignore` | Specs, README, and changelog are hand-written; reformatting their tables would create noisy diffs |
| `typecheck` script | `"typecheck": "tsc --noEmit"` | Named command instead of remembering `npx tsc --noEmit` |
| `check` script | `"check": "npm run typecheck && npm run lint && npm run format:check && npm test"` | One command for the roadmap's "type-check, lint, and tests pass" rule; stops at the first failure |
| `any` in tests | Replace the `any` in `src/project.test.ts` with small `PackageJson` and `TsConfig` types | ESLint's `no-explicit-any`, and the tech stack's "no `any` without a reason" |
