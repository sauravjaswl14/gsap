
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
    id: 'nexafin',
    category: 'Fintech',
    year: '2026',
    title: 'Nexafin',
    summary:
      'A cash-flow dashboard for small studios. Charts redraw as you scrub the timeline, so forecasts feel like something you can steer.',
    tags: ['Product design', 'React', 'GSAP'],
    art: 'tideline',
    artLabel: 'Abstract bar chart artwork for Tideline',
  },
  {
    id: 'astra-erp',
    category: 'Publishing',
    year: '2025',
    title: 'Astra ERP',
    summary:
      'A reading app for researchers. Highlights lift out of the page and file themselves into a notebook with a single gesture.',
    tags: ['Interaction design', 'Design system', 'Swift'],
    art: 'fieldnotes',
    artLabel: 'Abstract stacked text artwork for Fieldnotes',
  },
  {
    id: 'tessel-marketplace',
    category: 'Data viz',
    year: '2024',
    title: 'Tessel Marketplace',
    summary:
      'An interactive atlas of 9,000 tracked satellites. Tessels fade in by altitude band, and a filter drawer narrows the sky without a page load.',
    tags: ['WebGL', 'Data design', 'TypeScript'],
    art: 'orbit',
    artLabel: 'Abstract concentric circles artwork for Tessel Atlas',
    metrics: [
      { label: 'Objects', value: '9,000+' },
      { label: 'Frame rate', value: '60 fps' },
      { label: 'First orbit', value: '1.2 s' },
    ],
  },
  {
    id: 'pro-store',
    category: 'E-commerce',
    year: '2023',
    title: 'Pro Store',
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
  'Web design and development',
  'Database management and optimization',
  'Full-stack development',
  'System design and architecture',
  'Software engineering'
];

export const aboutLead = {
  before: 'From crafting pixel-perfect designs to architecting full-stack systems, my evolution has always been driven by ',
  emphasis: 'one goal: building high-performance digital experiences. ',
  after: 'I specialize in designing scalable systems where speed meets seamless user experience. Today, I collaborate with cross-functional teams to build impactful products that drive real value for both users and the business.'
};

export const services: Service[] = [
  { name: 'Languages ', detail: 'JavaScript, Python, Java' },
  { name: 'Front-end ', detail: 'React.js, Next.js, TailwindCSS' },
  { name: 'Back-end ', detail: 'postgreSQL, Node.js, Express.js, Nest.js' },
  { name: 'Tools', detail: 'git, docker, kubernetes, jest' },
];

export const stats: Stat[] = [
  { value: 15, label: 'products shipped' },
  { value: 5, label: 'years designing for the web' },
  { value: 60, label: 'fps target on every build' },
];

export const experience: Job[] = [
  {
    period: '2026 to present',
    role: 'Senior Software Engineer',
    place: 'Urja Technologies pvt. Ltd',
    city: 'Birgunj, Nepal',
  },
  {
    period: '2026 to present',
    role: 'Mid Software Engineer',
    place: 'Nexsewa Technologies pvt. Ltd',
    city: 'Birgunj, Nepal',
  },
  {
    period: '2024 to 2025',
    role: 'Mid React Developer',
    place: 'Online notes nepal pvt. Ltd',
    city: 'Kathmandu, Nepal',
  },
  {
    period: '2023 to 2024',
    role: 'Associate Software Engineer',
    place: 'AccessWorld Tech pvt. Ltd',
    city: 'Lalitpur, Nepal',
  },
  {
    period: '2022 to 2023',
    role: 'Junior Software Engineer',
    place: 'Tezash Tech pvt. Ltd.',
    city: 'Birgunj, Nepal',
  },
  {
    period: '2021 to 2022',
    role: 'Intern',
    place: 'Edureka.co',
    city: 'Bangalore, India',
  },
];

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/sauravjaswl14' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saurav-jaiswal-96b288200/' },
];
