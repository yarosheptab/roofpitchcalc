import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary text-white mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Col 1 */}
          <div>
            <p className="text-lg font-bold mb-2">Roof Pitch Calculator</p>
            <p className="text-sm text-blue-200 leading-relaxed">
              Free online tool to calculate roof pitch, angle, slope percentage, and rafter length instantly.
            </p>
            <p className="mt-4 text-xs text-blue-300">© {year} Roof Pitch Calculator</p>
          </div>

          {/* Col 2 */}
          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wide text-blue-200">Quick Links</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/" className="text-blue-100 hover:text-white transition-colors">Calculator</Link></li>
              <li><Link href="/blog" className="text-blue-100 hover:text-white transition-colors">Roofing Blog</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wide text-blue-200">Legal</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/privacy-policy" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-blue-100 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-blue-100 hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="/cookie-policy" className="text-blue-100 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-800 pt-6 text-center text-xs text-blue-300">
          © {year} Roof Pitch Calculator. All rights reserved. For informational purposes only — always consult a licensed roofing contractor.
        </div>
      </div>
    </footer>
  )
}
