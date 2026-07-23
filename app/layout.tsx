// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BRG - Best in Rwanda Group | Nzuri Foods & Export Services',
  description: 'Premium Rwandan agricultural exports. Nzuri Foods, Export Services, and farmer empowerment programs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen bg-white pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}