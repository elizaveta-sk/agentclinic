import { describe, expect, it } from "vitest";
import { db } from "./db.ts";

describe("db", () => {
  it("connects to the SQLite database", async () => {
    const rows = await db.$queryRaw<{ ok: number }[]>`SELECT 1 AS ok`;

    expect(Number(rows[0]?.ok)).toBe(1);
  });
});
