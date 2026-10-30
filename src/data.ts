
export type ArtKind = 'tideline' | 'fieldnotes' | 'orbit' | 'kiln';

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  category: string;
  year: string;
  title: string;
  summary: string;
  tags: string[];
  art: ArtKind;
  artLabel: string;
  metrics?: Metric[];
}

export interface Service {
  name: string;
  detail: string;
}

export interface Stat {
  value: number;
  label: string;
}

export interface Job {
  period: string;
  role: string;
  place: string;
  city: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const profile = {
  name: 'Saurav Jaiswal',
  email: 'sauravjaiswal.dev@gmail.com',
  availability: 'Available for remote roles',
  intro:
    "I'm Saurav, a software Engineer and a creative developer. I have a passion for creating interactive experiences that are both visually stunning and highly functional. With a strong background in Web applications development and a keen eye for design, I bring ideas to life through code.",
  role: 'Full-stack Software Engineer',
  currently: 'Urja Technologies',
};

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export const projects: Project[] = [
  {
    id: 'tideline',
    category: 'Fintech',
    year: '2026',
    title: 'Tideline',
    summary:
      'A cash-flow dashboard for small studios. Charts redraw as you scrub the timeline, so forecasts feel like something you can steer.',
    tags: ['Product design', 'React', 'GSAP'],
    art: 'tideline',
    artLabel: 'Abstract bar chart artwork for Tideline',
  },
  {
    id: 'fieldnotes',
    category: 'Publishing',
    year: '2025',
    title: 'Fieldnotes',
    summary:
      'A reading app for researchers. Highlights lift out of the page and file themselves into a notebook with a single gesture.',
    tags: ['Interaction design', 'Design system', 'Swift'],
    art: 'fieldnotes',
    artLabel: 'Abstract stacked text artwork for Fieldnotes',
  },
  {
    id: 'orbit-atlas',
    category: 'Data viz',
    year: '2024',
    title: 'Orbit Atlas',
    summary:
      'An interactive atlas of 9,000 tracked satellites. Orbits fade in by altitude band, and a filter drawer narrows the sky without a page load.',
    tags: ['WebGL', 'Data design', 'TypeScript'],
    art: 'orbit',
    artLabel: 'Abstract concentric circles artwork for Orbit Atlas',
    metrics: [
      { label: 'Objects', value: '9,000+' },
      { label: 'Frame rate', value: '60 fps' },
      { label: 'First orbit', value: '1.2 s' },
    ],
  },
  {
    id: 'kiln',
    category: 'E-commerce',
    year: '2023',
    title: 'Kiln',
    summary:
      'A storefront for a ceramics studio. Product pages open like a shelf, with each piece sliding into place as you scroll.',
    tags: ['Brand', 'Shopify', 'Motion'],
    art: 'kiln',
    artLabel: 'Abstract arches artwork for Kiln',
    metrics: [
      { label: 'Conversion', value: '+38%' },
      { label: 'Mobile load', value: '2.1 s' },
      { label: 'Concept to launch', value: '4 wks' },
    ],
  },
];

export const marqueeItems: string[] = [
  'Interaction design',
  'Motion systems',
  'Design engineering',
  'Prototyping',
];

export const aboutLead = {
  before: 'I started as a print designer and moved to the web when I found that ',
  emphasis: 'timing is a layout decision',
  after:
    '. Now I work with product teams to design the in-between states: the loading, the hover, the first second after a click.',
};

export const services: Service[] = [
  { name: 'Product design', detail: 'Web and mobile' },
  { name: 'Motion design', detail: 'GSAP, Lottie' },
  { name: 'Front-end build', detail: 'React, TypeScript' },
  { name: 'Design systems', detail: 'Tokens, docs' },
];

export const stats: Stat[] = [
  { value: 38, label: 'products shipped' },
  { value: 9, label: 'years designing for the web' },
  { value: 60, label: 'fps target on every build' },
];

export const experience: Job[] = [
  {
    period: '2021 to now',
    role: 'Independent',
    place: 'Design and build for startups and studios',
    city: 'Remote',
  },
  {
    period: '2018 to 2021',
    role: 'Senior Product Designer',
    place: 'Northwind Labs, analytics platform',
    city: 'Berlin',
  },
  {
    period: '2016 to 2018',
    role: 'Interaction Designer',
    place: 'Parcel & Co, digital agency',
    city: 'London',
  },
  {
    period: '2014 to 2016',
    role: 'Junior Designer',
    place: 'Studio Alder, print and identity',
    city: 'Lisbon',
  },
];

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Dribbble', href: 'https://dribbble.com/' },
  { label: 'Read.cv', href: 'https://read.cv/' },
];
