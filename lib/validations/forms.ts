import { z } from "zod"

export const customerInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[\d\s\-$$$$+]+$/, "Please enter a valid phone number"),
})

export const orderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
})

export const orderFormSchema = z.object({
  customerInfo: customerInfoSchema,
  items: z.array(orderItemSchema).min(1, "Please select at least one pizza"),
})

export type CustomerInfo = z.infer<typeof customerInfoSchema>
export type OrderItem = z.infer<typeof orderItemSchema>
export type OrderForm = z.infer<typeof orderFormSchema>
