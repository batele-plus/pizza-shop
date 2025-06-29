import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span>(555) 123-PIZZA</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span>orders@pizzashop.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>123 Pizza Street, Food City, FC 12345</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-500" />
                <div>
                  <p>Mon-Thu: 11AM - 10PM</p>
                  <p>Fri-Sat: 11AM - 11PM</p>
                  <p>Sunday: 12PM - 9PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#menu" className="block hover:text-red-400 transition-colors">
                Menu
              </a>
              <a href="#order" className="block hover:text-red-400 transition-colors">
                Order Online
              </a>
              <a href="#about" className="block hover:text-red-400 transition-colors">
                About Us
              </a>
              <a href="#contact" className="block hover:text-red-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Delivery Promise */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Promise</h3>
            <div className="space-y-2 text-sm">
              <p>🍕 Fresh ingredients daily</p>
              <p>⚡ 30-minute delivery</p>
              <p>⭐ 4.9/5 customer rating</p>
              <p>💯 100% satisfaction guarantee</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 Pizza Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
