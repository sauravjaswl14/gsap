import type { ArtKind } from "../data";

// Abstract project artwork drawn with SVG shapes. Colors come from the --p1..--p4 tokens.
function ArtShapes({ kind }: { kind: ArtKind }) {
  switch (kind) {
    case "tideline":
      return (
        <>
          <rect width="800" height="600" fill="var(--bg-2)" />
          <g fill="var(--p1)">
            <rect x="110" y="330" width="62" height="190" />
            <rect x="200" y="270" width="62" height="250" />
            <rect x="290" y="360" width="62" height="160" />
            <rect x="380" y="200" width="62" height="320" />
            <rect x="470" y="250" width="62" height="270" />
            <rect x="560" y="140" width="62" height="380" fill="var(--p2)" />
          </g>
          <path
            d="M110 300 C 220 230, 300 330, 410 170 S 560 120, 690 90"
            fill="none"
            stroke="var(--p4)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="690" cy="90" r="14" fill="var(--p4)" />
          <line
            x1="80"
            y1="520"
            x2="720"
            y2="520"
            stroke="var(--p2)"
            strokeWidth="2"
          />
        </>
      );
    case "fieldnotes":
      return (
        <>
          <rect width="800" height="600" fill="var(--bg-2)" />
          <rect x="150" y="90" width="500" height="420" fill="var(--p3)" />
          <g fill="var(--p2)">
            <rect x="190" y="140" width="260" height="22" />
            <rect x="190" y="190" width="420" height="10" />
            <rect x="190" y="215" width="380" height="10" />
            <rect x="190" y="240" width="410" height="10" />
            <rect x="190" y="265" width="300" height="10" />
          </g>
          <rect x="190" y="320" width="190" height="130" fill="var(--p1)" />
          <g fill="var(--p2)">
            <rect x="410" y="320" width="200" height="10" />
            <rect x="410" y="345" width="170" height="10" />
            <rect x="410" y="370" width="200" height="10" />
            <rect x="410" y="395" width="120" height="10" />
          </g>
          <circle cx="610" cy="130" r="26" fill="var(--p4)" />
        </>
      );
    case "orbit":
      return (
        <>
          <rect width="800" height="600" fill="var(--p2)" />
          <g fill="none" stroke="var(--p3)" strokeWidth="2">
            <circle cx="400" cy="300" r="70" />
            <circle cx="400" cy="300" r="140" />
            <circle cx="400" cy="300" r="210" />
            <circle cx="400" cy="300" r="280" />
          </g>
          <circle cx="400" cy="300" r="34" fill="var(--p1)" />
          <g className="orbit-spin">
            <circle cx="540" cy="300" r="14" fill="var(--p4)" />
            <circle cx="330" cy="500" r="18" fill="var(--p4)" />
          </g>
          <g className="orbit-spin-rev">
            <circle cx="260" cy="200" r="10" fill="var(--p1)" />
            <circle cx="640" cy="170" r="8" fill="var(--p1)" />
          </g>
        </>
      );
    case "kiln":
      return (
        <>
          <rect width="800" height="600" fill="var(--p4)" />
          <path
            d="M130 540 V300 A110 110 0 0 1 350 300 V540 Z"
            fill="var(--p2)"
          />
          <path
            d="M380 540 V230 A110 110 0 0 1 600 230 V540 Z"
            fill="var(--p1)"
          />
          <path
            d="M630 540 V360 A60 60 0 0 1 750 360 V540 Z"
            fill="var(--p3)"
          />
          <circle cx="240" cy="300" r="34" fill="var(--p4)" />
          <line
            x1="60"
            y1="540"
            x2="760"
            y2="540"
            stroke="var(--p2)"
            strokeWidth="3"
          />
        </>
      );
  }
}

interface ArtProps {
  kind: ArtKind;
  label: string;
  flip?: boolean;
}

export default function Art({ kind, label, flip = false }: ArtProps) {
  return (
    <div
      className={`art relative aspect-[4/3] max-w-full overflow-hidden rounded-md bg-bg2 ${
        flip ? "md:order-2" : ""
      }`}
      role="img"
      aria-label={label}
    >
      <div className="art-inner">
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ArtShapes kind={kind} />
        </svg>
      </div>
    </div>
  );
}
