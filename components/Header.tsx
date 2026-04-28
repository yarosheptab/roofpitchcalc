'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Calculator' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl text-primary tracking-tight">
            Roof Pitch Calculator
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-sans mt-0.5">
            Free Online Tool
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors pb-0.5 ${
                pathname === href
                  ? 'text-accent border-b border-accent'
                  : 'text-muted hover:text-primary border-b border-transparent'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="cursor-pointer sm:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`block h-px w-6 bg-primary transition-all duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-primary transition-all duration-200 ${menuOpen ? 'scale-x-0' : ''}`} />
          <span className={`block h-px w-6 bg-primary transition-all duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-border bg-surface px-4 py-5 flex flex-col gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${pathname === href ? 'text-accent' : 'text-muted hover:text-primary'}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
