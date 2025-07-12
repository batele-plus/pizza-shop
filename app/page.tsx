"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Building2,
  Users,
  FileText,
  Calculator,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Shield,
  Award,
  Globe,
  Crown,
  Target,
  Users2,
  Calendar,
  Clock,
  MessageCircle,
  Download,
  Eye,
  Zap,
  Gavel,
  Building,
  GraduationCap,
  Video,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useState } from "react"

export default function DominantJusticeLanding() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("corporate")

  const services = [
    {
      icon: Building2,
      title: "Корпоративное право",
      description: "Регистрация ОсОО, ЗАО, создание холдингов, реорганизация компаний",
      price: "От 15,000 сом",
      duration: "3-5 дней",
      features: ["Регистрация за 24 часа", "Полное сопровождение", "Гарантия результата", "Юридический адрес"],
      popular: true,
    },
    {
      icon: Shield,
      title: "Антимонопольное право",
      description: "Защита от недобросовестной конкуренции, согласование сделок в ГКЭР КР",
      price: "От 50,000 сом",
      duration: "1-3 месяца",
      features: ["Экспертный анализ", "Защита в ГКЭР", "Международный опыт", "Сопровождение сделок"],
    },
    {
      icon: Users,
      title: "Трудовое право",
      description: "Трудовые споры, кадровый аудит, составление трудовых договоров",
      price: "От 8,000 сом",
      duration: "1-2 недели",
      features: ["Быстрое решение", "Опытные юристы", "100% конфиденциальность", "Судебное представительство"],
    },
    {
      icon: Calculator,
      title: "Налоговое планирование",
      description: "Оптимизация налогов, налоговые споры, сопровождение проверок ГНС КР",
      price: "От 25,000 сом",
      duration: "Постоянно",
      features: ["Экономия до 40%", "Легальные схемы", "Постоянная поддержка", "Защита от доначислений"],
    },
    {
      icon: Gavel,
      title: "Судебное представительство",
      description: "Представительство в судах всех инстанций КР, арбитражные споры",
      price: "От 30,000 сом",
      duration: "3-12 месяцев",
      features: ["Опытные адвокаты", "Высокий % побед", "Стратегическое планирование", "Исполнение решений"],
    },
    {
      icon: Globe,
      title: "Международное право",
      description: "Внешнеэкономическая деятельность, международные контракты, ЕАЭС",
      price: "От 40,000 сом",
      duration: "1-6 месяцев",
      features: ["Знание ЕАЭС", "Международные стандарты", "Валютное законодательство", "Таможенное право"],
    },
  ]

  const stats = [
    { number: "15+", label: "Лет опыта", icon: Calendar, color: "text-gold-600" },
    { number: "2,500+", label: "Выигранных дел", icon: Award, color: "text-emerald-600" },
    { number: "500+", label: "Крупных клиентов", icon: Users2, color: "text-blue-600" },
    { number: "98.7%", label: "Успешных дел", icon: Target, color: "text-purple-600" },
    { number: "24/7", label: "Поддержка клиентов", icon: Clock, color: "text-red-600" },
    { number: "5", label: "Офисов в КР", icon: Building, color: "text-indigo-600" },
  ]

  const team = [
    {
      name: "Алмаз Токтогулов",
      position: "Управляющий партнер",
      education: "МГУ им. Ломоносова, Гарвард",
      experience: "20+ лет",
      specialization: "Корпоративное право, M&A",
      image: "/placeholder.svg?height=300&width=300&text=Алмаз+Токтогулов",
      achievements: ["Лучший юрист КР 2023", "Автор 50+ публикаций", "Член Коллегии адвокатов КР"],
    },
    {
      name: "Айгуль Мамбетова",
      position: "Партнер по налоговому праву",
      education: "КНУ им. Баласагына, LSE",
      experience: "15+ лет",
      specialization: "Налоговое планирование",
      image: "/placeholder.svg?height=300&width=300&text=Айгуль+Мамбетова",
      achievements: ["Экс-советник ГНС КР", "PhD в области налогов", "Спикер международных конференций"],
    },
    {
      name: "Бакыт Жумабеков",
      position: "Партнер по судебной практике",
      education: "КРСУ, Сорбонна",
      experience: "18+ лет",
      specialization: "Арбитражные споры",
      image: "/placeholder.svg?height=300&width=300&text=Бакыт+Жумабеков",
      achievements: ["95% выигранных дел", "Арбитр ИКСИД", "Заслуженный юрист КР"],
    },
  ]

  const cases = [
    {
      title: "Защита от доначисления 50 млн сом",
      client: "Крупная торговая сеть",
      result: "Полная отмена доначисления",
      duration: "8 месяцев",
      description: "Успешно защитили клиента от необоснованного доначисления НДС на сумму 50 млн сом",
      tags: ["Налоговое право", "ГНС КР", "Судебная защита"],
    },
    {
      title: "Сделка M&A на $25 млн",
      client: "Международная корпорация",
      result: "Успешное закрытие сделки",
      duration: "6 месяцев",
      description: "Полное юридическое сопровождение покупки крупного актива в горнодобывающей отрасли",
      tags: ["M&A", "Due Diligence", "Корпоративное право"],
    },
    {
      title: "Получение лицензии на банковскую деятельность",
      client: "Новый коммерческий банк",
      result: "Лицензия получена",
      duration: "12 месяцев",
      description: "Полное сопровождение процесса получения банковской лицензии от НБКР",
      tags: ["Банковское право", "Лицензирование", "НБКР"],
    },
  ]

  const licenses = [
    {
      title: "Лицензия на юридическую деятельность",
      number: "№ 001234",
      issuer: "Министерство юстиции КР",
      date: "2013-2028",
      image: "/placeholder.svg?height=200&width=300&text=Лицензия+МЮ+КР",
    },
    {
      title: "Членство в Коллегии адвокатов КР",
      number: "№ 567890",
      issuer: "Коллегия адвокатов КР",
      date: "Бессрочно",
      image: "/placeholder.svg?height=200&width=300&text=Коллегия+адвокатов",
    },
    {
      title: "Сертификат ISO 9001:2015",
      number: "№ ISO-2024-001",
      issuer: "Международная организация по стандартизации",
      date: "2024-2027",
      image: "/placeholder.svg?height=200&width=300&text=ISO+9001",
    },
  ]

  const faq = [
    {
      question: "Сколько стоят ваши услуги?",
      answer:
        "Стоимость зависит от сложности дела. Консультация - от 2,000 сом, регистрация ОсОО - от 15,000 сом, судебное представительство - от 30,000 сом. Точную стоимость определяем после анализа вашей ситуации.",
    },
    {
      question: "Как быстро вы можете зарегистрировать ОсОО?",
      answer:
        "Стандартная регистрация ОсОО занимает 3-5 рабочих дней. При срочной регистрации можем оформить за 1 день с доплатой за срочность.",
    },
    {
      question: "Работаете ли вы с иностранными компаниями?",
      answer:
        "Да, мы специализируемся на международном праве и имеем большой опыт работы с иностранными инвесторами, включая вопросы валютного законодательства и требований ЕАЭС.",
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer:
        "Мы гарантируем качество наших услуг и несем ответственность за результат. В случае нашей ошибки - полный возврат гонорара и возмещение ущерба в рамках страхования профессиональной ответственности.",
    },
    {
      question: "Можно ли получить консультацию онлайн?",
      answer:
        "Да, мы проводим онлайн-консультации через Zoom, WhatsApp или Telegram. Первичная консультация длится 30 минут и стоит 2,000 сом.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Premium Header */}
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
            Услуги
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors duration-300 relative group"
          >
            О нас
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#team"
            className="text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors duration-300 relative group"
          >
            Команда
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#cases"
            className="text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors duration-300 relative group"
          >
            Кейсы
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors duration-300 relative group"
          >
            Контакты
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <LanguageSwitcher />
          <Button className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <MessageCircle className="mr-2 h-4 w-4" />
            Консультация
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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
                    🏆 №1 в Кыргызской Республике • Лицензия МЮ КР
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none bg-gradient-to-r from-white via-gold-100 to-gold-300 bg-clip-text text-transparent">
                    Элитная юридическая защита в КР
                  </h1>
                  <p className="max-w-[700px] text-xl text-slate-300 leading-relaxed">
                    Ведущая юридическая фирма Кыргызстана. Защищаем интересы крупнейших компаний и состоятельных
                    клиентов. 98.7% выигранных дел за 15 лет работы.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-gold-400" />
                      <span>Лицензия МЮ КР</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-gold-400" />
                      <span>Члены Коллегии адвокатов</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-gold-400" />
                      <span>ISO 9001:2015</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:scale-105 animate-glow"
                  >
                    <Crown className="mr-2 h-5 w-5" />
                    Бесплатная консультация
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gold-400 text-gold-300 hover:bg-gold-400 hover:text-navy-900 bg-transparent font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Video className="mr-2 h-5 w-5" />
                    Видео о компании
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gold-400" />
                    <span>+996 (555) 123-456</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gold-400" />
                    <span>24/7 поддержка</span>
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
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">2,500+ дел</div>
                      <div className="text-sm text-slate-600">выиграно за 15 лет</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
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

        {/* Services Section */}
        <section id="services" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <div className="space-y-4">
                <Badge className="bg-gold-100 text-gold-800 border-gold-300 px-4 py-2">Юридические услуги</Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
                  Полный спектр правовых услуг в КР
                </h2>
                <p className="max-w-[900px] text-xl text-slate-600 leading-relaxed">
                  Профессиональное юридическое сопровождение бизнеса в соответствии с законодательством Кыргызской
                  Республики
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                    service.popular
                      ? "border-gold-400 bg-gradient-to-br from-gold-50 to-white"
                      : "border-gold-200 hover:border-gold-400"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-center py-2 text-sm font-semibold">
                      🔥 ПОПУЛЯРНАЯ УСЛУГА
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className={`relative ${service.popular ? "pt-12" : ""}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative">
                        <service.icon className="h-12 w-12 text-navy-700 group-hover:text-gold-600 transition-colors duration-300" />
                        <div className="absolute -inset-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-gold-600 text-white font-semibold mb-1">{service.price}</Badge>
                        <div className="text-xs text-slate-500">{service.duration}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-navy-900 group-hover:text-gold-700 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative space-y-4">
                    <CardDescription className="text-base text-slate-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-gold-600 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-navy-700 to-navy-600 hover:from-navy-800 hover:to-navy-700 text-white font-semibold rounded-full transition-all duration-300">
                        Заказать
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-gold-300 text-gold-600 hover:bg-gold-50 rounded-full bg-transparent"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gold-100 text-gold-800 border-gold-300 px-4 py-2">О компании</Badge>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
                    Лидер юридического рынка Кыргызстана
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    ОсОО "DOMINANT JUSTICE" - ведущая юридическая фирма Кыргызской Республики, специализирующаяся на
                    комплексном правовом сопровождении крупного бизнеса и состоятельных клиентов.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-gold-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900">Лицензированы</div>
                        <div className="text-sm text-slate-600">Лицензия МЮ КР №001234</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900">Застрахованы</div>
                        <div className="text-sm text-slate-600">Страхование ответственности</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900">Сертифицированы</div>
                        <div className="text-sm text-slate-600">ISO 9001:2015</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Globe className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900">Международные</div>
                        <div className="text-sm text-slate-600">Партнеры в 15 странах</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold px-6 py-3 rounded-full">
                    <Download className="mr-2 h-4 w-4" />
                    Скачать презентацию
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gold-300 text-gold-600 hover:bg-gold-50 px-6 py-3 rounded-full bg-transparent"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Наши лицензии
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

        {/* Team Section */}
        <section id="team" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <div className="space-y-4">
                <Badge className="bg-gold-100 text-gold-800 border-gold-300 px-4 py-2">Наша команда</Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
                  Ведущие юристы Кыргызстана
                </h2>
                <p className="max-w-[900px] text-xl text-slate-600 leading-relaxed">
                  Команда высококвалифицированных юристов с международным образованием и многолетним опытом
                </p>
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
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gold-600" />
                        <span className="text-sm text-slate-600">Опыт: {member.experience}</span>
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

        {/* Cases Section */}
        <section id="cases" className="w-full py-20 md:py-32 bg-gradient-to-br from-navy-900 to-navy-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <div className="space-y-4">
                <Badge className="bg-gold-600/20 text-gold-300 border-gold-400/30 px-4 py-2">Успешные кейсы</Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">Наши победы</h2>
                <p className="max-w-[900px] text-xl text-slate-300 leading-relaxed">
                  Примеры успешно решенных дел, которые принесли нашим клиентам миллионы сом экономии
                </p>
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

        {/* Licenses Section */}
        <section className="w-full py-20 bg-gradient-to-r from-gold-50 to-gold-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <div className="space-y-4">
                <Badge className="bg-gold-100 text-gold-800 border-gold-300 px-4 py-2">Лицензии и сертификаты</Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
                  Официальные разрешения
                </h2>
                <p className="max-w-[900px] text-xl text-slate-600 leading-relaxed">
                  Все необходимые лицензии и сертификаты для оказания юридических услуг в КР
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {licenses.map((license, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-2 border-gold-200 hover:border-gold-400 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="relative">
                    <Image
                      src={license.image || "/placeholder.svg"}
                      width="300"
                      height="200"
                      alt={license.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white">Действующая</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-navy-900">{license.title}</CardTitle>
                    <CardDescription className="text-gold-600 font-medium">№ {license.number}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-gold-600" />
                      <span className="text-sm text-slate-600">{license.issuer}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gold-600" />
                      <span className="text-sm text-slate-600">Срок: {license.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <div className="space-y-4">
                <Badge className="bg-gold-100 text-gold-800 border-gold-300 px-4 py-2">Часто задаваемые вопросы</Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent">
                  Ответы на популярные вопросы
                </h2>
                <p className="max-w-[900px] text-xl text-slate-600 leading-relaxed">
                  Самые частые вопросы наших клиентов о юридических услугах в Кыргызстане
                </p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faq.map((item, index) => (
                <Card
                  key={index}
                  className="border-2 border-gold-200 hover:border-gold-400 transition-colors duration-300"
                >
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

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-gradient-to-br from-navy-900 to-navy-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8 text-white">
                <div className="space-y-4">
                  <Badge className="bg-gold-600/20 text-gold-300 border-gold-400/30 px-4 py-2">Контакты</Badge>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Свяжитесь с нами</h2>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Получите профессиональную юридическую консультацию уже сегодня
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="relative">
                      <Phone className="h-6 w-6 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                      <div className="absolute -inset-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Горячая линия</div>
                      <div className="text-gold-300 text-lg">+996 (555) 123-456</div>
                      <div className="text-sm text-slate-400">Круглосуточно, без выходных</div>
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
                      <div className="text-sm text-slate-400">Ответим в течение часа</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="relative">
                      <MapPin className="h-6 w-6 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                      <div className="absolute -inset-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Главный офис</div>
                      <div className="text-gold-300">г. Бишкек, ул. Чуй 123</div>
                      <div className="text-sm text-slate-400">Бизнес-центр "Элит", 15 этаж</div>
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
                  <CardTitle className="text-2xl font-bold text-white">Бесплатная консультация</CardTitle>
                  <CardDescription className="text-slate-300">
                    Заполните форму и получите консультацию в течение 30 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Имя и фамилия *
                      </label>
                      <Input
                        id="name"
                        placeholder="Ваше полное имя"
                        className="bg-white/20 border-gold-400/30 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-white">
                        Телефон *
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
                      Email
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
                      Интересующая услуга
                    </label>
                    <select className="w-full px-3 py-2 bg-white/20 border border-gold-400/30 rounded-md text-white">
                      <option value="">Выберите услугу</option>
                      <option value="corporate">Корпоративное право</option>
                      <option value="tax">Налоговое планирование</option>
                      <option value="court">Судебное представительство</option>
                      <option value="labor">Трудовое право</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Описание ситуации *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Кратко опишите вашу правовую ситуацию..."
                      className="min-h-[120px] bg-white/20 border-gold-400/30 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="agreement" className="rounded" />
                    <label htmlFor="agreement" className="text-xs text-slate-300">
                      Согласен с{" "}
                      <Link href="#" className="text-gold-300 hover:underline">
                        политикой конфиденциальности
                      </Link>
                    </label>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Zap className="mr-2 h-5 w-5" />
                    Получить консультацию
                  </Button>
                  <p className="text-xs text-slate-400 text-center">
                    Первая консультация бесплатная • Ответим в течение 30 минут
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="bg-navy-900 border-t border-gold-400/30">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/logo-2.svg" alt="DOMINANT JUSTICE" width={120} height={40} className="h-8 w-auto" />
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Ведущая юридическая фирма Кыргызской Республики. Защищаем интересы крупнейших компаний и состоятельных
                клиентов с 2013 года.
              </p>
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
              <h4 className="text-lg font-semibold text-white">Услуги</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                  Корпоративное право
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                  Налоговое планирование
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                  Судебная защита
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                  Трудовое право
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Компания</h4>
              <div className="space-y-2">
                <Link href="#about" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                  О нас
                </Link>
                <Link href="#team" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                  Команда
                </Link>
                <Link href="#cases" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                  Кейсы
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-gold-400 transition-colors duration-300">
                  Карьера
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Контакты</h4>
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
            <p className="text-sm text-slate-400">
              © 2024 ОсОО "DOMINANT JUSTICE". Все права защищены. Лицензия МЮ КР №001234
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link href="#" className="text-sm text-slate-400 hover:text-gold-400 transition-colors duration-300">
                Политика конфиденциальности
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-gold-400 transition-colors duration-300">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
