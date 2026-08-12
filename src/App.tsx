import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Play,
  ServerCog,
  Sparkles,
  Terminal,
  TestTube2,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/alzz0", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alimansour28/",
    icon: Linkedin,
  },
  { label: "X", href: "https://twitter.com/alzz30", icon: Twitter },
];

const stats = [
  { value: "7+", label: "years building for production" },
  { value: "20k+", label: "users on software I built" },
  { value: "3", label: "cloud platforms shipped on" },
  { value: "17%", label: "ad revenue lift at Kidoodle.TV" },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    description: "Fast, thoughtful interfaces across web, mobile, and TV.",
    skills: ["TypeScript", "React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend & data",
    icon: Database,
    description: "APIs and data systems that are practical to run and extend.",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "REST APIs",
    ],
  },
  {
    title: "Cloud & delivery",
    icon: Cloud,
    description: "Production infrastructure from first deploy through scale.",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Cloudflare",
      "Docker",
      "Terraform",
      "GitHub Actions",
    ],
  },
  {
    title: "Quality & workflow",
    icon: TestTube2,
    description: "Good feedback loops, reliable releases, fewer surprises.",
    skills: [
      "Playwright",
      "Vitest",
      "Testing Library",
      "Git",
      "Cursor",
      "GitHub Copilot",
    ],
  },
];

const experience = [
  {
    years: "2023 — now",
    role: "Software Engineer",
    company: "ByteCap",
    note: "Remote",
    copy: "Architected and built an AI video platform end to end from the React experience and Node.js APIs to asynchronous FFmpeg pipelines, cloud infrastructure, and social publishing integrations.",
    highlight: "Used by 20,000+ creators",
  },
  {
    years: "2022 — 2023",
    role: "Agile Software Engineer",
    company: "TribalScale",
    note: "Toronto",
    copy: "Built production web, mobile, and serverless systems for enterprise clients, including McCain process automation and the Netcoins crypto trading app.",
    highlight: "AWS · GCP · Azure",
  },
  {
    years: "2020 — 2022",
    role: "Software Engineer",
    company: "Kidoodle.TV",
    note: "Calgary",
    copy: "Led frontend work across web and connected TV, improved architecture, reviewed code, and mentored junior engineers while partnering closely with product and design.",
    highlight: "35% faster load times",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-grid">
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ali Mansour, home">
          <span className="brand-mark">AM</span>
          <span>Ali Mansour</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </nav>

        <a
          className="header-link"
          href="https://www.linkedin.com/in/alimansour28/"
          target="_blank"
          rel="noreferrer"
        >
          Let&apos;s connect <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <main id="top">
        <section className="hero page-width">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="availability">
              <span aria-hidden="true" /> Full-stack software engineer
            </p>
            <h1>
              I build production software that stays fast when things get
              <em> complicated.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m Ali, a software engineer with 7+ years across web,
              mobile, cloud, and AI powered systems. I like turning fuzzy
              problems into reliable products people enjoy using.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See my work <ArrowDown aria-hidden="true" />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/alzz0"
                target="_blank"
                rel="noreferrer"
              >
                <Github aria-hidden="true" /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            className="code-card"
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            aria-label="A quick look at how Ali works"
          >
            <div className="code-card-bar">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>ali.engineer.ts</span>
              <Code2 aria-hidden="true" />
            </div>
            <div className="code-content">
              <p>
                <span className="code-purple">const</span> engineer = {"{"}
              </p>
              <p className="indent">
                <span className="code-blue">focus</span>:{" "}
                <span className="code-green">&quot;useful software&quot;</span>,
              </p>
              <p className="indent">
                <span className="code-blue">caresAbout</span>: [
              </p>
              <p className="indent-2">
                <span className="code-green">
                  &quot;clean architecture&quot;
                </span>
                ,
              </p>
              <p className="indent-2">
                <span className="code-green">&quot;fast experiences&quot;</span>
                ,
              </p>
              <p className="indent-2">
                <span className="code-green">
                  &quot;shipping the right thing&quot;
                </span>
                ,
              </p>
              <p className="indent">],</p>
              <p className="indent">
                <span className="code-blue">poweredBy</span>:{" "}
                <span className="code-green">
                  &quot;curiosity + coffee&quot;
                </span>
                ,
              </p>
              <p>{"}"};</p>
              <div className="terminal-line">
                <span>$</span> npm run ship <i>✓</i>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="stats-band" aria-label="Career highlights">
          <div className="page-width stats-grid">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <motion.section
          className="page-width work-section"
          id="work"
          {...fadeUp}
        >
          <SectionHeading
            eyebrow="Selected work"
            title="Engineering the whole system not just the happy path."
            copy="My best work sits where product thinking meets technical depth: shaping the experience, designing the APIs, and making sure it all runs reliably."
          />

          <article className="project-card">
            <div className="project-main">
              <div className="project-label">
                <Sparkles aria-hidden="true" /> Flagship build
              </div>
              <h3>ByteCap</h3>
              <p className="project-lede">
                An AI video creation and publishing platform that turns long
                form content into ready to share short clips.
              </p>
              <p className="project-copy">
                I built the product across frontend, backend, infrastructure,
                and deployment: clipping, captions, reframing, content
                generation, and integrations with major social platforms.
              </p>
              <div className="tag-list" aria-label="ByteCap technologies">
                {[
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "AWS",
                  "PostgreSQL",
                  "Redis",
                  "FFmpeg",
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="text-link"
                href="https://www.bytecap.io/"
                target="_blank"
                rel="noreferrer"
              >
                Visit ByteCap <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className="pipeline-panel">
              <div className="panel-heading">
                <Terminal aria-hidden="true" />
                <span>media pipeline</span>
                <span className="status">healthy</span>
              </div>
              <div className="pipeline-step">
                <span className="step-icon">
                  <Play />
                </span>
                <div>
                  <strong>Ingest</strong>
                  <small>Video upload + validation</small>
                </div>
                <i>01</i>
              </div>
              <div className="pipeline-connector" />
              <div className="pipeline-step">
                <span className="step-icon">
                  <Braces />
                </span>
                <div>
                  <strong>Process</strong>
                  <small>AI clipping, captions + reframing</small>
                </div>
                <i>02</i>
              </div>
              <div className="pipeline-connector" />
              <div className="pipeline-step">
                <span className="step-icon">
                  <ServerCog />
                </span>
                <div>
                  <strong>Publish</strong>
                  <small>Queue + social integrations</small>
                </div>
                <i>03</i>
              </div>
              <div className="pipeline-footer">
                <span>
                  <b>20,000+</b> users
                </span>
                <span>
                  <b>Async</b> by design
                </span>
              </div>
            </div>
          </article>
        </motion.section>

        <motion.section
          className="page-width skills-section"
          id="skills"
          {...fadeUp}
        >
          <SectionHeading
            eyebrow="Technical toolkit"
            title="From interface to infrastructure."
            copy="I’m strongest in TypeScript and JavaScript, with hands on experience across the full product stack and the cloud systems behind it."
          />
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, description, skills }) => (
              <article className="skill-card" key={title}>
                <div className="skill-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tag-list">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="experience-wrap" id="experience" {...fadeUp}>
          <div className="page-width experience-grid">
            <div className="experience-intro">
              <p className="eyebrow">Where I’ve worked</p>
              <h2>A few chapters from the build log.</h2>
              <p>
                Product teams, consulting, streaming, fintech, industrial
                automation—and plenty of lessons shipped along the way.
              </p>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.company}>
                  <div className="timeline-marker" aria-hidden="true" />
                  <p className="timeline-years">{item.years}</p>
                  <div className="timeline-title">
                    <h3>{item.role}</h3>
                    <span>
                      {item.company} · {item.note}
                    </span>
                  </div>
                  <p className="timeline-copy">{item.copy}</p>
                  <p className="timeline-highlight">{item.highlight}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="page-width contact-section">
          <motion.div className="contact-card" {...fadeUp}>
            <p className="eyebrow">Say hello</p>
            <h2>Good software starts with a good conversation.</h2>
            <p>
              If you’re building something interesting or just want to talk
              engineering I’m always happy to connect.
            </p>
            <div className="social-links">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <Icon aria-hidden="true" /> {label}{" "}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <p>© {new Date().getFullYear()} Ali Mansour</p>
        <p>Designed with care. Built with TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;
