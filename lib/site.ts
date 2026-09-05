// ★★★ EDIT THIS FILE — all your info in one place ★★★
export const site = {
  name: 'Alex Carter',
  firstName: 'Alex',
  role: 'Game Developer · Telegram Bot Developer · Web & App Developer',
  tagline: 'I build games, bots, websites and apps that ship fast and scale.',
  description:
    'Full-stack developer specialized in game development (Phaser, Unity), Telegram bots (Node.js, Python), modern web apps (React, Next.js, WordPress) and cross-platform mobile apps. 5+ years shipping products for startups and clients worldwide.',
  url: 'https://your-portfolio.vercel.app',
  ogImage: '/og-image.svg',
  email: 'hello@example.com',
  phone: '+1 (555) 000-0000',
  location: 'Remote · Worldwide',
  availability: 'Available for freelance & full-time',
  socials: {
    github: 'https://github.com/EverKrypton',
    telegram: 'https://t.me/ograinhard',
    itch: 'https://everkrypton.itch.io',
  },
};

export const skills = [
  { category: 'Game Dev', items: ['Phaser 4', 'Unity', 'C#', 'JavaScript', 'WebGL', 'Tilemaps', 'Arcade Physics'] },
  { category: 'Telegram Bots', items: ['Node.js', 'Python', 'Telegraf', 'aiogram', 'Payments', 'Webhooks', 'Mini Apps'] },
  { category: 'Web Dev', items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vercel', 'REST APIs'] },
  { category: 'App Dev', items: ['React Native', 'Expo', 'Flutter', 'PWA', 'Push Notifications', 'App Store Deploy'] },
  { category: 'CMS & WordPress', items: ['WordPress', 'WooCommerce', 'Elementor', 'Headless WP', 'SEO', 'Speed Optimization'] },
  { category: 'Tools & DevOps', items: ['Git', 'GitHub Actions', 'Docker', 'MongoDB', 'PostgreSQL', 'Figma'] },
];

export const projects = [
  {
    title: 'Neon Platformer — Phaser 4 Web Game',
    tag: 'Game Dev · Phaser 4 · WebGL',
    description:
      'Complete 2D platformer with 20 levels, particles, parallax and mobile touch controls. 60fps on mid-range phones, 120k plays on itch.io.',
    tech: ['Phaser 4', 'TypeScript', 'Vite'],
    link: '#',
  },
  {
    title: 'ShopBot — Telegram E-commerce Bot',
    tag: 'Telegram Bot · Node.js · Stripe',
    description:
      'Full store inside Telegram: catalog, cart, Stripe payments, admin panel. Handles 10k+ users with webhooks on Vercel.',
    tech: ['Telegraf', 'Next.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'SaaS Dashboard — Next.js + SEO 100',
    tag: 'Web Dev · Next.js · SEO',
    description:
      'Multi-tenant SaaS with auth, subscriptions, blog with 100/100 Lighthouse SEO. Deployed on Vercel with edge caching.',
    tech: ['Next.js 14', 'React', 'Tailwind'],
    link: '#',
  },
  {
    title: 'FitTrack — Cross-platform Fitness App',
    tag: 'App Dev · React Native · Expo',
    description:
      'Workout tracker with offline mode, charts and push reminders. Published on iOS + Android from a single codebase.',
    tech: ['React Native', 'Expo', 'SQLite'],
    link: '#',
  },
  {
    title: 'WooCommerce Store — Headless WordPress',
    tag: 'WordPress · WooCommerce · Headless',
    description:
      'Headless WooCommerce with Next.js frontend. 0.9s LCP, 100 SEO score, +38% conversion after rebuild.',
    tech: ['WordPress', 'WooCommerce', 'Next.js'],
    link: '#',
  },
  {
    title: 'Crypto Alert Bot Network',
    tag: 'Telegram Bot · Python · Real-time',
    description:
      'Real-time price/volume alerts across 5 chains. Mini App dashboard, 2k active subscribers.',
    tech: ['Python', 'aiogram', 'WebSockets'],
    link: '#',
  },
];

export const services = [
  {
    title: 'Game Development',
    icon: '🎮',
    points: ['2D web & mobile games with Phaser 4 / Unity', 'Game design, levels, juice & polish', 'Publishing on itch.io, web, App Store'],
  },
  {
    title: 'Telegram Bot Development',
    icon: '🤖',
    points: ['Stores, payments, support & automation bots', 'Telegram Mini Apps + WebApps', 'Webhooks, scaling, admin panels'],
  },
  {
    title: 'Web Development',
    icon: '🌐',
    points: ['React / Next.js sites with 100 SEO score', 'Landing pages that convert', 'Vercel deploy, analytics, i18n'],
  },
  {
    title: 'App Development',
    icon: '📱',
    points: ['iOS + Android from one codebase (Expo)', 'Offline-first, push, deep links', 'Store submission handled'],
  },
  {
    title: 'WordPress & CMS',
    icon: '📝',
    points: ['WooCommerce stores, blogs, corporate sites', 'Speed + SEO hardening', 'Headless WordPress + Next.js'],
  },
];
