# Roadmap

High-level implementation order, in very small phases. Each phase adds one thing and leaves the app running with type-check, lint, and tests passing.

Every phase that adds or changes UI builds it responsive from the start, following "Responsive design" in `specs/tech-stack.md`: mobile first, and checked at 320px, 768px, and 1280px wide.

## Foundation

- ✅ **Phase 1: Project init.** Create `package.json`, a strict `tsconfig.json`, a `.gitignore`, and a minimal AgentClinic home page served with `node:http`.
- ✅ **Phase 2: App foundation.** Get the app and its everyday tooling in place, in four steps:
  - ✅ **Hello Hono.** Serve the home page with Hono instead of `node:http`, inside a main layout built from `Header`, `Main`, and `Footer` components (one file each), with a CSS file served from `/static` and linked from the layout.
  - ✅ **Dev server.** Add `tsx watch` and an `npm run dev` script.
  - ✅ **Vitest.** Back every automatable `validation.md` check with a Vitest test (routes via `app.request()`, one test file per component, project config), so `npm test` passes.
  - ✅ **Lint and format.** Add ESLint and Prettier with `npm run lint` and `npm run format` scripts.
- **Phase 3: Tailwind build.** Add the Tailwind CLI build that compiles a stylesheet, keeping the mobile-first breakpoints.
- **Phase 4: Tailwind stylesheet.** Replace `static/styles.css` with the compiled Tailwind output.
- **Phase 5: CI.** Add a GitHub Actions workflow that runs `npm run check` (type-check, lint, format check, and tests).

## Database

- ✅ **Phase 6: Prisma setup.** Add Prisma with SQLite and an empty schema.
- ✅ **Phase 7: DB client.** Add a shared Prisma client module.
- ✅ **Phase 8: Seed script.** Add an empty seed script and an `npm run seed` command.

## Agents

- ✅ **Phase 9: Agent model.** Add the `Agent` model and a migration.
- ✅ **Phase 10: Seed agents.** Seed a few agents.
- ✅ **Phase 11: Agent list.** Add a page listing all agents.
- ✅ **Phase 12: Agent detail.** Add a page for a single agent.
- ✅ **Phase 13: Not found.** Show a friendly 404 page for an unknown agent.
- ✅ **Phase 14: Nav link.** Add an "Agents" link to the layout.

## Ailments

- ✅ **Phase 15: Ailment model.** Add the `Ailment` model and a migration.
- **Phase 16: Seed ailments.** Seed ailments (e.g. "context-window exhaustion", "hallucination anxiety").
- **Phase 17: Ailment list.** Add a page listing ailments.
- **Phase 18: Ailment detail.** Add a page for a single ailment.
- **Phase 19: Agents ↔ ailments.** Add the many-to-many relation and a migration.
- **Phase 20: Seed links.** Seed which agents suffer from which ailments.
- **Phase 21: Agent's ailments.** Show an agent's ailments on the agent detail page.
- **Phase 22: Ailment's agents.** Show affected agents on the ailment detail page.

## Therapies

- **Phase 23: Therapy model.** Add the `Therapy` model and a migration.
- **Phase 24: Seed therapies.** Seed a few therapies.
- **Phase 25: Therapy list.** Add a page listing therapies.
- **Phase 26: Therapy detail.** Add a page for a single therapy.
- **Phase 27: Therapies ↔ ailments.** Add the relation for which therapies treat which ailments.
- **Phase 28: Seed treatments.** Seed which therapies treat which ailments.
- **Phase 29: Suggested therapies.** Show suggested therapies on the agent detail page.

## Appointments

- **Phase 30: Appointment model.** Add the `Appointment` model (agent + therapy + time) and a migration.
- **Phase 31: Seed appointments.** Seed a few appointments.
- **Phase 32: Agent's appointments.** Show an agent's appointments on their detail page.
- **Phase 33: Booking form.** Add a form to book an appointment (no saving yet).
- **Phase 34: Validation.** Validate the booking form with Zod and show errors.
- **Phase 35: Save booking.** Save the appointment and redirect to the agent's page.
- **Phase 36: Cancel.** Let an agent cancel an appointment.

## Dashboards

- **Phase 37: Staff dashboard page.** Add an empty staff dashboard page.
- **Phase 38: Today's appointments.** Show today's appointments on the staff dashboard.
- **Phase 39: Clinic stats.** Show counts of agents by ailment on the staff dashboard.
- **Phase 40: Agent dashboard page.** Add an agent dashboard page.
- **Phase 41: Agent overview.** Show the agent's ailments and upcoming appointments on it.

## Polish

- **Phase 42: Landing hero.** Add an attractive hero section to the home page.
- **Phase 43: Landing features.** Add a section showcasing ailments and therapies.
- **Phase 44: Navigation.** Make the site header and navigation consistent.
- **Phase 45: Design pass.** Make cards, buttons, and forms look consistent.
- **Phase 46: Responsive audit.** Re-check every page at 320px, 768px, and 1280px wide and fix any regressions.
- **Phase 47: Playwright setup.** Add Playwright with one smoke test, run at a mobile and a desktop viewport.
- **Phase 48: Booking E2E.** Add an end-to-end test for booking an appointment.
- **Phase 49: Dashboard E2E.** Add an end-to-end test for the dashboards.

## Later

- Authentication with separate agent and staff roles
- Staff management of therapies and schedules
- Susan's remaining features, once specified
