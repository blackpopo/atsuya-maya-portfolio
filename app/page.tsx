import {
  profile,
  origin,
  education,
  publications,
  projects,
} from '@/data/content';
import Particles from './components/Particles';
import Reveal from './components/Reveal';
import ScrollProgress from './components/ScrollProgress';

function SectionTitle({
  index,
  ja,
  en,
}: {
  index: string;
  ja: string;
  en: string;
}) {
  return (
    <>
      <div className="section-index">
        {index} — {en}
      </div>
      <h2 className="section-title">{ja}</h2>
    </>
  );
}

// 作品カードのバナー（生成した絹・繭・羽化のアート）
const projectBanners = ['/art/cocoon.jpg', '/art/threads.jpg', '/art/moth-hero.jpg'];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Particles />

      <header className="site-header">
        <div className="container">
          <a className="logo" href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.avatar} alt="" />
            Atsuya Matsumoto
          </a>
          <nav className="site-nav">
            <a href="#about">Career</a>
            <a href="#publications">Research</a>
            <a href="#projects">Works</a>
            <a href="#origin">Origin</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="aurora aurora-1" />
          <div className="aurora aurora-2" />
          <div className="aurora aurora-3" />
          <div className="container">
            <div>
              <h1 className="name">
                {profile.name.ja}
                <span className="name-en">{profile.name.en}</span>
              </h1>
              <div className="role">
                {profile.role.ja}
                <br />
                <span className="en">{profile.role.en}</span>
              </div>
              <div className="affiliation">
                {profile.affiliation.ja}
                <br />
                {profile.affiliation.en}
              </div>
              <div className="hero-links">
                {profile.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            {/* 白い蚕＝一夜さんを、黒いうさぎ＝私が見上げる構図 */}
            <div className="hero-scene" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="moth" src="/art/moth-fly.png" alt="" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="rabbit" src="/art/rabbit-sit.png" alt="" />
            </div>
          </div>
        </section>

        {/* ---------- About / Education ---------- */}
        <section className="section" id="about">
          <div className="container">
            <Reveal>
              <SectionTitle index="01" ja="経歴" en="Education & Experience" />
              <p className="section-lead">
                これまでの歩み / Where I&apos;ve been
              </p>
            </Reveal>
            <ul className="timeline">
              {education.map((item, i) => (
                <li key={item.period + item.title.en}>
                  <Reveal delay={i * 120}>
                    <div className="period">{item.period}</div>
                    <div className="title-ja">{item.title.ja}</div>
                    <div className="title-en">{item.title.en}</div>
                    {item.detail && (
                      <div className="detail">
                        {item.detail.ja} / {item.detail.en}
                      </div>
                    )}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Publications ---------- */}
        <section className="section" id="publications">
          <div className="container">
            <Reveal>
              <SectionTitle index="02" ja="研究・業績" en="Publications" />
              <p className="section-lead">
                論文・発表・受賞 / Papers, talks & awards
              </p>
            </Reveal>
            {publications.map((group) => (
              <div key={group.category.en}>
                <Reveal>
                  <h3 className="pub-category">
                    {group.category.ja}
                    <span className="en">{group.category.en}</span>
                  </h3>
                </Reveal>
                <ol className="pub-list">
                  {group.items.map((pub, i) => (
                    <Reveal key={pub.title} delay={i * 100}>
                      <li>
                        <div className="pub-title">
                          {pub.link ? (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {pub.title}
                            </a>
                          ) : (
                            pub.title
                          )}
                          {pub.badge && (
                            <span className="pub-badge">
                              {pub.badge.ja} / {pub.badge.en}
                            </span>
                          )}
                        </div>
                        <div className="pub-meta">
                          {pub.authors}. <em>{pub.venue.ja}</em>, {pub.year}.
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section className="section" id="projects">
          <div className="container">
            <Reveal>
              <SectionTitle index="03" ja="作品・プロジェクト" en="Works" />
              <p className="section-lead">
                つくったもの / Things I&apos;ve built
              </p>
            </Reveal>
            <div className="project-grid">
              {projects.map((project, i) => (
                <Reveal key={project.name.en} delay={i * 130}>
                  <div className="project-card">
                    <div className="project-banner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={projectBanners[i % projectBanners.length]}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="project-body">
                      <h3>
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.name.ja}
                          </a>
                        ) : (
                          project.name.ja
                        )}
                        <span className="en">{project.name.en}</span>
                      </h3>
                      <p>
                        {project.description.ja}
                        <br />
                        {project.description.en}
                      </p>
                      <div className="tech-tags">
                        {project.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 終章 / Origin ---------- */}
        <section className="section" id="origin">
          <div className="container">
            <Reveal>
              <SectionTitle index="Epilogue" ja="原点" en="Origin" />
            </Reveal>
            <Reveal delay={120}>
              <div className="origin-statement">
                <p>{origin.statement.ja}</p>
                <p className="en">{origin.statement.en}</p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="origin-works">
                <ul>
                  {origin.works.map((work) => (
                    <li key={work.url}>
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {work.title}
                      </a>
                      <span className="steam">Steam</span>
                    </li>
                  ))}
                </ul>
                <p className="works-note">
                  {origin.worksNote.ja} / {origin.worksNote.en}
                </p>
              </div>
            </Reveal>
            <div className="origin-gallery">
              {origin.gallery.map((item, i) => (
                <Reveal key={item.src} delay={i * 110}>
                  <figure>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.src} alt={item.alt} loading="lazy" />
                    <figcaption>{item.alt}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <p className="origin-credit">{origin.credit}</p>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="section" id="contact">
          <div className="container">
            <Reveal>
              <div className="contact-card">
                <h2>Get in Touch</h2>
                <p>お気軽にご連絡ください / Feel free to reach out</p>
                <a className="contact-btn" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name.en}. Built with Next.js,
          deployed on Cloudflare.
        </div>
      </footer>
    </>
  );
}
