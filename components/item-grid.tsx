"use client"

import { ItemCard } from "./item-card"
import { usePizzaItems } from "@/hooks/use-pizza-items"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ItemGridProps {
  popular?: boolean
  limit: number
  offset?: number
  title?: string
}

export function ItemGrid({ popular, limit, offset, title }: ItemGridProps) {
  const { data, isLoading, error } = usePizzaItems({
    popular,
    limit,
    offset,
  })

  if (isLoading) {
    return (
      <div className="space-y-4">
        {title && <h2 className="text-2xl font-bold text-center">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: limit }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>Не удалось загрузить пиццы. Пожалуйста, попробуйте позже.</AlertDescription>
      </Alert>
    )
  }

  if (!data?.items?.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Пиццы не найдены.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {title && <h2 className="text-2xl font-bold text-center">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
