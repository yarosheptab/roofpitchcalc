import type { Metadata } from 'next'
import Link from 'next/link'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://roofpitchcalculator.app'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Roof Pitch Calculator. Learn how we handle your data.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href="/" className="mb-6 text-sm text-muted">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-primary mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted mb-8">Last Updated: April 29, 2026</p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Introduction</h2>
      <p className="text-muted leading-relaxed mb-4">
        Welcome to Roof Pitch Calculator. This Privacy Policy explains how we collect, use, and
        protect information when you visit roofpitchcalculator.app. Our calculator runs entirely
        in your browser — no calculation inputs or results are ever transmitted to our servers.
        We are committed to being transparent about the limited data we do collect.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Information We Collect</h2>
      <p className="text-muted leading-relaxed mb-4">
        We do not collect any personally identifiable information. The only data collected is
        standard, anonymized analytics data used to understand how visitors use the site:
      </p>
      <ul className="list-disc pl-6 text-muted leading-relaxed mb-4 space-y-1">
        <li>Page views and navigation paths</li>
        <li>General geographic location (country or region level — not precise location)</li>
        <li>Device type, operating system, and browser</li>
        <li>Referral source (how you arrived at the site)</li>
      </ul>
      <p className="text-muted leading-relaxed mb-4">
        This data is collected in aggregate and cannot be used to identify any individual visitor.
        No names, email addresses, IP addresses (in identifiable form), or other personal data
        are stored by us.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Cookies and Local Storage</h2>
      <p className="text-muted leading-relaxed mb-4">
        We use your browser's <code>localStorage</code> to save your cookie consent preference
        so you are not asked again on each visit. This preference is stored locally on your
        device only and is never transmitted to us.
      </p>
      <p className="text-muted leading-relaxed mb-4">
        Analytics tools integrated into this site (see Third-Party Services below) may set
        cookies in your browser to distinguish unique sessions and measure traffic patterns. We
        do not use any marketing, advertising, retargeting, or cross-site tracking cookies.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Third-Party Services</h2>
      <p className="text-muted leading-relaxed mb-4">
        We rely on the following third-party services to operate this site:
      </p>
      <ul className="list-disc pl-6 text-muted leading-relaxed mb-4 space-y-1">
        <li>
          <strong>Vercel</strong> — hosts the website and provides Vercel Analytics for
          privacy-friendly, aggregate traffic measurement. Vercel&apos;s privacy policy is
          available at vercel.com/legal/privacy-policy.
        </li>
        <li>
          <strong>Google Analytics</strong> (optional, if enabled) — may be used to collect
          anonymized usage statistics via cookies. If enabled, data is processed in accordance
          with Google&apos;s privacy policy at policies.google.com/privacy.
        </li>
      </ul>
      <p className="text-muted leading-relaxed mb-4">
        We do not sell, rent, or share your data with any other third parties.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Your Rights (GDPR / CCPA)</h2>
      <p className="text-muted leading-relaxed mb-4">
        Depending on your location, you may have the following rights regarding your data:
      </p>
      <ul className="list-disc pl-6 text-muted leading-relaxed mb-4 space-y-1">
        <li>
          <strong>Right to access</strong> — request information about what data (if any) is
          held about you.
        </li>
        <li>
          <strong>Right to deletion</strong> — request deletion of any data associated with
          your visit.
        </li>
        <li>
          <strong>Right to opt out</strong> — opt out of analytics tracking at any time by
          disabling cookies in your browser settings or declining via our cookie consent banner.
        </li>
      </ul>
      <p className="text-muted leading-relaxed mb-4">
        Because we collect only aggregate, anonymized analytics data, we cannot identify or
        retrieve data associated with a specific individual. To exercise any of the above rights
        or ask a privacy-related question, please contact us at{' '}
        <a href="mailto:contact@roofpitchcalculator.app" className="underline">
          contact@roofpitchcalculator.app
        </a>
        .
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Children's Privacy</h2>
      <p className="text-muted leading-relaxed mb-4">
        This site is not directed at children under the age of 13. We do not knowingly collect
        any information from children. If you believe a child has provided information through
        this site, please contact us and we will take appropriate action.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Changes to This Policy</h2>
      <p className="text-muted leading-relaxed mb-4">
        We may update this Privacy Policy from time to time to reflect changes in our practices
        or legal requirements. When we do, we will update the "Last Updated" date at the top of
        this page. We encourage you to review this policy periodically. Continued use of the
        site after changes are posted constitutes your acceptance of the updated policy.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Contact</h2>
      <p className="text-muted leading-relaxed mb-4">
        If you have any questions or concerns about this Privacy Policy or your data, please
        reach out to us at{' '}
        <a href="mailto:contact@roofpitchcalculator.app" className="underline">
          contact@roofpitchcalculator.app
        </a>
        .
      </p>
    </div>
  )
}
