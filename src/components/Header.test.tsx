import { describe, expect, it } from "vitest";
import { Header } from "./Header.tsx";

describe("Header", () => {
  const html = (<Header />).toString();

  it("renders a header element", () => {
    expect(html).toMatch(/^<header[\s>]/);
    expect(html).toMatch(/<\/header>$/);
  });

  it("links the site name to the home page", () => {
    expect(html).toMatch(/<a [^>]*href="\/"[^>]*>AgentClinic<\/a>/);
  });
});
