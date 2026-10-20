import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./generated/prisma/client.ts";

// Keep this default in sync with prisma.config.ts.
const url = process.env.DATABASE_URL ?? "file:./prisma/dev.db";

export const db = new PrismaClient({
  adapter: new PrismaBetterSqlite3({ url }),
});
