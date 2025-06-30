import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  decimal,
  boolean,
  timestamp,
  integer,
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

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;

export const orderItems = pgTable("order_items", {
  orderId: integer("order_id")
    .notNull()
    .references(() => orders.id)
    .notNull(),
  itemId: integer("item_id")
    .notNull()
    .references(() => pizzaItems.id)
    .notNull(),
  quantity: integer("quantity").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type OrderItem = typeof orderItems.$inferSelect;
export type NewOrderItem = typeof orderItems.$inferInsert;

export const pizzaItemsRelations = relations(pizzaItems, ({ many }) => {
  return {
    orderItems: many(orderItems),
  };
});

export const ordersRelations = relations(orders, ({ many }) => {
  return {
    orderItems: many(orderItems),
  };
});

export const orderItemsRelations = relations(orderItems, ({ one }) => {
  return {
    pizzaItem: one(pizzaItems, {
      fields: [orderItems.itemId],
      references: [pizzaItems.id],
    }),
    order: one(orders, {
      fields: [orderItems.orderId],
      references: [orders.id],
    }),
  };
});
