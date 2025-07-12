"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle, Zap } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <Badge className="bg-gold-600/20 text-gold-300 border-gold-400/30 px-4 py-2">{t("contact.badge")}</Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{t("contact.title")}</h2>
              <p className="text-xl text-slate-300 leading-relaxed">{t("contact.subtitle")}</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="relative">
                  <Phone className="h-6 w-6 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                  <div className="absolute -inset-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="font-semibold text-white">{t("contact.hotline")}</div>
                  <div className="text-gold-300 text-lg">+996 (555) 123-456</div>
                  <div className="text-sm text-slate-400">{t("contact.24_7")}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="relative">
                  <Mail className="h-6 w-6 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                  <div className="absolute -inset-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gold-300">info@dominantjustice.kg</div>
                  <div className="text-sm text-slate-400">{t("contact.reply")}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="relative">
                  <MapPin className="h-6 w-6 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                  <div className="absolute -inset-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="font-semibold text-white">{t("contact.office")}</div>
                  <div className="text-gold-300">{t("contact.address")}</div>
                  <div className="text-sm text-slate-400">{t("contact.building")}</div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 rounded-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Telegram
              </Button>
            </div>
          </div>
          <Card className="bg-white/10 backdrop-blur-md border-gold-400/30 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">{t("contact.consultation.title")}</CardTitle>
              <CardDescription className="text-slate-300">{t("contact.consultation.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="name"
                    placeholder={t("contact.form.name")}
                    className="bg-white/20 border-gold-400/30 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white">
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    id="phone"
                    placeholder="+996 (555) 123-456"
                    className="bg-white/20 border-gold-400/30 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white">
                  {t("contact.form.email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/20 border-gold-400/30 text-white placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-white">
                  {t("contact.form.service")}
                </label>
                <select className="w-full px-3 py-2 bg-white/20 border border-gold-400/30 rounded-md text-white">
                  <option value="">{t("contact.form.service.select")}</option>
                  <option value="corporate">{t("contact.form.service.corporate")}</option>
                  <option value="tax">{t("contact.form.service.tax")}</option>
                  <option value="court">{t("contact.form.service.court")}</option>
                  <option value="labor">{t("contact.form.service.labor")}</option>
                  <option value="accounting">{t("contact.form.service.accounting")}</option>
                  <option value="other">{t("contact.form.service.other")}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("contact.form.message.placeholder")}
                  className="min-h-[120px] bg-white/20 border-gold-400/30 text-white placeholder:text-slate-400"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="agreement" className="rounded" />
                <label htmlFor="agreement" className="text-xs text-slate-300">
                  {t("contact.form.agreement")}{" "}
                  <Link href="#" className="text-gold-300 hover:underline">
                    политикой конфиденциальности
                  </Link>
                </label>
              </div>
              <Button className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Zap className="mr-2 h-5 w-5" />
                {t("contact.form.submit")}
              </Button>
              <p className="text-xs text-slate-400 text-center">{t("contact.form.note")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
