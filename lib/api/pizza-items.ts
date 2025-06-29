import { db } from "@/lib/db"
import { pizzaItems } from "@/lib/db/schema"
import { eq, count } from "drizzle-orm"
import type { ItemsQuery, PizzaItemType } from "@/lib/validations/api"

// Mock data for fallback
const mockPizzaItems = [
  {
    id: 1,
    name: "Margherita Classic",
    description: "Fresh mozzarella, tomato sauce, basil, olive oil",
    price: "16.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Pepperoni Supreme",
    description: "Pepperoni, mozzarella, tomato sauce, oregano",
    price: "19.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, mozzarella",
    price: "24.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: "Hawaiian Paradise",
    description: "Ham, pineapple, mozzarella, tomato sauce",
    price: "18.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, onions, olives, tomatoes",
    price: "17.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, cilantro",
    price: "21.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export async function getPizzaItems(query: ItemsQuery) {
  const { limit, offset, popular } = query

  try {
    // Check if database is available
    if (!process.env.DATABASE_URL) {
      console.log("No DATABASE_URL found, using mock data")
      return getMockPizzaItems(query)
    }

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
  } catch (error) {
    console.error("Database query error:", error)
    console.log("Falling back to mock data")
    return getMockPizzaItems(query)
  }
}

function getMockPizzaItems(query: ItemsQuery) {
  const { limit, offset, popular } = query

  // Filter items based on popular flag
  let filteredItems = mockPizzaItems
  if (popular !== null) {
    filteredItems = mockPizzaItems.filter((item) => item.popular === popular)
  }

  const total = filteredItems.length
  const paginatedItems = filteredItems.slice(offset, offset + limit)
  const hasMore = offset + limit < total

  return {
    items: paginatedItems,
    total,
    limit,
    offset,
    hasMore,
  }
}

export async function getPizzaItemById(id: number): Promise<PizzaItemType | null> {
  try {
    if (!process.env.DATABASE_URL) {
      console.log("No DATABASE_URL found, using mock data")
      return mockPizzaItems.find((item) => item.id === id) || null
    }

    const [item] = await db.select().from(pizzaItems).where(eq(pizzaItems.id, id)).limit(1)
    return item || null
  } catch (error) {
    console.error("Database query error:", error)
    console.log("Falling back to mock data")
    return mockPizzaItems.find((item) => item.id === id) || null
  }
}
