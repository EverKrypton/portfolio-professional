import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/#work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/#services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/#contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
  ];
}
