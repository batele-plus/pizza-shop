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
    <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Mobile: Image first, Desktop: Content first */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <Image
                src="https://pngimg.com/uploads/pizza/pizza_PNG7151.png"
                alt="Вкусная пицца"
                width={300}
                height={300}
                className="w-64 sm:w-80 md:w-96 aspect-square object-cover rounded-full shadow-2xl"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                Горячая и свежая!
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1 flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Настоящая итальянская
              <span className="text-red-600 block">пицца с доставкой</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg">
              Почувствуйте вкус Италии с нашей пиццей ручной работы из лучших ингредиентов. Быстрая доставка,
              гарантированно свежая!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
                onClick={onOrderNowClick}
              >
                Заказать сейчас
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg bg-transparent"
                onClick={onViewMenuClick}
              >
                Посмотреть меню
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <span>1000+ довольных клиентов</span>
              <div className="h-4 w-px bg-gray-300" />
              <span>Доставка за 30 мин</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
