import { ArrowUpRight, Cpu, FileText, Network, Terminal } from "lucide-react";
import SiteHeader from "../components/SiteHeader";

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

export default function EngineeringPage() {
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
            Deep dives into the technical decisions, trade offs, and lessons
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
              Each note will cover the problem, approach, architecture, trade
              offs, and what changed after the system met real users.
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
