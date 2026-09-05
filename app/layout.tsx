import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#070b14',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Game Developer, Telegram Bot Developer, Web & App Developer`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Game Developer', 'Phaser 4', 'Unity',
    'Telegram Bot Developer', 'Telegraf', 'Telegram Mini Apps',
    'Web Developer', 'React', 'Next.js', 'TypeScript',
    'App Developer', 'React Native', 'Expo', 'Flutter',
    'WordPress Developer', 'WooCommerce', 'Headless WordPress',
    'Freelance developer', 'Full-stack developer',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'Portfolio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.name} — Game, Bot, Web & App Developer`,
    description: site.description,
    siteName: `${site.name} Portfolio`,
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: `${site.name} portfolio` }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Game, Bot, Web & App Developer`,
    description: site.description,
    images: ['/og-image.svg'],
  },
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  manifest: '/manifest.webmanifest',
  verification: {
    // Add yours in Vercel env / Search Console:
    // google: 'your-google-code',
  },
};

function jsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: site.name,
      url: site.url,
      jobTitle: 'Game Developer, Telegram Bot Developer, Web & App Developer',
      description: site.description,
      email: `mailto:${site.email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Remote', addressCountry: 'WW' },
      sameAs: Object.values(site.socials),
      knowsAbout: [
        'Phaser', 'Unity', 'React', 'Next.js', 'WordPress',
        'Telegram Bots', 'React Native', 'TypeScript', 'Node.js',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `${site.name} — Development Services`,
      url: site.url,
      priceRange: '$$',
      description: site.description,
      areaServed: 'Worldwide',
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Game Development with Phaser & Unity' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Telegram Bot Development & Mini Apps' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React / Next.js Web Development with SEO' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native / Expo App Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WordPress & WooCommerce Development' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${site.name} Portfolio`,
      url: site.url,
      inLanguage: 'en',
    },
  ];
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
