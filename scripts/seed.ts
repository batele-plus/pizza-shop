import { db } from "../lib/db"
import { pizzaItems } from "../lib/db/schema"

const seedData = [
  {
    id: "1",
    name: "Margherita Classic",
    description: "Fresh mozzarella, tomato sauce, basil, olive oil",
    price: 16.99,
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
  {
    id: "2",
    name: "Pepperoni Supreme",
    description: "Pepperoni, mozzarella, tomato sauce, oregano",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
  {
    id: "3",
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, mozzarella",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
  {
    id: "4",
    name: "Veggie Deluxe",
    description: "Bell peppers, mushrooms, onions, olives, tomatoes",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
  {
    id: "5",
    name: "Hawaiian Paradise",
    description: "Ham, pineapple, mozzarella, tomato sauce",
    price: 20.99,
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
  {
    id: "6",
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, cilantro",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
  {
    id: "7",
    name: "Four Cheese",
    description: "Mozzarella, parmesan, gorgonzola, ricotta",
    price: 21.99,
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
  {
    id: "8",
    name: "Spicy Italian",
    description: "Spicy salami, hot peppers, onions, mozzarella",
    price: 23.99,
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
  {
    id: "9",
    name: "Mediterranean",
    description: "Olives, feta cheese, tomatoes, spinach, olive oil",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    popular: false,
  },
  {
    id: "10",
    name: "Buffalo Chicken",
    description: "Buffalo chicken, blue cheese, celery, hot sauce",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    popular: true,
  },
]

async function seed() {
  console.log("🌱 Seeding database...")

  try {
    // Clear existing data
    await db.delete(pizzaItems)
    console.log("🗑️  Cleared existing data")

    // Insert seed data
    await db.insert(pizzaItems).values(seedData)
    console.log(`✅ Inserted ${seedData.length} pizza items`)

    console.log("🎉 Database seeded successfully!")
  } catch (error) {
    console.error("❌ Error seeding database:", error)
    process.exit(1)
  }
}

seed()
