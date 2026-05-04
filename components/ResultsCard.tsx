import type { RoofCalcResult } from '@/types';

const CATEGORY_CONFIG: Record<string, { label: string; color: string }> = {
  flat:         { label: 'Flat',         color: '#5B8DB8' },
  low:          { label: 'Low Slope',    color: '#B87A1A' },
  conventional: { label: 'Conventional', color: '#2D6A4F' },
  steep:        { label: 'Steep',        color: '#C0391E' },
}

interface Props {
  result: RoofCalcResult | null
  spanFt: number | null
}

export default function ResultsCard({ result, spanFt }: Props) {
  if (!result) {
    return (
      <div className="border border-border bg-surface p-6 text-center text-sm text-muted">
        Enter values above to see results.
      </div>
    )
  }

  const cat = CATEGORY_CONFIG[result.category]

  const items = [
    { label: 'Pitch Ratio', value: `${parseFloat(result.pitchRatio.toFixed(2))}`, unit: ':12' },
    { label: 'Angle',       value: `${result.angleDeg.toFixed(2)}`,   unit: '°'   },
    { label: 'Slope',       value: `${result.slopePct.toFixed(1)}`,   unit: '%'   },
    { label: 'Rafter Mult.', value: result.rafterMultiplier.toFixed(4), unit: 'x' },
    ...(spanFt && result.rafterLengthFt !== null
      ? [{ label: 'Rafter Length', value: result.rafterLengthFt.toFixed(2), unit: 'ft', highlight: true }]
      : []),
  ]

  return (
    <div className="border border-border bg-surface">
      {/* Header row */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="text-xs uppercase tracking-widest font-medium text-muted">Results</span>
        <span
          className="text-xs uppercase tracking-[0.08em] font-semibold px-2.5 py-1 border"
          style={{ color: cat.color, borderColor: cat.color }}
        >
          {cat.label}
        </span>
      </div>

      {/* Data grid */}
      <div className="divide-y divide-border">
        {items.map((item, i) => (
          <div key={i} className="flex items-baseline justify-between px-4 py-3">
            <span className="text-xs uppercase tracking-[0.08em] text-muted">{item.label}</span>
            <span className={`font-mono text-2xl font-medium tracking-tight ${'highlight' in item && item.highlight ? 'text-accent' : 'text-data'}`}>
              {item.value}
              <span className="text-sm text-muted ml-0.5">{item.unit}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
