"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X, Phone, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface ServiceOrderModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
  servicePrice: string
}

export function ServiceOrderModal({ isOpen, onClose, serviceName, servicePrice }: ServiceOrderModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  })

  const { t } = useLanguage()

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log("Заказ услуги:", { serviceName, servicePrice, ...formData })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
        <CardHeader className="relative bg-gradient-to-r from-navy-900 to-navy-800 text-white rounded-t-lg">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
          <div className="pr-12">
            <CardTitle className="text-2xl font-bold">{t("modal.title")}</CardTitle>
            <CardDescription className="text-slate-300">{t("modal.subtitle")}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-navy-900">{serviceName}</h3>
                <p className="text-sm text-slate-600">
                  {t("modal.cost")}: {servicePrice}
                </p>
              </div>
              <Badge className="bg-gold-600 text-white">{t("modal.popular")}</Badge>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="modal-name" className="text-sm font-medium text-navy-900">
                  {t("contact.form.name")} *
                </label>
                <Input
                  id="modal-name"
                  placeholder={t("contact.form.name")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-gold-300 focus:border-gold-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="modal-phone" className="text-sm font-medium text-navy-900">
                  {t("contact.form.phone")} *
                </label>
                <Input
                  id="modal-phone"
                  placeholder="+996 (555) 123-456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="border-gold-300 focus:border-gold-500"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="modal-email" className="text-sm font-medium text-navy-900">
                  Email
                </label>
                <Input
                  id="modal-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-gold-300 focus:border-gold-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="modal-company" className="text-sm font-medium text-navy-900">
                  {t("modal.company")}
                </label>
                <Input
                  id="modal-company"
                  placeholder={t("modal.company.placeholder")}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="border-gold-300 focus:border-gold-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="modal-message" className="text-sm font-medium text-navy-900">
                {t("modal.task")} *
              </label>
              <Textarea
                id="modal-message"
                placeholder={t("modal.task.placeholder")}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[100px] border-gold-300 focus:border-gold-500"
              />
            </div>

            <div className="bg-slate-50 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-navy-900 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                {t("modal.benefits")}:
              </h4>
              <div className="grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gold-600" />
                  <span>{t("modal.benefit.reply")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gold-600" />
                  <span>{t("modal.benefit.consultation")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gold-600" />
                  <span>{t("modal.benefit.plan")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-gold-600" />
                  <span>{t("modal.benefit.manager")}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t("modal.order")}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-6 border-gold-300 text-gold-600 hover:bg-gold-50 rounded-full bg-transparent"
              >
                {t("modal.cancel")}
              </Button>
            </div>
          </form>

          <div className="text-center text-xs text-slate-500">
            {t("modal.agreement")}
            <a href="#" className="text-gold-600 hover:underline">
              политикой конфиденциальности
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
