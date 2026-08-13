import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function SiteHeader({
  engineering = false,
}: {
  engineering?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Ali Mansour, home" onClick={closeMenu}>
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
        className="header-link desktop-connect"
        href="https://www.linkedin.com/in/alimansour28/"
        target="_blank"
        rel="noreferrer"
      >
        Let&apos;s connect <ArrowUpRight aria-hidden="true" />
      </a>

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? " mobile-nav-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <a href="/#work" onClick={closeMenu}>
          <span>Work</span>
          <span aria-hidden="true">01</span>
        </a>
        <a
          className={engineering ? "nav-active" : ""}
          href="/engineering/"
          onClick={closeMenu}
        >
          <span>Engineering</span>
          <span aria-hidden="true">02</span>
        </a>
        <a href="/#experience" onClick={closeMenu}>
          <span>Experience</span>
          <span aria-hidden="true">03</span>
        </a>
        <a
          className="mobile-connect"
          href="https://www.linkedin.com/in/alimansour28/"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <span>Let&apos;s connect</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
