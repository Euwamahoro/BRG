// app/projects/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-[var(--brg-sage-light)] to-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/projects" className="inline-flex items-center text-sm text-gray-600 hover:text-[var(--brg-brass)] mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" /> All Projects
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--brg-ink)]">{project.title}</h1>
          <p className="mt-4 text-xl text-gray-600">{project.tagline}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="px-4 py-3 rounded-lg bg-[var(--brg-cream)] text-sm text-gray-600">
            Content for this page is coming soon.
          </div>
          {project.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-2xl font-bold text-[var(--brg-ink)] mb-2">{s.heading}</h2>
              <p className="text-gray-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
