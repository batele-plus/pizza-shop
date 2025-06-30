"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus } from "lucide-react"
import Image from "next/image"
import { useCartStore } from "@/lib/stores/cart-store"
import type { PizzaItemType } from "@/lib/validations/api"

interface ItemCardProps {
  item: PizzaItemType
}

export function ItemCard({ item }: ItemCardProps) {
  const { items, addItem, updateQuantity } = useCartStore()
  const cartItem = items.find((cartItem) => cartItem.id === item.id)
  const quantity = cartItem?.quantity || 0

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
  }

  const handleUpdateQuantity = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover object-top"
        />
        {item.popular && (
          <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">Popular</Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-red-600">${item.price}</span>
          {quantity > 0 ? (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleUpdateQuantity(quantity - 1)}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-semibold min-w-[2rem] text-center">{quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleUpdateQuantity(quantity + 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button onClick={handleAddToCart} size="sm">
              Add to Order
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
