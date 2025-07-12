"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Scale, TrendingUp, Clock, Shield } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const advantages = [
    {
      icon: Scale,
      title: t("about.professional"),
      description: t("about.professional.desc"),
    },
    {
      icon: TrendingUp,
      title: t("about.results"),
      description: t("about.results.desc"),
    },
    {
      icon: Clock,
      title: t("about.speed"),
      description: t("about.speed.desc"),
    },
    {
      icon: Shield,
      title: t("about.confidentiality"),
      description: t("about.confidentiality.desc"),
    },
  ]

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gold-100 text-gold-800 border-gold-300 px-4 py-2">{t("about.badge")}</Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
                {t("about.title")}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">{t("about.description")}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {advantages.map((advantage, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                      <advantage.icon className="h-5 w-5 text-gold-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">{advantage.title}</div>
                      <div className="text-sm text-slate-600">{advantage.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold px-6 py-3 rounded-full">
                <Download className="mr-2 h-4 w-4" />
                {t("about.download")}
              </Button>
              <Button
                variant="outline"
                className="border-gold-300 text-gold-600 hover:bg-gold-50 px-6 py-3 rounded-full bg-transparent"
              >
                <FileText className="mr-2 h-4 w-4" />
                {t("about.achievements")}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-3xl blur-2xl opacity-20 transform -rotate-6"></div>
            <Image
              src="/placeholder.svg?height=600&width=500&text=About+DOMINANT+JUSTICE"
              width="500"
              height="600"
              alt="О компании DOMINANT JUSTICE"
              className="relative mx-auto rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
