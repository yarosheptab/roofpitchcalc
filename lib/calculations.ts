import type { PitchCategory, RoofCalcResult } from '@/types'

function getCategory(pitchRatio: number): PitchCategory {
  if (pitchRatio < 2) return 'flat'
  if (pitchRatio < 4) return 'low'
  if (pitchRatio <= 9) return 'conventional'
  return 'steep'
}

function buildResult(pitchRatio: number, rafterLengthFt: number | null = null): RoofCalcResult {
  const angleDeg = Math.atan(pitchRatio / 12) * (180 / Math.PI)
  const slopePct = (pitchRatio / 12) * 100
  const rafterMultiplier = Math.sqrt(pitchRatio ** 2 + 144) / 12
  return {
    pitchRatio,
    angleDeg,
    slopePct,
    rafterMultiplier,
    rafterLengthFt,
    category: getCategory(pitchRatio),
  }
}

export function fromRiseRun(rise: number, run: number): RoofCalcResult {
  const pitchRatio = (rise / run) * 12
  return buildResult(pitchRatio)
}

export function fromAngle(angleDeg: number): RoofCalcResult {
  const pitchRatio = Math.tan(angleDeg * (Math.PI / 180)) * 12
  return buildResult(pitchRatio)
}

export function fromPitchRatio(pitch: number): RoofCalcResult {
  return buildResult(pitch)
}

export function addRafterLength(result: RoofCalcResult, spanFt: number): RoofCalcResult {
  const rafterLengthFt = (spanFt / 2) * result.rafterMultiplier
  return { ...result, rafterLengthFt }
}
