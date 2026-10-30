import { marqueeItems } from '../data';

function Half() {
  return (
    <div className="flex">
      {marqueeItems.map((item) => (
        <span key={item}>
          {item}
          <b>/</b>
        </span>
      ))}
    </div>
  );
}

// Two identical halves, so moving the track by -50% loops seamlessly.
export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-line py-[22px]" aria-hidden="true">
      <div className="track">
        <Half />
        <Half />
      </div>
    </div>
  );
}
