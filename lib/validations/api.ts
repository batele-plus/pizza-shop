import { z } from "zod"

export const itemsQuerySchema = z.object({
  limit: z.coerce.number().min(1).max(100).default(10),
  offset: z.coerce.number().min(0).default(0),
  popular: z
    .string()
    .optional()
    .transform((val) => {
      if (val === undefined || val === "") return null
      return val === "true"
    }),
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

export const itemsResponseSchema = z.object({
  items: z.array(pizzaItemSchema),
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
  hasMore: z.boolean(),
})

export type ItemsQuery = z.infer<typeof itemsQuerySchema>
export type PizzaItemType = z.infer<typeof pizzaItemSchema>
export type ItemsResponse = z.infer<typeof itemsResponseSchema>
