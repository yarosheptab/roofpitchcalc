'use client'

import { useState, useCallback } from 'react'
import { fromRiseRun, fromAngle, fromPitchRatio, addRafterLength } from '@/lib/calculations'
import type { RoofCalcResult } from '@/types'
import ResultsCard from './ResultsCard'
import RoofDiagram from './RoofDiagram'

type Tab = 'riserun' | 'angle' | 'pitch'

function NumInput({
  id,
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 0.1,
  unit,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  min?: number
  max?: number
  step?: number
  unit?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-site-text">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border-2 border-border bg-surface p-3 pr-12 text-base outline-none transition focus:border-accent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="0"
        />
        {unit && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted">
            {unit}
          </span>
        )}
      </div>
    </div>
  )
}

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<Tab>('riserun')

  // Tab 1 — Rise & Run
  const [rise, setRise] = useState('')
  const [run, setRun] = useState('')

  // Tab 2 — Angle
  const [angle, setAngle] = useState('')

  // Tab 3 — Pitch ratio
  const [pitch, setPitch] = useState('')

  // Common
  const [span, setSpan] = useState('')
  const [result, setResult] = useState<RoofCalcResult | null>(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const spanFt = span !== '' && !isNaN(Number(span)) ? Number(span) : null

  const compute = useCallback(
    (tab: Tab, r: string, ru: string, a: string, p: string, s: string) => {
      setError('')
      try {
        let base: RoofCalcResult
        if (tab === 'riserun') {
          const rv = parseFloat(r)
          const ruv = parseFloat(ru)
          if (!r || !ru || isNaN(rv) || isNaN(ruv) || ruv <= 0) {
            setResult(null)
            return
          }
          base = fromRiseRun(rv, ruv)
        } else if (tab === 'angle') {
          const av = parseFloat(a)
          if (!a || isNaN(av) || av <= 0 || av >= 90) {
            setResult(null)
            return
          }
          base = fromAngle(av)
        } else {
          const pv = parseFloat(p)
          if (!p || isNaN(pv) || pv <= 0) {
            setResult(null)
            return
          }
          base = fromPitchRatio(pv)
        }

        const sv = parseFloat(s)
        const final = s && !isNaN(sv) && sv > 0 ? addRafterLength(base, sv) : base
        setResult(final)

        // Cross-update other tabs
        if (tab !== 'angle') setAngle(base.angleDeg.toFixed(2))
        if (tab !== 'pitch') setPitch(base.pitchRatio.toFixed(2))
        if (tab !== 'riserun' && tab === 'angle') {
          setRise(base.pitchRatio.toFixed(2))
          setRun('12')
        }
        if (tab !== 'riserun' && tab === 'pitch') {
          setRise(base.pitchRatio.toFixed(2))
          setRun('12')
        }
      } catch {
        setError('Invalid input values.')
        setResult(null)
      }
    },
    []
  )

  const handleRise = (v: string) => { setRise(v); compute('riserun', v, run, angle, pitch, span) }
  const handleRun = (v: string) => { setRun(v); compute('riserun', rise, v, angle, pitch, span) }
  const handleAngle = (v: string) => { setAngle(v); compute('angle', rise, run, v, pitch, span) }
  const handlePitch = (v: string) => { setPitch(v); compute('pitch', rise, run, angle, v, span) }
  const handleSpan = (v: string) => { setSpan(v); compute(activeTab, rise, run, angle, pitch, v) }

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
    setError('')
  }

  const reset = () => {
    setRise(''); setRun(''); setAngle(''); setPitch(''); setSpan('')
    setResult(null); setError('')
  }

  const copyResults = () => {
    if (!result) return
    const text = [
      `Pitch Ratio: ${result.pitchRatio.toFixed(2)}:12`,
      `Angle: ${result.angleDeg.toFixed(1)}°`,
      `Slope: ${result.slopePct.toFixed(1)}%`,
      `Rafter Multiplier: ${result.rafterMultiplier.toFixed(4)}`,
      result.rafterLengthFt !== null ? `Rafter Length: ${result.rafterLengthFt.toFixed(2)} ft` : '',
      `Category: ${result.category}`,
    ]
      .filter(Boolean)
      .join('\n')
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const TABS: { id: Tab; label: string }[] = [
    { id: 'riserun', label: 'Rise & Run' },
    { id: 'angle', label: 'Angle' },
    { id: 'pitch', label: 'Pitch Ratio' },
  ]

  return (
    <div className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
      {/* Tab bar */}
      <div className="flex border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`cursor-pointer flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-accent text-accent bg-orange-50'
                : 'text-muted hover:text-site-text hover:bg-bg'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-5">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Inputs column */}
          <div className="flex flex-col gap-4 lg:w-80">
            {activeTab === 'riserun' && (
              <>
                <NumInput id="rise" label="Rise (inches)" value={rise} onChange={handleRise} min={0} step={0.1} unit="in" />
                <NumInput id="run" label="Run (inches)" value={run} onChange={handleRun} min={0.1} step={0.1} unit="in" />
              </>
            )}
            {activeTab === 'angle' && (
              <NumInput id="angle" label="Angle (degrees)" value={angle} onChange={handleAngle} min={0.1} max={89} step={0.1} unit="°" />
            )}
            {activeTab === 'pitch' && (
              <NumInput id="pitch" label="Pitch (X in X:12)" value={pitch} onChange={handlePitch} min={0.1} step={0.1} unit=":12" />
            )}

            <div className="border-t border-border pt-4">
              <NumInput id="span" label="Roof Span (optional, for rafter length)" value={span} onChange={handleSpan} min={0} step={0.5} unit="ft" />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
            )}

            <div className="flex gap-2 pt-1">
              <button
                onClick={reset}
                className="cursor-pointer flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted transition hover:bg-bg"
              >
                Reset
              </button>
              <button
                onClick={copyResults}
                disabled={!result}
                className="cursor-pointer flex-1 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {copied ? 'Copied!' : 'Copy Results'}
              </button>
            </div>
          </div>

          {/* Right column: diagram + results */}
          <div className="flex flex-col gap-4 flex-1">
            <RoofDiagram result={result} spanFt={spanFt} />
            <ResultsCard result={result} spanFt={spanFt} />
          </div>
        </div>
      </div>
    </div>
  )
}
