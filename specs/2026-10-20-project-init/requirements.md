# Requirements: Phase 1, Project init

## Context

This is the first phase on `specs/roadmap.md`. The folder holds only `README.md` and `specs/`; there is no code yet. Phase 1 lays down the TypeScript project that every later phase builds on, plus a minimal AgentClinic home page so the app is runnable from the very first phase.

It follows `specs/mission.md` ("Small steps": every phase leaves the app runnable; "Boring and reliable") and `specs/tech-stack.md` (strict TypeScript, Node.js current LTS, npm, server-rendered HTML).

## Scope

In scope:

- `package.json` for the AgentClinic project, with an `npm start` script
- A strict `tsconfig.json`
- A `.gitignore` that keeps `node_modules/` out of git
- `src/index.ts`: a minimal AgentClinic home page served with Node's built-in `node:http`
- A "Getting started" section in `README.md`
- Marking Phase 1 done in `specs/roadmap.md`

Out of scope (later phases):

- Any dependency other than TypeScript and Node type definitions
- Hono (Phase 2 replaces `node:http` with Hono), Vitest, ESLint, Prettier, Tailwind, Prisma
- Any route other than `/`, and any styling beyond plain HTML (Tailwind arrives in Phase 7)
- npm scripts other than `start`, such as `typecheck`, `build`, or `dev` (Phase 3 adds `dev`)

## Decisions

| Decision | Choice | Why |
|---|---|---|
| Node version | Node.js 24 (current LTS) | Matches "Node.js (current LTS)" in the tech stack. Node 20 is past end of life |
| Version pinning | `"engines": { "node": ">=24" }` in `package.json` | Tells students and demo presenters which Node to install |
| Module system | ES modules (`"type": "module"`) | Native for Node 24; what Hono and Vitest expect |
| Package manager | npm | Per the tech stack |
| Package | `"name": "agentclinic"`, `"private": true` | It's an app, not a library to publish |
| Dev dependencies | `typescript`, `@types/node` (for Node 24) | The minimum needed for a working `tsconfig.json`. npm installed TypeScript 7 (the native compiler) |
| `types` | `["node"]` | Since TypeScript 6, `types` defaults to `[]`, so Node's types must be listed explicitly |
| `strict` | `true` | Tech stack requires strict TypeScript |
| Extra strictness | `noUncheckedIndexedAccess`, `noImplicitOverride`, `noFallthroughCasesInSwitch` | Catch common bugs early, at no cost on an empty project |
| Module settings | `"module": "NodeNext"`, `"moduleResolution": "NodeNext"`, `"target": "ES2024"` | Correct ESM resolution for Node 24 |
| JSX settings | `"jsx": "react-jsx"`, `"jsxImportSource": "hono/jsx"` | Set now so Phase 4 (JSX layout) needs no tsconfig change |
| Source layout | `"rootDir": "src"`, `"outDir": "dist"`, `"include": ["src"]` | One clear place for code |
| `skipLibCheck` | `true` | Faster checks; standard practice |
| `.gitignore` | `node_modules/` and `dist/` | Installing TypeScript creates `node_modules/`, which must never be committed. `dist/` is the `outDir` above. Later phases add their own entries (e.g. the SQLite file) |
| Home page server | Node's built-in `node:http` | Runnable app with zero new dependencies. Phase 2 swaps it for Hono |
| Running TypeScript | `node src/index.ts` (Node 24 strips types natively) | No build step or extra tool until `tsx watch` in Phase 3 |
| Type-stripping safety | `"erasableSyntaxOnly": true`, `"verbatimModuleSyntax": true` in `tsconfig.json` | The type-check rejects syntax Node can't strip (enums, namespaces, parameter properties) |
| Port | `PORT` environment variable, defaulting to `3000` | Booth demos may need a different port |
| Home page content | An HTML page titled "AgentClinic" with an `<h1>`, the tagline "A place for AI agents to get relief from their humans.", and one playful welcome line | The mission's "Delight matters", kept minimal |
| Unknown paths | Respond `404 Not Found` as plain text | Keeps the page honest without adding routing |

## Type-check

With `src/index.ts` in place, `npx tsc --noEmit` has input and must pass, so Phase 1 meets the roadmap rule that every phase ends with a passing type-check. Lint and tests start in Phases 5 and 6.
