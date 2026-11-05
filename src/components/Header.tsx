import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navLinks, profile, socials } from "../data";
import BrandMark from "./BrandMark";

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
          className="brand-link"
          href="#top"
          aria-label={`${profile.name}, home`}
        >
          <BrandMark />
          <span>{profile.name}</span>
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
        <div className="header-socials" aria-label="Social and contact links">
          {socials.map((link) => {
            const Icon = link.label === "GitHub" ? FaGithub : FaLinkedinIn;

            return (
              <a
                key={link.label}
                className="header-social-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
          <a
            className="header-social-link"
            href={`mailto:${profile.email}`}
            aria-label="Email"
          >
            <Mail aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
