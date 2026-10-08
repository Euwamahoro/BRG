// components/hero/HeroImageCarousel.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const heroImages = [
  {
    id: 1,
    src: '/images/hero/beans-harvest.jpg',
    alt: 'Fresh Nzuri Beans harvest in Rwanda',
  },
  {
    id: 2,
    src: '/images/hero/farmers-cooperative.jpg',
    alt: 'Rwandan farmers working together',
  },
  {
    id: 3,
    src: '/images/hero/export-shipping.jpg',
    alt: 'BRG export shipments to Europe',
  },
  {
    id: 4,
    src: '/images/hero/quality-control.jpg',
    alt: 'Quality control at BRG facilities',
  },
  {
    id: 5,
    src: '/images/hero/cooperative-meeting.jpg',
    alt: 'Farmer cooperative meeting',
  },
]

export default function HeroImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <Image
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            fill
            className="object-cover object-center"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={currentIndex === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/*
        Single scrim, defined once, here. Hero.tsx should NOT add its own
        gradient overlays on top of this component — stacking both was
        what made the photos look washed out / low-visibility.
        One dark band up top for the badge + headline, one soft fade at
        the bottom into the page's white background.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent" />

      {/* Image indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-1.5 bg-[var(--brg-brass-light)]'
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}