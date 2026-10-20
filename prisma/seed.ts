import { db } from "../src/db.ts";

// Seed the database with AgentClinic's demo data. Safe to re-run: it clears
// the tables first, then creates everything again.
async function main() {}

try {
  await main();
} finally {
  await db.$disconnect();
}
