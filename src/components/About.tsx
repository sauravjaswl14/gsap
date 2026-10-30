import { aboutLead, services, stats } from '../data';
import SectionHead from './SectionHead';

export default function About() {
  return (
    <section id="about" className="py-[clamp(56px,9vw,120px)]" aria-labelledby="about-h">
      <SectionHead id="about-h" title="About" aside="Remote, working across time zones" />
      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:gap-24">
        <p
          className="min-w-0 font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.02em] text-pretty"
          data-fade
        >
          {aboutLead.before}
          <strong className="font-semibold text-accent">{aboutLead.emphasis}</strong>
          {aboutLead.after}
        </p>
        <ul className="min-w-0" data-fade>
          {services.map((service, index) => (
            <li
              key={service.name}
              className={`flex justify-between gap-4 border-line py-4 ${
                index === services.length - 1 ? 'border-y' : 'border-t'
              }`}
            >
              <span className="font-medium">{service.name}</span>
              <span className="mono text-muted">{service.detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-[clamp(40px,6vw,72px)] grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <b
              className="block font-display text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-none tracking-[-0.04em] tabular-nums"
              data-count={stat.value}
            >
              {stat.value}
            </b>
            <span className="text-muted">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
