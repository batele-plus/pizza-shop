import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { env } from "../env";
import postgres from "postgres";

const sql = postgres(env.DATABASE_URL);
const db = drizzle(sql, { schema });

export { db };
