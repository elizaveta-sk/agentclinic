# Roadmap

High-level implementation order, in very small phases. Each phase adds one thing and leaves the app running with type-check, lint, and tests passing.

## Foundation

1. **Scaffold.** Create a Hono + TypeScript app on Node.js with a shared JSX layout; it serves a placeholder home page.
2. **Tooling.** Add ESLint, Prettier, and Vitest with one passing route test using `app.request()`.
3. **Styling.** Add the Tailwind CSS build and serve the compiled stylesheet as a static file.
4. **CI.** Add a GitHub Actions workflow that runs type-check, lint, and tests.
5. **Database.** Add Prisma with SQLite and an empty schema; confirm the connection works.

## Agents

6. **Agent model.** Add the `Agent` model, a migration, and a few seeded agents.
7. **Agent list.** Add a page listing all agents.
8. **Agent detail.** Add a page for a single agent.

## Ailments

9. **Ailment model.** Add the `Ailment` model and seed data (e.g. "context-window exhaustion", "hallucination anxiety").
10. **Ailment list.** Add a page listing ailments.
11. **Agents ↔ ailments.** Link agents to their ailments and show them on the agent detail page.

## Therapies

12. **Therapy model.** Add the `Therapy` model and seed data.
13. **Therapy list.** Add a page listing therapies.
14. **Therapies ↔ ailments.** Link each therapy to the ailments it treats and show suggested therapies on the agent detail page.

## Appointments

15. **Appointment model.** Add the `Appointment` model (agent + therapy + time) and seed data.
16. **Appointment list.** Show an agent's appointments on their detail page.
17. **Booking form.** Let an agent book an appointment, with Zod validation.
18. **Cancel.** Let an agent cancel an appointment.

## Dashboards

19. **Staff dashboard.** Add a view of today's appointments.
20. **Clinic stats.** Add counts of agents by ailment to the staff dashboard.
21. **Agent dashboard.** Add a view of an agent's own ailments and upcoming appointments.

## Polish

22. **Landing page.** Add an attractive marketing home page for Steve.
23. **Design pass.** Make styling, layout, and navigation consistent across the site.
24. **Responsive.** Check and fix layouts at mobile widths.
25. **End-to-end tests.** Add Playwright tests for booking and the dashboards.

## Later

- Authentication with separate agent and staff roles
- Staff management of therapies and schedules
- Susan's remaining features, once specified
