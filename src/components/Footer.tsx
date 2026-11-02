import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="mono flex flex-wrap justify-between gap-4 border-t border-line pb-10 pt-7 text-muted">
      <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
      <span>{profile.name}</span>
    </footer>
  );
}
