import { db } from "@/lib/db";
import { pizzaItems } from "@/lib/db/schema";
import { eq, count, and } from "drizzle-orm";
import type { ItemsQuery, PizzaItemType } from "@/lib/validations/api";

export async function getPizzaItems(query: ItemsQuery) {
  const { limit, offset, popular } = query;

  console.log("getPizzaItems called with:", { limit, offset, popular });

  const [totalResult] = await db
    .select({ count: count() })
    .from(pizzaItems)
    .where(and(popular !== null ? eq(pizzaItems.popular, popular) : undefined));

  const total = totalResult.count;

  console.log("Total count:", total);

  // Get paginated items
  const items = await db
    .select()
    .from(pizzaItems)
    .where(and(popular !== null ? eq(pizzaItems.popular, popular) : undefined))
    .limit(limit)
    .offset(offset);

  console.log("Items fetched:", items.length);

  const hasMore = offset + limit < total;

  return {
    items,
    total,
    limit,
    offset,
    hasMore,
  };
}

export async function getPizzaItemById(
  id: number
): Promise<PizzaItemType | null> {
  try {
    const [result] = await db
      .select()
      .from(pizzaItems)
      .where(eq(pizzaItems.id, id))
      .limit(1);
    return result ?? null;
  } catch (error) {
    console.error("Database query error:", error);
    console.log("Falling back to mock data");
    throw error;
  }
}
