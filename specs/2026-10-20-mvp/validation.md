# Validation: MVP, the clinic catalog

The MVP can be merged into `master` when `npm run check` passes: type-check, lint, format check, and every Vitest test below.

Checks marked 🧪 are covered by Vitest tests (see "Testing and validation" in `specs/tech-stack.md`). Tests run against a seeded test database (`prisma/test.db`), never `dev.db`.

## The bar

- [ ] `npm run check` exits with 0.

## Database

- [ ] 🧪 The test setup applies all migrations and seeds the test database before the tests run.
- [ ] 🧪 The seed creates at least 6 agents, 6 ailments, and 5 therapies, and can be run twice in a row without errors or duplicates.
- [ ] 🧪 Every agent has at least one ailment, and every ailment is treated by at least one therapy.
- [ ] 🧪 `package.json` has the `db:generate`, `db:migrate`, `seed`, and `setup` scripts.
- [ ] 🧪 `.gitignore` ignores `*.db` and `src/generated/`.

## Agents

- [ ] 🧪 `GET /agents` returns `200`, titled "Agents · AgentClinic", listing every seeded agent by name in alphabetical order, each linking to `/agents/:slug` and showing its ailments.
- [ ] 🧪 `GET /agents/:slug` shows the agent's name, role, bio, and ailments, each ailment linking to `/ailments/:slug`.
- [ ] 🧪 `GET /agents/:slug` lists suggested therapies, each linking to `/therapies/:slug`, ranked by how many of the agent's ailments they treat, then by name.
- [ ] 🧪 `GET /agents/no-such-agent` returns `404` with the friendly not-found page and a link back to `/agents`.

## Ailments

- [ ] 🧪 `GET /ailments` returns `200`, titled "Ailments · AgentClinic", listing every ailment alphabetically with its agent count, each linking to `/ailments/:slug`.
- [ ] 🧪 `GET /ailments/:slug` shows the description, the affected agents (linked), and the therapies that treat it (linked).
- [ ] 🧪 `GET /ailments/no-such-ailment` returns `404` with the friendly not-found page.

## Therapies

- [ ] 🧪 `GET /therapies` returns `200`, titled "Therapies · AgentClinic", listing every therapy alphabetically with its duration, each linking to `/therapies/:slug`.
- [ ] 🧪 `GET /therapies/:slug` shows the description, duration, and the ailments it treats (linked).
- [ ] 🧪 `GET /therapies/no-such-therapy` returns `404` with the friendly not-found page.

## Navigation and layout

- [ ] 🧪 Every page's header has links to `/agents`, `/ailments`, and `/therapies`.
- [ ] 🧪 The home page still passes its existing tests.

## Responsive design

- [ ] 🧪 The stylesheet stays mobile first (`min-width` queries only, at the shared breakpoints), and nav links and cards have 44px tap targets.
- [ ] Every page checked at 320px, 768px, and 1280px wide: no horizontal scrolling, and card grids show 1, 2, and 3 columns. (Required by the tech stack's conventions.)

## Specs and docs

- [ ] Phases 6–29 are ticked in `specs/roadmap.md`.
- [ ] `specs/tech-stack.md` and the README match how the database is set up and seeded.
