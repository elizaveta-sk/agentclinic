# Tech Stack

Server-side TypeScript. Pages are rendered as HTML on the server and sent to the browser; there is no client-side app framework.

## Framework: Hono

We use [Hono](https://hono.dev) on Node.js.

- **Server-side TypeScript.** Routes, rendering, and data access all run on the server, with types throughout.
- **Built-in JSX rendering.** Pages are typed components rendered to HTML with `c.render()` and a shared layout (`jsxRenderer`), so we don't need a separate template language or React.
- **Popular and reliable.** Hono is widely used, well maintained, and built on Web Standards (`Request`/`Response`).
- **Easy to test.** `app.request()` runs a request through the app without starting a server, so route tests are fast unit tests.

**Alternatives considered:**

- **Express**: the most familiar choice, but it's older and its TypeScript support is bolted on.
- **Fastify**: fast and well typed, but it has no built-in HTML rendering.
- **NestJS**: popular, but too heavy for an app this size.
- **Next.js**: a strong choice for full-stack TypeScript, but it builds around a React client app, which is more than this site needs.

## Stack

| Concern | Choice | Why |
|---|---|---|
| Language | TypeScript (strict mode) | Type safety across the whole app |
| Runtime | Node.js (current LTS) | Stable and widely deployed |
| Web framework | Hono + `@hono/node-server` | Server-rendered pages and form handling |
| Views | Hono JSX (`hono/jsx`) | Typed components rendered to HTML on the server |
| Styling | Tailwind CSS (CLI build) | Attractive, responsive pages without a front-end framework |
| Interactivity | Plain HTML forms; small inline scripts only where needed | Works in every modern browser with no build step for client code |
| Database | SQLite | A single file with no server to install or run, ideal for courses and booth demos |
| ORM | Prisma | Typed queries, migrations, and seeding |
| Validation | Zod + `@hono/zod-validator` | One schema validates form posts and types the handler |
| Running TypeScript | `tsx` (`npm start`), `tsx watch` (`npm run dev`) | Runs TypeScript and JSX directly, with no build step; Node's own type stripping can't handle JSX |
| Unit / route tests | Vitest + `app.request()`, run with `npm test` | Fast, TypeScript-native, no running server needed |
| End-to-end tests | Playwright | Real-browser coverage of key flows |
| Lint / format | ESLint + Prettier | Consistent code |
| Package manager | npm | Default and widely known |
| CI | GitHub Actions | Runs type-check, lint, and tests on every push |

## Testing and validation

Each feature's `validation.md` is backed by Vitest tests wherever a check can be automated.

- **`npm test`** runs the whole suite once (`vitest run`). It must pass before a feature branch is merged.
- **One check, one test.** For every automatable item in `validation.md` (status codes, headers, page structure, content), write a Vitest test that proves it. A feature is valid when `npm test` passes.
- **Route tests use `app.request()`** against the app exported from `src/app.tsx`, so no server is started.
- **Tests sit next to the code** they cover, named `*.test.ts` or `*.test.tsx` (e.g. `src/app.test.tsx`).
- **Manual checks stay manual.** Items that need a human, such as how a page looks in a browser, stay as checkboxes in `validation.md`. Playwright takes over the key flows later.

## Browser support

Current evergreen browsers only: Chrome, Edge, Firefox, and Safari, on desktop and mobile. No legacy polyfills.

## Responsive design

The web UI follows responsive design, mobile first.

- **Viewport.** Every page includes `<meta name="viewport" content="width=device-width, initial-scale=1">` (it lives in `Layout`).
- **Mobile first.** Base styles target the narrowest screen. Wider screens are enhanced with `@media (min-width: …)` queries; there are no `max-width` media queries.
- **Breakpoints.** `40rem` (640px), `48rem` (768px), and `64rem` (1024px). These match Tailwind's `sm`, `md`, and `lg`, so the move to Tailwind in Phase 7 keeps the same breakpoints.
- **Supported widths.** 320px to 1920px. No horizontal scrolling at any width; wide content such as tables scrolls inside its own container.
- **Fluid sizing.** Use `rem` and `%` rather than fixed pixel widths, `clamp()` for headings, and a maximum content width for readable line lengths.
- **Touch friendly.** Links and buttons have a tap target of at least 44×44px.
- **Media.** Images and other media never overflow their container (`max-width: 100%`).
- **Long text.** Long words and URLs wrap instead of widening the page.

How it's validated:

- 🧪 Vitest checks the viewport meta tag and that the stylesheet is mobile first (`min-width` queries only).
- Manual: each feature's `validation.md` checks the pages at 320px, 768px, and 1280px wide (browser dev tools' device mode is fine) with no horizontal scrolling.
- Later, Playwright runs the key flows at a mobile and a desktop viewport.

## Conventions

- Strict TypeScript: no `any` without a comment explaining why.
- All rendering happens on the server. Pages use standard links and form posts, and each form post ends in a redirect (POST → redirect → GET).
- Routes are grouped by feature (`agents`, `ailments`, `therapies`, `appointments`, `dashboard`), with each group in its own Hono sub-app mounted with `app.route()`.
- Every phase on the roadmap ends with passing type-check, lint, and tests.
- Every page a phase adds or changes follows "Responsive design" above, and that phase's `validation.md` checks it at mobile, tablet, and desktop widths.
