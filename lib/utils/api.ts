import type { PizzaItem, ItemsQuery } from "@/types/api"

export function validateQueryParams(searchParams: URLSearchParams): ItemsQuery {
  const limit = searchParams.get("limit")
  const offset = searchParams.get("offset")
  const popular = searchParams.get("popular")

  return {
    limit: limit ? Math.min(Math.max(Number.parseInt(limit, 10) || 10, 1), 100) : 10,
    offset: offset ? Math.max(Number.parseInt(offset, 10) || 0, 0) : 0,
    popular: popular === "true" ? true : popular === "false" ? false : null,
  }
}

export function filterItems(items: PizzaItem[], query: ItemsQuery): PizzaItem[] {
  let filteredItems = [...items]

  // Filter by popular status
  if (query.popular !== null) {
    filteredItems = filteredItems.filter((item) => (query.popular ? item.popular === true : item.popular !== true))
  }

  return filteredItems
}

export function paginateItems(
  items: PizzaItem[],
  query: ItemsQuery,
): {
  paginatedItems: PizzaItem[]
  hasMore: boolean
} {
  const startIndex = query.offset || 0
  const endIndex = startIndex + (query.limit || 10)

  const paginatedItems = items.slice(startIndex, endIndex)
  const hasMore = endIndex < items.length

  return { paginatedItems, hasMore }
}
