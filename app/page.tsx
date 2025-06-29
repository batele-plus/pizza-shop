"use client"

import { Hero } from "@/components/hero"
import { ItemGrid } from "@/components/item-grid"
import { OrderFormWithValidation } from "@/components/order-form-with-validation"
import { Footer } from "@/components/footer"
import { usePizzaItems } from "@/hooks/use-pizza-items"
import { useCartStore } from "@/lib/stores/cart-store"

export default function PizzaShopLanding() {
  const { addItem, removeItem, getItemQuantity } = useCartStore()
  const { data: popularData } = usePizzaItems({ popular: true, limit: 6 })

  const handleOrderNowClick = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleViewMenuClick = () => {
    document.getElementById("popular-menu")?.scrollIntoView({ behavior: "smooth" })
  }

  const selectedItemsForGrid =
    popularData?.items.map((item) => ({
      id: item.id,
      quantity: getItemQuantity(item.id),
    })) || []

  return (
    <div className="min-h-screen bg-white">
      <Hero onOrderNowClick={handleOrderNowClick} onViewMenuClick={handleViewMenuClick} />

      <div id="popular-menu">
        {popularData && (
          <ItemGrid
            pizzas={popularData.items}
            selectedItems={selectedItemsForGrid}
            onAddItem={addItem}
            onRemoveItem={removeItem}
            title="Most Popular Pizzas"
            description="Our customers' favorites - tried, tested, and absolutely delicious!"
            variant="popular"
          />
        )}
      </div>

      <OrderFormWithValidation />
      <Footer />
    </div>
  )
}
