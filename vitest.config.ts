import { defineConfig } from "vitest/config";

// Tests use their own database so they never touch prisma/dev.db.
const testDatabaseUrl = "file:./prisma/test.db";

export default defineConfig({
  test: {
    env: { DATABASE_URL: testDatabaseUrl },
    globalSetup: ["./test/setup-database.ts"],
  },
});
