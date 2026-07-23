// components/layout/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ChevronDown, Building2, Users2, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--brg-sage-light)] shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.jpeg"
              alt="Best in Rwanda Group Ltd"
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl object-cover"
              priority
            />
            <div className="hidden sm:block">
              <span className="font-display text-xl font-bold text-[var(--brg-ink)]">BRG</span>
              <span className="block text-xs text-gray-500 -mt-1">Best in Rwanda Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Dropdown 
                label="Business" 
                icon={Building2}
                items={[
                  { title: 'Nzuri Foods', href: '/products', description: 'Premium Rwandan beans' },
                  { title: 'Export Services', href: '/export-services', description: 'Full-service export' },
                ]}
              />
              <Dropdown 
                label="Projects" 
                icon={Users2}
                items={[
                  { title: 'Farmers Life', href: '/projects/farmers-life', description: 'Empowering farmers' },
                  { title: 'Industry Tour', href: '/projects/industry-tour', description: 'Farm to export' },
                  { title: 'Cooperatives', href: '/projects/cooperatives', description: 'Our network' },
                ]}
              />
              <Link href="/about" className="text-gray-600 hover:text-[var(--brg-brass)] transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[var(--brg-brass)] transition-colors font-medium">
                Contact
              </Link>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link 
                href="https://wa.me/25078832372" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#1ebe5c] transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp</span>
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 bg-[var(--brg-brass)] text-white rounded-lg hover:bg-[var(--brg-brass)]/80 transition-colors font-medium text-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--brg-sage-light)] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-[var(--brg-ink)]" /> : <Menu className="h-6 w-6 text-[var(--brg-ink)]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--brg-sage-light)] bg-white">
            <div className="flex flex-col space-y-1">
              {/* Business Section */}
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-[var(--brg-brass)] uppercase tracking-wider">Business</p>
              </div>
              <Link 
                href="/products" 
                className="flex items-center space-x-3 px-4 py-3 hover:bg-[var(--brg-sage-light)] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Sprout className="h-5 w-5 text-[var(--brg-sage)]" />
                <div>
                  <p className="font-medium text-[var(--brg-ink)]">Nzuri Foods</p>
                  <p className="text-xs text-gray-500">Premium Rwandan beans</p>
                </div>
              </Link>
              <Link 
                href="/export-services" 
                className="flex items-center space-x-3 px-4 py-3 hover:bg-[var(--brg-sage-light)] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Package className="h-5 w-5 text-[var(--brg-sage)]" />
                <div>
                  <p className="font-medium text-[var(--brg-ink)]">Export Services</p>
                  <p className="text-xs text-gray-500">Full-service export</p>
                </div>
              </Link>

              {/* Projects Section */}
              <div className="px-4 py-2 mt-2">
                <p className="text-xs font-semibold text-[var(--brg-brass)] uppercase tracking-wider">Projects</p>
              </div>
              <Link 
                href="/projects/farmers-life" 
                className="flex items-center space-x-3 px-4 py-3 hover:bg-[var(--brg-sage-light)] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-5 w-5 text-[var(--brg-sage)]" />
                <div>
                  <p className="font-medium text-[var(--brg-ink)]">Farmers Life</p>
                  <p className="text-xs text-gray-500">Empowering farmers</p>
                </div>
              </Link>
              <Link 
                href="/projects/industry-tour" 
                className="flex items-center space-x-3 px-4 py-3 hover:bg-[var(--brg-sage-light)] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Shield className="h-5 w-5 text-[var(--brg-sage)]" />
                <div>
                  <p className="font-medium text-[var(--brg-ink)]">Industry Tour</p>
                  <p className="text-xs text-gray-500">Farm to export</p>
                </div>
              </Link>
              <Link 
                href="/projects/cooperatives" 
                className="flex items-center space-x-3 px-4 py-3 hover:bg-[var(--brg-sage-light)] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <TrendingUp className="h-5 w-5 text-[var(--brg-sage)]" />
                <div>
                  <p className="font-medium text-[var(--brg-ink)]">Cooperatives</p>
                  <p className="text-xs text-gray-500">Our network</p>
                </div>
              </Link>

              {/* Other Links */}
              <div className="border-t border-[var(--brg-sage-light)] my-2"></div>
              <Link 
                href="/about" 
                className="px-4 py-3 hover:bg-[var(--brg-sage-light)] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <p className="font-medium text-[var(--brg-ink)]">About</p>
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-3 hover:bg-[var(--brg-sage-light)] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <p className="font-medium text-[var(--brg-ink)]">Contact</p>
              </Link>
              
              {/* Mobile CTA */}
              <div className="mt-4 space-y-2">
                <Link 
                  href="https://wa.me/25078832372" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#25D366] text-white rounded-lg transition-colors w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </Link>
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-4 py-3 bg-[var(--brg-brass)] text-white rounded-lg transition-colors w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

// Dropdown Component for Desktop
function Dropdown({ label, icon: Icon, items }: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 text-gray-600 hover:text-[var(--brg-brass)] transition-colors font-medium group">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[var(--brg-sage-light)] py-2">
          {items.map((item: any) => (
            <Link 
              key={item.href}
              href={item.href}
              className="block px-4 py-3 hover:bg-[var(--brg-sage-light)] transition-colors"
            >
              <p className="font-medium text-[var(--brg-ink)]">{item.title}</p>
              {item.description && (
                <p className="text-xs text-gray-500">{item.description}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// Icons used in mobile navigation
import { Sprout, Package, Users, Shield, TrendingUp } from 'lucide-react'