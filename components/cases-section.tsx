"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function CasesSection() {
  const { t } = useLanguage()

  const cases = [
    {
      title: t("cases.case1.title"),
      client: t("cases.case1.client"),
      result: t("cases.case1.result"),
      duration: t("cases.case1.duration"),
      description: t("cases.case1.description"),
      tags: [t("cases.case1.tag1"), t("cases.case1.tag2"), t("cases.case1.tag3")],
    },
    {
      title: t("cases.case2.title"),
      client: t("cases.case2.client"),
      result: t("cases.case2.result"),
      duration: t("cases.case2.duration"),
      description: t("cases.case2.description"),
      tags: [t("cases.case2.tag1"), t("cases.case2.tag2"), t("cases.case2.tag3")],
    },
    {
      title: t("cases.case3.title"),
      client: t("cases.case3.client"),
      result: t("cases.case3.result"),
      duration: t("cases.case3.duration"),
      description: t("cases.case3.description"),
      tags: [t("cases.case3.tag1"), t("cases.case3.tag2"), t("cases.case3.tag3")],
    },
  ]

  return (
    <section id="cases" className="w-full py-20 md:py-32 bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
          <div className="space-y-4">
            <Badge className="bg-gold-600/20 text-gold-300 border-gold-400/30 px-4 py-2">{t("cases.badge")}</Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">{t("cases.title")}</h2>
            <p className="max-w-[900px] text-xl text-slate-300 leading-relaxed">{t("cases.subtitle")}</p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {cases.map((case_, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-gold-400/30 hover:bg-white/20 transition-all duration-500 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-600 text-white">{case_.result}</Badge>
                  <span className="text-xs text-slate-300">{case_.duration}</span>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors duration-300">
                  {case_.title}
                </CardTitle>
                <CardDescription className="text-gold-300 font-medium">{case_.client}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 leading-relaxed">{case_.description}</p>
                <div className="flex flex-wrap gap-2">
                  {case_.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="border-gold-400/50 text-gold-300 text-xs">
                      {tag}
                    </Badge>
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
