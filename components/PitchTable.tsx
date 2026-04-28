import { fromPitchRatio } from '@/lib/calculations'

const PITCHES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16]

const COMMON_USE: Record<number, string> = {
  1: 'Low-slope membrane roofs',
  2: 'Minimum for modified bitumen / TPO',
  3: 'Flat commercial, some residential additions',
  4: 'Minimum for most asphalt shingles',
  5: 'Common residential, good drainage',
  6: 'Most popular residential pitch',
  7: 'Steeper residential, classic cottage look',
  8: 'Cape Cod, New England styles',
  9: 'High-pitched residential, steep aesthetic',
  10: 'Very steep residential, mountain chalets',
  12: 'Gothic revival, 45° angle, dramatic look',
  16: 'Ultra-steep specialty or decorative roofs',
}

export default function PitchTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="min-w-full text-sm">
        <caption className="py-3 text-sm text-muted">
          Common roof pitches with angles and slope percentages
        </caption>
        <thead>
          <tr className="bg-primary text-white">
            {['Pitch Ratio', 'Degrees', 'Slope %', 'Rafter Mult.', 'Category', 'Common Use'].map(
              (h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
                  {h}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {PITCHES.map((p, i) => {
            const r = fromPitchRatio(p)
            const catColors: Record<string, string> = {
              flat: 'text-blue-700 bg-blue-50',
              low: 'text-yellow-700 bg-yellow-50',
              conventional: 'text-green-700 bg-green-50',
              steep: 'text-red-700 bg-red-50',
            }
            const catLabel: Record<string, string> = {
              flat: 'Flat',
              low: 'Low',
              conventional: 'Conventional',
              steep: 'Steep',
            }
            return (
              <tr
                key={p}
                className={i % 2 === 0 ? 'bg-surface' : 'bg-bg'}
              >
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-primary">
                  {p}:12
                </td>
                <td className="px-4 py-3">{r.angleDeg.toFixed(2)}°</td>
                <td className="px-4 py-3">{r.slopePct.toFixed(1)}%</td>
                <td className="px-4 py-3">{r.rafterMultiplier.toFixed(4)}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${catColors[r.category]}`}>
                    {catLabel[r.category]}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted">{COMMON_USE[p]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
