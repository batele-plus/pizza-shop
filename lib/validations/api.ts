import { z } from "zod";

export const itemsQuerySchema = z.object({
  limit: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().min(1).max(100))
    .nullable()
    .default(null),
  offset: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().min(0))
    .nullable()
    .default(null),
  popular: z
    .enum(["true", "false"])
    .transform((val) => {
      if (val === "true") return true;
      return false;
    })
    .nullable()
    .default(null),
});

export const pizzaItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.string(),
  image: z.string(),
  popular: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ItemsQuery = z.infer<typeof itemsQuerySchema>;
export type PizzaItemType = z.infer<typeof pizzaItemSchema>;

export interface ItemsResponse {
  items: PizzaItemType[];
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}

export interface ApiError {
  error: string;
  message: string;
  details?: any;
}
