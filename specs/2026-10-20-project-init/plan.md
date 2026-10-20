# Plan: Phase 1, Project init

See `requirements.md` for scope and decisions, and `validation.md` for the merge checklist.

## 1. Node runtime

1. Install Node.js 24 LTS (done: `brew install node@24`, now v24.22.0 with npm 11.19.1).
2. Confirm `node --version` reports v24.x and `npm --version` works.

## 2. .gitignore

1. Create `.gitignore` with `node_modules/` and `dist/`, before installing anything.

## 3. package.json

1. Create `package.json` with `name: "agentclinic"`, `private: true`, `type: "module"`, and a one-line description.
2. Add `"engines": { "node": ">=24" }`.
3. Install dev dependencies: `npm install --save-dev typescript @types/node@24`.
4. Commit `package-lock.json` alongside `package.json`.

## 4. tsconfig.json

1. Create `tsconfig.json` with `strict: true` and the extra strictness flags from `requirements.md`.
2. Set `module`/`moduleResolution` to `NodeNext`, `target` to `ES2024`, and `types` to `["node"]`.
3. Set `jsx: "react-jsx"` and `jsxImportSource: "hono/jsx"`.
4. Set `rootDir: "src"`, `outDir: "dist"`, `include: ["src"]`, and `skipLibCheck: true`.
5. Set `erasableSyntaxOnly: true` and `verbatimModuleSyntax: true` so the code stays runnable with Node's type stripping.

## 5. Minimal home page

1. Create `src/index.ts` that starts a `node:http` server on `PORT` (default `3000`) and logs the URL.
2. On `GET /`, respond `200` with `Content-Type: text/html; charset=utf-8` and a minimal HTML page: `<title>AgentClinic</title>`, an `<h1>AgentClinic</h1>`, the tagline, and one playful welcome line.
3. On any other path, respond `404 Not Found` as plain text.
4. Add `"start": "node src/index.ts"` to `package.json` scripts.
5. Run `npx tsc --noEmit` and fix any errors.

## 6. README

1. Add a "Getting started" section to `README.md` below the stakeholder input.
2. List the prerequisite (Node.js 24 LTS) and the commands `npm install` and `npm start`.
3. Say the home page is at http://localhost:3000.
4. Point readers to `specs/` for the mission, tech stack, and roadmap.

## 7. Wrap up

1. Mark Phase 1 done in `specs/roadmap.md`.
2. Run through `validation.md`.
3. Commit on the `phase-1-project-init` branch.
