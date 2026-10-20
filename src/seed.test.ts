import { describe, expect, it } from "vitest";
import { agents, ailments } from "../prisma/seed-data.ts";
import { db } from "./db.ts";

// The test setup seeds twice, so exact counts also prove re-seeding creates
// no duplicates.
describe("seed", () => {
  it("creates every agent exactly once", async () => {
    expect(agents.length).toBeGreaterThanOrEqual(6);
    expect(await db.agent.count()).toBe(agents.length);
  });

  it("stores each agent's details", async () => {
    for (const agent of agents) {
      await expect(
        db.agent.findUnique({
          where: { slug: agent.slug },
          select: { slug: true, name: true, role: true, bio: true },
        }),
      ).resolves.toEqual(agent);
    }
  });

  it("creates every ailment exactly once", async () => {
    expect(ailments.length).toBeGreaterThanOrEqual(6);
    expect(await db.ailment.count()).toBe(ailments.length);
  });

  it("stores each ailment's details", async () => {
    for (const ailment of ailments) {
      await expect(
        db.ailment.findUnique({
          where: { slug: ailment.slug },
          select: { slug: true, name: true, description: true },
        }),
      ).resolves.toEqual(ailment);
    }
  });
});
