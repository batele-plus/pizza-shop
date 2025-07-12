"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-navy-900 border-t border-gold-400/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo-2.svg" alt="DOMINANT JUSTICE" width={120} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                WhatsApp
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Telegram
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t("footer.services.title")}</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                {t("footer.services.corporate")}
              </Link>
              <Link href="#" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                {t("footer.services.tax")}
              </Link>
              <Link href="#" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                {t("footer.services.court")}
              </Link>
              <Link href="#" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                {t("footer.services.accounting")}
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t("footer.company.title")}</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                {t("footer.company.about")}
              </Link>
              <Link href="#team" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                {t("footer.company.team")}
              </Link>
              <Link href="#cases" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                {t("footer.company.cases")}
              </Link>
              <Link href="#" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                {t("footer.company.career")}
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t("footer.contacts.title")}</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-400" />
                <span className="text-gold-400 font-semibold">+996 (555) 123-456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold-400" />
                <span>info@dominantjustice.kg</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gold-400 mt-0.5" />
                <div>
                  <div>г. Бишкек, ул. Чуй 123</div>
                  <div>Бизнес-центр "Элит", 15 этаж</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gold-400/30 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">{t("footer.rights")}</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-slate-400 hover:text-gold-400 transition-colors duration-300">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="text-sm text-slate-400 hover:text-gold-400 transition-colors duration-300">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
