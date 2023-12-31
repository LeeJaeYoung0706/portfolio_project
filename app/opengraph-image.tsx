import { ImageResponse } from 'next/og';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
export const runtime = 'edge';

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        프론트 개발자 이재영
      </div>
    ),
    {
      ...size,
    },
  );
}