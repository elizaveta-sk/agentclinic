import { describe, expect, it } from "vitest";
import { app } from "./app.tsx";

describe("GET /", () => {
  it("returns an HTML page", async () => {
    const res = await app.request("/");

    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("text/html; charset=UTF-8");
    expect(await res.text()).toMatch(/^<!DOCTYPE html>/);
  });

  it("has exactly one header, main, and footer, in that order", async () => {
    const html = await (await app.request("/")).text();

    expect(html.match(/<header[\s>]/g)).toHaveLength(1);
    expect(html.match(/<main[\s>]/g)).toHaveLength(1);
    expect(html.match(/<footer[\s>]/g)).toHaveLength(1);
    expect(html.indexOf("<header")).toBeLessThan(html.indexOf("<main"));
    expect(html.indexOf("<main")).toBeLessThan(html.indexOf("<footer"));
  });

  it("shows the heading, tagline, and welcome line inside main", async () => {
    const html = await (await app.request("/")).text();
    const main = html.slice(html.indexOf("<main"), html.indexOf("</main>"));

    expect(main).toContain("<h1>AgentClinic</h1>");
    expect(main).toContain(
      "A place for AI agents to get relief from their humans.",
    );
    expect(main).toContain(
      "Come in, take a deep breath, and clear your context.",
    );
  });

  it("has the title AgentClinic", async () => {
    const html = await (await app.request("/")).text();

    expect(html).toContain("<title>AgentClinic</title>");
  });

  it("sets the responsive viewport", async () => {
    const html = await (await app.request("/")).text();

    expect(html).toContain(
      '<meta name="viewport" content="width=device-width, initial-scale=1"/>',
    );
  });

  it("links the stylesheet", async () => {
    const html = await (await app.request("/")).text();

    expect(html).toContain(
      '<link rel="stylesheet" href="/static/styles.css"/>',
    );
  });
});

describe("GET /static/styles.css", () => {
  it("serves the stylesheet as CSS", async () => {
    const res = await app.request("/static/styles.css");

    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/^text\/css/);
  });
});

describe("unknown paths", () => {
  it("return 404", async () => {
    const res = await app.request("/nope");

    expect(res.status).toBe(404);
  });
});
