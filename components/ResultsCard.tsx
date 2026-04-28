import type { RoofCalcResult } from '@/types'

const CATEGORY_STYLES: Record<string, { label: string; classes: string }> = {
  flat: { label: 'Flat', classes: 'bg-blue-100 text-blue-800' },
  low: { label: 'Low Slope', classes: 'bg-yellow-100 text-yellow-800' },
  conventional: { label: 'Conventional', classes: 'bg-green-100 text-green-700' },
  steep: { label: 'Steep', classes: 'bg-red-100 text-red-700' },
}

interface Props {
  result: RoofCalcResult | null
  spanFt: number | null
}

export default function ResultsCard({ result, spanFt }: Props) {
  if (!result) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 text-center text-muted">
        Enter values above to see results.
      </div>
    )
  }

  const cat = CATEGORY_STYLES[result.category]

  return (
    <div className="rounded-xl border border-border bg-surface shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h3 className="font-semibold text-primary">Results</h3>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${cat.classes}`}>
          {cat.label}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">
        <ResultItem label="Pitch Ratio" value={`${result.pitchRatio.toFixed(2)}:12`} />
        <ResultItem label="Angle" value={`${result.angleDeg.toFixed(1)}°`} />
        <ResultItem label="Slope" value={`${result.slopePct.toFixed(1)}%`} />
        <ResultItem label="Rafter Multiplier" value={result.rafterMultiplier.toFixed(4)} />
        {spanFt && result.rafterLengthFt !== null && (
          <ResultItem
            label="Rafter Length"
            value={`${result.rafterLengthFt.toFixed(2)} ft`}
            highlight
          />
        )}
      </div>
    </div>
  )
}

function ResultItem({
  label,
  value,
  highlight = false,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className="bg-surface px-4 py-4">
      <p className="text-xs text-muted">{label}</p>
      <p
        className={`mt-1 text-2xl font-bold ${highlight ? 'text-accent' : 'text-primary'}`}
      >
        {value}
      </p>
    </div>
  )
}
