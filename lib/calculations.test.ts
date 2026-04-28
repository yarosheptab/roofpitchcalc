import { describe, it, expect } from 'vitest'
import { fromRiseRun, fromAngle, fromPitchRatio, addRafterLength } from './calculations'

const round2 = (n: number) => Math.round(n * 100) / 100

describe('fromRiseRun', () => {
  it('computes 6:12 pitch from 6" rise, 12" run', () => {
    const r = fromRiseRun(6, 12)
    expect(round2(r.pitchRatio)).toBe(6)
    expect(round2(r.angleDeg)).toBe(26.57)
    expect(round2(r.slopePct)).toBe(50)
    expect(round2(r.rafterMultiplier)).toBe(1.12)
    expect(r.category).toBe('conventional')
    expect(r.rafterLengthFt).toBeNull()
  })

  it('computes 4:12 pitch (lower boundary of conventional)', () => {
    const r = fromRiseRun(4, 12)
    expect(round2(r.pitchRatio)).toBe(4)
    expect(r.category).toBe('conventional')
  })

  it('computes 1:12 pitch (flat)', () => {
    const r = fromRiseRun(1, 12)
    expect(round2(r.pitchRatio)).toBe(1)
    expect(r.category).toBe('flat')
  })

  it('computes 3:12 pitch (low)', () => {
    const r = fromRiseRun(3, 12)
    expect(round2(r.pitchRatio)).toBe(3)
    expect(r.category).toBe('low')
  })

  it('computes 12:12 pitch (steep)', () => {
    const r = fromRiseRun(12, 12)
    expect(round2(r.pitchRatio)).toBe(12)
    expect(round2(r.angleDeg)).toBe(45)
    expect(r.category).toBe('steep')
  })
})

describe('fromAngle', () => {
  it('45° angle → 12:12 pitch', () => {
    const r = fromAngle(45)
    expect(round2(r.pitchRatio)).toBe(12)
    expect(r.category).toBe('steep')
  })

  it('26.57° angle → ~6:12 pitch', () => {
    const r = fromAngle(26.57)
    expect(round2(r.pitchRatio)).toBe(6)
  })

  it('18.43° angle → ~4:12 pitch', () => {
    const r = fromAngle(18.43)
    expect(round2(r.pitchRatio)).toBe(4)
  })
})

describe('fromPitchRatio', () => {
  it('pitch 6 → same as fromRiseRun(6, 12)', () => {
    const a = fromPitchRatio(6)
    const b = fromRiseRun(6, 12)
    expect(round2(a.pitchRatio)).toBe(round2(b.pitchRatio))
    expect(round2(a.angleDeg)).toBe(round2(b.angleDeg))
  })

  it('pitch 9 → category conventional (boundary)', () => {
    expect(fromPitchRatio(9).category).toBe('conventional')
  })

  it('pitch 9.1 → category steep', () => {
    expect(fromPitchRatio(9.1).category).toBe('steep')
  })
})

describe('addRafterLength', () => {
  it('adds rafter length for 6:12 pitch, 24ft span', () => {
    const base = fromPitchRatio(6)
    const r = addRafterLength(base, 24)
    // rafter = (24/2) * multiplier = 12 * 1.118 = ~13.42 ft
    expect(r.rafterLengthFt).not.toBeNull()
    expect(round2(r.rafterLengthFt!)).toBe(13.42)
  })

  it('does not mutate the original result', () => {
    const base = fromPitchRatio(6)
    addRafterLength(base, 24)
    expect(base.rafterLengthFt).toBeNull()
  })
})
