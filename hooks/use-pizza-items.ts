"use client";

import { useQuery } from "@tanstack/react-query";
import type { ItemsResponse } from "@/lib/validations/api";
import axios from "axios";

interface FetchPizzaItemsFilter {
  popular?: boolean | null;
  limit?: number;
  offset?: number;
}

async function fetchPizzaItems(
  query: FetchPizzaItemsFilter,
  { signal }: { signal: AbortSignal }
): Promise<ItemsResponse> {
  const { data } = await axios.get<ItemsResponse>("/api/items", {
    params: query,
    signal,
  });

  return data;
}

export function usePizzaItems(query: FetchPizzaItemsFilter = {}) {
  return useQuery({
    queryKey: ["pizza-items", query],
    queryFn: ({ signal }) => fetchPizzaItems(query, { signal }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
