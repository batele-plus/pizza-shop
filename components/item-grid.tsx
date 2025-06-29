"use client"

import { ItemCard, type PizzaItem } from "./item-card"

interface ItemGridProps {
  pizzas: PizzaItem[]
  selectedItems: Array<{ id: string; quantity: number }>
  onAddItem: (pizza: PizzaItem) => void
  onRemoveItem: (pizzaId: string) => void
  title: string
  description: string
  variant?: "popular" | "menu"
}

export function ItemGrid({
  pizzas,
  selectedItems,
  onAddItem,
  onRemoveItem,
  title,
  description,
  variant = "menu",
}: ItemGridProps) {
  const getItemQuantity = (pizzaId: string) => {
    const item = selectedItems.find((item) => item.id === pizzaId)
    return item ? item.quantity : 0
  }

  const gridCols = variant === "popular" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"

  return (
    <section className={variant === "popular" ? "py-16 bg-gray-50" : ""}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className={`grid ${gridCols} gap-8`}>
          {pizzas.map((pizza) => (
            <ItemCard
              key={pizza.id}
              pizza={pizza}
              quantity={getItemQuantity(pizza.id)}
              onAdd={onAddItem}
              onRemove={onRemoveItem}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
