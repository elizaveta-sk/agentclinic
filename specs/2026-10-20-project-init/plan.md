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
2. Set `module`/`moduleResolution` to `NodeNext` and `target` to `ES2024`.
3. Set `jsx: "react-jsx"` and `jsxImportSource: "hono/jsx"`.
4. Set `rootDir: "src"`, `outDir: "dist"`, `include: ["src"]`, and `skipLibCheck: true`.

## 5. README

1. Add a "Getting started" section to `README.md` below the stakeholder input.
2. List the prerequisite (Node.js 24 LTS) and the first command (`npm install`).
3. Point readers to `specs/` for the mission, tech stack, and roadmap.

## 6. Wrap up

1. Mark Phase 1 done in `specs/roadmap.md`.
2. Run through `validation.md`.
3. Commit on the `phase-1-project-init` branch.
