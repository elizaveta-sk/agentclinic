# Validation: Phase 2, Hello Hono

Phase 2 can be merged into `master` when every box below is checked.

Checks marked 🧪 are covered by Vitest tests and verified by `npm test` (see "Testing and validation" in `specs/tech-stack.md`). The rest are manual.

## Tests

- [x] `npm test` passes.

## Structure

- [x] `hono` and `@hono/node-server` are dependencies; `tsx` is a dev dependency.
- [x] `src/app.tsx` exports the Hono app; `src/index.ts` only starts the server.
- [x] `Header`, `Main`, `Footer`, and `Layout` each live in their own file under `src/components/`.
- [x] 🧪 `Header` renders a `<header>` with "AgentClinic" linking to `/`. (`src/components/Header.test.tsx`)
- [x] 🧪 `Main` renders a `<main>` around its children. (`src/components/Main.test.tsx`)
- [x] 🧪 `Footer` renders a `<footer>` with the current year and the playful line. (`src/components/Footer.test.tsx`)
- [x] `Layout` composes `Header`, `Main`, and `Footer`, and is registered with `jsxRenderer`.
- [x] No `node:http` server code remains.

## Type-check

- [x] `npx tsc --noEmit` exits with 0.

## Home page

- [x] `npm start` starts the server and logs `http://localhost:3000`.
- [x] 🧪 `GET /` returns `200` with `Content-Type: text/html; charset=UTF-8` and starts with `<!DOCTYPE html>`. (`src/app.test.tsx` › returns an HTML page)
- [x] 🧪 The HTML has exactly one `<header>`, `<main>`, and `<footer>`, in that order. (`src/app.test.tsx` › has exactly one header, main, and footer)
- [x] 🧪 The `<main>` contains `<h1>AgentClinic</h1>`, the tagline, and the welcome line. (`src/app.test.tsx` › shows the heading, tagline, and welcome line)
- [x] 🧪 The `<title>` is "AgentClinic", and pages can set their own. (`src/app.test.tsx` › has the title; `src/components/Layout.test.tsx`)
- [x] 🧪 `GET /nope` returns `404`. (`src/app.test.tsx` › unknown paths)

## CSS

- [x] `static/styles.css` exists.
- [x] 🧪 The layout's `<head>` has `<link rel="stylesheet" href="/static/styles.css">`. (`src/app.test.tsx` › links the stylesheet)
- [x] 🧪 `GET /static/styles.css` returns `200` with `Content-Type: text/css`. (`src/app.test.tsx` › serves the stylesheet as CSS)
- [ ] In a modern browser, the page shows the header, content, and footer with the styles applied.

## Specs

- [x] `specs/roadmap.md` reflects the folded phases and marks Phase 2 done.
- [x] `specs/tech-stack.md` and `README.md` match how the app is run.
