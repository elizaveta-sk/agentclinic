# Requirements: Phase 1, Project init

## Context

This is the first phase on `specs/roadmap.md`. The folder holds only `README.md` and `specs/`; there is no code yet. Phase 1 lays down the TypeScript project that every later phase builds on.

It follows `specs/mission.md` ("Small steps", "Boring and reliable") and `specs/tech-stack.md` (strict TypeScript, Node.js current LTS, npm).

## Scope

In scope:

- `package.json` for the AgentClinic project
- A strict `tsconfig.json`
- A `.gitignore` that keeps `node_modules/` out of git
- A "Getting started" section in `README.md`
- Marking Phase 1 done in `specs/roadmap.md`

Out of scope (later phases):

- Any dependency other than TypeScript and Node type definitions
- Source files, including a placeholder `src/index.ts` (Phase 2 adds the first one)
- npm scripts such as `typecheck`, `build`, or `dev` (Phase 3 adds `dev`)
- Hono, Vitest, ESLint, Prettier, Tailwind, Prisma

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
| Source layout | `"rootDir": "src"`, `"outDir": "dist"`, `"include": ["src"]` | One clear place for code from Phase 2 on |
| `skipLibCheck` | `true` | Faster checks; standard practice |
| `.gitignore` | `node_modules/` and `dist/` | Installing TypeScript creates `node_modules/`, which must never be committed. `dist/` is the `outDir` above. Later phases add their own entries (e.g. the SQLite file) |

## Known consequence

With no source files, running `npx tsc --noEmit` reports "No inputs were found" (TS18003). This is expected for Phase 1. The roadmap rule that every phase ends with a passing type-check starts to apply in Phase 2, when the first source file arrives.
