// app/contact/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSendError('')
    setSending(true)
    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to send message.')
      }
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setSendError(
        err instanceof Error
          ? err.message
          : 'Something went wrong sending your message. Please try WhatsApp instead.'
      )
    } finally {
      setSending(false)
    }
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
                    <a href="tel:+250786291710" className="text-gray-600 hover:text-[var(--brg-brass)] transition-colors">
                      +250 786 291 710
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[var(--brg-cream)] rounded-xl">
                  <MessageCircle className="h-5 w-5 text-[var(--brg-brass)] mt-1" />
                  <div>
                    <p className="font-medium text-[var(--brg-ink)]">WhatsApp</p>
                    <a 
                      href="https://wa.me/250786291710" 
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
                href="https://wa.me/250786291710"
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

                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="h-12 w-12 text-[var(--brg-sage)] mx-auto mb-4" />
                    <h4 className="font-display text-xl font-bold text-[var(--brg-ink)] mb-2">
                      Message Sent
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Thanks for reaching out — we&apos;ll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-medium text-[var(--brg-brass)] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
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

                  {sendError && (
                    <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                      {sendError} You can also{' '}
                      <Link
                        href="https://wa.me/250786291710"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium"
                      >
                        message us on WhatsApp
                      </Link>
                      .
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full px-8 py-3 bg-[var(--brg-sage)] hover:bg-[var(--brg-sage-dark)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}