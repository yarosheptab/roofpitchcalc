'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/faq-data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="border border-border divide-y divide-border">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="cursor-pointer flex w-full items-start justify-between gap-6 bg-surface px-5 py-4 text-left transition hover:bg-bg"
            aria-expanded={openIndex === i}
          >
            <h3 className="text-sm font-medium text-primary leading-snug">{item.question}</h3>
            <span className="shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center border border-border text-muted text-xs font-mono leading-none">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <div className="border-t border-border bg-bg px-5 py-4 text-sm text-muted leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
