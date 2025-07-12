"use client"

import { Hero } from "@/components/hero"
import { ItemGrid } from "@/components/item-grid"
import { OrderForm } from "@/components/order-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen">
      <Hero
        onOrderNowClick={() => scrollToSection("order-form")}
        onViewMenuClick={() => scrollToSection("popular-menu")}
      />

      <section id="popular-menu" className="py-12">
        <div className="container mx-auto px-4">
          <ItemGrid popular={true} limit={6} title="Самые популярные пиццы" />
        </div>
      </section>

      <OrderForm />
      <Footer />
    </main>
  )
}
