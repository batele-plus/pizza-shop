// Conditional database setup for build/runtime environments
let db: any = null

import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "./schema"

if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL is not set. Database operations will fail.")
}

const sql = neon(process.env.DATABASE_URL!)
db = drizzle(sql, { schema })

export { db }
