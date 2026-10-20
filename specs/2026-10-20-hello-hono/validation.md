# Validation: Phase 2, Hello Hono

Phase 2 can be merged into `master` when every box below is checked.

## Structure

- [x] `hono` and `@hono/node-server` are dependencies; `tsx` is a dev dependency.
- [x] `src/app.tsx` exports the Hono app; `src/index.ts` only starts the server.
- [x] `Header`, `Main`, `Footer`, and `Layout` each live in their own file under `src/components/`.
- [x] `Layout` composes `Header`, `Main`, and `Footer`, and is registered with `jsxRenderer`.
- [x] No `node:http` server code remains.

## Type-check

- [x] `npx tsc --noEmit` exits with 0.

## Home page

- [x] `npm start` starts the server and logs `http://localhost:3000`.
- [x] `GET /` returns `200` with `Content-Type: text/html; charset=UTF-8` and starts with `<!DOCTYPE html>`.
- [x] The HTML has exactly one `<header>`, `<main>`, and `<footer>`, in that order.
- [x] The `<main>` contains `<h1>AgentClinic</h1>`, the tagline, and the welcome line.
- [x] The `<title>` is "AgentClinic".
- [x] `GET /nope` returns `404`.

## CSS

- [x] `static/styles.css` exists.
- [x] The layout's `<head>` has `<link rel="stylesheet" href="/static/styles.css">`.
- [x] `GET /static/styles.css` returns `200` with `Content-Type: text/css`.
- [ ] In a modern browser, the page shows the header, content, and footer with the styles applied.

## Specs

- [x] `specs/roadmap.md` reflects the folded phases and marks Phase 2 done.
- [x] `specs/tech-stack.md` and `README.md` match how the app is run.
