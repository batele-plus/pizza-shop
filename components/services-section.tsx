"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Eye, Building2, Shield, Users, Calculator, BookOpen, Gavel, Globe, FileCheck } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface ServicesSectionProps {
  onOrderService: (serviceName: string, servicePrice: string) => void
}

export function ServicesSection({ onOrderService }: ServicesSectionProps) {
  const { t } = useLanguage()

  const services = [
    {
      icon: Building2,
      title: t("services.corporate"),
      description: t("services.corporate.desc"),
      price: "От 15,000 сом",
      duration: "3-5 дней",
      features: [
        t("services.corporate.features.registration"),
        t("services.corporate.features.support"),
        t("services.corporate.features.guarantee"),
        t("services.corporate.features.address"),
      ],
      popular: true,
    },
    {
      icon: Shield,
      title: t("services.antitrust"),
      description: t("services.antitrust.desc"),
      price: "От 50,000 сом",
      duration: "1-3 месяца",
      features: [
        t("services.antitrust.features.analysis"),
        t("services.antitrust.features.protection"),
        t("services.antitrust.features.experience"),
        t("services.antitrust.features.deals"),
      ],
    },
    {
      icon: Users,
      title: t("services.labor"),
      description: t("services.labor.desc"),
      price: "От 8,000 сом",
      duration: "1-2 недели",
      features: [
        t("services.labor.features.speed"),
        t("services.labor.features.lawyers"),
        t("services.labor.features.confidentiality"),
        t("services.labor.features.representation"),
      ],
    },
    {
      icon: Calculator,
      title: t("services.tax"),
      description: t("services.tax.desc"),
      price: "От 25,000 сом",
      duration: "Постоянно",
      features: [
        t("services.tax.features.savings"),
        t("services.tax.features.schemes"),
        t("services.tax.features.support"),
        t("services.tax.features.protection"),
      ],
    },
    {
      icon: BookOpen,
      title: t("services.accounting"),
      description: t("services.accounting.desc"),
      price: "От 12,000 сом",
      duration: "Ежемесячно",
      features: [
        t("services.accounting.features.full"),
        t("services.accounting.features.reporting"),
        t("services.accounting.features.optimization"),
        t("services.accounting.features.support"),
      ],
    },
    {
      icon: Gavel,
      title: t("services.court"),
      description: t("services.court.desc"),
      price: "От 30,000 сом",
      duration: "3-12 месяцев",
      features: [
        t("services.court.features.representatives"),
        t("services.court.features.wins"),
        t("services.court.features.planning"),
        t("services.court.features.execution"),
      ],
    },
    {
      icon: Globe,
      title: t("services.international"),
      description: t("services.international.desc"),
      price: "От 40,000 сом",
      duration: "1-6 месяцев",
      features: [
        t("services.international.features.knowledge"),
        t("services.international.features.standards"),
        t("services.international.features.currency"),
        t("services.international.features.customs"),
      ],
    },
    {
      icon: FileCheck,
      title: t("services.contract"),
      description: t("services.contract.desc"),
      price: "От 5,000 сом",
      duration: "1-7 дней",
      features: [
        t("services.contract.features.types"),
        t("services.contract.features.expertise"),
        t("services.contract.features.protection"),
        t("services.contract.features.support"),
      ],
    },
  ]

  return (
    <section id="services" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
          <div className="space-y-4">
            <Badge className="bg-gold-100 text-gold-800 border-gold-300 px-4 py-2">{t("services.badge")}</Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
              {t("services.title")}
            </h2>
            <p className="max-w-[900px] text-xl text-slate-600 leading-relaxed">{t("services.subtitle")}</p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                service.popular
                  ? "border-gold-400 bg-gradient-to-br from-gold-50 to-white"
                  : "border-gold-200 hover:border-gold-400"
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-center py-2 text-sm font-semibold">
                  🔥 ПОПУЛЯРНАЯ УСЛУГА
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className={`relative ${service.popular ? "pt-12" : ""}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <service.icon className="h-12 w-12 text-navy-700 group-hover:text-gold-600 transition-colors duration-300" />
                    <div className="absolute -inset-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-gold-600 text-white font-semibold mb-1">{service.price}</Badge>
                    <div className="text-xs text-slate-500">{service.duration}</div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-navy-900 group-hover:text-gold-700 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-gold-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => onOrderService(service.title, service.price)}
                    className="flex-1 bg-gradient-to-r from-navy-700 to-navy-600 hover:from-navy-800 hover:to-navy-700 text-white font-semibold rounded-full transition-all duration-300"
                  >
                    {t("services.order")}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gold-300 text-gold-600 hover:bg-gold-50 rounded-full bg-transparent"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
