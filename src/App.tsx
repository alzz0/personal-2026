import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileText,
  Github,
  Layers3,
  Linkedin,
  Network,
  Play,
  ServerCog,
  Sparkles,
  Terminal,
  TestTube2,
  Twitter,
  Waypoints,
} from "lucide-react";
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";

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
const pipelineSteps = [
  ["01", "Ingest", "Validate + normalize"],
  ["02", "Analyze", "Speech · audio · scenes"],
  ["03", "Vision", "People · faces · tracking"],
  ["04", "Understand", "Multimodal timeline"],
  ["05", "Rank", "Candidates · grading · score"],
  ["06", "Compose", "Tracking · 9:16 layouts"],
  ["07", "Render", "FFmpeg · captions · delivery"],
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

const engineeringNotes = [
  {
    number: "01",
    title: "Building ByteCap’s AI clipping pipeline",
    description:
      "A practical look at turning a long video into short clips worth watching: transcription, candidate selection, scoring, rendering, and the systems around it.",
    tags: ["AI", "Node.js", "FFmpeg", "Queues"],
    href: "/engineering/ai-clipping/",
    status: "Read case study",
  },
  {
    number: "02",
    title: "Designing an AI auto B-roll system",
    description:
      "How I’m approaching semantic matching, media selection, and timeline composition without making the editor feel unpredictable.",
    tags: ["AI", "Video", "Product"],
    href: "#",
    status: "Coming soon",
  },
  {
    number: "03",
    title: "Video processing without a huge infrastructure bill",
    description:
      "The choices behind async work, temporary media, retries, and keeping a compute-heavy pipeline practical to run.",
    tags: ["AWS", "Redis", "Cost"],
    href: "#",
    status: "Coming soon",
  },
];

function SiteHeader({ engineering = false }: { engineering?: boolean }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Ali Mansour, home">
        <span className="brand-mark">AM</span>
        <span>Ali Mansour</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="/#work">Work</a>
        <a className={engineering ? "nav-active" : ""} href="/engineering/">
          Engineering
        </a>
        <a href="/#experience">Experience</a>
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
  );
}

function EngineeringPage() {
  return (
    <div className="site-shell engineering-page">
      <SiteHeader engineering />
      <main>
        <section className="engineering-hero page-width">
          <p className="eyebrow">Engineering notes</p>
          <h1>
            How I build the systems behind <em>ByteCap.</em>
          </h1>
          <p>
            Deep dives into the technical decisions, trade-offs, and lessons
            behind an AI video product used by thousands of creators.
          </p>
          <div className="engineering-hero-meta">
            <span>
              <Cpu aria-hidden="true" /> AI systems
            </span>
            <span>
              <Terminal aria-hidden="true" /> Production engineering
            </span>
            <span>
              <FileText aria-hidden="true" /> Honest write-ups
            </span>
          </div>
        </section>

        <section className="page-width engineering-index">
          <div className="engineering-index-heading">
            <div>
              <p className="eyebrow">ByteCap build log</p>
              <h2>Inside the work.</h2>
            </div>
            <p>
              These are working notes, not marketing pages: the messy middle,
              the constraints, and the choices that made it into production.
            </p>
          </div>
          <div className="note-grid">
            {engineeringNotes.map((note) => (
              <article className="note-card" key={note.number}>
                <span className="note-number">{note.number}</span>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <div className="tag-list">
                  {note.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {note.href === "#" ? (
                  <span className="note-status">{note.status}</span>
                ) : (
                  <a className="note-link" href={note.href}>
                    {note.status} <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="page-width engineering-callout">
          <Network aria-hidden="true" />
          <div>
            <p className="eyebrow">The goal</p>
            <h2>Show the thinking, not just the stack.</h2>
            <p>
              Each note will cover the problem, approach, architecture,
              trade-offs, and what changed after the system met real users.
            </p>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <p>© {new Date().getFullYear()} Ali Mansour</p>
        <p>Engineering notes from ByteCap.</p>
      </footer>
    </div>
  );
}

const sectionPrompts = [
  [
    "The problem",
    `Clipping long-form video is more than finding an interesting sentence.

A strong short needs to make sense without the surrounding video, open with a compelling hook, build toward a payoff, maintain enough visual and audio energy to hold attention, and survive being reformatted from landscape footage into a vertical 9:16 composition.

I built Magic Clips around that larger problem: understanding what is happening across the full timeline, ranking the moments worth extracting, and then automatically turning those moments into short-form edits that are actually usable.`,
  ],

  [
    "Building a multimodal analysis pipeline",
    `I approached clipping as a multimodal video-understanding problem rather than a timestamp-generation problem.

The pipeline analyzes several independent signals across the source: speech and meaning, scene changes, visual activity, audio energy, people and faces, pacing, silence, and the relationships between events over time.

Those signals are normalized into a timeline representation that the clipping system can reason over when generating and ranking candidate moments.

This separation became important in production. A podcast, gameplay recording, interview, tutorial, and sports video can all contain strong clips, but the signals that make those moments interesting are very different.`,
  ],

  [
    "Computer vision: from managed API to self-hosted",
    `Speech alone isn't enough to understand a video. The system also needs to know who is on screen, where they are, when shots change, and how subjects move throughout a clip.

I initially built this layer using Google Video Intelligence to detect people, faces, shots, and visual changes across the source. I converted those detections into timestamped data that could be combined with speech, audio, scene, and pacing signals elsewhere in the pipeline.

That worked well early on, but as ByteCap's usage grew, computer-vision processing became a meaningful infrastructure cost. Instead of treating that cost as a permanent dependency, I built an in-house, self-hosted computer-vision pipeline for the detection workloads ByteCap relied on most.

Bringing the workload in-house gave me control over inference, batching, concurrency, and how much of each source actually needed to be analyzed. It also let me shape the output specifically around ByteCap's downstream needs instead of adapting a general-purpose video API.

The resulting detection data feeds directly into the editing system. A two-person podcast can become a stacked 9:16 composition, a moving speaker can remain framed as they move through a shot, and visually dense footage can use a layout that preserves more of the original scene.

What started as a managed API integration eventually became part of ByteCap's own media infrastructure.`,
  ],

  [
    "Finding candidate moments",
    `Once the source has been analyzed, the clipping model evaluates the timeline and proposes candidate segments rather than simply cutting the video at regular intervals.

Candidates are evaluated using surrounding context so the system can distinguish between an isolated sentence and a moment with a complete setup, hook, and payoff.

The system can also work toward a specific intent. Instead of only asking for generic highlights, a user can request things such as the funniest moments, teaching points, hot takes, reactions, plot twists, or specific events.

That means candidate generation is driven by both the structure of the source and what the user is actually trying to find.`,
  ],

  [
    "The grading system",
    `Generating candidates is only the first pass. Every candidate then goes through an editorial grading system I built to determine which clips should actually surface.

Each candidate is evaluated across multiple dimensions:

• Hook — how strongly the opening earns attention
• Payoff — whether the moment delivers on its setup
• Curiosity — whether it creates a reason to keep watching
• Pacing — whether the segment maintains momentum
• Standalone value — whether it makes sense outside the original video

Those scores are combined with signals such as dialogue quality, visual activity, scene dynamics, audio energy, silence, and pacing to produce an overall 0–100 viral score and letter grade.

This second ranking layer was important. Finding something interesting somewhere in a two-hour video is much easier than deciding which five moments are actually worth putting in front of a creator.`,
  ],

  [
    "Turning 16:9 into 9:16",
    `Finding the right timestamps only solves half of the problem. Most source footage is landscape, while the resulting clips are intended for vertical platforms.

I built an automatic reframing system that uses the person and face detections from the analysis pipeline to decide how each scene should be composed.

For a two-person 16:9 podcast, the system can identify both speakers and automatically create a stacked vertical layout with one person on top and the other below.

For a single moving speaker, the crop can follow that person through the frame.

For visually dense scenes where aggressive cropping would remove important context, the system can choose a composition that fits the original scene into the vertical canvas instead.

The layout therefore isn't a fixed center crop. It's another decision made from what the system knows about the scene.`,
  ],

  [
    "Tracking speakers through the clip",
    `The framing system continues using detection data throughout the generated clip rather than making one crop decision from the first frame.

Person and face positions are mapped across time so the composition can react as subjects move, speakers change, or the shot itself changes.

That creates a timeline of framing decisions that can be translated into editable layout data and eventually rendered into the final 9:16 video.

This was especially important for interviews and podcasts, where keeping both speakers visible can make the difference between an automatically generated clip feeling intentional or obviously machine-cropped.`,
  ],

  [
    "Refining clip boundaries",
    `Model-selected timestamps are treated as editorial suggestions, not final cut points.

The pipeline compares those timestamps against nearby scene boundaries, silence regions, speech timing, and other timeline signals before determining the final in and out points.

This helps prevent clips from beginning halfway through a sentence, cutting immediately before a reaction, or ending in the middle of a shot.

The goal is to preserve the model's editorial choice while using deterministic video-processing signals to make the actual edit cleaner.`,
  ],

  [
    "From analysis to production video",
    `After selection, grading, reframing, and boundary refinement, the result moves through the rest of ByteCap's media pipeline.

The generated project contains the selected source range, vertical layout and tracking information, captions, timing data, and the metadata needed by the editor.

From there the creator can continue editing or let ByteCap apply additional finishing steps before rendering.

The important architectural decision was keeping analysis separate from rendering. Expensive video processing runs asynchronously, intermediate results can be reused, failures can be retried, and the UI doesn't have to wait on a single long-running request.`,
  ],

  [
    "What I learned building it",
    `The biggest lesson was that AI clipping isn't really one AI problem.

It's a collection of smaller systems that have to agree with each other: video analysis, speech understanding, candidate generation, editorial ranking, object detection, face tracking, layout generation, timestamp refinement, rendering, storage, queues, and the editor that exposes the result.

The quality came less from asking a model to "find viral clips" and more from building enough structure around the model that each stage had useful evidence, measurable outputs, and deterministic systems to fall back on.

That architecture also made the product easier to improve. A better scoring signal, detection strategy, framing rule, or boundary algorithm can improve one part of the pipeline without requiring the entire system to be rebuilt.`,
  ],
];

function AiClippingPage() {
  return (
    <div className="site-shell article-page">
      <SiteHeader engineering />
      <main className="article-main page-width">
        <a className="back-link" href="/engineering/">
          ← All engineering notes
        </a>
        <header className="article-hero">
          <p className="eyebrow">ByteCap · AI systems</p>
          <h1>Building ByteCap&apos;s AI clipping pipeline.</h1>
          <p className="article-deck">
            How I built a multimodal video pipeline that analyzes long-form
            content, identifies and grades strong moments, tracks people across
            scenes, and automatically turns landscape footage into composed 9:16
            clips.
          </p>{" "}
          <div className="article-meta">
            <span>Magic Clips</span>
            <span>·</span>
            <span>ByteCap engineering note</span>
            <span>·</span>

            <a
              href="https://www.bytecap.io/features/magic-clips"
              target="_blank"
              rel="noreferrer"
              className="article-product-link"
            >
              View live product <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </header>

        <section
          className="architecture-card"
          aria-label="AI clipping pipeline overview"
        >
          <div className="architecture-heading">
            <Waypoints aria-hidden="true" />
            <span>Pipeline overview</span>
            <span className="status">Production pipeline</span>
          </div>
          <div className="architecture-flow">
            {pipelineSteps.map(([number, title, detail], index) => (
              <Fragment key={number}>
                <div className={`architecture-node node-${number}`}>
                  <span className="architecture-number">{number}</span>
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </div>

                {index < pipelineSteps.length - 1 && (
                  <span
                    className={`architecture-arrow arrow-${number}`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </section>

        <div className="article-layout">
          <aside className="article-aside">
            <p>On this page</p>
            {sectionPrompts.map(([title]) => (
              <a
                href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
                key={title}
              >
                {title}
              </a>
            ))}
            <div className="article-stack">
              <p>Core tools</p>
              <span>Node.js · TypeScript · FFmpeg</span>
              <span>Computer Vision · Redis · Docker</span>
              <span>GCP · Self-hosted inference</span>
            </div>
          </aside>
          <article className="article-content">
            <p className="article-intro">
              Magic Clips is one of the more complex systems I’ve built for
              ByteCap. What looks like “turn a long video into shorts” on the
              surface is actually a pipeline spanning video analysis, computer
              vision, editorial scoring, automatic reframing, and media
              processing. This is how I approached it.
            </p>
            {sectionPrompts.map(([title, summary, expansion], index) => (
              <section
                id={title.toLowerCase().replaceAll(" ", "-")}
                className="article-section"
                key={title}
              >
                <p className="section-count">0{index + 1}</p>
                <h2>{title}</h2>
                <p className="article-body-copy">{summary}</p>
                <div className="writing-prompt">
                  <span>✦</span>
                  <p>{expansion}</p>
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>
      <footer className="site-footer page-width">
        <p>© {new Date().getFullYear()} Ali Mansour</p>
        <a href="/engineering/">More engineering notes →</a>
      </footer>
    </div>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/engineering/ai-clipping") return <AiClippingPage />;
  if (path === "/engineering") return <EngineeringPage />;

  return (
    <div className="site-shell">
      <SiteHeader />

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
              <a className="text-link" href="/engineering/ai-clipping/">
                Read the engineering notes <ArrowUpRight aria-hidden="true" />
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
