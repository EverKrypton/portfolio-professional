import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { site, skills, projects, services } from '@/lib/site';

const PhaserHero = dynamic(() => import('@/components/PhaserHero'), { ssr: false });

export const metadata: Metadata = {
  title: `${site.name} — Game Developer, Telegram Bot Developer, Web & App Developer`,
};

export default function Page() {
  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Home">{site.firstName}<span>.dev</span></a>
          <a className="btn" href="#contact">Hire me</a>
        </div>
        <div className="container nav-scroll">
          <div className="links" role="list">
            <a href="#work" role="listitem">Work</a>
            <a href="#services" role="listitem">Services</a>
            <a href="#skills" role="listitem">Skills</a>
            <a href="#about" role="listitem">About</a>
            <a href="#contact" role="listitem">Contact</a>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* HERO */}
        <div className="container hero" id="top">
          <div>
            <span className="eyebrow">● {site.availability}</span>
            <h1>
              Hi, I&apos;m {site.name}.<br />
              <span className="grad">Games, bots, websites &amp; apps.</span>
            </h1>
            <p className="lead">{site.tagline} {site.description}</p>
            <div className="cta">
              <a className="btn" href="#work">View my work</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
            <div className="meta">
              <span>📍 {site.location}</span>
              <span>⚡ 5+ years shipping</span>
              <span>🚀 40+ projects delivered</span>
            </div>
            <div className="badges" aria-label="Main technologies">
              {['⚛️ React', '▲ Next.js', '🎮 Phaser 4', '🤖 Telegram Bots', '📝 WordPress', '📱 React Native', '🔷 TypeScript'].map((b) => (
                <span key={b} className="badge"><i>{b.split(' ')[0]}</i>{b.split(' ').slice(1).join(' ')}</span>
              ))}
            </div>
          </div>
          <div>
            <article className="game-card" aria-label="Interactive Phaser demo">
              <div className="game-head"><span><span className="dot" />LIVE · Phaser 4 mini-demo</span><span>60 fps</span></div>
              <PhaserHero />
              <p className="hint">👆 Click / tap the game — built with Phaser {`4.2.1`}. Full games on request.</p>
            </article>
          </div>
        </div>

        {/* WORK */}
        <section id="work" aria-labelledby="work-h">
          <div className="container">
            <h2 id="work-h">Selected work</h2>
            <p className="sub">Games, Telegram bots, SEO websites, apps and WordPress — real products, real users.</p>
            <div className="grid g2">
              {projects.map((p) => (
                <article key={p.title} className="card">
                  <div className="tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" aria-labelledby="services-h">
          <div className="container">
            <h2 id="services-h">What I do</h2>
            <p className="sub">One developer for your full product: game, bot, web, app or store.</p>
            <div className="grid g3">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <h3>{s.icon} {s.title}</h3>
                  <ul className="clean">{s.points.map((x) => <li key={x}>{x}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" aria-labelledby="skills-h">
          <div className="container">
            <h2 id="skills-h">Tech stack &amp; seals</h2>
            <p className="sub">The tools I use daily — React, Next.js, Phaser, Telegram, WordPress and more.</p>
            <div className="grid g3">
              {skills.map((g) => (
                <article key={g.category} className="card">
                  <h3>{g.category}</h3>
                  <div className="tech">{g.items.map((t) => <span key={t}>{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" aria-labelledby="about-h">
          <div className="container">
            <h2 id="about-h">About me</h2>
            <div className="card">
              <p>
                I&apos;m <strong>{site.name}</strong> — a full-stack developer working in English with clients worldwide.
                I started with web development (React, Next.js, WordPress), then went deep into <strong>game development
                with Phaser and Unity</strong> and <strong>Telegram bot development</strong> (stores, payments, automations,
                Mini Apps). I also ship <strong>cross-platform apps</strong> with React Native / Expo.
              </p>
              <p>
                My rule, as we say in Cuba — <em>“como Dios manda”</em>: fast, clean, SEO-perfect, and delivered on time.
                Every project ships with analytics, performance budget (90+ Lighthouse) and documentation.
              </p>
              <div className="tech">
                {['English — Fluent', 'Remote-first', 'Fast delivery', 'Clean code', 'SEO 100'].map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" aria-labelledby="contact-h">
          <div className="container">
            <h2 id="contact-h">Let&apos;s build something great</h2>
            <p className="sub">Tell me about your game, bot, website or app. I reply within 24 hours.</p>
            <div className="contact-box">
              <div className="card">
                <h3>Contact info</h3>
                <ul className="clean">
                  <li>📧 <a href={`mailto:${site.email}`}>{site.email}</a></li>
                  <li>💬 <a href={site.socials.telegram} rel="noopener">Telegram @ograinhard — fastest</a></li>
                  <li>👨‍💻 <a href={site.socials.github} rel="noopener">GitHub</a></li>
                  <li>🎮 <a href={site.socials.itch} rel="noopener">itch.io — my games</a></li>
                </ul>
              </div>
              <div className="card">
                <form action={`mailto:${site.email}`} method="post" encType="text/plain">
                  <div>
                    <label htmlFor="n">Your name</label>
                    <input id="n" name="name" required autoComplete="name" placeholder="John Smith" />
                  </div>
                  <div>
                    <label htmlFor="e">Email</label>
                    <input id="e" name="email" type="email" required autoComplete="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="m">Project details</label>
                    <textarea id="m" name="message" rows={5} required placeholder="I need a Phaser game / Telegram bot / Next.js site..." />
                  </div>
                  <button className="btn" type="submit">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container foot">
          <span>© {new Date().getFullYear()} {site.name} · {site.role}</span>
          <span><a href="/sitemap.xml">Sitemap</a> · <a href="/robots.txt">Robots</a> · <a href="/llms.txt">llms.txt</a></span>
        </div>
      </footer>
    </>
  );
}
