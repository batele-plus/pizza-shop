import { apiErrorSchema, placeOrderSchema } from "@/lib/validations/api";
import { createRoute, z } from "@hono/zod-openapi";

// OpenAPI endpoint
export const placeOrderRoute = createRoute({
  method: "post",
  path: "/order",
  summary: "Create Order",
  description: "Create Order",
  request: {
    body: {
      content: {
        "application/json": {
          schema: placeOrderSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Заказ успешно создан",
      content: {
        "application/json": {
          schema: z.object({
            orderId: z.number(),
            totalPrice: z.number(),
          }),
        },
      },
    },
    500: {
      description: "Ошибка создания заказа",
      content: {
        "application/json": {
          schema: apiErrorSchema,
        },
      },
    },
  },
});
