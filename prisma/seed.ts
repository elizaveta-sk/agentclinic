import { db } from "../src/db.ts";
import { agents } from "./seed-data.ts";

// Seed the database with AgentClinic's demo data. Safe to re-run: it clears
// the tables first, then creates everything again.
async function main() {
  await db.agent.deleteMany();

  for (const agent of agents) {
    await db.agent.create({ data: agent });
  }
}

try {
  await main();
} finally {
  await db.$disconnect();
}
