"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="px-4 lg:px-6 h-20 flex items-center border-b border-gold-200 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 shadow-lg">
      <Link href="/" className="flex items-center justify-center group">
        <div className="relative">
          <Image
            src="/logo-2.svg"
            alt="DOMINANT JUSTICE"
            width={180}
            height={60}
            className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <nav className="ml-auto flex gap-6 sm:gap-8 items-center">
        <Link
          href="#services"
          className="text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors duration-300 relative group"
        >
          {t("nav.services")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors duration-300 relative group"
        >
          {t("nav.about")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#team"
          className="text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors duration-300 relative group"
        >
          {t("nav.team")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#cases"
          className="text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors duration-300 relative group"
        >
          {t("nav.cases")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors duration-300 relative group"
        >
          {t("nav.contact")}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <LanguageSwitcher />
        <Button className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <MessageCircle className="mr-2 h-4 w-4" />
          {t("nav.consultation")}
        </Button>
      </nav>
    </header>
  )
}
