// app/about/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Award, Target, Phone, Mail, MapPin } from 'lucide-react'

export default function AboutPage() {
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
              About Best in Rwanda Group
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Empowering Rwandan farmers since 2018
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="font-display text-3xl font-bold text-[var(--brg-ink)] mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Best in Rwanda Group Ltd (BRG) is an agribusiness company dealing in export of agricultural commodities. 
                The company specializes on trading of dry beans, especially the yellow, sugar and red kidney beans variety 
                commonly having a high demand on the regional and international markets. The company exports its dry beans 
                under the brand name <span className="font-semibold text-[var(--brg-brass)]">"Nzuri Beans"</span>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Since its inception in 2018, BRG Ltd has used an aggregation model where beans are collected from different 
                assembling points through middlemen. However, from 2019 the company has embarked on working directly with 
                farmer cooperatives as a way of improving the produce quality and the livelihoods of the small holder farmers.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Best in Rwanda currently sources quality beans from <span className="font-semibold text-[var(--brg-brass)]">1,000+ farmers</span> 
                grouped into cooperatives with consolidated lands to ensure uniformity and conformity to quality measures. 
                The company offers extra support to farmers in the form of farmer trainings, provision of post-harvest 
                equipment and upgrading their aggregation centers; this to increase farmer productivity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--brg-cream)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[var(--brg-brass)]">{stat.number}</div>
                <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--brg-sage-light)]"
            >
              <div className="p-3 bg-[var(--brg-sage-light)] rounded-xl inline-block mb-4">
                <Target className="h-8 w-8 text-[var(--brg-sage-dark)]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--brg-ink)] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To connect Rwandan farmers to global markets by delivering premium agricultural products 
                while improving livelihoods through sustainable farming practices and fair trade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--brg-sage-light)]"
            >
              <div className="p-3 bg-[var(--brg-sage-light)] rounded-xl inline-block mb-4">
                <Award className="h-8 w-8 text-[var(--brg-sage-dark)]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--brg-ink)] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading Rwandan agribusiness exporter recognized globally for quality, 
                sustainability, and empowering farming communities across Rwanda.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Contact */}
      <section className="py-16 bg-[var(--brg-cream)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--brg-ink)] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products or services? Reach out to our leadership team.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--brg-sage-light)]">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-2 bg-[var(--brg-brass-light)]/25 rounded-full">
                  <Users className="h-6 w-6 text-[var(--brg-brass)]" />
                </div>
                <span className="font-semibold text-[var(--brg-ink)]">Elvis G. Rwema</span>
              </div>
              <div className="space-y-3">
                <a href="mailto:erwema@brg.co.rw" className="flex items-center justify-center space-x-2 text-gray-600 hover:text-[var(--brg-brass)] transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>erwema@brg.co.rw</span>
                </a>
                <a href="tel:+25078832372" className="flex items-center justify-center space-x-2 text-gray-600 hover:text-[var(--brg-brass)] transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+250 788 323 72</span>
                </a>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Rwanda</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const aboutStats = [
  { number: '2018', label: 'Year Founded' },
  { number: '1,000+', label: 'Farmers Empowered' },
  { number: '15+', label: 'Cooperatives' },
  { number: '5+', label: 'Bean Varieties' },
]