import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core"

export const pizzaItems = sqliteTable("pizza_items", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: real("price").notNull(),
  image: text("image").notNull(),
  popular: integer("popular", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
})

export type PizzaItem = typeof pizzaItems.$inferSelect
export type NewPizzaItem = typeof pizzaItems.$inferInsert
