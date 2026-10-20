# Plan: Phase 2, Hello Hono

See `requirements.md` for scope and decisions, and `validation.md` for the merge checklist.

## 1. Dependencies

1. Install `hono` and `@hono/node-server`.
2. Install `tsx` as a dev dependency.
3. Change the `start` script to `tsx src/index.ts`.
4. Add `"rewriteRelativeImportExtensions": true` to `tsconfig.json` so relative imports can use `.ts`/`.tsx` extensions.

## 2. Hono app

1. Create `src/app.tsx` that builds and exports the Hono app.
2. Replace `src/index.ts` with a few lines that import the app and start it with `serve()` on `PORT` (default `3000`), logging the URL.

## 3. Layout components

Each component lives in its own file under `src/components/`.

1. `Header.tsx`: a `<header>` with the site name "AgentClinic" linking to `/`.
2. `Main.tsx`: a `<main>` that renders its children.
3. `Footer.tsx`: a `<footer>` with a short playful line and the current year.
4. `Layout.tsx`: the full HTML document (`<!doctype html>`, `<head>` with charset, viewport, and `<title>`, and `<body>`) that composes `Header`, `Main` (wrapping the page content), and `Footer`.

## 4. Wire up the layout

1. Register the layout with `app.use(jsxRenderer(Layout))`.
2. Augment Hono's `ContextRenderer` so `c.render()` accepts an optional `title`, defaulting to "AgentClinic".
3. Render the home page on `GET /` with `c.render(...)`: the `<h1>`, the tagline, and the welcome line from Phase 1.

## 5. CSS file

1. Create `static/styles.css` with color and spacing tokens on `:root`, a readable body font, and styles for the header, main, and footer.
2. Serve it with `serveStatic({ root: "./" })` on `/static/*`.
3. Link it from the layout's `<head>` with `<link rel="stylesheet" href="/static/styles.css">`.

## 6. Tests

1. Create `src/app.test.tsx` with `app.request()` tests for each automatable check in `validation.md`: the HTML response for `/`, one header/main/footer in order, the page content, the title, the stylesheet link, serving `/static/styles.css` as CSS, and the 404.
2. Create one test file next to each component:
   - `Header.test.tsx`: renders a `<header>` with the site name linking to `/`.
   - `Main.test.tsx`: renders a `<main>` around its children.
   - `Footer.test.tsx`: renders a `<footer>` with the current year (fake timers) and the playful line.
   - `Layout.test.tsx`: default title, custom title, and children rendered inside `<main>`.
3. Run `npm test` and confirm every test passes.
4. Mark each check in `validation.md` that a test covers with 🧪 and the test that covers it.

## 7. Specs and docs

1. Update `specs/roadmap.md`: Phase 2 covers the layout and CSS file, the old Phase 4 is removed, the old Phase 8 is narrowed to serving the Tailwind output, and phases are renumbered.
2. Update `specs/tech-stack.md` if anything changed (running the app with `tsx`).
3. Check the README's "Getting started" still matches.

## 8. Wrap up

1. Run `npx tsc --noEmit` and `npm test`, and fix any failures.
2. Mark Phase 2 done in `specs/roadmap.md`.
3. Run through `validation.md`.
4. Commit on the `phase-2-hello-hono` branch.
