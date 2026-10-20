import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

type PackageJson = {
  type?: string;
  engines?: Record<string, string>;
  scripts: Record<string, string>;
};

type TsConfig = {
  compilerOptions: Record<string, unknown>;
};

const readJson = <T>(path: string): T =>
  JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8")) as T;

describe("package.json", () => {
  const pkg = readJson<PackageJson>("../package.json");

  it("uses ES modules and requires Node 24", () => {
    expect(pkg.type).toBe("module");
    expect(pkg.engines).toEqual({ node: ">=24" });
  });

  it("has start and test scripts", () => {
    expect(pkg.scripts.start).toBe("tsx src/index.ts");
    expect(pkg.scripts.test).toBe("vitest run");
  });

  it("has dev, typecheck, lint, format, and check scripts", () => {
    expect(pkg.scripts.dev).toBe("tsx watch src/index.ts");
    expect(pkg.scripts.typecheck).toBe("tsc --noEmit");
    expect(pkg.scripts.lint).toBe("eslint .");
    expect(pkg.scripts.format).toBe("prettier --write .");
    expect(pkg.scripts["format:check"]).toBe("prettier --check .");
    expect(pkg.scripts.check).toBe(
      "npm run db:generate && npm run typecheck && npm run lint && npm run format:check && npm test",
    );
  });

  it("has database scripts", () => {
    expect(pkg.scripts.postinstall).toBe("prisma generate");
    expect(pkg.scripts["db:generate"]).toBe("prisma generate");
    expect(pkg.scripts["db:migrate"]).toBe("prisma migrate dev");
  });
});

describe("tsconfig.json", () => {
  const { compilerOptions } = readJson<TsConfig>("../tsconfig.json");

  it("is strict", () => {
    expect(compilerOptions.strict).toBe(true);
  });

  it("only allows syntax that can be stripped", () => {
    expect(compilerOptions.erasableSyntaxOnly).toBe(true);
    expect(compilerOptions.verbatimModuleSyntax).toBe(true);
  });
});

describe(".gitignore", () => {
  const lines = readFileSync(
    new URL("../.gitignore", import.meta.url),
    "utf8",
  ).split("\n");

  it("ignores node_modules and dist", () => {
    expect(lines).toContain("node_modules/");
    expect(lines).toContain("dist/");
  });

  it("ignores SQLite databases and the generated Prisma client", () => {
    expect(lines).toContain("*.db");
    expect(lines).toContain("src/generated/");
  });
});
