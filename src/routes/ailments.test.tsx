import { describe, expect, it } from "vitest";
import { ailments } from "../../prisma/seed-data.ts";
import { app } from "../app.tsx";

const page = async (path: string) => {
  const res = await app.request(path);
  return { res, html: await res.text() };
};

describe("GET /ailments", () => {
  it("returns the ailments page", async () => {
    const { res, html } = await page("/ailments");

    expect(res.status).toBe(200);
    expect(html).toContain("<title>Ailments · AgentClinic</title>");
    expect(html).toContain("<h1>Ailments</h1>");
  });

  it("lists every ailment alphabetically, linking to its page", async () => {
    const { html } = await page("/ailments");
    const sorted = [...ailments].sort((a, b) => a.name.localeCompare(b.name));
    const positions = sorted.map((ailment) =>
      html.indexOf(`<a class="card-link" href="/ailments/${ailment.slug}">`),
    );

    expect(positions.every((position) => position > -1)).toBe(true);
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
  });
});
