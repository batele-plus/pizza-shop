import { z } from "zod"

export const customerInfoSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя должно содержать максимум 50 символов")
    .regex(/^[а-яёА-ЯЁa-zA-Z\s]+$/, "Имя может содержать только буквы и пробелы"),
  email: z.string().email("Пожалуйста, введите корректный адрес электронной почты"),
  phone: z.string().min(10, "Номер телефона должен содержать минимум 10 цифр"),
})

export type CustomerInfo = z.infer<typeof customerInfoSchema>

export const orderItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  quantity: z.number().min(1),
})

export type OrderItem = z.infer<typeof orderItemSchema>

export const orderSchema = z.object({
  customerInfo: customerInfoSchema,
  items: z.array(orderItemSchema).min(1, "Пожалуйста, выберите хотя бы одну пиццу"),
  total: z.number().min(0),
})

export type Order = z.infer<typeof orderSchema>
