import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { getAllItemsRoute } from "./routers/get-all-items-route";
import { getPizzaItems } from "@/lib/api/pizza-items";

// export const runtime = "edge";
export const runtime = "nodejs";

const app = new OpenAPIHono().basePath("/api");

app.openapi(getAllItemsRoute, async (c) => {
  const query = c.req.valid("query");

  console.log(query);

  const result = await getPizzaItems(query);

  return c.json(result, 200);
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
