import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Roof Pitch Calculator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1e3a5f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>🏠</div>
        <div style={{ fontSize: 64, fontWeight: 700, color: '#ffffff', textAlign: 'center', lineHeight: 1.1, padding: '0 60px' }}>
          Roof Pitch Calculator
        </div>
        <div style={{ fontSize: 28, color: '#f97316', marginTop: 24, fontWeight: 500 }}>
          Pitch · Angle · Slope · Rafter Length
        </div>
        <div style={{ fontSize: 20, color: '#93c5fd', marginTop: 36 }}>
          {process.env.NEXT_PUBLIC_SITE_URL ?? 'roofpitchcalculator.app'}
        </div>
      </div>
    ),
    size
  )
}
