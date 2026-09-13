const experience = [
  {
    company: "Airtable",
    role: "IT Administrator",
    location: "New York, NY",
    period: "May 2026 - Present",
    highlights: [
      "Administer Okta identity and access management across the organization, from provisioning and deactivation to recurring access reviews.",
      "Built Python automation for Okta offboarding that reduced a roughly 30-minute manual process to about five minutes per departure.",
      "Designed an internal ticketing system on Airtable that now processes approximately 13,000 tickets each year.",
      "Built an asset management system covering approximately 2,000 devices.",
    ],
  },
  {
    company: "MongoDB",
    role: "IT Support Specialist 3",
    location: "New York, NY",
    period: "Jun 2022 - Apr 2026",
    highlights: [
      "Audited Google Workspace licensing across 5,000 employees, reclaiming 400-500 unused seats and reducing recurring spend.",
      "Built a globally deployed computer inventory and machine-lock tracking tool from the ground up.",
      "Automated ticket and incident reporting with Slackbots to improve response times and communication.",
      "Managed Mac fleets with Jamf and launched global MDM plus cloud-based Windows enrollment through Azure.",
    ],
  },
  {
    company: "Better Mortgage / Better.com",
    role: "Senior Technician, IT Lifecycle Management Systems",
    location: "New York, NY",
    period: "Feb 2020 - May 2022",
    note: "Promoted twice in two years",
    highlights: [
      "Supported 10,000+ end users across the US and India while leading Tier 1 deployments, escalations, and project work.",
      "Owned the complete hardware and account lifecycle, including onboarding, offboarding, and leave-of-absence processing.",
      "Administered Okta, BetterCloud, Slack, Zoom, SCCM, Intune, Jamf, Active Directory, Citrix, and AWS environments.",
      "Wrote PowerShell automations to resolve outages and supported endpoint security, group policy, and desktop deployment.",
    ],
  },
  {
    company: "Rutgers University",
    role: "Technician, Institute Computer Lab",
    location: "New Brunswick, NJ",
    period: "Sep 2015 - Jan 2020",
    highlights: [
      "Provided Tier 1 help desk support for Windows, macOS, and Linux systems across campus.",
    ],
  },
];

const skillGroups = [
  {
    label: "Build & automate",
    skills: ["Python", "JavaScript", "Bash", "PowerShell", "Flask", "SQLAlchemy", "REST APIs", "GitHub Actions"],
  },
  {
    label: "Identity & access",
    skills: ["Okta", "Azure AD", "Active Directory", "OneLogin", "JumpCloud", "SSO", "MFA / 2FA"],
  },
  {
    label: "Devices & security",
    skills: ["Jamf", "Intune", "Autopilot", "SCCM", "Cortex XDR", "Endpoint Encryption"],
  },
  {
    label: "Cloud & operations",
    skills: ["AWS", "Azure", "Google Workspace", "Office 365", "Airtable", "Confluence", "Jira", "Slack API"],
  },
];

const projects = [
  {
    number: "01",
    title: "Access Review & Audit Log Visualizer",
    description:
      "A full-stack application that ingests identity and access exports, flags stale or high-risk accounts, and visualizes access distribution by department.",
    stack: "Python / Flask / SQLAlchemy / pandas / Chart.js",
    live: "https://access-audit-visualizer.onrender.com",
    source: "https://github.com/cembsahin/access-audit-visualizer",
  },
  {
    number: "02",
    title: "Housing Market Dashboard",
    description:
      "An interactive dashboard for exploring US median home-value trends by state using live Zillow Research and FRED data.",
    stack: "Python / Streamlit / pandas / Plotly",
    live: "https://housing-dashboard-8c7rwnyrptfglbexwg825h.streamlit.app",
    source: "https://github.com/cembsahin/housing-dashboard",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cem B. Sahin - home">
          <span className="brand-mark" aria-hidden="true">CS</span>
          <span className="brand-name">Cem B. Sahin</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="nav-cta" href="mailto:cemberk04@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid-line" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span /> IT administrator + systems builder</p>
            <h1 id="hero-title">
              I build the systems behind <em>high-performing teams.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m Cem, an IT administrator with 6+ years turning complex identity,
              endpoint, and infrastructure work into reliable automation and useful internal tools.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See selected work <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href="/Cem_Sahin_Resume_2026.pdf" download>
                Download résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-meta" aria-label="Professional details">
              <span>Cliffside Park, NJ</span>
              <span className="meta-separator" aria-hidden="true">/</span>
              <span>Currently at Airtable</span>
            </div>
          </div>

          <aside className="impact-panel" aria-label="Career impact at a glance">
            <p className="panel-label">Impact at a glance</p>
            <div className="metric-grid">
              <div className="metric">
                <strong>13K</strong>
                <span>tickets processed annually</span>
              </div>
              <div className="metric">
                <strong>2K</strong>
                <span>hardware assets tracked</span>
              </div>
              <div className="metric">
                <strong>5×</strong>
                <span>faster offboarding workflow</span>
              </div>
              <div className="metric">
                <strong>500</strong>
                <span>unused licenses reclaimed</span>
              </div>
            </div>
            <div className="system-status">
              <span className="status-pulse" aria-hidden="true" />
              Building at the intersection of IT and software
            </div>
          </aside>
        </section>

        <section className="marquee" aria-label="Areas of expertise">
          <div>
            <span>Identity</span><i>•</i><span>Automation</span><i>•</i><span>Infrastructure</span><i>•</i>
            <span>Endpoint</span><i>•</i><span>Internal Tools</span><i>•</i><span>Security</span>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-index">01 / Selected work</p>
            <h2 id="work-title">Tools that make complex work feel simple.</h2>
            <p>
              I build from firsthand operational experience: find the repeated pain,
              understand the edge cases, and ship the tool the team actually needs.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">{project.stack}</div>
                </div>
                <div className="project-links" aria-label={`${project.title} links`}>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live demo <span aria-hidden="true">↗</span>
                  </a>
                  <a href={project.source} target="_blank" rel="noreferrer">
                    Source <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading compact-heading">
            <p className="section-index">02 / Experience</p>
            <h2 id="experience-title">Six years of systems thinking in practice.</h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={job.company}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="job-meta">
                  <p>{job.period}</p>
                  <span>{job.location}</span>
                </div>
                <div className="job-content">
                  <div className="job-title-row">
                    <div>
                      <h3>{job.company}</h3>
                      <p>{job.role}</p>
                    </div>
                    {job.note && <span className="promotion-tag">{job.note}</span>}
                  </div>
                  <ul>
                    {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading compact-heading light-heading">
            <p className="section-index">03 / Technical toolkit</p>
            <h2 id="skills-title">Broad systems knowledge. A builder&apos;s mindset.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="education-row">
            <p>Education</p>
            <div>
              <strong>M.S. Computer Science</strong>
              <span>Stevens Institute of Technology, 2025</span>
            </div>
            <div>
              <strong>B.A. Information Technology &amp; Informatics</strong>
              <span>Rutgers University, 2020</span>
            </div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div>
            <p className="section-index">04 / Connect</p>
            <h2 id="contact-title">Have an interesting problem to solve?</h2>
          </div>
          <div className="contact-actions">
            <a href="mailto:cemberk04@gmail.com">cemberk04@gmail.com <span aria-hidden="true">↗</span></a>
            <div>
              <a href="https://linkedin.com/in/cembsahin" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/cembsahin" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Cem B. Sahin</span>
        <span>IT administration × software</span>
      </footer>
    </>
  );
}
