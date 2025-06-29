"use client"

import { useQuery } from "@tanstack/react-query"
import type { ItemsQuery, ItemsResponse } from "@/lib/validations/api"
import { itemsResponseSchema } from "@/lib/validations/api"

async function fetchPizzaItems(query: ItemsQuery): Promise<ItemsResponse> {
  const params = new URLSearchParams()

  if (query.limit !== undefined) {
    params.append("limit", query.limit.toString())
  }
  if (query.offset !== undefined) {
    params.append("offset", query.offset.toString())
  }
  if (query.popular !== null && query.popular !== undefined) {
    params.append("popular", query.popular.toString())
  }

  const response = await fetch(`/api/items?${params.toString()}`)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return itemsResponseSchema.parse(data)
}

export function usePizzaItems(query: ItemsQuery = {}) {
  return useQuery({
    queryKey: ["pizza-items", query],
    queryFn: () => fetchPizzaItems(query),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}
