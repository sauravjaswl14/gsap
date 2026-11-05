import { useEffect, useState } from "react";
import { navLinks, profile } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 0);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`nav sticky top-0 z-10${isScrolled ? " is-scrolled" : ""}`}
    >
      <div className="nav-inner page-gutter flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-[clamp(16px,2vw,24px)]">
        <a
          className="font-display text-[clamp(1.1rem,2vw,1.25rem)] font-extrabold tracking-tight"
          href="#top"
        >
          {profile.name}
        </a>
        <nav
          className="nav-links mono flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-7"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <span className="status inline-flex items-center gap-2">
            <i aria-hidden="true" />
            {profile.availability}
          </span>
        </nav>
      </div>
    </header>
  );
}
