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
    price: "20.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, onions, olives, tomatoes",
    price: "18.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, cilantro",
    price: "22.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export async function getPizzaItems(query: ItemsQuery) {
  const { limit, offset, popular } = query

  console.log("getPizzaItems called with:", { limit, offset, popular })

  try {
    // Check if database is available
    if (!process.env.DATABASE_URL) {
      console.log("No DATABASE_URL found, using mock data")
      return getMockPizzaItems(query)
    }

    console.log("Attempting database query...")

    // Get total count first
    let totalQuery = db.select({ count: count() }).from(pizzaItems)

    if (popular !== null) {
      totalQuery = totalQuery.where(eq(pizzaItems.popular, popular))
    }

    const totalResult = await totalQuery
    const total = totalResult[0]?.count || 0

    console.log("Total count:", total)

    // Get paginated items
    let itemsQuery = db.select().from(pizzaItems)

    if (popular !== null) {
      itemsQuery = itemsQuery.where(eq(pizzaItems.popular, popular))
    }

    const items = await itemsQuery.limit(limit).offset(offset)

    console.log("Items fetched:", items.length)

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

  console.log("Using mock data with query:", { limit, offset, popular })

  // Filter items based on popular flag
  let filteredItems = mockPizzaItems
  if (popular !== null) {
    filteredItems = mockPizzaItems.filter((item) => item.popular === popular)
  }

  const total = filteredItems.length
  const paginatedItems = filteredItems.slice(offset, offset + limit)
  const hasMore = offset + limit < total

  console.log("Mock data result:", { total, itemCount: paginatedItems.length, hasMore })

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

    const result = await db.select().from(pizzaItems).where(eq(pizzaItems.id, id)).limit(1)
    return result[0] || null
  } catch (error) {
    console.error("Database query error:", error)
    console.log("Falling back to mock data")
    return mockPizzaItems.find((item) => item.id === id) || null
  }
}
