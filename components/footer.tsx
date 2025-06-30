import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Свяжитесь с нами</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span>+7 (555) 123-ПИЦЦА</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span>orders@pizzashop.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>ул. Пиццы, 123, Москва, 123456</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Часы работы</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-500" />
                <div>
                  <p>Пн-Чт: 11:00 - 22:00</p>
                  <p>Пт-Сб: 11:00 - 23:00</p>
                  <p>Воскресенье: 12:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <div className="space-y-2">
              <a href="#menu" className="block hover:text-red-400 transition-colors">
                Меню
              </a>
              <a href="#order" className="block hover:text-red-400 transition-colors">
                Заказать онлайн
              </a>
              <a href="#about" className="block hover:text-red-400 transition-colors">
                О нас
              </a>
              <a href="#contact" className="block hover:text-red-400 transition-colors">
                Контакты
              </a>
            </div>
          </div>

          {/* Delivery Promise */}
          <div>
            <h3 className="text-xl font-bold mb-4">Наши обещания</h3>
            <div className="space-y-2 text-sm">
              <p>🍕 Свежие ингредиенты каждый день</p>
              <p>⚡ Доставка за 30 минут</p>
              <p>⭐ Рейтинг клиентов 4.9/5</p>
              <p>💯 100% гарантия качества</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 Пиццерия. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
