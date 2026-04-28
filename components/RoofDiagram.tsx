'use client'

import type { RoofCalcResult } from '@/types'

interface Props {
  result: RoofCalcResult | null
  spanFt: number | null
}

export default function RoofDiagram({ result, spanFt }: Props) {
  const W = 260
  const baseY = 148
  const leftX = 20
  const rightX = leftX + W
  const apexX = (leftX + rightX) / 2

  const pitch = result?.pitchRatio ?? 0
  const maxRise = 110
  const apexY = pitch > 0
    ? Math.max(baseY - (Math.min(pitch, 16) / 16) * maxRise, 28)
    : baseY - 8

  const angleDeg = result?.angleDeg ?? 0
  const pitchLabel = result ? `${result.pitchRatio.toFixed(2)}:12` : ''

  return (
    <div className="border border-border bg-surface w-full">
      <div className="border-b border-border px-4 py-2">
        <span className="text-xs uppercase tracking-[0.1em] font-medium text-muted">Diagram</span>
      </div>
      <div className="p-3">
        <svg
          viewBox={`0 0 ${W + 40} 190`}
          className="w-full h-auto"
          aria-label="Roof cross-section diagram"
          role="img"
        >
          <style>{`
            @media (max-width: 640px) {
              .d-sm { font-size: 13px; }
              .d-md { font-size: 14px; }
              .d-lg { font-size: 17px; }
            }
          `}</style>
          {/* Grid dots — technical drafting aesthetic */}
          {Array.from({ length: 6 }, (_, r) =>
            Array.from({ length: 10 }, (_, c) => (
              <circle
                key={`${r}-${c}`}
                cx={20 + c * 30}
                cy={20 + r * 28}
                r="0.8"
                fill="#DDD8CC"
              />
            ))
          )}

          {/* House walls */}
          <rect x={leftX + 20} y={baseY} width={W - 40} height={32} fill="#ECEAE2" stroke="#DDD8CC" strokeWidth="1" />

          {/* Door */}
          <rect x={apexX - 12} y={baseY + 10} width={24} height={22} fill="#DDD8CC" />

          {/* Windows */}
          <rect x={leftX + 34} y={baseY + 9} width={22} height={16} fill="#C8D8E8" stroke="#DDD8CC" strokeWidth="0.5" />
          <rect x={rightX - 56} y={baseY + 9} width={22} height={16} fill="#C8D8E8" stroke="#DDD8CC" strokeWidth="0.5" />

          {/* Roof fill */}
          {pitch > 0 && (
            <polygon
              points={`${leftX},${baseY} ${apexX},${apexY} ${rightX},${baseY}`}
              fill="#ECEAE2"
              stroke="#1B1814"
              strokeWidth="1.5"
              style={{ transition: 'points 0.15s ease' }}
            />
          )}

          {/* Rise dashed line */}
          {pitch > 0 && (
            <line
              x1={apexX} y1={baseY}
              x2={apexX} y2={apexY}
              stroke="#C0391E"
              strokeWidth="1"
              strokeDasharray="3 2"
            />
          )}

          {/* Run dashed line */}
          {pitch > 0 && (
            <line
              x1={apexX} y1={baseY}
              x2={rightX} y2={baseY}
              stroke="#7A7168"
              strokeWidth="1"
              strokeDasharray="3 2"
            />
          )}

          {/* Angle arc — use the visual rafter angle (atan2 of drawn apex), not the true pitch angle */}
          {pitch > 0 && (() => {
            const r = 24
            const alpha = Math.atan2(baseY - apexY, rightX - apexX)
            return (
              <path
                d={`M ${rightX - r},${baseY} Q ${rightX - r * 1.3 * Math.cos(alpha / 2)},${baseY - r * 1.3 * Math.sin(alpha / 2)} ${rightX - r * Math.cos(alpha)},${baseY - r * Math.sin(alpha)}`}
                fill="none"
                stroke="#7A7168"
                strokeWidth="0.75"
              />
            )
          })()}

          {pitch > 0 ? (
            <>
              {/* Rise label */}
              <text x={apexX + 5} y={(baseY + apexY) / 2 + 4} fontSize="10" className="d-md" fill="#C0391E" fontFamily="var(--font-sora, sans-serif)" fontWeight="500">
                Rise
              </text>
              {/* Run label */}
              <text x={(apexX + rightX) / 2} y={baseY + 13} fontSize="10" className="d-md" fill="#7A7168" fontFamily="var(--font-sora, sans-serif)" textAnchor="middle">
                Run
              </text>
              {/* Angle */}
              <text x={rightX - 44} y={baseY - 8} fontSize="9" className="d-sm" fill="#7A7168" fontFamily="var(--font-geist-mono, monospace)" textAnchor="middle">
                {angleDeg.toFixed(2)}°
              </text>
              {/* Pitch label above apex */}
              <text
                x={apexX}
                y={apexY - 8}
                fontSize="12"
                className="d-lg"
                fill="#1B1814"
                fontFamily="var(--font-geist-mono, monospace)"
                fontWeight="600"
                textAnchor="middle"
              >
                {pitchLabel}
              </text>
              {/* Rafter length */}
              {spanFt && result?.rafterLengthFt && (
                <text
                  x={(apexX + rightX) / 2 + 12}
                  y={(baseY + apexY) / 2 - 6}
                  fontSize="9"
                  className="d-sm"
                  fill="#0C2340"
                  fontFamily="var(--font-geist-mono, monospace)"
                  textAnchor="middle"
                >
                  {result.rafterLengthFt.toFixed(2)} ft
                </text>
              )}
            </>
          ) : (
            <text x={apexX} y={baseY - 18} fontSize="11" className="d-md" fill="#7A7168" fontFamily="var(--font-sora, sans-serif)" textAnchor="middle">
              Enter values to see diagram
            </text>
          )}
        </svg>
      </div>
    </div>
  )
}
