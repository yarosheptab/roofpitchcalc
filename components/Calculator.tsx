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
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.12em] font-medium text-muted">
        {label}
      </label>
      <div className="relative flex items-center border border-border bg-bg focus-within:border-primary transition-colors">
        <input
          id={id}
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent py-3 pl-3 pr-12 font-mono text-base text-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="—"
        />
        {unit && (
          <span className="absolute right-3 text-xs text-muted pointer-events-none font-mono">
            {unit}
          </span>
        )}
      </div>
    </div>
  )
}

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<Tab>('riserun')
  const [rise, setRise] = useState('')
  const [run, setRun] = useState('')
  const [angle, setAngle] = useState('')
  const [pitch, setPitch] = useState('')
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
          if (!r || !ru || isNaN(rv) || isNaN(ruv) || ruv <= 0) { setResult(null); return }
          base = fromRiseRun(rv, ruv)
        } else if (tab === 'angle') {
          const av = parseFloat(a)
          if (!a || isNaN(av) || av <= 0 || av >= 90) { setResult(null); return }
          base = fromAngle(av)
        } else {
          const pv = parseFloat(p)
          if (!p || isNaN(pv) || pv <= 0) { setResult(null); return }
          base = fromPitchRatio(pv)
        }
        const sv = parseFloat(s)
        const final = s && !isNaN(sv) && sv > 0 ? addRafterLength(base, sv) : base
        setResult(final)
        if (tab !== 'angle') setAngle(base.angleDeg.toFixed(2))
        if (tab !== 'pitch') setPitch(base.pitchRatio.toFixed(2))
        if (tab !== 'riserun') { setRise(base.pitchRatio.toFixed(2)); setRun('12') }
      } catch {
        setError('Invalid input values.')
        setResult(null)
      }
    },
    []
  )

  const handleRise  = (v: string) => { setRise(v);  compute('riserun', v, run, angle, pitch, span) }
  const handleRun   = (v: string) => { setRun(v);   compute('riserun', rise, v, angle, pitch, span) }
  const handleAngle = (v: string) => { setAngle(v); compute('angle', rise, run, v, pitch, span) }
  const handlePitch = (v: string) => { setPitch(v); compute('pitch', rise, run, angle, v, span) }
  const handleSpan  = (v: string) => { setSpan(v);  compute(activeTab, rise, run, angle, pitch, v) }

  const reset = () => {
    setRise(''); setRun(''); setAngle(''); setPitch(''); setSpan('')
    setResult(null); setError('')
  }

  const copyResults = () => {
    if (!result) return
    const lines = [
      `Pitch Ratio: ${result.pitchRatio.toFixed(2)}:12`,
      `Angle: ${result.angleDeg.toFixed(1)}°`,
      `Slope: ${result.slopePct.toFixed(1)}%`,
      `Rafter Multiplier: ${result.rafterMultiplier.toFixed(4)}`,
      result.rafterLengthFt !== null ? `Rafter Length: ${result.rafterLengthFt.toFixed(2)} ft` : '',
    ].filter(Boolean).join('\n')
    navigator.clipboard.writeText(lines).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const TABS: { id: Tab; label: string }[] = [
    { id: 'riserun', label: 'Rise & Run' },
    { id: 'angle',   label: 'Angle'      },
    { id: 'pitch',   label: 'Pitch Ratio'},
  ]

  return (
    <div className="border border-border bg-surface">
      {/* Tab bar */}
      <div className="flex border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setError('') }}
            className={`cursor-pointer flex-1 px-4 py-3.5 text-xs uppercase tracking-[0.1em] font-medium transition-colors border-b-2 ${
              activeTab === tab.id
                ? 'border-primary text-primary bg-bg'
                : 'border-transparent text-muted hover:text-primary hover:bg-bg'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-5">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Input column */}
          <div className="flex flex-col gap-4 lg:w-72">
            {activeTab === 'riserun' && (
              <>
                <NumInput id="rise" label="Rise" value={rise} onChange={handleRise} min={0} step={0.1} unit="inches" />
                <NumInput id="run"  label="Run"  value={run}  onChange={handleRun}  min={0.1} step={0.1} unit="inches" />
              </>
            )}
            {activeTab === 'angle' && (
              <NumInput id="angle" label="Angle" value={angle} onChange={handleAngle} min={0.1} max={89} step={0.1} unit="degrees" />
            )}
            {activeTab === 'pitch' && (
              <NumInput id="pitch" label="Pitch ratio (X in X:12)" value={pitch} onChange={handlePitch} min={0.1} step={0.1} unit=":12" />
            )}

            <div className="border-t border-border pt-4">
              <NumInput id="span" label="Roof Span — optional" value={span} onChange={handleSpan} min={0} step={0.5} unit="feet" />
              <p className="mt-1.5 text-[10px] text-muted leading-relaxed">
                Used to calculate rafter length. Enter the full width of the roof span.
              </p>
            </div>

            {error && (
              <p className="border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>
            )}

            <div className="flex gap-2 pt-1">
              <button
                onClick={reset}
                className="cursor-pointer flex-1 border border-border bg-bg px-4 py-2.5 text-xs uppercase tracking-[0.08em] font-medium text-muted transition hover:border-primary hover:text-primary"
              >
                Reset
              </button>
              <button
                onClick={copyResults}
                disabled={!result}
                className="cursor-pointer flex-1 border border-primary bg-primary px-4 py-2.5 text-xs uppercase tracking-[0.08em] font-medium text-surface transition hover:bg-transparent hover:text-primary disabled:border-border disabled:bg-bg disabled:text-muted disabled:cursor-not-allowed"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 flex-1">
            <RoofDiagram result={result} spanFt={spanFt} />
            <ResultsCard result={result} spanFt={spanFt} />
          </div>
        </div>
      </div>
    </div>
  )
}
