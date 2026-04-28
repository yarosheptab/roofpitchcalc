import type { Metadata } from 'next'
import Link from 'next/link'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://roofpitchcalculator.app'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Roof Pitch Calculator. Informational use only.',
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
}

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href="/" className="mb-6 text-sm text-muted">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-primary mb-2">Terms of Service</h1>
      <p className="text-sm text-muted mb-8">Last Updated: April 29, 2026</p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Acceptance of Terms</h2>
      <p className="text-muted leading-relaxed mb-4">
        By accessing or using Roof Pitch Calculator at roofpitchcalculator.app, you agree to be
        bound by these Terms of Service. If you do not agree to these terms, please do not use
        this site. These terms apply to all visitors and users of the site.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Use of the Tool</h2>
      <p className="text-muted leading-relaxed mb-4">
        Roof Pitch Calculator is provided "as is" for informational and educational purposes
        only. The calculator is intended to assist with general roof pitch estimation and related
        measurements. It is not a substitute for a professional roofing assessment, engineering
        evaluation, or licensed contractor inspection.
      </p>
      <p className="text-muted leading-relaxed mb-4">
        Before making any construction, renovation, or purchasing decisions based on results
        from this tool, you should consult a qualified roofing professional who can assess your
        specific situation in person.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Accuracy of Calculations</h2>
      <p className="text-muted leading-relaxed mb-4">
        The calculations provided by this tool are based on standard mathematical formulas for
        roof geometry. While we strive to ensure these formulas are correctly implemented, we
        make no warranties — express or implied — regarding the accuracy, completeness, or
        fitness for purpose of any calculation result.
      </p>
      <p className="text-muted leading-relaxed mb-4">
        Output accuracy depends entirely on the accuracy of the values you enter. All results
        should be independently verified by a licensed roofing contractor or structural engineer
        before any construction, material ordering, or financial commitment.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Intellectual Property</h2>
      <p className="text-muted leading-relaxed mb-4">
        All content on this site — including but not limited to text, graphics, user interface
        design, code, and calculation logic — is owned by or licensed to Roof Pitch Calculator.
        All rights are reserved. You may use the tool for personal, non-commercial purposes but
        may not reproduce, distribute, or create derivative works without our prior written
        consent.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Limitation of Liability</h2>
      <p className="text-muted leading-relaxed mb-4">
        To the fullest extent permitted by applicable law, Roof Pitch Calculator and its
        operators shall not be liable for any direct, indirect, incidental, special, or
        consequential damages arising out of or in connection with your use of, or inability to
        use, this site or any calculation results obtained from it. This includes, without
        limitation:
      </p>
      <ul className="list-disc pl-6 text-muted leading-relaxed mb-4 space-y-1">
        <li>Construction defects, overruns, or project failures</li>
        <li>Financial loss resulting from material over- or under-ordering</li>
        <li>Property damage arising from incorrect pitch assessment</li>
        <li>Any other loss or damage related to reliance on the tool's output</li>
      </ul>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Prohibited Uses</h2>
      <p className="text-muted leading-relaxed mb-4">
        You agree not to use this site in any of the following ways:
      </p>
      <ul className="list-disc pl-6 text-muted leading-relaxed mb-4 space-y-1">
        <li>
          Scraping, crawling, or systematically downloading site content using automated tools
          without our prior written permission
        </li>
        <li>
          Reproducing or redistributing this tool or its content for commercial purposes without
          our explicit written consent
        </li>
        <li>
          Attempting to decompile, reverse engineer, or access the source code of proprietary
          components of this site
        </li>
        <li>
          Using the site in any way that violates applicable local, national, or international
          laws or regulations
        </li>
      </ul>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Governing Law</h2>
      <p className="text-muted leading-relaxed mb-4">
        These Terms of Service shall be governed by and construed in accordance with applicable
        law. Any disputes arising under or in connection with these terms shall be subject to
        the exclusive jurisdiction of the courts of competent jurisdiction in the applicable
        territory.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Changes to Terms</h2>
      <p className="text-muted leading-relaxed mb-4">
        We reserve the right to modify these Terms of Service at any time. Changes will be
        effective immediately upon posting to the site. The "Last Updated" date at the top of
        this page will reflect when changes were last made. Your continued use of the site after
        any changes constitutes your acceptance of the revised terms.
      </p>

      <h2 className="text-xl font-bold text-primary mt-8 mb-3">Contact</h2>
      <p className="text-muted leading-relaxed mb-4">
        If you have any questions about these Terms of Service, please contact us at{' '}
        <a href="mailto:contact@roofpitchcalculator.app" className="underline">
          contact@roofpitchcalculator.app
        </a>
        .
      </p>
    </div>
  )
}
