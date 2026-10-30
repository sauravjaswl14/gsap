import { navLinks, profile } from '../data';

export default function Header() {
  return (
    <header className="nav flex flex-wrap items-center justify-between gap-4 py-6">
      <a className="font-display text-xl font-extrabold tracking-tight" href="#top">
        {profile.name}
      </a>
      <nav className="nav-links mono flex flex-wrap items-center gap-x-7 gap-y-2" aria-label="Primary">
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
    </header>
  );
}
