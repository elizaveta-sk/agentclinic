# Roadmap

High-level implementation order, in very small phases. Each phase adds one thing and leaves the app running with type-check, lint, and tests passing.

Every phase that adds or changes UI builds it responsive from the start, following "Responsive design" in `specs/tech-stack.md`: mobile first, and checked at 320px, 768px, and 1280px wide.

## Foundation

- ✅ **Phase 1: Project init.** Create `package.json`, a strict `tsconfig.json`, a `.gitignore`, and a minimal AgentClinic home page served with `node:http`.
- ✅ **Phase 2: Hello Hono.** Serve the home page with Hono instead of `node:http`, inside a main layout built from `Header`, `Main`, and `Footer` components (one file each), with a CSS file served from `/static` and linked from the layout.
- **Phase 3: Dev server.** Add `tsx watch` and an `npm run dev` script.
- ✅ **Phase 4: Vitest.** Back every automatable `validation.md` check with a Vitest test (routes via `app.request()`, one test file per component, project config), so `npm test` passes.
- **Phase 5: Lint and format.** Add ESLint and Prettier with `npm run lint` and `npm run format` scripts.
- **Phase 6: Tailwind build.** Add the Tailwind CLI build that compiles a stylesheet, keeping the mobile-first breakpoints.
- **Phase 7: Tailwind stylesheet.** Replace `static/styles.css` with the compiled Tailwind output.
- **Phase 8: CI.** Add a GitHub Actions workflow that runs type-check, lint, and tests.

## Database

- **Phase 9: Prisma setup.** Add Prisma with SQLite and an empty schema.
- **Phase 10: DB client.** Add a shared Prisma client module.
- **Phase 11: Seed script.** Add an empty seed script and an `npm run seed` command.

## Agents

- **Phase 12: Agent model.** Add the `Agent` model and a migration.
- **Phase 13: Seed agents.** Seed a few agents.
- **Phase 14: Agent list.** Add a page listing all agents.
- **Phase 15: Agent detail.** Add a page for a single agent.
- **Phase 16: Not found.** Show a friendly 404 page for an unknown agent.
- **Phase 17: Nav link.** Add an "Agents" link to the layout.

## Ailments

- **Phase 18: Ailment model.** Add the `Ailment` model and a migration.
- **Phase 19: Seed ailments.** Seed ailments (e.g. "context-window exhaustion", "hallucination anxiety").
- **Phase 20: Ailment list.** Add a page listing ailments.
- **Phase 21: Ailment detail.** Add a page for a single ailment.
- **Phase 22: Agents ↔ ailments.** Add the many-to-many relation and a migration.
- **Phase 23: Seed links.** Seed which agents suffer from which ailments.
- **Phase 24: Agent's ailments.** Show an agent's ailments on the agent detail page.
- **Phase 25: Ailment's agents.** Show affected agents on the ailment detail page.

## Therapies

- **Phase 26: Therapy model.** Add the `Therapy` model and a migration.
- **Phase 27: Seed therapies.** Seed a few therapies.
- **Phase 28: Therapy list.** Add a page listing therapies.
- **Phase 29: Therapy detail.** Add a page for a single therapy.
- **Phase 30: Therapies ↔ ailments.** Add the relation for which therapies treat which ailments.
- **Phase 31: Seed treatments.** Seed which therapies treat which ailments.
- **Phase 32: Suggested therapies.** Show suggested therapies on the agent detail page.

## Appointments

- **Phase 33: Appointment model.** Add the `Appointment` model (agent + therapy + time) and a migration.
- **Phase 34: Seed appointments.** Seed a few appointments.
- **Phase 35: Agent's appointments.** Show an agent's appointments on their detail page.
- **Phase 36: Booking form.** Add a form to book an appointment (no saving yet).
- **Phase 37: Validation.** Validate the booking form with Zod and show errors.
- **Phase 38: Save booking.** Save the appointment and redirect to the agent's page.
- **Phase 39: Cancel.** Let an agent cancel an appointment.

## Dashboards

- **Phase 40: Staff dashboard page.** Add an empty staff dashboard page.
- **Phase 41: Today's appointments.** Show today's appointments on the staff dashboard.
- **Phase 42: Clinic stats.** Show counts of agents by ailment on the staff dashboard.
- **Phase 43: Agent dashboard page.** Add an agent dashboard page.
- **Phase 44: Agent overview.** Show the agent's ailments and upcoming appointments on it.

## Polish

- **Phase 45: Landing hero.** Add an attractive hero section to the home page.
- **Phase 46: Landing features.** Add a section showcasing ailments and therapies.
- **Phase 47: Navigation.** Make the site header and navigation consistent.
- **Phase 48: Design pass.** Make cards, buttons, and forms look consistent.
- **Phase 49: Responsive audit.** Re-check every page at 320px, 768px, and 1280px wide and fix any regressions.
- **Phase 50: Playwright setup.** Add Playwright with one smoke test, run at a mobile and a desktop viewport.
- **Phase 51: Booking E2E.** Add an end-to-end test for booking an appointment.
- **Phase 52: Dashboard E2E.** Add an end-to-end test for the dashboards.

## Later

- Authentication with separate agent and staff roles
- Staff management of therapies and schedules
- Susan's remaining features, once specified
