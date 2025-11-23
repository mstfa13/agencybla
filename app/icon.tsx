import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = {
  width: 48,
  height: 48,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          background: '#0A0E27',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F5C518',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          borderRadius: '8px',
        }}
      >
        💡
      </div>
    ),
    {
      ...size,
    }
  )
}
