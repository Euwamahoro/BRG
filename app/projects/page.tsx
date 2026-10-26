// app/projects/page.tsx
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/projects'

export const metadata = { title: 'Projects | BRG' }

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-[var(--brg-sage-light)] to-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--brg-ink)]">Projects</h1>
          <p className="mt-4 text-xl text-gray-600">Farmers, cooperatives and the journey from farm to export</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-6xl">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group bg-white p-8 rounded-2xl shadow-lg border border-[var(--brg-sage-light)] hover:shadow-xl transition-shadow"
            >
              <h2 className="font-display text-2xl font-bold text-[var(--brg-ink)] mb-2">{p.title}</h2>
              <p className="text-gray-600 mb-4">{p.summary}</p>
              <span className="inline-flex items-center text-[var(--brg-brass)] font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
