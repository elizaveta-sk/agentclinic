import { describe, expect, it } from "vitest";
import { agents } from "../../prisma/seed-data.ts";
import { app } from "../app.tsx";

const page = async (path: string) => {
  const res = await app.request(path);
  return { res, html: await res.text() };
};

describe("GET /agents", () => {
  it("returns the agents page", async () => {
    const { res, html } = await page("/agents");

    expect(res.status).toBe(200);
    expect(html).toContain("<title>Agents · AgentClinic</title>");
    expect(html).toContain("<h1>Agents</h1>");
  });

  it("lists every agent alphabetically, linking to their page", async () => {
    const { html } = await page("/agents");
    const sorted = [...agents].sort((a, b) => a.name.localeCompare(b.name));
    const positions = sorted.map((agent) =>
      html.indexOf(`<a class="card-link" href="/agents/${agent.slug}">`),
    );

    expect(positions.every((position) => position > -1)).toBe(true);
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
  });

  it("shows each agent's role", async () => {
    const { html } = await page("/agents");

    for (const agent of agents) {
      expect(html).toContain(agent.role);
    }
  });
});

describe("GET /agents/:slug", () => {
  const agent = agents[0]!;

  it("shows the agent's name, role, and bio", async () => {
    const { res, html } = await page(`/agents/${agent.slug}`);

    expect(res.status).toBe(200);
    expect(html).toContain(`<title>${agent.name} · AgentClinic</title>`);
    expect(html).toContain(`<h1>${agent.name}</h1>`);
    expect(html).toContain(agent.role);
    expect(html).toContain(agent.bio);
  });

  it("links back to the agent list", async () => {
    const { html } = await page(`/agents/${agent.slug}`);

    expect(html).toContain('<a href="/agents">← All agents</a>');
  });

  it("returns 404 for an unknown agent", async () => {
    const { res } = await page("/agents/no-such-agent");

    expect(res.status).toBe(404);
  });
});
