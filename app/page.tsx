"use client"

import { useState } from "react"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { CasesSection } from "@/components/cases-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ServiceOrderModal } from "@/components/service-order-modal"

export default function DominantJusticeLanding() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState({ name: "", price: "" })

  const handleOrderService = (serviceName: string, servicePrice: string) => {
    setSelectedService({ name: serviceName, price: servicePrice })
    setModalOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ServicesSection onOrderService={handleOrderService} />
        <AboutSection />
        <TeamSection />
        <CasesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <ServiceOrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={selectedService.name}
        servicePrice={selectedService.price}
      />
    </div>
  )
}
