"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FaqSection() {
  const { t } = useLanguage()

  const faq = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
  ]

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
          <div className="space-y-4">
            <Badge className="bg-gold-100 text-gold-800 border-gold-300 px-4 py-2">{t("faq.badge")}</Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
              {t("faq.title")}
            </h2>
            <p className="max-w-[900px] text-xl text-slate-600 leading-relaxed">{t("faq.subtitle")}</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <Card key={index} className="border-2 border-gold-200 hover:border-gold-400 transition-colors duration-300">
              <CardHeader className="cursor-pointer">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-navy-900 text-left">{item.question}</CardTitle>
                  <ChevronDown className="h-5 w-5 text-gold-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
