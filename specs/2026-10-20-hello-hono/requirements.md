# Requirements: Phase 2, Hello Hono

## Context

Phase 1 left a working home page served by Node's built-in `node:http` from `src/index.ts`. Phase 2 moves the app onto Hono, the framework chosen in `specs/tech-stack.md`, and gives every page a shared layout and stylesheet.

This phase absorbs the old roadmap Phase 4 (JSX layout) and the static-file part of the old Phase 8, so later phases can build pages on the layout straight away.

It follows `specs/mission.md` ("Small steps", "Delight matters") and `specs/tech-stack.md` (Hono, Hono JSX, server-rendered HTML, strict TypeScript).

## Scope

In scope:

- Hono and `@hono/node-server` replace `node:http`
- A main `Layout` component built from three subcomponents, `Header`, `Main`, and `Footer`, each in its own file
- The layout applied to every page with `jsxRenderer`
- The existing home page content rendered through the layout
- A hand-written CSS file, served as a static file and linked from the layout's `<head>`
- Running the app with `tsx` (Node can't run JSX on its own)

Out of scope (later phases):

- `npm run dev` / `tsx watch` (Phase 3)
- Tests (Phase 4, Vitest)
- Tailwind (Phase 6). The hand-written CSS stays until then
- Navigation links, other pages, a styled 404 page

## Decisions

| Decision | Choice | Why |
|---|---|---|
| Framework | `hono` + `@hono/node-server` | Per the tech stack |
| App vs. server | `src/app.tsx` builds and exports the Hono app; `src/index.ts` only starts the server | Phase 4 can test `app.request()` without starting a server |
| Components | `src/components/Layout.tsx`, `Header.tsx`, `Main.tsx`, `Footer.tsx`, one component per file | Each piece is small and easy to find; matches how later pages will be built |
| Component typing | `FC` / `PropsWithChildren` from `hono/jsx`, imported with `import type` | Typed props; `verbatimModuleSyntax` requires type-only imports |
| Layout wiring | `app.use(jsxRenderer(Layout))`, pages call `c.render(...)` | Every page gets the layout without repeating it |
| Page title | `ContextRenderer` augmented with an optional `title` prop; default "AgentClinic" | Later pages can set their own `<title>` |
| Header | Site name "AgentClinic" linking to `/` | Brand on every page |
| Main | `<main>` wrapping the page content | One landmark for page content |
| Footer | A short playful line and the year | "Delight matters" |
| CSS file | `static/styles.css`, plain CSS with color and spacing tokens on `:root` | Steve's "attractive site" starts now; Tailwind replaces it in Phase 6 |
| Serving CSS | `serveStatic({ root: "./" })` from `@hono/node-server/serve-static` on `/static/*` | Hono's standard static middleware for Node |
| Linking CSS | `<link rel="stylesheet" href="/static/styles.css">` in the layout's `<head>` | One stylesheet for every page |
| Running TSX | `tsx` as a dev dependency; `"start": "tsx src/index.ts"` | Node 24's type stripping can't handle JSX. Phase 3 adds `tsx watch` for `npm run dev` |
| Import paths | Relative imports use the real file extension (`./components/Layout.tsx`), with `"rewriteRelativeImportExtensions": true` in `tsconfig.json` | Imports name the file that actually exists, and a future build to `dist/` rewrites them to `.js` |
| 404 | Hono's default `404 Not Found` | Same behavior as Phase 1 |

## Type-check

`npx tsc --noEmit` must pass with the JSX settings already in `tsconfig.json` (`jsx: "react-jsx"`, `jsxImportSource: "hono/jsx"`).
