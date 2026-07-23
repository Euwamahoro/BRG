// app/export-services/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Ship, FileCheck, Truck, Globe, Package, Shield, Clock, DollarSign } from 'lucide-react'

export default function ExportServicesPage() {
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
              Export Services
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Your trusted partner for Rwandan exports
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Service Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Direct Export */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--brg-sage-light)] hover:shadow-xl transition-shadow"
            >
              <div className="p-3 bg-[var(--brg-sage-light)] rounded-xl inline-block mb-4">
                <Ship className="h-8 w-8 text-[var(--brg-sage-dark)]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--brg-ink)] mb-3">
                Direct Bean Export
              </h3>
              <p className="text-gray-600 mb-4">
                Premium Nzuri Beans delivered directly to your door. Our direct export service ensures 
                the highest quality beans reach your market.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <FileCheck className="h-4 w-4 text-[var(--brg-brass)] mt-0.5 flex-shrink-0" />
                  <span>HACCP and SMETA compliant</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Package className="h-4 w-4 text-[var(--brg-brass)] mt-0.5 flex-shrink-0" />
                  <span>Custom packaging options available</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 text-[var(--brg-brass)] mt-0.5 flex-shrink-0" />
                  <span>Reliable shipping schedules</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-4 w-4 text-[var(--brg-brass)] mt-0.5 flex-shrink-0" />
                  <span>Quality guaranteed</span>
                </li>
              </ul>
            </motion.div>

            {/* Groupage Service */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--brg-brass-light)]/40 hover:shadow-xl transition-shadow"
            >
              <div className="p-3 bg-[var(--brg-brass-light)]/25 rounded-xl inline-block mb-4">
                <Package className="h-8 w-8 text-[var(--brg-brass)]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--brg-ink)] mb-3">
                Full-Service Groupage
              </h3>
              <p className="text-gray-600 mb-4">
                Any product, one container. We handle everything from sourcing to shipping. Perfect 
                for businesses looking to export various Rwandan products.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <Globe className="h-4 w-4 text-[var(--brg-brass)] mt-0.5 flex-shrink-0" />
                  <span>Any Made in Rwanda product</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Truck className="h-4 w-4 text-[var(--brg-brass)] mt-0.5 flex-shrink-0" />
                  <span>End-to-end logistics management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FileCheck className="h-4 w-4 text-[var(--brg-brass)] mt-0.5 flex-shrink-0" />
                  <span>Export permits and documentation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <DollarSign className="h-4 w-4 text-[var(--brg-brass)] mt-0.5 flex-shrink-0" />
                  <span>Fixed service fee — no surprises</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-[var(--brg-cream)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--brg-ink)]">
              How It Works
            </h2>
            <p className="text-gray-600 mt-2">
              Simple process from inquiry to delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[var(--brg-brass-light)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold text-[var(--brg-brass)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="font-semibold text-[var(--brg-ink)] mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--brg-ink)] mb-4">
              Ready to Export?
            </h2>
            <p className="text-gray-600 mb-8">
              Get a quote for your export needs — whether it's Nzuri Beans or other Rwandan products.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[var(--brg-brass)] hover:bg-[var(--brg-brass)]/80 text-white font-semibold rounded-lg transition-colors"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const processSteps = [
  {
    title: 'Inquiry',
    description: 'Tell us what you need — product, quantity, destination',
  },
  {
    title: 'Quote & Planning',
    description: 'We provide pricing and plan logistics',
  },
  {
    title: 'Ship & Deliver',
    description: 'We handle everything from sourcing to delivery',
  },
]