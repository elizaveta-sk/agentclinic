import { db } from "../src/db.ts";
import { agents, ailments } from "./seed-data.ts";

// Seed the database with AgentClinic's demo data. Safe to re-run: it clears
// the tables first, then creates everything again.
async function main() {
  await db.agent.deleteMany();
  await db.ailment.deleteMany();

  for (const agent of agents) {
    await db.agent.create({ data: agent });
  }

  for (const ailment of ailments) {
    await db.ailment.create({ data: ailment });
  }
}

try {
  await main();
} finally {
  await db.$disconnect();
}
