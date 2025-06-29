import { z } from "zod"

export const pizzaItemSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive("Price must be positive"),
  image: z.string().url("Invalid image URL"),
  popular: z.boolean().optional().default(false),
})

export const itemsQuerySchema = z.object({
  limit: z
    .string()
    .optional()
    .transform((val) => (val ? Math.min(Math.max(Number.parseInt(val, 10) || 10, 1), 100) : 10)),
  offset: z
    .string()
    .optional()
    .transform((val) => (val ? Math.max(Number.parseInt(val, 10) || 0, 0) : 0)),
  popular: z
    .string()
    .optional()
    .transform((val) => (val === "true" ? true : val === "false" ? false : null)),
})

export const itemsResponseSchema = z.object({
  items: z.array(pizzaItemSchema),
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
  hasMore: z.boolean(),
})

export type PizzaItemType = z.infer<typeof pizzaItemSchema>
export type ItemsQuery = z.infer<typeof itemsQuerySchema>
export type ItemsResponse = z.infer<typeof itemsResponseSchema>
