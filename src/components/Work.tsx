import { projects } from '../data';
import type { Project } from '../data';
import Art from './Art';
import SectionHead from './SectionHead';

interface ProjectRowProps {
  project: Project;
  number: number;
  reverse: boolean;
}

function ProjectRow({ project, number, reverse }: ProjectRowProps) {
  const columns = reverse ? 'md:grid-cols-[1fr_1.35fr]' : 'md:grid-cols-[1.35fr_1fr]';

  return (
    <article
      className={`project grid grid-cols-1 items-center gap-6 border-t border-line py-8 md:gap-16 md:py-12 ${columns}`}
    >
      <Art kind={project.art} label={project.artLabel} flip={reverse} />
      <div className="p-body grid min-w-0 gap-4">
        <div className="mono flex justify-between gap-3 text-muted">
          <span>
            {String(number).padStart(2, '0')} / {project.category}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-semibold leading-none tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="max-w-[44ch] text-muted">{project.summary}</p>
        {project.metrics ? (
          <dl className="metrics grid grid-cols-3 gap-4 border-t border-line pt-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="mono text-muted">{metric.label}</dt>
                <dd className="font-display text-2xl font-semibold tracking-[-0.03em]">{metric.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        <ul className="mono flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-1">
              {tag}
            </li>
          ))}
        </ul>
        <a className="p-link inline-flex w-fit items-center gap-2.5 font-semibold" href="#contact">
          View case study{' '}
          <span className="arrow" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-[clamp(56px,9vw,120px)]" aria-labelledby="work-h">
      <SectionHead id="work-h" title="Selected work" aside="Four projects, 2023 to 2026" />
      {projects.map((project, index) => (
        <ProjectRow key={project.id} project={project} number={index + 1} reverse={index % 2 === 1} />
      ))}
    </section>
  );
}
