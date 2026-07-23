// app/contact/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - will connect to API later
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--brg-sage-light)] to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--brg-ink)]">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Get in touch with the BRG team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <h2 className="font-display text-2xl font-bold text-[var(--brg-ink)] mb-6">
                Get in Touch
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-[var(--brg-cream)] rounded-xl">
                  <Mail className="h-5 w-5 text-[var(--brg-brass)] mt-1" />
                  <div>
                    <p className="font-medium text-[var(--brg-ink)]">Email</p>
                    <a href="mailto:erwema@brg.co.rw" className="text-gray-600 hover:text-[var(--brg-brass)] transition-colors">
                      erwema@brg.co.rw
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[var(--brg-cream)] rounded-xl">
                  <Phone className="h-5 w-5 text-[var(--brg-brass)] mt-1" />
                  <div>
                    <p className="font-medium text-[var(--brg-ink)]">Phone</p>
                    <a href="tel:+25078832372" className="text-gray-600 hover:text-[var(--brg-brass)] transition-colors">
                      +250 788 323 72
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[var(--brg-cream)] rounded-xl">
                  <MessageCircle className="h-5 w-5 text-[var(--brg-brass)] mt-1" />
                  <div>
                    <p className="font-medium text-[var(--brg-ink)]">WhatsApp</p>
                    <a 
                      href="https://wa.me/25078832372" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[var(--brg-brass)] transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[var(--brg-cream)] rounded-xl">
                  <MapPin className="h-5 w-5 text-[var(--brg-brass)] mt-1" />
                  <div>
                    <p className="font-medium text-[var(--brg-ink)]">Location</p>
                    <p className="text-gray-600">Rwanda</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Floating Button - Quick Access */}
              <Link
                href="https://wa.me/25078832372"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1ebe5c] transition-colors w-full justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </Link>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--brg-sage-light)]">
                <h3 className="font-display text-2xl font-bold text-[var(--brg-ink)] mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brg-sage)] focus:ring-2 focus:ring-[var(--brg-sage-light)] transition-colors outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brg-sage)] focus:ring-2 focus:ring-[var(--brg-sage-light)] transition-colors outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brg-sage)] focus:ring-2 focus:ring-[var(--brg-sage-light)] transition-colors outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="export-services">Export Services</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brg-sage)] focus:ring-2 focus:ring-[var(--brg-sage-light)] transition-colors outline-none resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-[var(--brg-sage)] hover:bg-[var(--brg-sage-dark)] text-white font-semibold rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}