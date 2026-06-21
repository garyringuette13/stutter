import { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_BASE_URL || 'https://nbs-auth.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Only include the site's root page in the sitemap
  return [{ url: `${BASE}/`, lastModified: new Date() }]
}
