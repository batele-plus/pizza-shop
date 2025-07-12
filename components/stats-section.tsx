"use client"

import { Award, Users2, Target, Clock, Briefcase, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    { number: "1,000+", label: t("stats.cases"), icon: Award, color: "text-emerald-600" },
    { number: "100+", label: t("stats.clients"), icon: Users2, color: "text-blue-600" },
    { number: "100%", label: t("stats.success"), icon: Target, color: "text-purple-600" },
    { number: "24/7", label: t("stats.support"), icon: Clock, color: "text-red-600" },
    { number: "50+", label: t("stats.services"), icon: Briefcase, color: "text-indigo-600" },
    { number: "2013", label: t("stats.founded"), icon: Calendar, color: "text-gold-600" },
  ]

  return (
    <section className="w-full py-16 bg-gradient-to-r from-gold-50 to-gold-100 border-y border-gold-200">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <stat.icon
                  className={`h-12 w-12 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                />
                <div className="absolute -inset-2 bg-current rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl font-bold text-navy-900">{stat.number}</div>
              <div className="text-sm font-medium text-navy-600 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
