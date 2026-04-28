'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'rpc_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface shadow-lg"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-site-text leading-relaxed">
          We use cookies to improve your experience.{' '}
          <Link href="/cookie-policy" className="text-accent underline hover:no-underline">
            See our Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={reject}
            className="cursor-pointer rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition hover:bg-bg"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={accept}
            className="cursor-pointer rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
