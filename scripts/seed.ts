import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { pizzaItems } from "../lib/db/schema"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql)

const seedData = [
  {
    name: "Margherita Classic",
    description: "Fresh mozzarella, tomato sauce, basil, olive oil",
    price: "16.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
  {
    name: "Pepperoni Supreme",
    description: "Pepperoni, mozzarella, tomato sauce, oregano",
    price: "19.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
  {
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, mozzarella",
    price: "24.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
  {
    name: "Hawaiian Paradise",
    description: "Ham, pineapple, mozzarella, tomato sauce",
    price: "18.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
  {
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, onions, olives, tomatoes",
    price: "17.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, cilantro",
    price: "21.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
  {
    name: "White Sauce Delight",
    description: "Garlic white sauce, ricotta, mozzarella, spinach",
    price: "20.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
  {
    name: "Spicy Italian",
    description: "Spicy salami, pepperoni, jalapeños, hot sauce",
    price: "22.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
  {
    name: "Mediterranean",
    description: "Feta cheese, olives, tomatoes, red onions, oregano",
    price: "19.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
  {
    name: "Buffalo Chicken",
    description: "Buffalo chicken, blue cheese, celery, ranch drizzle",
    price: "23.99",
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
]

async function seed() {
  try {
    console.log("🌱 Seeding database...")

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS pizza_items (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        image TEXT NOT NULL,
        popular BOOLEAN DEFAULT FALSE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      )
    `

    // Clear existing data
    await sql`DELETE FROM pizza_items`

    // Insert seed data
    for (const item of seedData) {
      await db.insert(pizzaItems).values(item)
    }

    console.log("✅ Database seeded successfully!")
    console.log(`📊 Inserted ${seedData.length} pizza items`)
  } catch (error) {
    console.error("❌ Error seeding database:", error)
    process.exit(1)
  }
}

seed()
