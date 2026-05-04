import type { Metadata } from 'next'
import { getAllPostsMeta } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://roofangler.com'

export const metadata: Metadata = {
  title: 'Roofing & Construction Blog',
  description:
    'Guides, charts, and tips about roof pitch, rafter calculations, and roofing materials. Expert advice for homeowners and contractors.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Roofing & Construction Blog – Roof Pitch Calculator',
    description: 'Guides, charts, and tips about roof pitch, rafter calculations, and roofing materials.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPostsMeta()

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8">
        <nav className="mb-2 text-sm text-muted">
          <a href="/" className="hover:text-accent">Home</a> / Blog
        </nav>
        <h1 className="text-4xl font-bold text-primary">Roofing Blog</h1>
        <p className="mt-2 text-muted">
          Expert guides on roof pitch, rafter calculations, roofing materials, and construction tips.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet — check back soon.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
