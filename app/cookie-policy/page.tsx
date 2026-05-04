import type { Metadata } from 'next'
import Link from 'next/link'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://roofangler.com'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Cookie policy for Roof Pitch Calculator. Learn what cookies we use and how to manage them.',
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
}

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href="/" className="mb-6 text-sm text-muted">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-primary mb-2">Cookie Policy</h1>
      <p className="text-sm text-muted mb-8">Last Updated: April 29, 2026</p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">What Are Cookies?</h2>
      <p className="text-muted leading-relaxed mb-4">
        Cookies are small text files placed on your device by a website when you visit it. They
        are widely used to make websites work correctly, remember your preferences, and provide
        site operators with information about how visitors interact with their pages. Cookies are
        stored by your browser and sent back to the originating website on subsequent visits.
      </p>
      <p className="text-muted leading-relaxed mb-4">
        In addition to cookies, we also use <code>localStorage</code> — a browser feature that
        stores data locally on your device. Unlike cookies, <code>localStorage</code> data is
        never automatically transmitted to a server; it stays on your device unless you clear
        your browser data.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Cookies We Use</h2>
      <p className="text-muted leading-relaxed mb-4">
        We use a minimal set of cookies and local storage, grouped into two categories:
      </p>

      <h3 className="font-semibold text-primary mt-6 mb-2">1. Essential Storage</h3>
      <p className="text-muted leading-relaxed mb-4">
        We store your cookie consent preference in <code>localStorage</code> under the key{' '}
        <code>cookie-consent</code>. This allows us to remember whether you have accepted or
        declined non-essential cookies so we do not show the consent banner on every page visit.
        This preference is stored only on your device and is never sent to our servers.
      </p>
      <p className="text-muted leading-relaxed mb-4">
        This storage is essential to the functioning of the consent mechanism and is set
        regardless of your cookie preference.
      </p>

      <h3 className="font-semibold text-primary mt-6 mb-2">2. Analytics Cookies</h3>
      <p className="text-muted leading-relaxed mb-4">
        If you accept analytics cookies, the following may be set:
      </p>
      <ul className="list-disc pl-6 text-muted leading-relaxed mb-4 space-y-1">
        <li>
          <strong>Vercel Analytics</strong> — may set anonymous session identifiers to track
          aggregate page view counts and performance metrics. No personal data is collected.
          Data is processed by Vercel in accordance with their privacy policy.
        </li>
        <li>
          <strong>Google Analytics</strong> (if enabled) — sets <code>_ga</code> and{' '}
          <code>_gid</code> cookies to distinguish unique visitors and sessions for traffic
          analysis. These cookies do not identify you personally. The <code>_ga</code> cookie
          persists for 2 years; <code>_gid</code> persists for 24 hours.
        </li>
      </ul>
      <p className="text-muted leading-relaxed mb-4">
        We do not use advertising, remarketing, or cross-site tracking cookies of any kind.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">How to Disable Cookies</h2>
      <p className="text-muted leading-relaxed mb-4">
        You can control and manage cookies through your browser settings. Most browsers allow
        you to view, block, or delete cookies. Instructions for common browsers:
      </p>
      <ul className="list-disc pl-6 text-muted leading-relaxed mb-4 space-y-1">
        <li>
          <strong>Chrome</strong> — Settings › Privacy and security › Cookies and other site data
        </li>
        <li>
          <strong>Firefox</strong> — Settings › Privacy & Security › Cookies and Site Data
        </li>
        <li>
          <strong>Safari</strong> — Preferences › Privacy › Manage Website Data
        </li>
        <li>
          <strong>Edge</strong> — Settings › Cookies and site permissions › Manage and delete
          cookies
        </li>
      </ul>
      <p className="text-muted leading-relaxed mb-4">
        Disabling analytics cookies will not affect the functionality of the roof pitch
        calculator — all calculations run entirely in your browser and do not rely on cookies.
        Clearing <code>localStorage</code> will reset your cookie consent preference and you
        will see the consent banner again on your next visit.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Third-Party Cookies</h2>
      <p className="text-muted leading-relaxed mb-4">
        The third-party services that may set cookies on this site are:
      </p>
      <ul className="list-disc pl-6 text-muted leading-relaxed mb-4 space-y-1">
        <li>
          <strong>Vercel</strong> — our hosting provider. See Vercel&apos;s cookie information
          at vercel.com/legal/privacy-policy.
        </li>
        <li>
          <strong>Google Analytics</strong> (optional) — analytics service by Google LLC. See
          Google&apos;s cookie usage at policies.google.com/technologies/cookies.
        </li>
      </ul>
      <p className="text-muted leading-relaxed mb-4">
        We do not allow any other third parties to set cookies through this site.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Cookie Consent</h2>
      <p className="text-muted leading-relaxed mb-4">
        When you first visit roofangler.com, a cookie consent banner will appear.
        You can choose to:
      </p>
      <ul className="list-disc pl-6 text-muted leading-relaxed mb-4 space-y-1">
        <li>
          <strong>Accept all cookies</strong> — enables both essential storage and analytics
          cookies.
        </li>
        <li>
          <strong>Reject non-essential cookies</strong> — only the essential consent preference
          is stored in <code>localStorage</code>; no analytics cookies will be set.
        </li>
      </ul>
      <p className="text-muted leading-relaxed mb-4">
        Your choice is saved in <code>localStorage</code> so you are not prompted again. You
        can change your preference at any time by clearing your browser&apos;s local storage or
        site data, which will reset the banner on your next visit.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Contact</h2>
      <p className="text-muted leading-relaxed mb-4">
        If you have any questions about our use of cookies or this Cookie Policy, please contact
        us at{' '}
        <a href="mailto:contact@roofangler.com" className="underline">
          contact@roofangler.com
        </a>
        .
      </p>
    </div>
  )
}
