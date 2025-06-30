"use client";

import { useQuery } from "@tanstack/react-query";
import type { ItemsQuery, ItemsResponse } from "@/lib/validations/api";

async function fetchPizzaItems(query: ItemsQuery): Promise<ItemsResponse> {
  const searchParams = new URLSearchParams();

  if (query.limit) searchParams.set("limit", query.limit.toString());
  if (query.offset) searchParams.set("offset", query.offset.toString());
  if (query.popular !== null && query.popular !== undefined) {
    searchParams.set("popular", query.popular.toString());
  }

  console.log("Fetching with params:", searchParams.toString());

  const response = await fetch(`/api/items?${searchParams.toString()}`);

  if (!response.ok) {
    const errorData = await response.json();
    console.error("API Error:", errorData);
    throw new Error(`Failed to fetch pizza items: ${response.status}`);
  }

  const data = await response.json();
  console.log("API Response:", data);
  return data;
}

export function usePizzaItems(
  query: ItemsQuery = {
    limit: null,
    offset: null,
    popular: null,
  }
) {
  return useQuery({
    queryKey: ["pizza-items", query],
    queryFn: () => fetchPizzaItems(query),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
