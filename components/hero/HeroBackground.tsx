// components/hero/HeroBackground.tsx
'use client'

import { motion } from 'framer-motion'

// Ambient motion for the lower, white-background section of the hero —
// sits behind the department cards / stats banner, not over the photo
// carousel. Recolored to the sage + brass brand palette.
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-10 w-96 h-96 bg-[var(--brg-sage)]/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-[var(--brg-brass-light)]/15 rounded-full blur-3xl"
      />
    </div>
  )
}