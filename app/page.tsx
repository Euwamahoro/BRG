// app/page.tsx
'use client'

import Hero from '@/components/hero/Hero'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Award, 
  Users, 
  Globe, 
  Shield, 
  Sprout,
  Truck,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Section 1: Company Overview - Premium Version */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--brg-sage-light)]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-[var(--brg-brass-light)]/10 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--brg-sage-light)] rounded-full mb-6">
              <Sprout className="h-4 w-4 text-[var(--brg-sage-dark)]" />
              <span className="text-sm font-medium text-[var(--brg-sage-dark)]">Since 2018</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--brg-ink)] mb-6 leading-tight">
              Connecting Rwandan Farmers to{' '}
              <span className="text-[var(--brg-brass)]">Global Markets</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              BRG exports premium <span className="font-semibold text-[var(--brg-ink)]">Nzuri Beans</span> and provides 
              full-service export solutions for Rwandan products. We work with{' '}
              <span className="font-semibold text-[var(--brg-brass)]">1,000+ farmers</span> across 
              <span className="font-semibold text-[var(--brg-brass)]"> 15+ cooperatives</span> 
              to deliver quality you can trust.
            </p>
            
            <motion.div
              whileHover={{ x: 5 }}
              className="mt-8 inline-block"
            >
              <Link 
                href="/about" 
                className="group inline-flex items-center text-[var(--brg-brass)] hover:text-[var(--brg-brass)]/80 font-semibold transition-all duration-300"
              >
                <span className="border-b-2 border-[var(--brg-brass-light)] group-hover:border-[var(--brg-brass)] transition-colors pb-1">
                  Learn More About Us
                </span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Why Choose BRG - Premium Version */}
      <section className="relative py-20 bg-[var(--brg-cream)] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--brg-brass-light)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--brg-sage)]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 border border-[var(--brg-sage-light)]">
              <Award className="h-4 w-4 text-[var(--brg-brass)]" />
              <span className="text-sm font-medium text-[var(--brg-ink)]">Why BRG</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--brg-ink)]">
              Built on{' '}
              <span className="text-[var(--brg-brass)]">Quality</span>,{' '}
              <span className="text-[var(--brg-sage)]">Trust</span>, and{' '}
              <span className="text-[var(--brg-brass)]">Excellence</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--brg-sage-light)] hover:border-[var(--brg-brass)] hover:-translate-y-2"
              >
                {/* Icon with premium styling */}
                <div className="absolute -top-6 left-8">
                  <div className="p-3 bg-white rounded-xl shadow-lg border border-[var(--brg-sage-light)] group-hover:border-[var(--brg-brass)] transition-colors duration-300">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {signal.icon}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-display text-xl font-bold text-[var(--brg-ink)] mb-3 group-hover:text-[var(--brg-brass)] transition-colors">
                    {signal.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {signal.description}
                  </p>
                </div>
                
                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brg-brass)] via-[var(--brg-sage)] to-[var(--brg-brass-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Premium CTA Buttons */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brg-cream)]/50 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* Button 1: Products */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  href="/products" 
                  className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brg-sage-light)] to-[var(--brg-sage)]/20 p-[2px] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative bg-white rounded-2xl p-6 text-center transition-all duration-300 group-hover:bg-transparent">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="p-2 bg-[var(--brg-sage-light)] rounded-xl group-hover:bg-white/20 transition-colors">
                        <Sprout className="h-6 w-6 text-[var(--brg-sage-dark)] group-hover:text-white transition-colors" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-[var(--brg-ink)] group-hover:text-black transition-colors">
                          Nzuri Foods
                        </p>
                        <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors">
                          Premium Rwandan beans
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-[var(--brg-sage-dark)] group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Button 2: Export Services */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  href="/export-services" 
                  className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brg-brass-light)]/40 to-[var(--brg-brass)]/20 p-[2px] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative bg-white rounded-2xl p-6 text-center transition-all duration-300 group-hover:bg-transparent">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="p-2 bg-[var(--brg-brass-light)]/25 rounded-xl group-hover:bg-white/10 transition-colors">
                        <Truck className="h-6 w-6 text-[var(--brg-brass)] group-hover:text-black transition-colors" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-[var(--brg-ink)] group-hover:text-black transition-colors">
                          Export Services
                        </p>
                        <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors">
                          Full-service logistics
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-[var(--brg-brass)] group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Button 3: Get a Quote - Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  href="/contact" 
                  className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brg-brass)] to-[var(--brg-brass)]/80 p-[2px] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--brg-brass)]/20"
                >
                  <div className="relative bg-gradient-to-br from-[var(--brg-brass)] to-[var(--brg-brass)]/90 rounded-2xl p-6 text-center transition-all duration-300">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-white">
                          Get a Quote
                        </p>
                        <p className="text-xs text-white/80">
                          Start your order today
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Optional: Trust Badges Section */}
      <section className="py-8 bg-[var(--brg-cream)] border-t border-[var(--brg-sage-light)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-[var(--brg-sage)]" />
              <span>HACCP Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-[var(--brg-sage)]" />
              <span>SMETA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-[var(--brg-sage)]" />
              <span>1,000+ Farmers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-[var(--brg-sage)]" />
              <span>Exporting to EU & Middle East</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const trustSignals = [
  {
    icon: '🌱',
    title: 'Premium Quality',
    description: 'HACCP and SMETA certified beans with strict quality control from farm to export.'
  },
  {
    icon: '🤝',
    title: 'Farmer First',
    description: 'Working directly with 1,000+ farmers across 15+ cooperatives for fair trade.'
  },
  {
    icon: '🚢',
    title: 'Global Reach',
    description: 'Exporting premium Rwandan products to European and Middle Eastern markets.'
  }
]