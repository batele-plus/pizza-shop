"use client"
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
import { usePlaceOrder } from "@/hooks/use-place-order"

export function OrderForm() {
  const { mutate: placeOrder, isPending } = usePlaceOrder({
    onSuccess(data) {
      alert(`Заказ успешно оформлен! Итого: ${data.totalPrice.toFixed(2)} ₽`)
      clearCart()
      reset()
    },
  })
  const { items, getTotalPrice, clearCart } = useCartStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CustomerInfo>({
    defaultValues: {
      email: "",
      phone: "",
      name: "",
    },
    resolver: zodResolver(customerInfoSchema),
  })

  const onSubmit = async (data: CustomerInfo) => {
    placeOrder({
      items: items.map((item) => ({
        itemId: item.id,
        quantity: item.quantity,
      })),
      fullName: data.name,
      phone: data.phone,
      email: data.email,
    })
  }

  const disabled = items.length === 0 || isPending

  return (
    <section id="order-form" className="py-12 bg-red-500/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Оформить заказ</h2>

        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Pizza Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Выберите пиццу</CardTitle>
              </CardHeader>
              <CardContent>
                <ItemGrid limit={100} />
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Полное имя</Label>
                    <Input id="name" {...register("name")} placeholder="Введите ваше полное имя" />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Номер телефона</Label>
                    <Input id="phone" {...register("phone")} placeholder="Введите ваш номер телефона" />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Адрес электронной почты</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="Введите ваш email" />
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
                disabled={disabled}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-3 text-lg"
              >
                {isPending ? "Оформляем заказ..." : `Оформить заказ - ${getTotalPrice().toFixed(2)} ₽`}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
