import { z } from "zod"

export const placeOrderSchema = z.object({
  items: z.array(
    z.object({
      itemId: z.number(),
      quantity: z.number(),
    }),
  ),
  fullName: z.string(),
  phone: z.string().min(10, "Номер телефона должен содержать минимум 10 цифр"),
  email: z.string().email(),
})

export const itemsQuerySchema = z.object({
  limit: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(z.number().min(1).max(100))
    .default(10),
  offset: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(z.number().min(0))
    .default(0),
  popular: z
    .enum(["true", "false"])
    .transform((val) => {
      if (val === "true") return true
      return false
    })
    .nullable()
    .default(null),
})

export const pizzaItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.string(),
  image: z.string(),
  popular: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const pizzaItemResponseSchema = z.object({
  items: z.array(pizzaItemSchema),
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
  hasMore: z.boolean(),
})

export const apiErrorSchema = z.object({
  error: z.string(),
  message: z.string(),
  details: z.any(),
})

export type ItemsQuery = z.infer<typeof itemsQuerySchema>

export type PizzaItemType = z.infer<typeof pizzaItemSchema>

export type ItemsResponse = z.infer<typeof pizzaItemResponseSchema>

export type ApiError = z.infer<typeof apiErrorSchema>

export type PlaceOrderDto = z.infer<typeof placeOrderSchema>
