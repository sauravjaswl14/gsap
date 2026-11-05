import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { officeProjects, projects } from "../data";
import type { OfficeProject, Project } from "../data";
import Art from "./Art";
import SectionHead from "./SectionHead";

interface ProjectRowProps {
  project: Project;
  number: number;
  reverse: boolean;
}

function ProjectRow({ project, number, reverse }: ProjectRowProps) {
  const columns =
    reverse ? "md:grid-cols-[1fr_1.35fr]" : "md:grid-cols-[1.35fr_1fr]";

  return (
    <article
      className={`project grid grid-cols-1 items-center gap-6 border-t border-line py-6 md:gap-12 md:py-8 ${columns}${reverse ? " project--reverse" : ""}`}
    >
      <Art kind={project.art} label={project.artLabel} flip={reverse} />
      <div className="p-body grid min-w-0 gap-4">
        <div className="mono flex justify-between gap-3 text-muted">
          <span>
            {String(number).padStart(2, "0")} / {project.category}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-semibold leading-none tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="max-w-[44ch] text-muted">{project.summary}</p>
        {project.metrics ?
          <dl className="metrics grid grid-cols-[repeat(3,minmax(0,1fr))] gap-3 border-t border-line pt-4 sm:gap-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="mono text-muted">{metric.label}</dt>
                <dd className="break-words font-display text-[clamp(1.1rem,2vw,1.5rem)] font-semibold tracking-[-0.03em]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        : null}
        <ul className="mono flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-1">
              {tag}
            </li>
          ))}
        </ul>
        <a
          className="p-link inline-flex w-fit items-center gap-2.5 font-semibold"
          href="#contact"
        >
          View case study{" "}
          <span className="arrow" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  const officeProjectsTrack = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  useEffect(() => {
    const track = officeProjectsTrack.current;
    if (!track) return;

    const updateScrollButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      setCanScrollBack(track.scrollLeft > 1);
      setCanScrollForward(maxScroll - track.scrollLeft > 1);
    };

    updateScrollButtons();
    track.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      track.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
      gsap.killTweensOf(track);
    };
  }, []);

  const scrollOfficeProjects = (direction: -1 | 1) => {
    const track = officeProjectsTrack.current;
    const cards = track?.querySelectorAll<HTMLElement>("[data-office-card]");
    if (!track || !cards?.length) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const trackLeft = track.getBoundingClientRect().left;
    const snapPositions = Array.from(cards)
      .map((card) =>
        Math.min(
          maxScroll,
          Math.max(
            0,
            card.getBoundingClientRect().left - trackLeft + track.scrollLeft,
          ),
        ),
      )
      .filter(
        (position, index, positions) =>
          positions.findIndex(
            (candidate) => Math.abs(candidate - position) < 1,
          ) === index,
      );
    const target =
      direction > 0 ?
        (snapPositions.find((position) => position > track.scrollLeft + 1) ??
        maxScroll)
      : ([...snapPositions]
          .reverse()
          .find((position) => position < track.scrollLeft - 1) ?? 0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.scrollLeft = target;
      return;
    }

    gsap.to(track, {
      scrollLeft: target,
      duration: 0.85,
      ease: "power3.inOut",
      overwrite: true,
    });
  };

  return (
    <section
      id="work"
      className="work-section py-[clamp(40px,6vw,80px)]"
      aria-labelledby="work-personal"
    >
      <SectionHead
        id="work-personal"
        title="Personal projects"
        aside="Four projects, 2025-2026"
      />
      {projects.map((project, index) => (
        <ProjectRow
          key={project.id}
          project={project}
          number={index + 1}
          reverse={index % 2 === 1}
        />
      ))}
      <div className="border-line my-12 border-t" />
      <SectionHead
        id="work-office"
        title="Professional projects"
        aside="2023-2026"
      />
      <div
        className="office-carousel-controls"
        role="group"
        aria-label="Office project carousel controls"
      >
        <button
          className="office-carousel-arrow"
          type="button"
          aria-label="Show previous office projects"
          disabled={!canScrollBack}
          onClick={() => scrollOfficeProjects(-1)}
        >
          <span aria-hidden="true">&larr;</span>
        </button>
        <button
          className="office-carousel-arrow"
          type="button"
          aria-label="Show next office projects"
          disabled={!canScrollForward}
          onClick={() => scrollOfficeProjects(1)}
        >
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
      <div
        className="office-carousel-track"
        ref={officeProjectsTrack}
        role="region"
        aria-label="Professional projects"
        aria-roledescription="carousel"
        tabIndex={0}
      >
        {officeProjects.map((project: OfficeProject, index) => (
          <article
            key={project.id}
            className="office-card group"
            data-office-card
          >
            <div
              className={`office-card__preview office-card__preview--${index % 4}`}
              aria-hidden="true"
            >
              <div className="office-card__browser">
                <div className="office-card__browser-bar">
                  <span />
                  <span />
                  <span />
                  <i>{project.title}</i>
                </div>
                <div className="office-card__dashboard">
                  <div className="office-card__sidebar">
                    <b />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="office-card__screen">
                    <div className="office-card__screen-heading" />
                    <div className="office-card__chart">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="office-card__screen-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-3 p-4 sm:p-5">
              <div className="mono flex items-center justify-between gap-2 text-muted">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-display text-[clamp(1.35rem,2vw,1.75rem)] font-semibold leading-tight tracking-[-0.03em]">
                {project.title}
              </h3>
              <p className="min-w-0 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              <ul className="mono flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 text-[0.65rem]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
