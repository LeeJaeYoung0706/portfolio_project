import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from "@/style/styledComponentRegistry";
import React from "react";


// 1개의 페이지라 캐노니컬 적용 X
export const metadata: Metadata = {
  title: {
    default: 'LeeJaeYoung_portfolio',
    template: '%s | LeeJaeYoung_portfolio',
  },
  description: '프론트개발자 포트폴리오',
  keywords: ['Next.js', '프론트엔드', '프론트개발자' , '포트폴리오'],
  creator: 'Lee Jae Young',
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <StyledComponentsRegistry>
              {children}
          </StyledComponentsRegistry>
      </body>
    </html>
  )
}
