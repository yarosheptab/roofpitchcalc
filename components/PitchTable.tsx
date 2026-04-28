import { fromPitchRatio } from '@/lib/calculations'

const PITCHES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16]

const COMMON_USE: Record<number, string> = {
  1:  'Low-slope membrane roofs',
  2:  'Minimum for modified bitumen',
  3:  'Commercial flat, some additions',
  4:  'Minimum for asphalt shingles',
  5:  'Ranch homes, good drainage',
  6:  'Most common residential pitch',
  7:  'Steeper residential, craftsman',
  8:  'Cape Cod, New England colonial',
  9:  'High-pitch, mountain chalets',
  10: 'Very steep, Victorian styles',
  12: 'Gothic revival, 45° silhouette',
  16: 'Ultra-steep, decorative towers',
}

const CAT_STYLES: Record<string, string> = {
  flat:         'text-blue-700',
  low:          'text-yellow-700',
  conventional: 'text-green-700',
  steep:        'text-red-700',
}

const CAT_LABELS: Record<string, string> = {
  flat: 'Flat', low: 'Low', conventional: 'Conventional', steep: 'Steep',
}

export default function PitchTable() {
  return (
    <div className="border border-border overflow-x-auto">
      <table className="min-w-full text-sm">
        <caption className="border-b border-border px-4 py-2.5 text-left text-[10px] uppercase tracking-[0.1em] text-muted bg-surface">
          Common roof pitches — angles, slopes, and rafter multipliers
        </caption>
        <thead>
          <tr className="border-b-2 border-primary bg-surface">
            {['Pitch', 'Degrees', 'Slope %', 'Rafter Mult.', 'Category', 'Common Use'].map((h) => (
              <th
                key={h}
                className="whitespace-nowrap px-4 py-3 text-left text-[10px] uppercase tracking-[0.1em] font-semibold text-primary"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {PITCHES.map((p) => {
            const r = fromPitchRatio(p)
            return (
              <tr key={p} className="bg-surface hover:bg-bg transition-colors">
                <td className="whitespace-nowrap px-4 py-3 font-mono font-semibold text-data">
                  {p}:12
                </td>
                <td className="px-4 py-3 font-mono text-muted">{r.angleDeg.toFixed(2)}°</td>
                <td className="px-4 py-3 font-mono text-muted">{r.slopePct.toFixed(1)}%</td>
                <td className="px-4 py-3 font-mono text-muted">{r.rafterMultiplier.toFixed(4)}</td>
                <td className={`px-4 py-3 text-xs font-medium ${CAT_STYLES[r.category]}`}>
                  {CAT_LABELS[r.category]}
                </td>
                <td className="px-4 py-3 text-muted text-xs">{COMMON_USE[p]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
