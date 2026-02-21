import { ArrowUpRight, Github, Linkedin, Rocket, Sparkles, Twitter } from 'lucide-react'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/alzz0',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alimansour28/',
    icon: Linkedin,
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/alzz30',
    icon: Twitter,
  },
]

const projects = [
  {
    title: 'ByteCap',
    description:
      'A SaaS platform for custom video captions that helps creators and teams produce high-performing short-form content at scale.',
    stack: ['Next.js', 'AWS', 'Tailwind CSS', 'AI Video Workflows'],
    href: 'https://www.bytecap.io/',
    featured: true,
  },
]

const experience = [
  {
    title: 'Full-Stack Product Builds',
    detail:
      'Designed and shipped end-to-end products from concept to production using React, TypeScript, Node.js, and cloud infrastructure.',
  },
  {
    title: 'Cloud and Scale',
    detail:
      'Built backend services and automation pipelines on AWS with a focus on reliability, performance, and developer velocity.',
  },
  {
    title: 'Cross-Industry Delivery',
    detail:
      'Delivered software across fintech, IoT, health, and media, including work with teams like McCain, NetCoins, and KidoodleTV.',
  },
]

const expertise = [
  'TypeScript, React, Next.js',
  'Node.js backend systems',
  'Cloud architecture on AWS',
  'SaaS product design and execution',
]

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fbff_0,_#f6f8fc_25%,_#ffffff_70%)] text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <header className="mb-16 flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-3 backdrop-blur md:px-6">
          <div>
            <p className="text-sm font-semibold tracking-tight">Ali Mansour</p>
            <p className="text-xs text-slate-500">Software Developer · SaaS Founder</p>
          </div>
          <a
            href="https://www.bytecap.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            ByteCap
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </header>

        <main className="space-y-16">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_1px_0_rgba(15,23,42,0.04),0_12px_36px_rgba(15,23,42,0.06)] md:p-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Rocket className="h-3.5 w-3.5" />
              Building ByteCap
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Hello, I&apos;m Ali. I&apos;m focused on building ByteCap into the #1 short-video editor for businesses and creators.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              I&apos;m a software developer and founder focused on shipping useful software fast. My work spans frontend,
              backend, and cloud systems with a product-first approach.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">About</p>
              <p className="text-sm leading-relaxed text-slate-600">
                Experienced in building modern applications with TypeScript, Node.js, and cloud services. I&apos;ve worked
                across fintech, IoT, health, and media, partnering with teams like McCain, NetCoins, and KidoodleTV to
                deliver production-ready software.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Core Focus</p>
              <ul className="space-y-2">
                {expertise.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2 text-sm text-slate-700">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section>
            <div className="mb-5 flex items-end justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">What I&apos;ve Built</h2>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Product · Cloud · Execution</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {experience.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="mb-2 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.detail}</p>
                </article>
              ))}
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`rounded-2xl border bg-white p-5 transition hover:border-slate-300 ${
                    project.featured ? 'border-indigo-200' : 'border-slate-200'
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700"
                      >
                        Visit
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400">Private</span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
