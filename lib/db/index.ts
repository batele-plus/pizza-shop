import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import * as schema from "./schema"

const sqlite = new Database("pizza-shop.db")
export const db = drizzle(sqlite, { schema })

// Run migrations on startup
try {
  migrate(db, { migrationsFolder: "drizzle" })
} catch (error) {
  console.log("Migration error:", error)
}
