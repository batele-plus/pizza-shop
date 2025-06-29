import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { OrderItem } from "@/lib/validations/forms"
import type { PizzaItemType } from "@/lib/validations/api"

interface CartState {
  items: OrderItem[]
  addItem: (pizza: PizzaItemType) => void
  removeItem: (pizzaId: string) => void
  clearCart: () => void
  getTotalPrice: () => number
  getItemQuantity: (pizzaId: string) => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (pizza) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === pizza.id)
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item,
              ),
            }
          }
          return {
            items: [
              ...state.items,
              {
                id: pizza.id,
                name: pizza.name,
                price: pizza.price,
                quantity: 1,
              },
            ],
          }
        }),

      removeItem: (pizzaId) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === pizzaId)
          if (existingItem && existingItem.quantity > 1) {
            return {
              items: state.items.map((item) => (item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item)),
            }
          }
          return {
            items: state.items.filter((item) => item.id !== pizzaId),
          }
        }),

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      getItemQuantity: (pizzaId) => {
        const { items } = get()
        const item = items.find((item) => item.id === pizzaId)
        return item ? item.quantity : 0
      },
    }),
    {
      name: "pizza-cart",
    },
  ),
)
