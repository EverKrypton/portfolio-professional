import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import MascotWalker from '@/components/MascotWalker';
import { site, skills, projects, services } from '@/lib/site';

const PlayableGame = dynamic(() => import('@/components/PlayableGame'), { ssr: false });

export const metadata: Metadata = {
  title: `${site.name} — Game Developer, Telegram Bot Developer, Web & App Developer`,
};

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container site-header-bar">
          <a className="wordmark" href="#top" aria-label="Home">{site.firstName}<em>.dev</em></a>
          <a className="btn btn-primary" href="#contact">Hire me</a>
        </div>
        <div className="container">
          <nav className="site-nav" aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#game">Playable</a>
            <a href="#services">Services</a>
            <a href="#stack">Stack</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <div className="container hero" id="top">
          <p className="kicker">{site.availability}</p>
          <h1>
            Games, bots, websites <strong>&amp; apps</strong> that ship.
          </h1>
          <p className="standfirst">
            I&apos;m <strong>{site.name}</strong> — {site.tagline} {site.description}
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#work">
              See the work
              <svg className="arrow" viewBox="0 0 16 8" fill="currentColor" aria-hidden="true"><path d="M0 3.5h13L10 0l1-0 5 4-5 4-1 0 3-3.5H0z" /></svg>
            </a>
            <a className="btn btn-secondary" href="#game">Play the demo</a>
          </div>
          <div className="hero-facts">
            <div><b>5+</b><span>years shipping</span></div>
            <div><b>40+</b><span>projects delivered</span></div>
            <div><b>24h</b><span>response time</span></div>
          </div>
        </div>

        <div className="strip" aria-label="Technologies">
          <div className="container strip-inner">
            <span>Phaser 4</span><span>React</span><span>Next.js</span><span>TypeScript</span><span>Telegram Bots</span><span>WordPress</span><span>Expo</span><span>Unity</span>
          </div>
        </div>

        <section className="block" id="standard" aria-labelledby="standard-h">
          <div className="container">
            <p className="kicker">The standard</p>
            <h2 className="section-title" id="standard-h">No templates. No slop.</h2>
            <p className="section-lede">What most freelancer sites ship — and what leaves my hands instead.</p>
            <div className="duo">
              <div className="panel before">
                <p className="plabel">Before</p>
                <h3>The usual deliverable.</h3>
                <ul>
                  <li>Generic template, purple gradients</li>
                  <li>4MB of JavaScript before first paint</li>
                  <li>Lorem ipsum where the copy should be</li>
                  <li>Contact form that answers never</li>
                </ul>
              </div>
              <div className="panel after">
                <p className="plabel">After</p>
                <h3>How I ship.</h3>
                <ul>
                  <li><strong>Hand-built</strong>, measured in kilobytes</li>
                  <li><strong>89kB first load</strong>, game engine on demand</li>
                  <li><strong>SEO 100</strong> — sitemap, structured data, semantic HTML</li>
                  <li><strong>Reply in 24 hours</strong>, on Telegram</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="block" id="work" aria-labelledby="work-h">
          <div className="container">
            <p className="kicker">Selected work</p>
            <h2 className="section-title" id="work-h">Proof, not promises.</h2>
            <p className="section-lede">Games, Telegram bots, websites, apps and stores — each one live with real users.</p>
            {projects.map((p) => (
              <article key={p.title} className="work-row">
                <div className="kind">{p.tag}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="stack">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="block" id="game" aria-labelledby="game-h">
          <div className="container">
            <p className="kicker">Playable demo</p>
            <h2 className="section-title" id="game-h">Don&apos;t take my word for it.</h2>
            <p className="section-lede">A 45-second Phaser build, running right here. This is the level of feel I ship in full games.</p>
            <PlayableGame />
          </div>
        </section>

        <section className="block" id="services" aria-labelledby="services-h">
          <div className="container">
            <p className="kicker">Services</p>
            <h2 className="section-title" id="services-h">Pick a command.</h2>
            <p className="section-lede">Five ways to hire me. One developer, full product — design, build, deploy.</p>
            {services.map((s) => (
              <a key={s.cmd} className="cmd" href="#contact">
                <div className="cmd-top"><code>{s.cmd}</code><span className="key">↵ hire</span></div>
                <h3>{s.title}</h3>
                <p>{s.points.join(' · ')}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="block" id="stack" aria-labelledby="stack-h">
          <div className="container">
            <p className="kicker">Stack</p>
            <h2 className="section-title" id="stack-h">The tools, plainly.</h2>
            <p className="section-lede">React, Next.js, Phaser, Telegram, WordPress — what I reach for daily.</p>
            {skills.map((g) => (
              <div key={g.category} className="stack-group">
                <h3>{g.category}</h3>
                <p>{g.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="block" id="about" aria-labelledby="about-h">
          <div className="container">
            <p className="kicker">About</p>
            <h2 className="section-title" id="about-h">Como Dios manda.</h2>
            <div className="about-body">
              <p>
                I&apos;m <strong>{site.name}</strong>, a full-stack developer working in English with clients
                worldwide. Web first — <strong>React, Next.js, WordPress</strong> — then deep into <strong>game
                development with Phaser and Unity</strong> and <strong>Telegram bots</strong> that take payments
                and run stores. I ship <strong>cross-platform apps</strong> with React Native and Expo.
              </p>
              <p>
                As we say in Cuba, I work <em>como Dios manda</em>: fast, clean, measured. Every delivery ships
                with a performance budget, analytics and documentation — no excuses, no slop.
              </p>
            </div>
          </div>
        </section>

        <section className="block" id="contact" aria-labelledby="contact-h">
          <div className="container">
            <p className="kicker">Contact</p>
            <h2 className="section-title" id="contact-h">Start with a message.</h2>
            <p className="section-lede">Telegram is fastest. I reply within 24 hours.</p>
            <div className="contact-lines">
              <a href={site.socials.telegram} rel="noopener"><span>Telegram — @ograinhard</span><small>fastest</small></a>
              <a href={site.socials.github} rel="noopener"><span>GitHub</span><small>code</small></a>
              <a href={site.socials.itch} rel="noopener"><span>itch.io</span><small>games</small></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container foot">
          <span>© {new Date().getFullYear()} {site.name} · {site.role}</span>
          <span><a href="/sitemap.xml">Sitemap</a> · <a href="/robots.txt">Robots</a> · <a href="/llms.txt">llms.txt</a></span>
        </div>
      </footer>
      <MascotWalker />
    </>
  );
}
