export interface PizzaItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  popular?: boolean
}

export interface ItemsQuery {
  limit?: number
  offset?: number
  popular?: boolean | null
}

export interface ItemsResponse {
  items: PizzaItem[]
  total: number
  limit: number
  offset: number
  hasMore: boolean
}

export interface ApiError {
  error: string
  message: string
}
