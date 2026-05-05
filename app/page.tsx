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
              <a href="https://earlyhunt.com/project/roof-pitch-calculator-calculate-pitch-angle-rafter-length-free" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://earlyhunt.com/badges/earlyhunt-badge-light.svg" alt="Featured on EarlyHunt" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://open-launch.com/projects/roof-pitch-calculator" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://open-launch.com/api/badge/a995022e-cd31-436a-8ee1-5871da0395f4/featured-light.svg" alt="Featured on Open-Launch" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://findly.tools/roof-pitch-calculator?utm_source=roof-pitch-calculator" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://findly.tools/badges/findly-tools-badge-light.svg" alt="Featured on Findly.tools" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://twelve.tools" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://twelve.tools/badge0-light.svg" alt="Featured on Twelve Tools" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://startupfa.me/s/roof-pitch-calc?utm_source=roofangler.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://startupfa.me/badges/featured-badge.webp" alt="Featured on Startup Fame" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://submitmysaas.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://submitmysaas.com/featured-badge.png" alt="Featured on SubmitMySaas" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://acidtools.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://acidtools.com/assets/images/badge.png" alt="Featured on Acid Tools" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://appalist.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://appalist.com/assets/images/badge.png" alt="Featured on Appa List" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://dofollow.tools" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://dofollow.tools/badge/badge_light.svg" alt="Featured on Dofollow.Tools" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://neeed.directory/products/roof-pitch-calculator?utm_source=roof-pitch-calculator" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://neeed.directory/badges/neeed-badge-light.svg" alt="Featured on neeed.directory" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://www.foundrlist.com/product/roofpitchcalculator?utm_source=badge&utm_medium=embed" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://www.foundrlist.com/api/badge/roofpitchcalculator" alt="Featured on FoundrList" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://ufind.best/products/roof-pitch-calculator" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://ufind.best/badges/ufind-best-badge-light.svg" alt="Featured on ufind.best" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://weliketools.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://weliketools.com/assets/images/badge.png" alt="We Like Tools" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://productfame.com/products/roof-pitch-calculator" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://productfame.com/badges/featured-light.svg" alt="Featured on ProductFame" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://tinylaunchpad.com/projects/roof-pitch-calculator" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://tinylaunchpad.com/images/badges/featured-on-light-mode.png" alt="Featured on TinyLaunchpad" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://unitelist.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://unitelist.com/assets/images/badge.png" alt="Unite List" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://turbo0.com/item/roof-pitch-calculator" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://img.turbo0.com/badge-listed-light.svg" alt="Listed on Turbo0" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://openhunts.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://cdn.openhunts.com/badges/club.webp" alt="OpenHunts Club Member" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://toolparade.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://toolparade.com/assets/images/badge.png" alt="Featured on Tool Parade" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://www.tinystartups.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://www.tinystartups.com/api/featured-badge/cmosw6lby0006136w2ug1004z" alt="Featured on Tiny Startups" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://submithunt.com" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://submithunt.com/badge.png" alt="Featured on SubmitHunt" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://launchigniter.com/product/roof-pitch-calculator?ref=badge-roof-pitch-calculator" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://launchigniter.com/api/badge/roof-pitch-calculator?theme=light" alt="Featured on LaunchIgniter" width={212} height={55} style={{ height: 55, width: 'auto' }} />
              </a>
              <a href="https://startupfa.st" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://startupfa.st/images/badges/powered-by-light.svg" alt="Featured on Startup Fast" height={44} style={{ height: 44, width: 'auto' }} />
              </a>
              <a href="https://saaspa.ge/product/cmot0hns90001ic04nni620tt" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://saaspa.ge/api/embed/product/cmot0hns90001ic04nni620tt/badge.png?theme=orange" alt="Featured on Saaspa.ge" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://postmake.io" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
                <img src="https://postmake.io/postmake_badge_light.png" alt="Featured on Postmake" height={40} style={{ height: 40, width: 'auto' }} />
              </a>
              <a href="https://www.microsaasexamples.com/" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100 text-xs text-muted font-sans uppercase tracking-widest">
                Featured On Micro SaaS Examples
              </a>
            </div>
          </section>
        </article>
      </div>
    </>
  )
}
