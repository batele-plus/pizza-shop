import { db } from "@/lib/db"
import { pizzaItems } from "@/lib/db/schema"
import { eq, count } from "drizzle-orm"
import type { ItemsQuery, PizzaItemType } from "@/lib/validations/api"

export async function getPizzaItems(query: ItemsQuery) {
  const { limit, offset, popular } = query

  // Build where conditions
  const whereConditions = []
  if (popular !== null) {
    whereConditions.push(eq(pizzaItems.popular, popular))
  }

  // Get total count
  const [totalResult] = await db
    .select({ count: count() })
    .from(pizzaItems)
    .where(whereConditions.length > 0 ? whereConditions[0] : undefined)

  const total = totalResult.count

  // Get paginated items
  let itemsQuery = db.select().from(pizzaItems)

  if (whereConditions.length > 0) {
    itemsQuery = itemsQuery.where(whereConditions[0])
  }

  const items = await itemsQuery.limit(limit).offset(offset)

  const hasMore = offset + limit < total

  return {
    items,
    total,
    limit,
    offset,
    hasMore,
  }
}

export async function getPizzaItemById(id: string): Promise<PizzaItemType | null> {
  const [item] = await db.select().from(pizzaItems).where(eq(pizzaItems.id, id)).limit(1)
  return item || null
}
