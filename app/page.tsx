import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import PitchTable from '@/components/PitchTable'
import FAQ from '@/components/FAQ'
import { FAQ_ITEMS } from '@/lib/faq-data'
import BlogCard from '@/components/BlogCard'
import JsonLd from '@/components/JsonLd'
import { getAllPostsMeta } from '@/lib/blog'
import { webApplicationSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://roofangler.com'

export const metadata: Metadata = {
  title: 'Roof Pitch Calculator – Calculate Pitch, Angle & Rafter Length Free',
  description:
    'Free roof pitch calculator. Enter rise and run to instantly calculate pitch ratio, angle in degrees, slope percentage, and rafter length. Fast, accurate, mobile-friendly.',
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: 'Roof Pitch Calculator – Calculate Pitch, Angle & Rafter Length Free',
    description:
      'Free roof pitch calculator. Instantly calculate pitch ratio, angle, slope percentage, and rafter length.',
    url: `${SITE_URL}/`,
    type: 'website',
  },
}

export default function HomePage() {
  const recentPosts = getAllPostsMeta().slice(0, 3)

  const schemas = [
    webApplicationSchema(),
    faqSchema(FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answer }))),
    breadcrumbSchema([{ name: 'Home', url: `${SITE_URL}/` }]),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <JsonLd key={i} schema={s} />
      ))}

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <article>
          {/* Hero */}
          <header className="mb-10">
            <div className="mb-4 w-10 h-0.5 bg-accent" />
            <h1 className="font-serif text-4xl font-normal text-primary leading-tight sm:text-5xl">
              Roof Pitch Calculator
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
              Enter rise and run, an angle in degrees, or a pitch ratio to instantly calculate roof pitch, slope percentage, and rafter length.
            </p>
          </header>

          {/* Calculator */}
          <section aria-label="Calculator" className="mb-14">
            <Calculator />
          </section>

          {/* Pitch reference table */}
          <section aria-label="Common Roof Pitches Reference Table" className="mb-14">
            <div className="flex items-baseline gap-4 mb-5">
              <h2 className="font-serif text-2xl font-normal text-primary">Common Roof Pitches</h2>
              <span className="text-[10px] uppercase tracking-[0.1em] text-muted">Reference Chart</span>
            </div>
            <PitchTable />
          </section>

          {/* FAQ */}
          <section aria-label="Frequently Asked Questions" className="mb-14">
            <div className="flex items-baseline gap-4 mb-5">
              <h2 className="font-serif text-2xl font-normal text-primary">Frequently Asked Questions</h2>
            </div>
            <FAQ />
          </section>

          {/* Related articles */}
          {recentPosts.length > 0 && (
            <section aria-label="Related Articles" className="mb-8">
              <div className="flex items-baseline gap-4 mb-5">
                <h2 className="font-serif text-2xl font-normal text-primary">Related Articles</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {recentPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}
          {/* Featured On */}
          <section aria-label="Featured On" className="mb-8">
            <div className="flex items-baseline gap-4 mb-5">
              <span className="text-[10px] uppercase tracking-widest text-muted">Featured On</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <a href="https://fazier.com/launches/roofangler.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&theme=light" alt="Featured on Fazier" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
            </div>
          </section>
        </article>
      </div>
    </>
  )
}
