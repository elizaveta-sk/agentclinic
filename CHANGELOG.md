# Changelog

All notable changes to this project, newest first.

<!-- changelog-last-commit: 4fcfd97b6d401f66c945f63a91618510fa509f3b -->

## 2026-10-20

- Started the MVP, the clinic catalog: a spec for a database plus linked pages for agents, ailments, and therapies (roadmap Phases 6–29).
- Added a SQLite database through Prisma 7.10; `npm run setup` creates and seeds it in one step, and `npm run seed` resets the demo data.
- Added the clinic's first patients: six demo agents (Patch, Ada, Scout, Pixel, Tally, and Echo), stored in the database; pages for them come next.
- Tests now run against their own freshly seeded database, so they never touch your local data.

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
