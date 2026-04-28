import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  const navLinks = [['/', 'Calculator'], ['/blog', 'Roofing Blog']] as const
  const legalLinks = [
    ['/privacy-policy',   'Privacy Policy'],
    ['/terms-of-service', 'Terms of Service'],
    ['/disclaimer',       'Disclaimer'],
    ['/cookie-policy',    'Cookie Policy'],
  ] as const

  return (
    <footer className="border-t border-border bg-primary mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg text-surface mb-3">Roof Pitch Calculator</p>
            <p className="text-sm leading-relaxed text-[#A09890]">
              Free online tool for calculating roof pitch, angle in degrees, slope percentage, and rafter length.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.14em] font-medium text-[#A09890] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#C8C0B8] hover:text-surface transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.14em] font-medium text-[#A09890] mb-4">
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#C8C0B8] hover:text-surface transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#2E2B26] pt-6 text-xs text-[#7A7168]">
          © {year} Roof Pitch Calculator. All rights reserved.
          Results are for informational purposes only — verify with a licensed contractor before construction.
        </div>
      </div>
    </footer>
  )
}
