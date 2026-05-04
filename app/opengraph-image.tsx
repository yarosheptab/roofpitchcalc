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
          background: '#F4F1EA',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Top rule */}
        <div style={{ width: '60px', height: '3px', background: '#C0391E', marginBottom: '40px' }} />

        <div style={{ fontSize: 72, fontWeight: 400, color: '#1B1814', lineHeight: 1.1, marginBottom: '28px' }}>
          Roof Pitch Calculator
        </div>

        <div style={{ fontSize: 26, color: '#7A7168', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '48px' }}>
          Pitch · Angle · Slope · Rafter Length
        </div>

        <div style={{ fontSize: 18, color: '#C0391E', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {process.env.NEXT_PUBLIC_SITE_URL ?? 'roofangler.com'}
        </div>
      </div>
    ),
    size
  )
}
