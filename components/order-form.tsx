"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { customerInfoSchema, type CustomerInfo } from "@/lib/validations/forms"
import { useCartStore } from "@/lib/stores/cart-store"
import { Cart } from "./cart"
import { ItemGrid } from "./item-grid"

export function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { items, getTotalPrice, clearCart } = useCartStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CustomerInfo>({
    resolver: zodResolver(customerInfoSchema),
  })

  const onSubmit = async (data: CustomerInfo) => {
    setIsSubmitting(true)

    // Simulate order submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Order submitted:", {
      customer: data,
      items,
      total: getTotalPrice(),
    })

    alert(`Order submitted successfully! Total: $${getTotalPrice().toFixed(2)}`)
    clearCart()
    reset()
    setIsSubmitting(false)
  }

  return (
    <section id="order-form" className="py-12 bg-red-500/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Place Your Order</h2>

        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Pizza Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Your Pizzas</CardTitle>
              </CardHeader>
              <CardContent>
                <ItemGrid limit={100} />
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" {...register("name")} placeholder="Enter your full name" />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" {...register("phone")} placeholder="Enter your phone number" />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="Enter your email address" />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Cart />

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={items.length === 0 || isSubmitting}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-3 text-lg"
              >
                {isSubmitting ? "Placing Order..." : `Place Order - $${getTotalPrice().toFixed(2)}`}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
