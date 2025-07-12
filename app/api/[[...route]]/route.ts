import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { getAllItemsRoute } from "./routers/get-all-items-route";
import { getPizzaItems } from "@/lib/api/pizza-items";
import { placeOrderRoute } from "./routers/place-order-route";
import { placeOrder } from "@/lib/api/order";
import { sendEmail } from "@/lib/email/send-email";

// export const runtime = "edge";
export const runtime = "nodejs";

const app = new OpenAPIHono().basePath("/api");

app.openapi(getAllItemsRoute, async (c) => {
  const query = c.req.valid("query");

  console.log(query);

  const result = await getPizzaItems(query);

  return c.json(result, 200);
});

app.openapi(placeOrderRoute, async (c) => {
  const createOrderDto = c.req.valid("json");

  const order = await placeOrder(createOrderDto);
  if (!order) {
    return c.json(
      {
        error: "Failed to create order",
        message: "Не удалось создать заказ",
      },
      500
    );
  }

  await sendEmail({
    email: order.email,
    subject: "Ваш заказ на пиццу с Pizza Shop",
    html: `
      <h1>Заказ на пиццу с Pizza Shop</h1>
      <p>Полное имя: ${order.fullName}</p>
      <p>Телефон: ${order.phone}</p>
      <p>Email: ${order.email}</p>
      <p>Сумма: ${order.totalPrice}</p>
      <p>Список товаров:</p>
      <ul>
        ${order.orderItems
          .map((item) => `<li>${item.pizzaItem.name}</li>`)
          .join("")}
      </ul>
      <p>Спасибо за ваш заказ!</p>
      <p>Pizza Shop</p>
      `,
  });

  return c.json(
    {
      orderId: order.id,
      totalPrice: parseFloat(order.totalPrice.toString()),
    },
    200
  );
});

app.use("/*", cors());

// Swagger JSON
app.doc("/doc", {
  openapi: "3.1.0",
  info: {
    title: "Pizza Shop API",
    version: "1.0.0",
  },
  servers: [{ url: "/" }],
});

app.get("/swagger", swaggerUI({ url: "/api/doc" }));
app.get("/", (c) => c.redirect("/api/swagger"));

export const GET = handle(app);
export const POST = handle(app);
