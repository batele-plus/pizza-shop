"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Crown, Video, Phone, Clock } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 xl:py-52 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Luxury+Law+Office+Background"
          alt="Background"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gold-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>

      <div className="container relative px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6 text-white animate-fade-in">
            <div className="space-y-4">
              <Badge className="w-fit bg-gold-600/20 text-gold-300 border-gold-400/30 px-4 py-2 text-sm font-medium">
                {t("hero.badge")}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none bg-gradient-to-r from-white via-gold-100 to-gold-300 bg-clip-text text-transparent">
                {t("hero.title")}
              </h1>
              <p className="max-w-[700px] text-xl text-slate-300 leading-relaxed">{t("hero.subtitle")}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gold-400" />
                  <span>{t("hero.license")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gold-400" />
                  <span>{t("hero.cases")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gold-400" />
                  <span>{t("hero.success")}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:scale-105 animate-glow"
              >
                <Crown className="mr-2 h-5 w-5" />
                {t("hero.consultation")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold-400 text-gold-300 hover:bg-gold-400 hover:text-navy-900 bg-transparent font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Video className="mr-2 h-5 w-5" />
                {t("hero.video")}
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-400" />
                <span>{t("hero.phone")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gold-400" />
                <span>{t("hero.support")}</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in delay-300">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
            <Image
              src="/placeholder.svg?height=500&width=600&text=Premium+Law+Office+Bishkek"
              width="600"
              height="500"
              alt="Премиальный офис в Бишкеке"
              className="relative mx-auto rounded-3xl object-cover shadow-2xl border border-gold-200/20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
