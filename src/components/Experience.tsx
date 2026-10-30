import { experience } from '../data';
import SectionHead from './SectionHead';

export default function Experience() {
  return (
    <section id="experience" className="py-[clamp(56px,9vw,120px)]" aria-labelledby="xp-h">
      <SectionHead id="xp-h" title="Experience" />
      <ul>
        {experience.map((job, index) => (
          <li
            key={job.period}
            className={`grid items-baseline gap-x-8 gap-y-1 border-line py-5 md:grid-cols-[9rem_1fr_auto] ${
              index === experience.length - 1 ? 'border-y' : 'border-t'
            }`}
            data-fade
          >
            <span className="mono text-muted">{job.period}</span>
            <div className="min-w-0">
              <h4 className="font-display text-[1.35rem] font-semibold tracking-[-0.02em]">{job.role}</h4>
              <span className="text-muted">{job.place}</span>
            </div>
            <span className="mono text-muted">{job.city}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
