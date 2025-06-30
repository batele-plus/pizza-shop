import "dotenv/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { NewPizzaItem, pizzaItems } from "../lib/db/schema";
import { env } from "@/lib/env";

const sql = postgres(env.DATABASE_URL);
const db = drizzle(sql);

const pizzaData: NewPizzaItem[] = [
  {
    name: "Margherita Classic",
    description: "Fresh mozzarella, tomato sauce, basil, olive oil",
    price: "16.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: true,
  },
  {
    name: "Pepperoni Supreme",
    description: "Pepperoni, mozzarella, tomato sauce, oregano",
    price: "19.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: true,
  },
  {
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, mozzarella",
    price: "24.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: true,
  },
  {
    name: "Hawaiian Paradise",
    description: "Ham, pineapple, mozzarella, tomato sauce",
    price: "20.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, onions, olives, tomatoes",
    price: "18.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, cilantro",
    price: "22.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: true,
  },
  {
    name: "White Sauce Delight",
    description: "White sauce, ricotta, mozzarella, garlic, spinach",
    price: "21.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Mediterranean",
    description: "Feta cheese, olives, tomatoes, red onions, oregano",
    price: "19.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Buffalo Chicken",
    description: "Buffalo chicken, blue cheese, celery, hot sauce",
    price: "24.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Four Cheese",
    description: "Mozzarella, parmesan, gorgonzola, fontina",
    price: "20.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Spicy Italian",
    description: "Spicy salami, pepperoni, jalapeños, red pepper flakes",
    price: "23.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: true,
  },
  {
    name: "Mushroom Truffle",
    description: "Mixed mushrooms, truffle oil, arugula, parmesan",
    price: "26.99",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
];

async function seed() {
  try {
    console.log("🌱 Starting database seed...");

    // Clear existing data
    console.log("🗑️  Clearing existing pizza items...");
    await db.delete(pizzaItems);

    // Insert new data
    console.log("📝 Inserting pizza items...");
    const insertedItems = await db
      .insert(pizzaItems)
      .values(pizzaData)
      .returning();

    console.log(`✅ Successfully seeded ${insertedItems.length} pizza items!`);

    // Show summary
    const popularCount = insertedItems.filter((item) => item.popular).length;
    const regularCount = insertedItems.length - popularCount;

    console.log(`📊 Summary:`);
    console.log(`   • Popular pizzas: ${popularCount}`);
    console.log(`   • Regular pizzas: ${regularCount}`);
    console.log(`   • Total pizzas: ${insertedItems.length}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  }
}

seed();
