import type { ReactNode } from 'react';

// One masked line of a headline. GSAP slides `.line-inner` up from below the mask.
export default function Line({ children }: { children: ReactNode }) {
  return (
    <span className="line">
      <span className="line-inner">{children}</span>
    </span>
  );
}
