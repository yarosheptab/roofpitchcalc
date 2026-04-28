'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'rpc_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  const accept = () => { localStorage.setItem(STORAGE_KEY, 'accepted'); setVisible(false) }
  const reject = () => { localStorage.setItem(STORAGE_KEY, 'rejected'); setVisible(false) }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-xs text-muted leading-relaxed">
          We use cookies to improve your experience.{' '}
          <Link href="/cookie-policy" className="text-primary underline underline-offset-2 hover:text-accent">
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={reject}
            className="cursor-pointer border border-border px-4 py-2 text-xs uppercase tracking-[0.08em] font-medium text-muted transition hover:border-primary hover:text-primary"
          >
            Reject
          </button>
          <button
            onClick={accept}
            className="cursor-pointer border border-primary bg-primary px-4 py-2 text-xs uppercase tracking-[0.08em] font-medium text-surface transition hover:bg-transparent hover:text-primary"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
