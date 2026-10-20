import { execSync } from "node:child_process";
import { rmSync } from "node:fs";

// Rebuild the test database from scratch before every test run: apply all
// migrations, then seed it, so tests always see the same data. The seed runs
// twice to prove re-seeding is safe; src/seed.test.ts checks for duplicates.
export default function setup() {
  const env = { ...process.env, DATABASE_URL: "file:./prisma/test.db" };

  rmSync("prisma/test.db", { force: true });
  execSync("npx prisma migrate deploy", { env, stdio: "pipe" });
  execSync("npx prisma db seed", { env, stdio: "pipe" });
  execSync("npx prisma db seed", { env, stdio: "pipe" });
}
