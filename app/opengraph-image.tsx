import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Lee Jae Young Portfolio'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function LogoImage() {

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          backgroundColor: 'rgb(13, 13, 13)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: "white",
          fontSize: '110px'
        }}
      >
          프론트 개발자 이재영
      </div>
    ),
    // ImageResponse options
    {
      ...size
    }
  )
}