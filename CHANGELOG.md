# Changelog

All notable changes to this project, newest first.

<!-- changelog-last-commit: 4265c549b40d3738aff8a03b24926a18ab8d2b5b -->

## 2026-10-20

- Added `npm run dev`, which restarts the app automatically whenever the code changes.
- Added linting with ESLint and formatting with Prettier (`npm run lint`, `npm run format`), plus `npm run check` to run the type-check, lint, format check, and tests in one command.
- Switched to TypeScript 6.0, because the linting tools don't support TypeScript 7 yet.
- Combined roadmap phases 2–5 into one "App foundation" phase, which is now complete.

- Moved the app onto Hono, with a main layout (header, content area, and footer, each its own component) and a stylesheet on every page.
- Made the web UI responsive, mobile first, from 320px phones up to wide desktops.
- Added Vitest tests for the home page, the layout components, the stylesheet, and the project settings; run them with `npm test`.
- Set up the TypeScript project on Node 24 with strict settings, plus a first AgentClinic home page; start it with `npm start`.
- Wrote the project specs: the mission, the tech stack, and a roadmap of small phases, with a feature spec for each phase.
- Added a `/changelog` skill that keeps this changelog up to date before each merge.
