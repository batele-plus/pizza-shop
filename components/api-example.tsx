"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"
import { usePizzaItems } from "@/hooks/use-pizza-items"

export function ApiExample() {
  const [limit, setLimit] = useState(6)
  const [offset, setOffset] = useState(0)
  const [popular, setPopular] = useState<boolean | null>(null)

  const { items, loading, error, total, hasMore, refetch } = usePizzaItems({
    limit,
    offset,
    popular,
  })

  const handleNextPage = () => {
    setOffset((prev) => prev + limit)
  }

  const handlePrevPage = () => {
    setOffset((prev) => Math.max(0, prev - limit))
  }

  const handleFilterChange = (newPopular: boolean | null) => {
    setPopular(newPopular)
    setOffset(0) // Reset to first page when filtering
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>API Demo - Pizza Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="limit">Items per page</Label>
              <Input
                id="limit"
                type="number"
                min="1"
                max="20"
                value={limit}
                onChange={(e) => setLimit(Number.parseInt(e.target.value) || 6)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Filter by popularity</Label>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={popular === null ? "default" : "outline"}
                  onClick={() => handleFilterChange(null)}
                >
                  All
                </Button>
                <Button
                  size="sm"
                  variant={popular === true ? "default" : "outline"}
                  onClick={() => handleFilterChange(true)}
                >
                  Popular
                </Button>
                <Button
                  size="sm"
                  variant={popular === false ? "default" : "outline"}
                  onClick={() => handleFilterChange(false)}
                >
                  Regular
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <Button onClick={refetch} disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Refresh
              </Button>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            Showing {offset + 1}-{Math.min(offset + limit, total)} of {total} items
          </div>
        </CardContent>
      </Card>

      {error && (
        <Card className="mb-8 border-red-200">
          <CardContent className="pt-6">
            <div className="text-red-600">Error: {error}</div>
          </CardContent>
        </Card>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Loading pizza items...</span>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{item.name}</span>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-red-600 font-bold">${item.price}</span>
                      {item.popular && <Badge className="bg-red-600">Popular</Badge>}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Button onClick={handlePrevPage} disabled={offset === 0} variant="outline">
              Previous
            </Button>

            <span className="text-sm text-gray-600">Page {Math.floor(offset / limit) + 1}</span>

            <Button onClick={handleNextPage} disabled={!hasMore} variant="outline">
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
