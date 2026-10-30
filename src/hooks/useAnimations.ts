import type { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EASE = 'expo.out';

/**
 * Every animation on the page, scoped to `scope` so selectors only match inside it.
 * useGSAP reverts everything on unmount, which also keeps React StrictMode happy.
 * With reduced motion enabled nothing runs and the page shows its final state.
 */
export function useAnimations(scope: RefObject<HTMLElement>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Scroll progress bar
        gsap.to('.progress', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
        });

        // Hero load sequence
        gsap
          .timeline({ defaults: { ease: EASE } })
          .from('.nav > *', { y: -18, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.1)
          .from('.hero h1 .line-inner', { yPercent: 115, duration: 1.3, stagger: 0.12 }, 0.2)
          .from('.hero-rule', { scaleX: 0, transformOrigin: 'left center', duration: 1.4 }, 0.7)
          .from('.hero-meta > *', { y: 24, opacity: 0, duration: 1, stagger: 0.1 }, 0.9);

        // Section headings: masked line reveal
        gsap.utils.toArray<HTMLElement>('.reveal-lines').forEach((heading) => {
          gsap.from(heading.querySelectorAll('.line-inner'), {
            yPercent: 115,
            duration: 1.2,
            ease: EASE,
            stagger: 0.1,
            scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
          });
        });

        // Generic fades
        ScrollTrigger.batch('[data-fade]', {
          start: 'top 90%',
          once: true,
          onEnter: (elements) => {
            gsap.from(elements, { y: 32, opacity: 0, duration: 1, ease: EASE, stagger: 0.1, overwrite: true });
          },
        });

        // Projects: artwork wipes open, text follows, artwork drifts as you scroll
        gsap.utils.toArray<HTMLElement>('.project').forEach((project) => {
          const art = project.querySelector('.art');
          const svg = project.querySelector('.art svg');
          const inner = project.querySelector('.art-inner');
          const copy = project.querySelectorAll('.p-body > *');

          gsap
            .timeline({
              defaults: { ease: EASE },
              scrollTrigger: { trigger: project, start: 'top 78%', once: true },
            })
            .from(art, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.4 }, 0)
            .from(svg, { scale: 1.35, duration: 1.8 }, 0)
            .from(copy, { y: 28, opacity: 0, duration: 1, stagger: 0.09 }, 0.35);

          gsap.fromTo(
            inner,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: 'none',
              scrollTrigger: { trigger: project, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          );
        });

        // Orbit Atlas: two satellite groups circle the core in opposite directions
        gsap.to('.orbit-spin', { rotation: 360, svgOrigin: '400 300', duration: 40, ease: 'none', repeat: -1 });
        gsap.to('.orbit-spin-rev', { rotation: -360, svgOrigin: '400 300', duration: 70, ease: 'none', repeat: -1 });

        // Marquee: continuous drift that speeds up with scroll velocity
        const drift = gsap.to('.track', { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
        ScrollTrigger.create({
          onUpdate: (self) => {
            const boost = Math.min(Math.abs(self.getVelocity()) / 400, 5);
            gsap.to(drift, { timeScale: 1 + boost, duration: 0.2, overwrite: true });
            gsap.to(drift, { timeScale: 1, duration: 1.2, delay: 0.2, overwrite: false });
          },
        });

        // Counters
        const counters = gsap.utils.toArray<HTMLElement>('[data-count]');
        counters.forEach((el) => {
          const end = Number(el.dataset.count);
          const state = { value: 0 };
          el.textContent = '0';
          gsap.to(state, {
            value: end,
            duration: 1.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: () => {
              el.textContent = String(Math.round(state.value));
            },
            onComplete: () => {
              el.textContent = String(end);
            },
          });
        });

        // Put the final numbers back when the animations are torn down
        return () => {
          counters.forEach((el) => {
            el.textContent = el.dataset.count ?? '';
          });
        };
      });

      // Web fonts can shift layout after first paint, so re-measure the triggers
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener('load', refresh);
      void document.fonts?.ready.then(refresh);

      return () => {
        window.removeEventListener('load', refresh);
        mm.revert();
      };
    },
    { scope },
  );
}
