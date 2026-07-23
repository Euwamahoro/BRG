// app/products/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Package, Scale, Ruler, ShoppingBag } from 'lucide-react'

const beanProducts = [
  {
    id: 'yellow-beans',
    name: 'Yellow Beans',
    description: 'Premium yellow beans with excellent cooking quality. High in protein and fiber.',
    image: '/images/products/yellow-beans.jpg',
    specifications: {
      moisture: '≤ 14%',
      purity: '≥ 99%',
      foreignMatter: '≤ 0.5%',
    },
    packaging: ['25kg', '50kg', 'Bulk'],
    certifications: ['HACCP Compliant'],
  },
  {
    id: 'sugar-beans',
    name: 'Sugar Beans (Rosecoco)',
    description: 'Popular rosecoco variety with a sweet flavor. Perfect for soups and stews.',
    image: '/images/products/sugar-beans.jpg',
    specifications: {
      moisture: '≤ 14%',
      purity: '≥ 99%',
      foreignMatter: '≤ 0.5%',
    },
    packaging: ['25kg', '50kg', 'Bulk'],
    certifications: ['HACCP Compliant'],
  },
  {
    id: 'red-kidney',
    name: 'Red Kidney Beans',
    description: 'Rich, dark red beans ideal for chili and salads. High in antioxidants.',
    image: '/images/products/red-kidney.jpg',
    specifications: {
      moisture: '≤ 14%',
      purity: '≥ 99%',
      foreignMatter: '≤ 0.5%',
    },
    packaging: ['25kg', '50kg', 'Bulk'],
    certifications: ['HACCP Compliant'],
  },
  {
    id: 'black-beans',
    name: 'Black Beans',
    description: 'Nutrient-dense black beans with a mild, earthy flavor. Popular in Latin cuisine.',
    image: '/images/products/black-beans.jpg',
    specifications: {
      moisture: '≤ 14%',
      purity: '≥ 99%',
      foreignMatter: '≤ 0.5%',
    },
    packaging: ['25kg', '50kg', 'Bulk'],
    certifications: ['HACCP Compliant'],
  },
  {
    id: 'red-speckled',
    name: 'Red Speckled Beans',
    description: 'Distinctive speckled beans with a rich, nutty flavor. Excellent for various dishes.',
    image: '/images/products/red-speckled.jpg',
    specifications: {
      moisture: '≤ 14%',
      purity: '≥ 99%',
      foreignMatter: '≤ 0.5%',
    },
    packaging: ['25kg', '50kg', 'Bulk'],
    certifications: ['HACCP Compliant'],
  },
]

export default function ProductsPage() {
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
              Nzuri Foods
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Premium Rwandan beans — quality you can taste
            </p>
            <p className="mt-2 text-sm text-[var(--brg-brass)] font-medium">
              🌱 Sourced from 1,000+ farmers across Rwanda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {beanProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--brg-sage-light)] hover:border-[var(--brg-sage)]"
              >
                {/* Product Image Placeholder */}
                <div className="relative h-48 bg-[var(--brg-sage-light)] flex items-center justify-center">
                  <div className="text-6xl opacity-30">🫘</div>
                  {/* Uncomment when images are available */}
                  {/* <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-[var(--brg-ink)] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Scale className="h-4 w-4 text-[var(--brg-sage)]" />
                      <span>Moisture: {product.specifications.moisture}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Ruler className="h-4 w-4 text-[var(--brg-sage)]" />
                      <span>Purity: {product.specifications.purity}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Package className="h-4 w-4 text-[var(--brg-sage)]" />
                      <span>Packaging: {product.packaging.join(', ')}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.certifications.map((cert) => (
                      <span key={cert} className="px-2 py-1 bg-[var(--brg-brass-light)]/20 text-[var(--brg-brass)] text-xs rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/quote?product=${product.id}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-[var(--brg-brass)] hover:bg-[var(--brg-brass)]/80 text-white font-semibold rounded-lg transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--brg-cream)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--brg-ink)] mb-4">
              Ready to Order?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us for wholesale pricing, samples, or custom packaging requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[var(--brg-sage)] hover:bg-[var(--brg-sage-dark)] text-white font-semibold rounded-lg transition-colors"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}