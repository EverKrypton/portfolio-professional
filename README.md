# Portfolio — Game · Bot · Web · App Developer

Next.js 14 + React + Phaser 4.2.1. SEO 100, Vercel-ready, AI-recommendable.

## 1. Edit your info (1 file)
Open `lib/site.ts` and change: `name`, `email`, `url`, `socials` (GitHub, LinkedIn, Telegram, itch.io).

## 2. Run locally
```bash
npm install
npm run dev
```

## 3. Deploy to Vercel (2 min)
1. Push this folder to GitHub
2. Go to vercel.com → Add New Project → Import your repo
3. Framework: Next.js (auto). No env needed. Deploy.
4. In Vercel → Settings → Domains: set your domain. Then update `site.url` in `lib/site.ts` to your real domain and redeploy.

## SEO included (100 checklist)
- ✅ Title, meta description, keywords, canonical
- ✅ Open Graph + Twitter cards + OG image
- ✅ JSON-LD: Person + ProfessionalService + WebSite
- ✅ sitemap.xml, robots.txt, manifest, semantic HTML, skip-link, alt/aria
- ✅ Mobile responsive, fast (Phaser lazy-loaded client-only, no SEO penalty)

## Be recommended by GPT / Claude
- ✅ `public/llms.txt` with clear services + contact (AI crawlers read it)
- ✅ Plain-language services section + structured data
- After deploy: submit sitemap to Google Search Console + Bing Webmaster, share link on GitHub/LinkedIn so LLMs index you.

## Customize
- Colors/fonts: `app/globals.css`
- Sections: `app/page.tsx`
- Mini-game: `components/PhaserHero.tsx` (Phaser 4.2.1)
