import {
  apiErrorSchema,
  itemsQuerySchema,
  pizzaItemResponseSchema,
} from "@/lib/validations/api";
import { createRoute } from "@hono/zod-openapi";

// OpenAPI endpoint
export const getAllItemsRoute = createRoute({
  method: "get",
  path: "/items",
  summary: "Get all items",
  description: "Get all items",
  request: {
    query: itemsQuerySchema,
  },
  responses: {
    200: {
      description: "Товары успешно получены",
      content: {
        "application/json": {
          schema: pizzaItemResponseSchema,
        },
      },
    },
    500: {
      description: "Ошибка получения товаров",
      content: {
        "application/json": {
          schema: apiErrorSchema,
        },
      },
    },
  },
});
