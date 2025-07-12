"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Star } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function TeamSection() {
  const { t } = useLanguage()

  const team = [
    {
      name: t("team.member1.name"),
      position: t("team.member1.position"),
      education: t("team.member1.education"),
      specialization: t("team.member1.specialization"),
      image: "/placeholder.svg?height=300&width=300&text=Алмаз+Токтогулов",
      achievements: [t("team.member1.achievement1"), t("team.member1.achievement2"), t("team.member1.achievement3")],
    },
    {
      name: t("team.member2.name"),
      position: t("team.member2.position"),
      education: t("team.member2.education"),
      specialization: t("team.member2.specialization"),
      image: "/placeholder.svg?height=300&width=300&text=Айгуль+Мамбетова",
      achievements: [t("team.member2.achievement1"), t("team.member2.achievement2"), t("team.member2.achievement3")],
    },
    {
      name: t("team.member3.name"),
      position: t("team.member3.position"),
      education: t("team.member3.education"),
      specialization: t("team.member3.specialization"),
      image: "/placeholder.svg?height=300&width=300&text=Бакыт+Жумабеков",
      achievements: [t("team.member3.achievement1"), t("team.member3.achievement2"), t("team.member3.achievement3")],
    },
  ]

  return (
    <section id="team" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
          <div className="space-y-4">
            <Badge className="bg-gold-100 text-gold-800 border-gold-300 px-4 py-2">{t("team.badge")}</Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
              {t("team.title")}
            </h2>
            <p className="max-w-[900px] text-xl text-slate-600 leading-relaxed">{t("team.subtitle")}</p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 border-gold-200 hover:border-gold-400 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  width="300"
                  height="300"
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-sm font-medium">{member.specialization}</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-navy-900">{member.name}</CardTitle>
                <CardDescription className="text-gold-600 font-semibold">{member.position}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-gold-600" />
                    <span className="text-sm text-slate-600">{member.education}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {member.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="h-3 w-3 text-gold-500" />
                      <span className="text-xs text-slate-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
