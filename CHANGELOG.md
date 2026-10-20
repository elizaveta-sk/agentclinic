# Changelog

All notable changes to this project, newest first.

<!-- changelog-last-commit: 366b7e7490daccbd5d35b2d4bacc3c5191199851 -->

## 2026-10-20

- Moved the app onto Hono, with a main layout (header, content area, and footer, each its own component) and a stylesheet on every page.
- Made the web UI responsive, mobile first, from 320px phones up to wide desktops.
- Added Vitest tests for the home page, the layout components, the stylesheet, and the project settings; run them with `npm test`.
- Set up the TypeScript project on Node 24 with strict settings, plus a first AgentClinic home page; start it with `npm start`.
- Wrote the project specs: the mission, the tech stack, and a roadmap of small phases, with a feature spec for each phase.
- Added a `/changelog` skill that keeps this changelog up to date before each merge.
