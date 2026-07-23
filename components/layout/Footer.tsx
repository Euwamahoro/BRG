// components/layout/Footer.tsx (Alternative - No icon imports)
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--brg-ink)] text-white/80">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt="Best in Rwanda Group Ltd"
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl object-cover"
              />
              <div>
                <span className="font-display text-xl font-bold text-white">BRG</span>
                <span className="block text-xs text-white/60">Best in Rwanda Group</span>
              </div>
            </div>
            <p className="text-sm text-white/60 mb-4">
              Exporting premium Rwandan agricultural products to global markets since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-[var(--brg-brass)] transition-colors text-xl">
                📘
              </a>
              <a href="#" className="text-white/40 hover:text-[var(--brg-brass)] transition-colors text-xl">
                🐦
              </a>
              <a href="#" className="text-white/40 hover:text-[var(--brg-brass)] transition-colors text-xl">
                🔗
              </a>
              <a href="#" className="text-white/40 hover:text-[var(--brg-brass)] transition-colors text-xl">
                ▶️
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-[var(--brg-brass)] transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-sm hover:text-[var(--brg-brass)] transition-colors">Nzuri Foods</Link></li>
              <li><Link href="/export-services" className="text-sm hover:text-[var(--brg-brass)] transition-colors">Export Services</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[var(--brg-brass)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">Projects</h4>
            <ul className="space-y-2">
              <li><Link href="/projects/farmers-life" className="text-sm hover:text-[var(--brg-brass)] transition-colors">Farmers Life</Link></li>
              <li><Link href="/projects/industry-tour" className="text-sm hover:text-[var(--brg-brass)] transition-colors">Industry Tour</Link></li>
              <li><Link href="/projects/cooperatives" className="text-sm hover:text-[var(--brg-brass)] transition-colors">Cooperatives</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:erwema@brg.co.rw" className="flex items-center space-x-2 text-sm hover:text-[var(--brg-brass)] transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>erwema@brg.co.rw</span>
              </a>
              <a href="tel:+25078832372" className="flex items-center space-x-2 text-sm hover:text-[var(--brg-brass)] transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+250 788 323 72</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Rwanda</span>
              </div>
              <a 
                href="https://wa.me/25078832372" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#1ebe5c] transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
            <p>© {new Date().getFullYear()} Best in Rwanda Group Ltd. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="#" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white/80 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}