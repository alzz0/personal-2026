import { ArrowUpRight } from "lucide-react";

export default function SiteHeader({
  engineering = false,
}: {
  engineering?: boolean;
}) {
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
