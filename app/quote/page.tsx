// app/quote/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, CheckCircle2, MessageCircle, Package } from 'lucide-react'

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
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSendError('')
    setSending(true)
    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          productName: activeProduct?.name || '',
          packaging: formData.packaging,
          quantity: formData.quantity,
          message: formData.message,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to send request.')
      }
      setSubmitted(true)
    } catch (err) {
      setSendError(
        err instanceof Error
          ? err.message
          : 'Something went wrong sending your request. Please try WhatsApp instead.'
      )
    } finally {
      setSending(false)
    }
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
              Request Sent
            </h1>
            <p className="text-gray-600 mb-8">
              Thanks for your interest{formData.name ? `, ${formData.name}` : ''}. Your request
              {activeProduct ? ` for ${activeProduct.name}` : ''} has been emailed to our sales
              team and they'll get back to you shortly. You can also reach us directly on
              WhatsApp below.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--brg-sage)] hover:bg-[var(--brg-sage-dark)] text-white font-semibold rounded-lg transition-colors"
              >
                Back to Products
              </Link>
            </div>
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

                  {sendError && (
                    <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                      {sendError} You can also{' '}
                      <Link
                        href={whatsappLink}
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
                    className="w-full px-8 py-3 bg-[var(--brg-brass)] hover:bg-[var(--brg-brass)]/80 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
                  >
                    {sending ? 'Sending...' : 'Submit Quote Request'}
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
