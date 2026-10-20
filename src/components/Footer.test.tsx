import { afterEach, describe, expect, it, vi } from "vitest";
import { Footer } from "./Footer.tsx";

describe("Footer", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders a footer element", () => {
    const html = (<Footer />).toString();

    expect(html).toMatch(/^<footer[\s>]/);
    expect(html).toMatch(/<\/footer>$/);
  });

  it("shows the current year", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2031-06-01"));

    expect((<Footer />).toString()).toContain("© 2031 AgentClinic");
  });

  it("includes the playful line", () => {
    expect((<Footer />).toString()).toContain(
      "No humans were prompted in the making of this page.",
    );
  });
});
