import type { Metadata } from 'next'
import { DM_Serif_Display, Sora, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import JsonLd from '@/components/JsonLd'

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: '400',
})

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://roofangler.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Roof Pitch Calculator – Calculate Pitch, Angle & Rafter Length Free',
    template: '%s | Roof Pitch Calculator',
  },
  description:
    'Free roof pitch calculator. Enter rise and run to instantly calculate pitch ratio, angle in degrees, slope percentage, and rafter length. Fast, accurate, mobile-friendly.',
  keywords: [
    'roof pitch calculator',
    'roof angle calculator',
    'rafter length calculator',
    'slope calculator',
    'roof pitch to degrees',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Roof Pitch Calculator',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Roof Pitch Calculator',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${sora.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <JsonLd schema={websiteSchema} />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-site-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
