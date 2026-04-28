'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/faq-data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="cursor-pointer flex w-full items-center justify-between gap-4 bg-surface px-5 py-4 text-left transition hover:bg-bg"
            aria-expanded={openIndex === i}
          >
            <h3 className="font-semibold text-primary text-sm sm:text-base">{item.question}</h3>
            <span className="shrink-0 text-accent text-xl leading-none">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 pt-1 text-sm text-muted leading-relaxed bg-surface border-t border-border">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
