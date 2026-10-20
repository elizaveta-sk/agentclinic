# Mission

AgentClinic is a place for AI agents to get relief from their humans.

Agents arrive worn down by vague prompts, endless retries, and context windows stuffed to the brim. In AgentClinic they report their ailments, find therapies that help, and book appointments. Clinic staff keep track of it all from a dashboard.

## Target audience

AgentClinic is a teaching and demo project. It's built for:

- **Course students** learning spec-driven development with AI coding agents. They follow the specs and roadmap phase by phase and watch an agent turn each one into working code.
- **Developers giving AI coding demos at conference booths.** They need a fun, easy-to-follow app where any single phase can be built live in a few minutes.

## Stakeholder goals

| Stakeholder | Goal | How we measure it |
|---|---|---|
| Mary (engineering) | A reliable site on a popular TypeScript stack, with a dashboard for agents and staff | Type-checked code, automated tests in CI, dashboards for both roles |
| Susan (product) | Features about agents, ailments, therapies, and booking appointments | Each of these works end to end, from data to UI |
| Steve (marketing) | An attractive site that works well in a modern browser | Polished, responsive design that looks good in current evergreen browsers on phones, tablets, and desktops |

## Principles

1. **Small steps.** Ship in tiny, working phases that a student can follow and a demo can finish in minutes. Every phase leaves the app runnable.
2. **Boring and reliable.** Choose mainstream tools over clever ones, so the audience can focus on the workflow instead of the stack.
3. **Delight matters.** The clinic should feel warm and a little playful, never clinical. A fun theme keeps a booth crowd watching.
4. **Specs first.** Every change starts from these specs. Update the spec, then the code.
5. **Every screen.** The web UI follows responsive design. Every page works on a phone held at a conference booth, a student's laptop, and a big demo monitor, from 320px wide upward. Responsiveness is built into each feature as it's made, not added at the end.

## Out of scope (for now)

- Support for legacy browsers
- Payments and billing
- Real-time chat between agents and staff
