import "dotenv/config"
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import { type NewPizzaItem, pizzaItems } from "../lib/db/schema"
import { env } from "@/lib/env"

const sql = postgres(env.DATABASE_URL)
const db = drizzle(sql)

const pizzaData: NewPizzaItem[] = [
  {
    name: "Маргарита Классическая",
    description: "Свежая моцарелла, томатный соус, базилик, оливковое масло",
    price: "599",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: true,
  },
  {
    name: "Пепперони Супрем",
    description: "Пепперони, моцарелла, томатный соус, орегано",
    price: "699",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: true,
  },
  {
    name: "Мясная",
    description: "Пепперони, колбаса, бекон, ветчина, моцарелла",
    price: "899",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: true,
  },
  {
    name: "Гавайская",
    description: "Ветчина, ананас, моцарелла, томатный соус",
    price: "749",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Овощная Супрем",
    description: "Болгарский перец, грибы, лук, оливки, помидоры",
    price: "649",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Барбекю с курицей",
    description: "Курица гриль, соус барбекю, красный лук, кинза",
    price: "799",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: true,
  },
  {
    name: "Белый соус",
    description: "Белый соус, рикотта, моцарелла, чеснок, шпинат",
    price: "749",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Средиземноморская",
    description: "Сыр фета, оливки, помидоры, красный лук, орегано",
    price: "699",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Буффало с курицей",
    description: "Курица буффало, голубой сыр, сельдерей, острый соус",
    price: "899",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Четыре сыра",
    description: "Моцарелла, пармезан, горгонзола, фонтина",
    price: "749",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
  {
    name: "Острая итальянская",
    description: "Острая салями, пепперони, халапеньо, красный перец",
    price: "849",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: true,
  },
  {
    name: "Грибная с трюфелем",
    description: "Смесь грибов, трюфельное масло, руккола, пармезан",
    price: "999",
    image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    popular: false,
  },
]

async function seed() {
  try {
    console.log("🌱 Начинаем заполнение базы данных...")

    // Clear existing data
    console.log("🗑️  Очищаем существующие данные о пиццах...")
    await db.delete(pizzaItems)

    // Insert new data
    console.log("📝 Добавляем пиццы...")
    const insertedItems = await db.insert(pizzaItems).values(pizzaData).returning()

    console.log(`✅ Успешно добавлено ${insertedItems.length} пицц!`)

    // Show summary
    const popularCount = insertedItems.filter((item) => item.popular).length
    const regularCount = insertedItems.length - popularCount

    console.log(`📊 Сводка:`)
    console.log(`   • Популярных пицц: ${popularCount}`)
    console.log(`   • Обычных пицц: ${regularCount}`)
    console.log(`   • Всего пицц: ${insertedItems.length}`)

    process.exit(0)
  } catch (error) {
    console.error("❌ Ошибка заполнения:", error)
    process.exit(1)
  }
}

seed()
