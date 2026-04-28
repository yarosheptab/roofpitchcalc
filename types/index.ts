export type PitchCategory = 'flat' | 'low' | 'conventional' | 'steep'

export interface RoofCalcResult {
  pitchRatio: number
  angleDeg: number
  slopePct: number
  rafterMultiplier: number
  rafterLengthFt: number | null
  category: PitchCategory
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  author: string
  readingTime: string
  content: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  category: string
  author: string
  readingTime: string
}
