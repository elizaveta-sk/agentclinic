# Roadmap

High-level implementation order, in very small phases. Each phase adds one thing and leaves the app running with type-check, lint, and tests passing.

## Foundation

- ✅ **Phase 1: Project init.** Create `package.json`, a strict `tsconfig.json`, and a `.gitignore`.
- **Phase 2: Hello Hono.** Add Hono and `@hono/node-server`; the home route returns plain text.
- **Phase 3: Dev server.** Add `tsx watch` and an `npm run dev` script.
- **Phase 4: JSX layout.** Add a shared layout with `jsxRenderer`; the home page renders HTML.
- **Phase 5: Vitest.** Add Vitest with one passing route test using `app.request()`.
- **Phase 6: Lint and format.** Add ESLint and Prettier with `npm run lint` and `npm run format` scripts.
- **Phase 7: Tailwind build.** Add the Tailwind CLI build that compiles a stylesheet.
- **Phase 8: Static files.** Serve the compiled stylesheet and link it from the layout.
- **Phase 9: CI.** Add a GitHub Actions workflow that runs type-check, lint, and tests.

## Database

- **Phase 10: Prisma setup.** Add Prisma with SQLite and an empty schema.
- **Phase 11: DB client.** Add a shared Prisma client module.
- **Phase 12: Seed script.** Add an empty seed script and an `npm run seed` command.

## Agents

- **Phase 13: Agent model.** Add the `Agent` model and a migration.
- **Phase 14: Seed agents.** Seed a few agents.
- **Phase 15: Agent list.** Add a page listing all agents.
- **Phase 16: Agent detail.** Add a page for a single agent.
- **Phase 17: Not found.** Show a friendly 404 page for an unknown agent.
- **Phase 18: Nav link.** Add an "Agents" link to the layout.

## Ailments

- **Phase 19: Ailment model.** Add the `Ailment` model and a migration.
- **Phase 20: Seed ailments.** Seed ailments (e.g. "context-window exhaustion", "hallucination anxiety").
- **Phase 21: Ailment list.** Add a page listing ailments.
- **Phase 22: Ailment detail.** Add a page for a single ailment.
- **Phase 23: Agents ↔ ailments.** Add the many-to-many relation and a migration.
- **Phase 24: Seed links.** Seed which agents suffer from which ailments.
- **Phase 25: Agent's ailments.** Show an agent's ailments on the agent detail page.
- **Phase 26: Ailment's agents.** Show affected agents on the ailment detail page.

## Therapies

- **Phase 27: Therapy model.** Add the `Therapy` model and a migration.
- **Phase 28: Seed therapies.** Seed a few therapies.
- **Phase 29: Therapy list.** Add a page listing therapies.
- **Phase 30: Therapy detail.** Add a page for a single therapy.
- **Phase 31: Therapies ↔ ailments.** Add the relation for which therapies treat which ailments.
- **Phase 32: Seed treatments.** Seed which therapies treat which ailments.
- **Phase 33: Suggested therapies.** Show suggested therapies on the agent detail page.

## Appointments

- **Phase 34: Appointment model.** Add the `Appointment` model (agent + therapy + time) and a migration.
- **Phase 35: Seed appointments.** Seed a few appointments.
- **Phase 36: Agent's appointments.** Show an agent's appointments on their detail page.
- **Phase 37: Booking form.** Add a form to book an appointment (no saving yet).
- **Phase 38: Validation.** Validate the booking form with Zod and show errors.
- **Phase 39: Save booking.** Save the appointment and redirect to the agent's page.
- **Phase 40: Cancel.** Let an agent cancel an appointment.

## Dashboards

- **Phase 41: Staff dashboard page.** Add an empty staff dashboard page.
- **Phase 42: Today's appointments.** Show today's appointments on the staff dashboard.
- **Phase 43: Clinic stats.** Show counts of agents by ailment on the staff dashboard.
- **Phase 44: Agent dashboard page.** Add an agent dashboard page.
- **Phase 45: Agent overview.** Show the agent's ailments and upcoming appointments on it.

## Polish

- **Phase 46: Landing hero.** Add an attractive hero section to the home page.
- **Phase 47: Landing features.** Add a section showcasing ailments and therapies.
- **Phase 48: Navigation.** Make the site header and navigation consistent.
- **Phase 49: Design pass.** Make cards, buttons, and forms look consistent.
- **Phase 50: Responsive.** Check and fix layouts at mobile widths.
- **Phase 51: Playwright setup.** Add Playwright with one smoke test.
- **Phase 52: Booking E2E.** Add an end-to-end test for booking an appointment.
- **Phase 53: Dashboard E2E.** Add an end-to-end test for the dashboards.

## Later

- Authentication with separate agent and staff roles
- Staff management of therapies and schedules
- Susan's remaining features, once specified
