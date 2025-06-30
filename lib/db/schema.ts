import {
  pgTable,
  serial,
  text,
  decimal,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const pizzaItems = pgTable("pizza_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  image: text("image").notNull(),
  popular: boolean("popular").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type PizzaItem = typeof pizzaItems.$inferSelect;
export type NewPizzaItem = typeof pizzaItems.$inferInsert;
