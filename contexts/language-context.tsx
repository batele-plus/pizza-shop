"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "ky" | "ru" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("ru")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

const translations = {
  ky: {
    // Header
    "nav.services": "Кызматтар",
    "nav.about": "Биз жөнүндө",
    "nav.testimonials": "Пикирлер",
    "nav.contact": "Байланыш",

    // Hero Section
    "hero.badge": 'ЖЧК "DOMINANT JUSTICE"',
    "hero.title": "Укук дүйнөсүндөгү ишенимдүү өнөктөшүңүз",
    "hero.subtitle":
      "Бизнес жана жеке адамдар үчүн кесиптик юридикалык кызматтар. 2013-жылдан бери сиздин кызыкчылыктарыңызды коргойбуз.",
    "hero.consultation": "Консультация алуу",
    "hero.services": "Биздин кызматтар",

    // Partners
    "partners.title": "Биздин өнөктөштөр",
    "partners.subtitle": "Биз алдыңкы компаниялар жана уюмдар менен кызматташабыз",

    // Services
    "services.title": "Биздин кызматтар",
    "services.subtitle": "Сиздин бизнесиңиз үчүн юридикалык кызматтардын толук спектри",
    "services.business": "Бизнести каттоо жана башкаруу",
    "services.business.desc":
      "Компанияларды каттоо процессин жана корпоративдик процедураларды башкарууну толук коштоо",
    "services.antitrust": "Монополияга каршы жөнгө салуу жана атаандаштыкты коргоо",
    "services.antitrust.desc": "Атаандаштык укугу боюнча консультациялар жана адилетсиз атаандаштыктан коргоо",
    "services.labor": "Эмгек мыйзамы жана талаш-тартыштар",
    "services.labor.desc": "Эмгек талаш-тартыштарын чечүү жана эмгек мыйзамы боюнча консультациялар",
    "services.tax": "Салыкты пландаштыруу",
    "services.tax.desc": "Салык салууну оптималдаштыруу жана бизнес үчүн салык пландаштыруу",
    "services.accounting": "Бухгалтердик коштоо",
    "services.accounting.desc": "Бухгалтердик эсепти жүргүзүү жана отчеттуулукту даярдоо",
    "services.legal": "Юридикалык коштоо",
    "services.legal.desc": "Компаниянын ишмердигин комплекстүү укуктук коштоо",
    "services.outsource": "Юридикалык аутсорс",
    "services.outsource.desc": "Чыгымдарды оптималдаштыруу үчүн юридикалык функцияларды аутсорсингге өткөрүү",

    // About
    "about.title": "Биз жөнүндө",
    "about.text1":
      'ЖЧК "DOMINANT JUSTICE" - бул укуктун ар кайсы тармактарында көп жылдык тажрыйбасы бар жогорку квалификациялуу юристтердин командасы. Биз бизнес жана жеке адамдар үчүн комплекстүү юридикалык кызматтарды көрсөтүүгө адистешебиз.',
    "about.text2":
      "Биздин миссия - биздин кардарларга ишенимдүү укуктук коргоо жана колдоо көрсөтүү, аларга амалдагы мыйзамдын алкагында коюлган максаттарга жетүүгө жардам берүү.",
    "about.learn": "Көбүрөөк билүү",
    "about.team": "Биздин команда",

    // Why Us
    "why.title": "Эмне үчүн биз?",
    "why.subtitle": "Биздин компания менен иштөөнүн артыкчылыктары",
    "why.experience": "Кесиптик тажрыйба",
    "why.experience.desc": "Юридикалык кызматтар тармагында 10 жылдан ашык ийгиликтүү практика",
    "why.speed": "Ылдамдык",
    "why.speed.desc": "Милдеттерди тез чечүү жана бардык белгиленген мөөнөттөрдү сактоо",
    "why.individual": "Жеке мамиле",
    "why.individual.desc": "Бизнестин өзгөчөлүгүн эске алуу менен ар бир кардар үчүн жеке чечимдер",
    "why.quality": "Сапат кепилдиги",
    "why.quality.desc": "Кызматтардын жогорку сапаты жана натыйжа үчүн толук жоопкерчилик",

    // Testimonials
    "testimonials.title": "Кардарлардын пикирлери",
    "testimonials.subtitle": "Биз жөнүндө кардарларыбыз эмне дейт",

    // Contact
    "contact.title": "Байланыш",
    "contact.subtitle": "Кесиптик консультация алуу үчүн биз менен байланышыңыз",
    "contact.form.title": "Билдирүү жөнөтүү",
    "contact.form.subtitle": "Форманы толтуруңуз, биз сиз менен жакын арада байланышабыз",
    "contact.form.name": "Аты",
    "contact.form.email": "Email",
    "contact.form.phone": "Телефон",
    "contact.form.message": "Билдирүү",
    "contact.form.message.placeholder": "Сиздин кырдаалыңызды сүрөттөңүз...",
    "contact.form.send": "Билдирүү жөнөтүү",

    // Footer
    "footer.privacy": "Купуялык саясаты",
    "footer.terms": "Колдонуу шарттары",
    "footer.rights": '© 2024 ЖЧК "DOMINANT JUSTICE". Бардык укуктар корголгон.',
  },
  ru: {
    // Header
    "nav.services": "Услуги",
    "nav.about": "О нас",
    "nav.testimonials": "Отзывы",
    "nav.contact": "Контакты",

    // Hero Section
    "hero.badge": 'ОсОО "DOMINANT JUSTICE"',
    "hero.title": "Ваш надежный партнер в мире права",
    "hero.subtitle":
      "Профессиональные юридические услуги для бизнеса и частных лиц. Защищаем ваши интересы с 2013 года.",
    "hero.consultation": "Получить консультацию",
    "hero.services": "Наши услуги",

    // Partners
    "partners.title": "Наши партнёры",
    "partners.subtitle": "Мы сотрудничаем с ведущими компаниями и организациями",

    // Services
    "services.title": "Наши услуги",
    "services.subtitle": "Полный спектр юридических услуг для вашего бизнеса",
    "services.business": "Регистрация и управление бизнесом",
    "services.business.desc":
      "Полное сопровождение процесса регистрации компаний и управления корпоративными процедурами",
    "services.antitrust": "Антимонопольное регулирование и защита конкуренции",
    "services.antitrust.desc": "Консультации по вопросам конкурентного права и защита от недобросовестной конкуренции",
    "services.labor": "Трудовое законодательство и споры",
    "services.labor.desc": "Решение трудовых споров и консультации по трудовому законодательству",
    "services.tax": "Планирование налогов",
    "services.tax.desc": "Оптимизация налогообложения и налоговое планирование для бизнеса",
    "services.accounting": "Бухгалтерское сопровождение",
    "services.accounting.desc": "Ведение бухгалтерского учета и подготовка отчетности",
    "services.legal": "Юридическое сопровождение",
    "services.legal.desc": "Комплексное правовое сопровождение деятельности компании",
    "services.outsource": "Юридический аутсорс",
    "services.outsource.desc": "Передача юридических функций на аутсорсинг для оптимизации расходов",

    // About
    "about.title": "О нас",
    "about.text1":
      'ОсОО "DOMINANT JUSTICE" - это команда высококвалифицированных юристов с многолетним опытом работы в различных отраслях права. Мы специализируемся на предоставлении комплексных юридических услуг для бизнеса и частных лиц.',
    "about.text2":
      "Наша миссия - обеспечить надежную правовую защиту и поддержку наших клиентов, помогая им достигать поставленных целей в рамках действующего законодательства.",
    "about.learn": "Узнать больше",
    "about.team": "Наша команда",

    // Why Us
    "why.title": "Почему мы?",
    "why.subtitle": "Преимущества работы с нашей компанией",
    "why.experience": "Профессиональный опыт",
    "why.experience.desc": "Более 10 лет успешной практики в сфере юридических услуг",
    "why.speed": "Оперативность",
    "why.speed.desc": "Быстрое решение задач и соблюдение всех установленных сроков",
    "why.individual": "Индивидуальный подход",
    "why.individual.desc": "Персональные решения для каждого клиента с учетом специфики бизнеса",
    "why.quality": "Гарантия качества",
    "why.quality.desc": "Высокое качество услуг и полная ответственность за результат",

    // Testimonials
    "testimonials.title": "Отзывы клиентов",
    "testimonials.subtitle": "Что говорят о нас наши клиенты",

    // Contact
    "contact.title": "Контакты",
    "contact.subtitle": "Свяжитесь с нами для получения профессиональной консультации",
    "contact.form.title": "Отправить сообщение",
    "contact.form.subtitle": "Заполните форму и мы свяжемся с вами в ближайшее время",
    "contact.form.name": "Имя",
    "contact.form.email": "Email",
    "contact.form.phone": "Телефон",
    "contact.form.message": "Сообщение",
    "contact.form.message.placeholder": "Опишите вашу ситуацию...",
    "contact.form.send": "Отправить сообщение",

    // Footer
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",
    "footer.rights": '© 2024 ОсОО "DOMINANT JUSTICE". Все права защищены.',
  },
  en: {
    // Header
    "nav.services": "Services",
    "nav.about": "About",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": 'LLC "DOMINANT JUSTICE"',
    "hero.title": "Your reliable partner in the world of law",
    "hero.subtitle": "Professional legal services for business and individuals. Protecting your interests since 2013.",
    "hero.consultation": "Get consultation",
    "hero.services": "Our services",

    // Partners
    "partners.title": "Our Partners",
    "partners.subtitle": "We collaborate with leading companies and organizations",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Full spectrum of legal services for your business",
    "services.business": "Business Registration and Management",
    "services.business.desc": "Complete support for company registration process and corporate procedures management",
    "services.antitrust": "Antitrust Regulation and Competition Protection",
    "services.antitrust.desc": "Consultations on competition law issues and protection from unfair competition",
    "services.labor": "Labor Law and Disputes",
    "services.labor.desc": "Resolution of labor disputes and consultations on labor legislation",
    "services.tax": "Tax Planning",
    "services.tax.desc": "Tax optimization and tax planning for business",
    "services.accounting": "Accounting Support",
    "services.accounting.desc": "Bookkeeping and financial reporting preparation",
    "services.legal": "Legal Support",
    "services.legal.desc": "Comprehensive legal support for company activities",
    "services.outsource": "Legal Outsourcing",
    "services.outsource.desc": "Outsourcing legal functions to optimize costs",

    // About
    "about.title": "About Us",
    "about.text1":
      'LLC "DOMINANT JUSTICE" is a team of highly qualified lawyers with many years of experience in various branches of law. We specialize in providing comprehensive legal services for business and individuals.',
    "about.text2":
      "Our mission is to provide reliable legal protection and support to our clients, helping them achieve their goals within the framework of current legislation.",
    "about.learn": "Learn more",
    "about.team": "Our team",

    // Why Us
    "why.title": "Why Us?",
    "why.subtitle": "Advantages of working with our company",
    "why.experience": "Professional Experience",
    "why.experience.desc": "More than 10 years of successful practice in legal services",
    "why.speed": "Efficiency",
    "why.speed.desc": "Quick problem solving and compliance with all established deadlines",
    "why.individual": "Individual Approach",
    "why.individual.desc": "Personal solutions for each client considering business specifics",
    "why.quality": "Quality Guarantee",
    "why.quality.desc": "High quality services and full responsibility for results",

    // Testimonials
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "What our clients say about us",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Contact us for professional consultation",
    "contact.form.title": "Send Message",
    "contact.form.subtitle": "Fill out the form and we will contact you shortly",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Describe your situation...",
    "contact.form.send": "Send Message",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.rights": '© 2024 LLC "DOMINANT JUSTICE". All rights reserved.',
  },
}
