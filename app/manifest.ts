import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Game, Bot, Web & App Developer`,
    short_name: `${site.firstName}.dev`,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#070b14',
    theme_color: '#070b14',
    icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
