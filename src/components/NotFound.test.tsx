import { describe, expect, it } from "vitest";
import { NotFound } from "./NotFound.tsx";

describe("NotFound", () => {
  const html = (
    <NotFound
      thing="therapy"
      backHref="/therapies"
      backLabel="See all therapies"
    />
  ).toString();

  it("says what couldn't be found", () => {
    expect(html).toContain("<h1>We couldn&#39;t find that therapy</h1>");
  });

  it("links back to the list", () => {
    expect(html).toContain(
      '<a class="button" href="/therapies">See all therapies</a>',
    );
  });
});
