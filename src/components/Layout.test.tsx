import { describe, expect, it } from "vitest";
import { Layout } from "./Layout.tsx";

describe("Layout", () => {
  it("defaults the title to AgentClinic", () => {
    const html = (<Layout>Hello</Layout>).toString();

    expect(html).toContain("<title>AgentClinic</title>");
  });

  it("uses a custom title when given one", () => {
    const html = (<Layout title="Agents">Hello</Layout>).toString();

    expect(html).toContain("<title>Agents</title>");
  });

  it("renders its children inside main", () => {
    const html = (<Layout>Hello</Layout>).toString();

    expect(html).toMatch(/<main[^>]*>Hello<\/main>/);
  });
});
