import {
  ArrowUpRight,
  Github,
  Linkedin,
  Rocket,
  Twitter,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years shipping software", value: "8+" },
  { label: "Industries delivered in", value: "4" },
  { label: "Live SaaS product", value: "ByteCap" },
  { label: "Apps shipped to production", value: "10+" },
];

const clients = ["McCain", "NetCoins", "KidoodleTV", "Telus"];

const caseStudies = [
  {
    title: "Fintech trading dashboard",
    problem:
      "A crypto exchange needed a real-time trading interface with live order books, price charts, and instant execution.",
    solution:
      "Built a responsive frontend with WebSocket driven data, paired with a Node.js backend handling order routing and account state.",
    result:
      "Shipped to production and used by thousands of active traders. Sub-second data updates across the board.",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL"],
  },
  {
    title: "IoT monitoring platform",
    problem:
      "A client needed to monitor thousands of connected devices in real time with alerting and historical data.",
    solution:
      "Designed a scalable ingestion pipeline on AWS with a dashboard for live device status, anomaly detection, and reporting.",
    result:
      "Reliable monitoring across thousands of devices with automated alerting and zero downtime.",
    tags: ["AWS", "IoT Core", "React", "DynamoDB"],
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/alzz0",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alimansour28/",
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/alzz30",
    icon: Twitter,
  },
];

const projects = [
  {
    title: "ByteCap",
    description:
      "Built from scratch — an AI video automation platform that turns long form content into short form clips, fully edited and ready to post. Handles clipping, captions, b roll, reframing, and publishing.",
    stack: ["Next.js", "AWS", "Tailwind CSS", "AI Video Workflows"],
    href: "https://www.bytecap.io/",
    featured: true,
  },
];

const services = [
  {
    title: "Video automation pipeline",
    outcome:
      "Upload a video → get clipped, captioned, and ready to post shorts back.",
    tags: ["AWS", "AI", "FFmpeg", "Queues"],
  },
  {
    title: "SaaS MVP",
    outcome:
      "Go from idea to a live product with auth, payments, and a real backend.",
    tags: ["Next.js", "Node.js", "Stripe", "AWS"],
  },
  {
    title: "Cloud infrastructure setup",
    outcome:
      "Deployments, scaling, storage, CDN, and monitoring — set up properly on AWS.",
    tags: ["EC2", "S3", "CloudFront", "CI/CD"],
  },
  {
    title: "Traditional backend API",
    outcome:
      "Express API with PostgreSQL on a VPS — no serverless, no cold starts, just a reliable hosted server.",
    tags: ["Express", "PostgreSQL", "VPS", "Node.js"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
};

const itemAnim = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 font-sans relative overflow-hidden">
      {/* Stripe-like Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/40 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-200/30 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-10 md:px-10 md:py-20 z-10">
        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 flex items-center justify-between rounded-2xl border border-white/60 bg-white/60 px-5 py-4 backdrop-blur-md md:px-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-sm flex items-center justify-center text-white font-bold text-sm">
              AM
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-900">
                Ali Mansour
              </p>
              <p className="text-xs text-slate-500">
                Software Engineer · SaaS Founder
              </p>
            </div>
          </div>
          <a
            href="https://www.bytecap.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-all hover:border-slate-300 hover:text-slate-900 shadow-sm hover:shadow"
          >
            ByteCap
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </motion.header>

        <main className="space-y-24">
          {/* HERO */}
          <motion.section
            {...fadeUp}
            className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm md:p-14"
          >
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3 py-1.5 text-xs font-medium text-indigo-700 backdrop-blur-sm shadow-sm"
              >
                <Rocket className="h-3.5 w-3.5" />
                Founder @ ByteCap
              </motion.div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-5xl lg:leading-[1.15]">
                Hi, I&apos;m Ali &mdash; I build software and ship products.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                Software engineer with 8+ years shipping production software
                across fintech, health, IoT, and media. I build my own products
                and help teams deliver theirs.
              </p>
              <motion.div
                className="mt-10 flex flex-wrap gap-3"
                variants={stagger}
                initial="initial"
                animate="whileInView"
              >
                {socials.map(({ label, href, icon: Icon }) => (
                  <motion.a
                    variants={itemAnim}
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition-all hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-md hover:text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  >
                    <Icon className="h-4 w-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                    {label}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* STATS */}
          <motion.section
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                variants={itemAnim}
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/60 backdrop-blur-sm p-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-3xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.05em] text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.section>

          {/* WHAT I'VE BUILT */}
          <section>
            <motion.div
              {...fadeUp}
              className="mb-8 md:flex items-end justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  What I&apos;ve Built
                </h2>
              </div>
              <p className="mt-2 md:mt-0 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Product · Cloud · Execution
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {projects.map((project) => (
                <motion.article
                  variants={itemAnim}
                  key={project.title}
                  className={`relative group rounded-[1.5rem] border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    project.featured
                      ? "border-indigo-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      {project.title}
                    </h3>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:border-indigo-100"
                      >
                        Visit
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        Private
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <div className="mt-6 grid gap-6">
              {caseStudies.map((study, idx) => (
                <motion.article
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                  className="group rounded-[1.5rem] border border-white/80 bg-white/80 backdrop-blur-sm p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:p-8"
                >
                  <h3 className="mb-6 text-lg font-bold text-slate-900">
                    {study.title}
                  </h3>
                  <div className="grid gap-8 md:grid-cols-3">
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                        Problem
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                        What I built
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                        Result
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {study.result}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500 transition-colors group-hover:border-indigo-100 group-hover:bg-indigo-50/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* LOGO STRIP */}
          <motion.section
            {...fadeUp}
            className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/60 backdrop-blur-sm p-8 md:p-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">
              Worked with teams at
            </p>
            <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {clients.map((client) => (
                <span
                  key={client}
                  className="text-xl font-bold tracking-tight text-slate-400/80 transition-colors hover:text-slate-600 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 cursor-default"
                >
                  {client}
                </span>
              ))}
            </div>
          </motion.section>

          {/* SERVICES */}
          <section>
            <motion.div
              {...fadeUp}
              className="mb-8 md:flex items-end justify-between"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Things I can build
              </h2>
              <p className="mt-2 md:mt-0 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Scoped · Shipped · Done
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {services.map((service) => (
                <motion.article
                  variants={itemAnim}
                  key={service.title}
                  className="group flex flex-col rounded-[1.5rem] border border-white/80 bg-white/80 backdrop-blur-sm p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-100"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50/80 border border-indigo-100 transition-colors group-hover:bg-indigo-100">
                      <Zap className="h-5 w-5 text-indigo-500" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 mb-6">
                    {service.outcome}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500 transition-colors group-hover:border-indigo-100 group-hover:bg-indigo-50/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </section>

          {/* CTA */}
          <motion.section
            {...fadeUp}
            className="relative overflow-hidden rounded-[2rem] border border-indigo-100 bg-gradient-to-b from-white to-indigo-50/50 p-10 md:p-16 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <div className="relative z-10 flex flex-col items-center">
              <span className="mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600">
                Work Together
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Got something you want built?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                I like working on interesting problems. If you&apos;ve got a
                project in mind, drop me a line.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition-all hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-md hover:text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  >
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-slate-700 transition-colors" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.section>
        </main>

        <footer className="mt-24 border-t border-slate-200/60 pt-8 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-500">
            &copy; {new Date().getFullYear()} Ali Mansour
          </p>
          <div className="flex gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <span className="sr-only">{label}</span>
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
