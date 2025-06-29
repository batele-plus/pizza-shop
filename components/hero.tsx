"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  onOrderNowClick: () => void
  onViewMenuClick: () => void
}

export function Hero({ onOrderNowClick, onViewMenuClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Authentic Italian Pizza
              <span className="block text-yellow-300">Delivered Fresh</span>
            </h1>
            <p className="text-xl lg:text-2xl text-red-100">
              Hand-tossed dough, premium ingredients, and traditional recipes passed down through generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                onClick={onOrderNowClick}
              >
                Order Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                onClick={onViewMenuClick}
              >
                View Menu
              </Button>
            </div>
            <div className="flex items-center gap-4 text-yellow-300">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-lg">4.9/5 from 2,500+ reviews</span>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Delicious Pizza"
              width={400}
              height={400}
              className="rounded-full shadow-2xl w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            />
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-yellow-500 text-black px-3 py-1 lg:px-4 lg:py-2 rounded-full font-bold text-sm lg:text-lg">
              30 min delivery!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
