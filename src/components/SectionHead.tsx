import Line from './Line';

interface SectionHeadProps {
  id: string;
  title: string;
  aside?: string;
}

export default function SectionHead({ id, title, aside }: SectionHeadProps) {
  return (
    <div className="mb-[clamp(24px,4vw,48px)] flex flex-wrap items-end justify-between gap-6">
      <h2
        id={id}
        className="reveal-lines font-display text-[clamp(2rem,5.5vw,4.4rem)] font-semibold leading-none tracking-[-0.03em] text-balance"
      >
        <Line>{title}</Line>
      </h2>
      {aside ? (
        <span className="mono text-muted" data-fade>
          {aside}
        </span>
      ) : null}
    </div>
  );
}
