// app/quote/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, CheckCircle2, Mail, MessageCircle, Package } from 'lucide-react'

const products = [
  {
    id: 'beans',
    name: 'Beans',
    image: '/images/products/beans.jpg',
    packaging: ['1kg', '25kg', '50kg', 'Bulk'],
  },
  {
    id: 'peeled-banana',
    name: 'Peeled Banana',
    image: '/images/products/peeled-banana.jpg',
    packaging: ['1kg', 'Bulk'],
  },
  {
    id: 'banana-plantain',
    name: 'Banana Plantain',
    image: '/images/products/banana-plantain.jpg',
    packaging: ['10kg', 'Bulk'],
  },
  {
    id: 'dagaa-dried-fish',
    name: 'Dagaa (Dried Small Fish)',
    image: '/images/products/dagaa-dried-fish.jpg',
    packaging: ['2kg', 'Bulk'],
  },
  {
    id: 'sweet-potatoes',
    name: 'Sweet Potatoes',
    image: '/images/products/sweet-potatoes.jpg',
    packaging: ['10kg', 'Bulk'],
  },
]

const QUOTE_EMAIL = 'enockdev01@gmail.com'
const QUOTE_WHATSAPP = '250786291710' // 0786291710 in international format

function buildQuoteMessage(formData: {
  name: string
  email: string
  phone: string
  packaging: string
  quantity: string
  message: string
}, productName: string) {
  return [
    'New Quote Request - Nzuri Foods',
    '',
    `Name: ${formData.name || '-'}`,
    `Email: ${formData.email || '-'}`,
    `Phone: ${formData.phone || '-'}`,
    `Product: ${productName || '-'}`,
    `Packaging: ${formData.packaging || '-'}`,
    `Estimated Quantity: ${formData.quantity || '-'}`,
    `Additional Details: ${formData.message || '-'}`,
  ].join('\n')
}

function QuoteForm() {
  const searchParams = useSearchParams()
  const productParam = searchParams.get('product')
  const selectedProduct = products.find((p) => p.id === productParam)

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: selectedProduct?.id || '',
    packaging: '',
    quantity: '',
    message: '',
  })

  const activeProduct = products.find((p) => p.id === formData.product)

  const quoteMessage = buildQuoteMessage(formData, activeProduct?.name || '')
  const whatsappLink = `https://wa.me/${QUOTE_WHATSAPP}?text=${encodeURIComponent(quoteMessage)}`
  const mailtoLink = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(
    `Quote Request - ${activeProduct?.name || 'Product'}`
  )}&body=${encodeURIComponent(quoteMessage)}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // No backend yet - open WhatsApp with the request pre-filled so it sends
    // immediately, and reveal the email fallback on the confirmation screen.
    window.open(whatsappLink, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-24 min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center bg-[var(--brg-cream)] rounded-2xl p-10"
          >
            <CheckCircle2 className="h-14 w-14 text-[var(--brg-sage)] mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-[var(--brg-ink)] mb-2">
              Almost Done
            </h1>
            <p className="text-gray-600 mb-8">
              Thanks for your interest{formData.name ? `, ${formData.name}` : ''}. Tap a button
              below to send your request{activeProduct ? ` for ${activeProduct.name}` : ''} — it
              opens with everything already filled in, just hit send.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Send via WhatsApp
              </Link>
              <Link
                href={mailtoLink}
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--brg-brass)] hover:bg-[var(--brg-brass)]/80 text-white font-semibold rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send via Email
              </Link>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center mt-6 text-sm text-gray-500 hover:text-[var(--brg-brass)] transition-colors"
            >
              Back to Products
            </Link>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[var(--brg-sage-light)] to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              href="/products"
              className="inline-flex items-center text-sm text-gray-600 hover:text-[var(--brg-brass)] transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Products
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--brg-ink)]">
              Request a Quote
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Tell us what you need and our team will send you pricing and availability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Selected Product Preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-[var(--brg-sage-light)] overflow-hidden">
                {activeProduct ? (
                  <>
                    <div className="relative h-56 bg-[var(--brg-sage-light)] p-4">
                      <Image
                        src={activeProduct.image}
                        alt={activeProduct.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-[var(--brg-ink)] mb-2">
                        {activeProduct.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Package className="h-4 w-4 text-[var(--brg-sage)]" />
                        <span>Available: {activeProduct.packaging.join(', ')}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-[var(--brg-ink)] mb-2">
                      Choose a product
                    </h3>
                    <p className="text-sm text-gray-500">
                      Select a product in the form to see details here, or browse all products.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--brg-sage-light)]">
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brg-sage)] focus:ring-2 focus:ring-[var(--brg-sage-light)] transition-colors outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) =>
                          setFormData({ ...formData, product: e.target.value, packaging: '' })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brg-sage)] focus:ring-2 focus:ring-[var(--brg-sage-light)] transition-colors outline-none"
                        required
                      >
                        <option value="">Select a product</option>
                        {products.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Packaging Size
                      </label>
                      <select
                        value={formData.packaging}
                        onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brg-sage)] focus:ring-2 focus:ring-[var(--brg-sage-light)] transition-colors outline-none"
                      >
                        <option value="">Select packaging</option>
                        {(activeProduct?.packaging || []).map((pkg) => (
                          <option key={pkg} value={pkg}>
                            {pkg}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5 tons / month"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brg-sage)] focus:ring-2 focus:ring-[var(--brg-sage-light)] transition-colors outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      placeholder="Delivery destination, timeline, custom packaging needs, etc."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--brg-sage)] focus:ring-2 focus:ring-[var(--brg-sage-light)] transition-colors outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-[var(--brg-brass)] hover:bg-[var(--brg-brass)]/80 text-white font-semibold rounded-lg transition-colors"
                  >
                    Submit Quote Request
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

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <QuoteForm />
    </Suspense>
  )
}
