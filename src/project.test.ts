import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

// `any` because these tests check the shape of arbitrary JSON config files.
const readJson =(path: string): Record<string, any> =>
  JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));

describe("package.json", () => {
  const pkg = readJson("../package.json");

  it("uses ES modules and requires Node 24", () => {
    expect(pkg.type).toBe("module");
    expect(pkg.engines).toEqual({ node: ">=24" });
  });

  it("has start and test scripts", () => {
    expect(pkg.scripts.start).toBe("tsx src/index.ts");
    expect(pkg.scripts.test).toBe("vitest run");
  });
});

describe("tsconfig.json", () => {
  const { compilerOptions } = readJson("../tsconfig.json");

  it("is strict", () => {
    expect(compilerOptions.strict).toBe(true);
  });

  it("only allows syntax that can be stripped", () => {
    expect(compilerOptions.erasableSyntaxOnly).toBe(true);
    expect(compilerOptions.verbatimModuleSyntax).toBe(true);
  });
});

describe(".gitignore", () => {
  const lines = readFileSync(new URL("../.gitignore", import.meta.url), "utf8").split("\n");

  it("ignores node_modules and dist", () => {
    expect(lines).toContain("node_modules/");
    expect(lines).toContain("dist/");
  });
});
