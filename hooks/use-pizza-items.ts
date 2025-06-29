"use client"

import { useQuery } from "@tanstack/react-query"
import type { ItemsQuery, ItemsResponse } from "@/lib/validations/api"

async function fetchPizzaItems(query: ItemsQuery): Promise<ItemsResponse> {
  const searchParams = new URLSearchParams()

  if (query.limit) searchParams.set("limit", query.limit.toString())
  if (query.offset) searchParams.set("offset", query.offset.toString())
  if (query.popular !== null) searchParams.set("popular", query.popular.toString())

  const response = await fetch(`/api/items?${searchParams.toString()}`)

  if (!response.ok) {
    throw new Error("Failed to fetch pizza items")
  }

  return response.json()
}

export function usePizzaItems(query: ItemsQuery = {}) {
  return useQuery({
    queryKey: ["pizza-items", query],
    queryFn: () => fetchPizzaItems(query),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}
