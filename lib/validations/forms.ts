import { z } from "zod";

export const customerInfoSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export type CustomerInfo = z.infer<typeof customerInfoSchema>;

export const orderItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  quantity: z.number().min(1),
});

export type OrderItem = z.infer<typeof orderItemSchema>;

export const orderSchema = z.object({
  customerInfo: customerInfoSchema,
  items: z.array(orderItemSchema).min(1, "Please select at least one pizza"),
  total: z.number().min(0),
});

export type Order = z.infer<typeof orderSchema>;
