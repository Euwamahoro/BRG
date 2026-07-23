// components/hero/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Users2, Sprout, Package, Shield, TrendingUp } from 'lucide-react'
import HeroImageCarousel from './HeroImageCarousel'
import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Image Carousel — this component owns its own scrim/gradient.
          Do not add extra overlay divs here; two stacked scrims is what
          was washing out the photos before. */}
      <div className="absolute top-0 left-0 right-0 h-[70vh] z-0">
        <HeroImageCarousel />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-16 min-h-screen flex flex-col">
        {/* Top Section — sits over the photo, so text needs to read
            against a dark image, not against white */}
        <div className="flex-1 flex flex-col justify-center min-h-[55vh]">     

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              <span className="block">Best in Rwanda</span>
              <span className="block text-[var(--brg-brass-light)]">Group</span>
            </h1>
          </motion.div>

          {/* Subtitle — highlighted terms use brass-light, not a dark
              green, since this text sits on a dark photo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-xl font-bold text-white leading-tight max-w-2xl mx-auto text-center drop-shadow-lg"
          >
            Exporting Rwandan Excellence to the World —{' '}
            <span className="font-extrabold text-[var(--brd-black)] leading-tight ">Nzuri Foods</span>{' '}
            and{' '}
            <span className="font-extrabold text-[var(--brd-black)] leading-tight">Full-Service Export</span>
          </motion.p>
        </div>

        {/* Bottom Section — Increased mt-8 to mt-16 for more spacing */}
        <div className="relative z-20 mt-16">
          <HeroBackground />

          {/* Department Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {/* Business Department Card */}
            <Link href="/products" className="group">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--brg-sage-light)] hover:border-[var(--brg-sage)] hover:scale-[1.02]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="p-3 bg-[var(--brg-sage-light)] rounded-xl inline-block mb-4">
                      <Building2 className="h-8 w-8 text-[var(--brg-sage-dark)]" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[var(--brg-ink)]">Business Department</h3>
                    <p className="mt-2 text-gray-600">
                      Premium Rwandan exports for international markets
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-[var(--brg-sage-dark)] group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 bg-[var(--brg-sage-light)] text-[var(--brg-sage-dark)] rounded-full text-sm">
                    <Sprout className="h-4 w-4 mr-1" />
                    Nzuri Foods
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-[var(--brg-sage-light)] text-[var(--brg-sage-dark)] rounded-full text-sm">
                    <Package className="h-4 w-4 mr-1" />
                    Export Services
                  </span>
                </div>
              </div>
            </Link>

            {/* Projects Department Card */}
            <Link href="/projects" className="group">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--brg-brass-light)]/40 hover:border-[var(--brg-brass)] hover:scale-[1.02]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="p-3 bg-[var(--brg-brass-light)]/25 rounded-xl inline-block mb-4">
                      <Users2 className="h-8 w-8 text-[var(--brg-brass)]" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[var(--brg-ink)]">Projects Department</h3>
                    <p className="mt-2 text-gray-600">
                      Empowering farmers and building communities
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-[var(--brg-brass)] group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 bg-[var(--brg-brass-light)]/25 text-[var(--brg-brass)] rounded-full text-sm">
                    <Users2 className="h-4 w-4 mr-1" />
                    Farmers Life
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-[var(--brg-brass-light)]/25 text-[var(--brg-brass)] rounded-full text-sm">
                    <Shield className="h-4 w-4 mr-1" />
                    Industry Tour
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-[var(--brg-brass-light)]/25 text-[var(--brg-brass)] rounded-full text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Cooperatives
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-[var(--brg-sage-light)] shadow-xl"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-3xl font-bold text-[var(--brg-brass)]">{stat.number}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const stats = [
  { number: '1,000+', label: 'Farmers Empowered' },
  { number: '15+', label: 'Cooperatives' },
  { number: '5+', label: 'Bean Varieties' },
  { number: '2018', label: 'Year Founded' },
]