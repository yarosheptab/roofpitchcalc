'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl select-none">🏠</span>
          <span className="font-bold text-primary group-hover:text-accent transition-colors">
            Roof Pitch Calculator
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-site-text hover:text-accent transition-colors">
            Calculator
          </Link>
          <Link href="/blog" className="text-site-text hover:text-accent transition-colors">
            Blog
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 bg-primary transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-primary transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-primary transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-border bg-surface px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-site-text hover:text-accent transition-colors">
            Calculator
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-site-text hover:text-accent transition-colors">
            Blog
          </Link>
        </nav>
      )}
    </header>
  )
}
