import {
  profile,
  education,
  publications,
  projects,
  type Bilingual,
} from '@/data/content';

function SectionTitle({ ja, en }: Bilingual) {
  return (
    <>
      <h2 className="section-title">{ja}</h2>
      <div className="section-title-en">{en}</div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <a className="logo" href="#top">
            {profile.name.en.split(' ')[0]}
          </a>
          <nav className="site-nav">
            <a href="#about">About</a>
            <a href="#publications">Publications</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero container">
          <h1 className="name">
            {profile.name.ja}
            <span className="name-en">{profile.name.en}</span>
          </h1>
          <div className="role bi">
            {profile.role.ja}
            <span className="en"> / {profile.role.en}</span>
          </div>
          <div className="affiliation">
            {profile.affiliation.ja} — {profile.affiliation.en}
          </div>
          <p className="summary">{profile.summary.ja}</p>
          <p className="summary">{profile.summary.en}</p>
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
        </section>

        {/* ---------- About / Education ---------- */}
        <section className="section" id="about">
          <div className="container">
            <SectionTitle ja="経歴" en="Education & Experience" />
            <ul className="timeline">
              {education.map((item) => (
                <li key={item.period + item.title.en}>
                  <div className="period">{item.period}</div>
                  <div>
                    <div>{item.title.ja}</div>
                    <div className="title-en">{item.title.en}</div>
                    {item.detail && (
                      <div className="detail">
                        {item.detail.ja} / {item.detail.en}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Publications ---------- */}
        <section className="section" id="publications">
          <div className="container">
            <SectionTitle ja="研究・業績" en="Publications" />
            {publications.map((group) => (
              <div key={group.category.en}>
                <h3 className="pub-category">
                  {group.category.ja}
                  <span className="en">{group.category.en}</span>
                </h3>
                <ol className="pub-list">
                  {group.items.map((pub) => (
                    <li key={pub.title}>
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
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section className="section" id="projects">
          <div className="container">
            <SectionTitle ja="作品・プロジェクト" en="Projects" />
            <div className="project-grid">
              {projects.map((project) => (
                <div className="project-card" key={project.name.en}>
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
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer / Contact ---------- */}
      <footer className="site-footer" id="contact">
        <div className="container">
          <div className="contact">
            Contact: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            © {new Date().getFullYear()} {profile.name.en}. Built with Next.js,
            deployed on Cloudflare Pages.
          </div>
        </div>
      </footer>
    </>
  );
}
