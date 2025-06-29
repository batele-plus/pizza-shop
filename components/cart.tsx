"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus } from "lucide-react"

export interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartProps {
  items: OrderItem[]
  onAddItem: (item: OrderItem) => void
  onRemoveItem: (itemId: string) => void
}

export function Cart({ items, onAddItem, onRemoveItem }: CartProps) {
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  if (items.length === 0) {
    return null
  }

  return (
    <div className="border-t pt-6">
      <h3 className="font-semibold mb-4">Your Order</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded">
            <div>
              <span className="font-medium">{item.name}</span>
              <span className="text-gray-600 ml-2">${item.price} each</span>
            </div>
            <div className="flex items-center gap-2">
              <Button type="button" size="sm" variant="outline" onClick={() => onRemoveItem(item.id)}>
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button type="button" size="sm" variant="outline" onClick={() => onAddItem(item)}>
                <Plus className="w-4 h-4" />
              </Button>
              <span className="font-bold ml-4">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      <Separator className="my-4" />
      <div className="flex justify-between items-center text-xl font-bold">
        <span>Total:</span>
        <span className="text-red-600">${getTotalPrice().toFixed(2)}</span>
      </div>
    </div>
  )
}
