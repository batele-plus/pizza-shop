"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cart, type OrderItem } from "./cart"
import type { PizzaItem } from "./item-card"

interface CustomerInfo {
  name: string
  email: string
  phone: string
}

interface OrderFormProps {
  pizzaMenu: PizzaItem[]
  selectedItems: OrderItem[]
  customerInfo: CustomerInfo
  onAddItem: (pizza: PizzaItem) => void
  onRemoveItem: (pizzaId: string) => void
  onCustomerInfoChange: (info: CustomerInfo) => void
  onSubmit: (e: React.FormEvent) => void
  getTotalPrice: () => number
}

export function OrderForm({
  pizzaMenu,
  selectedItems,
  customerInfo,
  onAddItem,
  onRemoveItem,
  onCustomerInfoChange,
  onSubmit,
  getTotalPrice,
}: OrderFormProps) {
  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    onCustomerInfoChange({ ...customerInfo, [field]: value })
  }

  return (
    <section id="order-form" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Place Your Order</h2>
            <p className="text-xl text-gray-600">Fill in your details and select your favorite pizzas</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-8">
            {/* Pizza Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Your Pizzas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {pizzaMenu.map((pizza) => (
                    <div key={pizza.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <img
                        src={pizza.image || "/placeholder.svg"}
                        alt={pizza.name}
                        className="w-full h-32 object-cover rounded mb-3"
                      />
                      <h3 className="font-semibold mb-1">{pizza.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{pizza.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-red-600">${pizza.price}</span>
                        {selectedItems.find((item) => item.id === pizza.id) ? (
                          <div className="flex items-center gap-2">
                            <Button
                              type="button"
                              size="sm"
                              variant="outline"
                              onClick={() => onRemoveItem(pizza.id)}
                              className="h-8 w-8 p-0"
                            >
                              <span className="text-sm">-</span>
                            </Button>
                            <span className="font-semibold">
                              {selectedItems.find((item) => item.id === pizza.id)?.quantity || 0}
                            </span>
                            <Button
                              type="button"
                              size="sm"
                              onClick={() => onAddItem(pizza)}
                              className="h-8 w-8 p-0 bg-red-600 hover:bg-red-700"
                            >
                              <span className="text-sm">+</span>
                            </Button>
                          </div>
                        ) : (
                          <Button
                            type="button"
                            size="sm"
                            onClick={() => onAddItem(pizza)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            <span className="text-sm">+</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Cart items={selectedItems} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-lg py-6">
              Place Order - ${getTotalPrice().toFixed(2)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
