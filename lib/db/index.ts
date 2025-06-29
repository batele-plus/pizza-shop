// Conditional database setup for build/runtime environments
let db: any = null

const { neon } = require("@neondatabase/serverless")
const { drizzle } = require("drizzle-orm/neon-http")
const schema = require("./schema")

if (typeof window === "undefined") {
  // Only import database dependencies on server-side
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is required")
    }

    // Initialize database connection
    const sql = neon(process.env.DATABASE_URL!)
    db = drizzle(sql, { schema })
  } catch (error) {
    console.log("Database setup skipped for build:", error.message)
    // Create a mock database for build time
    db = {
      select: () => ({
        from: () => ({
          where: () => ({
            limit: () => Promise.resolve([]),
            offset: () => Promise.resolve([]),
          }),
          limit: () => ({
            offset: () => Promise.resolve([]),
          }),
        }),
      }),
      insert: () => ({
        values: () => Promise.resolve(),
      }),
      delete: () => Promise.resolve(),
    }
  }
}

export { db }
