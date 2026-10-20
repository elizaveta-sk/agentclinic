# Plan: MVP, the clinic catalog

See `requirements.md` for scope and decisions, and `validation.md` for the merge checklist.

Work happens on the `mvp` branch. Each task group is one roadmap section. Commit once per roadmap phase, with `npm run check` passing before each commit, and tick the phase in `specs/roadmap.md` when it lands.

## 1. Database (Phases 6–8)

1. **Phase 6, Prisma setup.** Install `prisma@7.10` and `@prisma/client@7.10` (not the 8.0 release candidate), `@prisma/adapter-better-sqlite3`, and `better-sqlite3`. Approve the install scripts they need. Add `prisma/schema.prisma` (SQLite datasource, `prisma-client` generator writing to `src/generated/prisma`) and `prisma.config.ts`. Git-ignore `*.db` and `src/generated/`. Add `db:generate` and `db:migrate` scripts.
2. **Phase 7, DB client.** Add `src/db.ts` exporting one `PrismaClient` using the better-sqlite3 adapter and `DATABASE_URL` (default `file:./prisma/dev.db`).
3. **Phase 8, Seed script.** Add `prisma/seed.ts` (empty for now), wire it into `prisma.config.ts`, and add `seed` and `setup` (migrate + seed) scripts.
4. Add the Vitest global setup: point `DATABASE_URL` at `prisma/test.db`, apply migrations, and seed before the tests run.
5. Make sure `npm run check` generates the client first, so a fresh clone type-checks.

## 2. Agents (Phases 9–14)

1. **Phase 9, Agent model.** Add `Agent` (`slug`, `name`, `role`, `bio`) and a migration.
2. **Phase 10, Seed agents.** Seed about 6 agents.
3. **Phase 11, Agent list.** `src/routes/agents.tsx` sub-app with `GET /agents`: a responsive card grid sorted by name, with a friendly empty state.
4. **Phase 12, Agent detail.** `GET /agents/:slug` with the agent's name, role, and bio.
5. **Phase 13, Not found.** A shared `NotFound` component; unknown slugs return `404` with a link back to the list.
6. **Phase 14, Nav link.** Add a nav to `Header` with an "Agents" link; make it wrap on narrow screens with 44px tap targets.
7. Tests: list content and order, detail content, title, 404, and nav link.

## 3. Ailments (Phases 15–22)

1. **Phase 15, Ailment model.** Add `Ailment` (`slug`, `name`, `description`) and a migration.
2. **Phase 16, Seed ailments.** Seed about 6 ailments.
3. **Phase 17, Ailment list.** `src/routes/ailments.tsx` with `GET /ailments`; add an "Ailments" nav link.
4. **Phase 18, Ailment detail.** `GET /ailments/:slug`, with the shared 404.
5. **Phase 19, Agents ↔ ailments.** Add the many-to-many relation and a migration.
6. **Phase 20, Seed links.** Every agent gets at least one ailment; at least one ailment affects several agents.
7. **Phase 21, Agent's ailments.** Show linked ailments on the agent detail page and on the agent cards.
8. **Phase 22, Ailment's agents.** Show linked agents on the ailment detail page, and agent counts on the list.
9. Tests for each page, the links in both directions, and the 404.

## 4. Therapies (Phases 23–29)

1. **Phase 23, Therapy model.** Add `Therapy` (`slug`, `name`, `description`, `durationMinutes`) and a migration.
2. **Phase 24, Seed therapies.** Seed about 5 therapies.
3. **Phase 25, Therapy list.** `src/routes/therapies.tsx` with `GET /therapies`; add a "Therapies" nav link.
4. **Phase 26, Therapy detail.** `GET /therapies/:slug`, with the shared 404.
5. **Phase 27, Therapies ↔ ailments.** Add the many-to-many relation and a migration.
6. **Phase 28, Seed treatments.** Every ailment is treated by at least one therapy.
7. **Phase 29, Suggested therapies.** On the agent detail page, list therapies for the agent's ailments, ranked by how many ailments each treats, then by name. Show the treated ailments on the therapy and ailment detail pages too.
8. Tests for each page, the links, the 404, and the suggestion ranking.

## 5. Styles

1. Extend `static/styles.css`, mobile first: header nav, a card grid (1 → 2 → 3 columns at `40rem` / `64rem`), and detail-page sections.
2. Extend `src/styles.test.ts` for the new breakpoint and tap targets.
3. Check every page at 320px, 768px, and 1280px.

## 6. Specs and docs

1. Tick Phases 6–29 in `specs/roadmap.md`.
2. Update `specs/tech-stack.md` with what changed (Prisma 7.10, the better-sqlite3 adapter, the test database).
3. Update the README's "Getting started": `npm install`, `npm run setup`, `npm start`.

## 7. Wrap up

1. Run through `validation.md`.
2. Run `/changelog`.
3. Merge `mvp` into `master`.
