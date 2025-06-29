"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"

export interface PizzaItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  popular?: boolean
}

interface ItemCardProps {
  pizza: PizzaItem
  quantity: number
  onAdd: (pizza: PizzaItem) => void
  onRemove: (pizzaId: string) => void
  variant?: "popular" | "menu"
}

export function ItemCard({ pizza, quantity, onAdd, onRemove, variant = "menu" }: ItemCardProps) {
  const isPopular = variant === "popular"

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={pizza.image || "/placeholder.svg"}
          alt={pizza.name}
          width={300}
          height={200}
          className={`w-full object-cover ${isPopular ? "h-48" : "h-32"}`}
        />
        {pizza.popular && <Badge className="absolute top-2 left-2 bg-red-600">Popular</Badge>}
      </div>
      <CardHeader className={isPopular ? "" : "pb-2"}>
        <CardTitle className="flex justify-between items-center">
          {pizza.name}
          <span className="text-red-600 font-bold">${pizza.price}</span>
        </CardTitle>
        <CardDescription>{pizza.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {quantity > 0 ? (
          <div className={`flex items-center ${isPopular ? "justify-between" : "gap-2"}`}>
            <Button size="sm" variant="outline" onClick={() => onRemove(pizza.id)} className="h-8 w-8 p-0">
              <Minus className="w-4 h-4" />
            </Button>
            <span className={`font-semibold ${isPopular ? "text-lg" : ""}`}>{quantity}</span>
            <Button size="sm" onClick={() => onAdd(pizza)} className="h-8 w-8 p-0 bg-red-600 hover:bg-red-700">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => onAdd(pizza)}
            className={`bg-red-600 hover:bg-red-700 ${isPopular ? "w-full" : "w-full sm:w-auto"}`}
            size={isPopular ? "default" : "sm"}
          >
            {isPopular ? "Add to Order" : <Plus className="w-4 h-4" />}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
