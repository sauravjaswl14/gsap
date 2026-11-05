import { profile } from "../data";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="mono flex flex-wrap justify-between gap-4 border-t border-line pb-10 pt-7 text-muted">
      <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
      <a className="brand-link brand-link--footer" href="#top" aria-label={`${profile.name}, back to top`}>
        <BrandMark />
        <span>{profile.name}</span>
      </a>
    </footer>
  );
}
