import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import PitchTable from '@/components/PitchTable'
import FAQ from '@/components/FAQ'
import { FAQ_ITEMS } from '@/lib/faq-data'
import BlogCard from '@/components/BlogCard'
import JsonLd from '@/components/JsonLd'
import { getAllPostsMeta } from '@/lib/blog'
import { webApplicationSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://roofpitchcalculator.app'

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
          <header className="mb-8 text-center sm:text-left">
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">
              Roof Pitch Calculator
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted leading-relaxed">
              Enter rise and run, an angle in degrees, or a pitch ratio to instantly calculate roof pitch, slope percentage, and rafter length — free, fast, and mobile-friendly.
            </p>
          </header>

          {/* Calculator */}
          <section aria-label="Calculator" className="mb-12">
            <Calculator />
          </section>

          {/* Pitch reference table */}
          <section aria-label="Common Roof Pitches Reference Table" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-primary">Common Roof Pitches Chart</h2>
            <p className="mb-4 text-muted">
              Quick reference table for all standard roof pitches from 1:12 to 16:12, including angles, slope percentages, and rafter multipliers.
            </p>
            <PitchTable />
          </section>

          {/* FAQ */}
          <section aria-label="Frequently Asked Questions" className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <FAQ />
          </section>

          {/* Related articles */}
          {recentPosts.length > 0 && (
            <section aria-label="Related Articles" className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">Related Articles</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {recentPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </>
  )
}
