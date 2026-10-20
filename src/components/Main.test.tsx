import { describe, expect, it } from "vitest";
import { Main } from "./Main.tsx";

describe("Main", () => {
  it("renders a main element", () => {
    const html = (<Main>Hello</Main>).toString();

    expect(html).toMatch(/^<main[\s>]/);
    expect(html).toMatch(/<\/main>$/);
  });

  it("renders its children", () => {
    const html = (
      <Main>
        <h1>Welcome</h1>
        <p>Relax.</p>
      </Main>
    ).toString();

    expect(html).toContain("<h1>Welcome</h1><p>Relax.</p>");
  });
});
