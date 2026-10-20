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
