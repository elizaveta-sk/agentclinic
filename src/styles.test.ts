import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync(
  new URL("../static/styles.css", import.meta.url),
  "utf8",
);
const widthQueries = [
  ...css.matchAll(/@media[^{]*\b(min|max)-width\b[^{]*/g),
].map((match) => match[0].trim());

describe("static/styles.css", () => {
  it("is mobile first: width queries only use min-width", () => {
    expect(widthQueries.length).toBeGreaterThan(0);
    for (const query of widthQueries) {
      expect(query).not.toMatch(/max-width/);
    }
  });

  it("only uses the shared breakpoints", () => {
    for (const query of widthQueries) {
      expect(query).toMatch(/\(min-width: (40|48|64)rem\)/);
    }
  });

  it("keeps media inside its container", () => {
    expect(css).toMatch(/img,[^{]*\{[^}]*max-width: 100%/);
  });

  it("gives links a 44px tap target", () => {
    expect(css).toContain("--tap-target: 44px");
    for (const selector of [".site-name", ".site-nav a", ".card-link"]) {
      const block = new RegExp(
        `${selector.replace(".", "\\.")} \\{[^}]*min-height: var\\(--tap-target\\)`,
      );
      expect(css).toMatch(block);
    }
  });
});
