import { profile } from '../data';
import Line from './Line';

export default function Hero() {
  return (
    <div className="hero pb-12 pt-8 md:pb-24 md:pt-24">
      <h1
        className="font-display text-[clamp(2.9rem,10.5vw,9.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-balance"
        aria-label="Interfaces that move with intent."
      >
        <Line>Interfaces</Line>
        <Line>that move</Line>
        <Line>
          with <em className="not-italic text-accent">intent.</em>
        </Line>
      </h1>
      <div className="hero-rule mt-[clamp(32px,5vw,64px)] h-px bg-line" />
      <div className="hero-meta grid grid-cols-2 gap-x-12 gap-y-6 pt-7 md:grid-cols-[1.4fr_1fr_1fr]">
        <p className="col-span-2 max-w-[46ch] text-[1.15rem] md:col-span-1">{profile.intro}</p>
        <dl className="mono grid gap-1">
          <dt className="text-muted">Role</dt>
          <dd>{profile.role}</dd>
        </dl>
        <dl className="mono grid gap-1">
          <dt className="text-muted">Currently</dt>
          <dd>{profile.currently}</dd>
        </dl>
      </div>
    </div>
  );
}
