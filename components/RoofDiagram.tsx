'use client'

import type { RoofCalcResult } from '@/types'

interface Props {
  result: RoofCalcResult | null
  spanFt: number | null
}

export default function RoofDiagram({ result, spanFt }: Props) {
  const W = 280
  const baseY = 160
  const leftX = 20
  const rightX = leftX + W

  const pitch = result?.pitchRatio ?? 0
  // apex rises as pitch increases; clamp so diagram doesn't overflow
  const maxRise = 130
  const apexY = Math.max(baseY - (pitch / 16) * maxRise, 30)
  const apexX = (leftX + rightX) / 2

  const angleDeg = result ? result.angleDeg.toFixed(1) : '0.0'
  const pitchLabel = result ? `${result.pitchRatio.toFixed(1)}:12` : '—'
  const rafterLabel =
    result && spanFt
      ? `${result.rafterLengthFt?.toFixed(1) ?? '—'} ft`
      : null

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W + 40} 200`}
        className="w-full h-auto"
        aria-label="Roof cross-section diagram"
        role="img"
      >
        {/* House silhouette */}
        <rect x="60" y={baseY} width="200" height="35" fill="#e2e8f0" rx="2" />
        {/* Windows */}
        <rect x="90" y={baseY + 8} width="28" height="22" fill="#bfdbfe" rx="2" />
        <rect x="202" y={baseY + 8} width="28" height="22" fill="#bfdbfe" rx="2" />
        {/* Door */}
        <rect x="146" y={baseY + 12} width="28" height="23" fill="#94a3b8" rx="2" />

        {/* Roof triangle */}
        <polygon
          points={`${leftX},${baseY} ${apexX},${apexY} ${rightX},${baseY}`}
          fill="#1e3a5f"
          fillOpacity="0.08"
          stroke="#1e3a5f"
          strokeWidth="2"
          style={{ transition: 'points 0.2s ease' }}
        />

        {/* Rise line (vertical dashed) */}
        {pitch > 0 && (
          <line
            x1={apexX}
            y1={baseY}
            x2={apexX}
            y2={apexY}
            stroke="#f97316"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
        )}

        {/* Run line (horizontal dashed) */}
        {pitch > 0 && (
          <line
            x1={apexX}
            y1={baseY}
            x2={rightX}
            y2={baseY}
            stroke="#64748b"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
        )}

        {/* Angle arc */}
        {pitch > 0 && (
          <path
            d={`M ${rightX - 28},${baseY} A 28,28 0 0,0 ${rightX - 28 * Math.cos(result!.angleDeg * Math.PI / 180)},${baseY - 28 * Math.sin(result!.angleDeg * Math.PI / 180)}`}
            fill="none"
            stroke="#64748b"
            strokeWidth="1.5"
          />
        )}

        {/* Labels */}
        {pitch > 0 && (
          <>
            {/* Rise label */}
            <text
              x={apexX + 6}
              y={(baseY + apexY) / 2}
              fontSize="11"
              fill="#f97316"
              fontWeight="600"
            >
              Rise
            </text>
            {/* Run label */}
            <text
              x={(apexX + rightX) / 2}
              y={baseY + 14}
              fontSize="11"
              fill="#64748b"
              textAnchor="middle"
            >
              Run
            </text>
            {/* Angle label */}
            <text
              x={rightX - 46}
              y={baseY - 10}
              fontSize="10"
              fill="#64748b"
            >
              {angleDeg}°
            </text>
            {/* Pitch ratio in center of roof */}
            <text
              x={apexX}
              y={(baseY + apexY) / 2 + 4}
              fontSize="13"
              fill="#1e3a5f"
              fontWeight="700"
              textAnchor="middle"
            >
              {pitchLabel}
            </text>
            {/* Rafter length on hypotenuse */}
            {rafterLabel && (
              <text
                x={(apexX + rightX) / 2 + 8}
                y={(baseY + apexY) / 2 - 4}
                fontSize="10"
                fill="#1e3a5f"
                textAnchor="middle"
                transform={`rotate(${-result!.angleDeg}, ${(apexX + rightX) / 2 + 8}, ${(baseY + apexY) / 2 - 4})`}
              >
                {rafterLabel}
              </text>
            )}
          </>
        )}
        {pitch === 0 && (
          <text x={apexX} y={baseY - 10} fontSize="12" fill="#94a3b8" textAnchor="middle">
            Enter values to see diagram
          </text>
        )}
      </svg>
    </div>
  )
}
