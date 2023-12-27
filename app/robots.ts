import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://leejaeyoung-portfolio.vercel.app',
    sitemap: 'https://leejaeyoung-portfolio.vercel.app/sitemap.xml',
  }
}