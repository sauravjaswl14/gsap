# Mira Voss portfolio

A portfolio site built with React, TypeScript, Tailwind CSS and GSAP, bundled with Vite.

## Run it

```bash
npm install
npm run dev        # development server
npm run build      # type-check, then production build into dist/
npm run preview    # serve the production build
```

Requires Node 18 or newer.

## Make it yours

All text, projects, figures and links live in `src/data.ts`. Replace the placeholder values there.

- Colors and fonts are CSS variables at the top of `src/index.css`. Tailwind reads them through `tailwind.config.ts`, so the light and dark themes follow the visitor's system setting.
- Project artwork is drawn in `src/components/Art.tsx`. Swap it for `<img>` tags if you have screenshots.

## How the animation works

`src/hooks/useAnimations.ts` holds every GSAP animation, wired up once with `useGSAP` from `@gsap/react`:

- hero lines slide up through a mask on load
- headings, project artwork, text and rows reveal with ScrollTrigger
- project artwork drifts slightly as you scroll
- the skills strip loops and speeds up with scroll velocity
- stat numbers count up

When a visitor has reduced motion turned on, none of it runs and the page shows its final state.

## Structure

```
src/
  data.ts              typed content
  App.tsx              page layout
  index.css            tokens, Tailwind layers, custom CSS
  hooks/useAnimations.ts
  components/          Header, Hero, Work, Marquee, About, Experience, Contact, Footer
```
