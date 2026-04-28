import type { MetadataRoute } from 'next'
import { getAllPostsMeta } from '@/lib/blog'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://roofpitchcalculator.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsMeta()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...blogEntries,
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms-of-service`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/disclaimer`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/cookie-policy`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
