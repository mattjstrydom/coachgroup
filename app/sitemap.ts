import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coachgroup.co.za';

  return [
    { url: `${baseUrl}/`, lastModified: new Date('2024-11-01'), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/community-coaching`, lastModified: new Date('2024-11-01'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/corporate-coaching`, lastModified: new Date('2024-11-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/our-team`, lastModified: new Date('2024-11-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date('2024-11-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/clients`, lastModified: new Date('2024-11-01'), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
