"use client"

import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mario's Pizza</h3>
            <p className="text-gray-300 mb-4">
              Authentic Italian pizza made with love and traditional recipes since 1985.
            </p>
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="ml-2 text-white">4.9/5 Rating</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span>(555) 123-PIZZA</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span>orders@mariospizza.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>123 Pizza Street, Food City, FC 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Mon - Thu:</span>
                <span>11am - 10pm</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat:</span>
                <span>11am - 11pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>12pm - 9pm</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-green-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">30-minute delivery guarantee!</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <div>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Menu
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Specials
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Catering
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-red-400 transition-colors">
                  About Us
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Reviews
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mario's Pizza. All rights reserved. | Made with ❤️ for pizza lovers</p>
        </div>
      </div>
    </footer>
  )
}
