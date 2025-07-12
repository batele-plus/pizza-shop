import { count, eq, inArray, sql } from "drizzle-orm";
import { db } from "../db";
import { orderItems, orders, pizzaItems } from "../db/schema";
import { PlaceOrderDto } from "../validations/api";

export async function placeOrder(placeOrderDto: PlaceOrderDto) {
  const items = await db
    .select({
      id: pizzaItems.id,
      price: pizzaItems.price,
    })
    .from(pizzaItems)
    .where(
      inArray(
        pizzaItems.id,
        placeOrderDto.items.map((item) => item.itemId)
      )
    );

  const totalPrice = items
    .reduce((total, item) => {
      const quantity =
        placeOrderDto.items.find((i) => i.itemId === item.id)?.quantity ?? 1;
      const price = parseFloat(item.price.toString());

      return total + price * quantity;
    }, 0)
    .toString();

  const [{ id: orderId }] = await db
    .insert(orders)
    .values([
      {
        fullName: placeOrderDto.fullName,
        phone: placeOrderDto.phone,
        email: placeOrderDto.email,
        totalPrice,
      },
    ])
    .returning({ id: orders.id });

  await db.insert(orderItems).values(
    placeOrderDto.items.map((item) => {
      return {
        orderId: orderId,
        itemId: item.itemId,
        quantity: item.quantity,
      };
    })
  );

  const order = await db.query.orders.findFirst({
    where: eq(orders.id, orderId),
    with: {
      orderItems: {
        with: {
          pizzaItem: true,
        },
      },
    },
  });

  return order;
}
