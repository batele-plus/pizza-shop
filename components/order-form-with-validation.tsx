"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCartStore } from "@/lib/stores/cart-store"
import { customerInfoSchema, type CustomerInfo } from "@/lib/validations/forms"
import { usePizzaItems } from "@/hooks/use-pizza-items"
import { ItemCard } from "./item-card"
import { Cart } from "./cart"

export function OrderFormWithValidation() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { items: cartItems, addItem, removeItem, getTotalPrice, getItemQuantity } = useCartStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CustomerInfo>({
    resolver: zodResolver(customerInfoSchema),
  })

  const { data, isLoading, error } = usePizzaItems({ limit: 20 })

  const onSubmit = async (customerData: CustomerInfo) => {
    if (cartItems.length === 0) {
      alert("Please select at least one pizza!")
      return
    }

    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      alert(`Order placed successfully! Total: $${getTotalPrice().toFixed(2)}`)
      reset()
      useCartStore.getState().clearCart()
    } catch (error) {
      alert("Failed to place order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        <span className="ml-2">Loading pizza items...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error loading pizza items: {error.message}</p>
      </div>
    )
  }

  return (
    <section id="order-form" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Place Your Order</h2>
            <p className="text-xl text-gray-600">Fill in your details and select your favorite pizzas</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Pizza Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Your Pizzas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {data?.items.map((pizza) => (
                    <ItemCard
                      key={pizza.id}
                      pizza={pizza}
                      quantity={getItemQuantity(pizza.id)}
                      onAdd={addItem}
                      onRemove={removeItem}
                      variant="menu"
                    />
                  ))}
                </div>

                <Cart items={cartItems} onAddItem={addItem} onRemoveItem={removeItem} />
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
                    {...register("name")}
                    placeholder="John Doe"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="(555) 123-4567"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                </div>
              </CardContent>
            </Card>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
              disabled={isSubmitting || cartItems.length === 0}
            >
              {isSubmitting ? "Placing Order..." : `Place Order - $${getTotalPrice().toFixed(2)}`}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
