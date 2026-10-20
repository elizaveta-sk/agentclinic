import { describe, expect, it } from "vitest";
import { Header, navLinks } from "./Header.tsx";

describe("Header", () => {
  const html = (<Header />).toString();

  it("renders a header element", () => {
    expect(html).toMatch(/^<header[\s>]/);
    expect(html).toMatch(/<\/header>$/);
  });

  it("links the site name to the home page", () => {
    expect(html).toMatch(/<a [^>]*href="\/"[^>]*>AgentClinic<\/a>/);
  });

  it("links to every section in the main nav", () => {
    expect(html).toContain('<nav class="site-nav" aria-label="Main">');
    for (const link of navLinks) {
      expect(html).toContain(`<a href="${link.href}">${link.label}</a>`);
    }
  });

  it("includes the Agents link", () => {
    expect(navLinks).toContainEqual({ href: "/agents", label: "Agents" });
  });
});
