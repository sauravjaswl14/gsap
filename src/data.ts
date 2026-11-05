
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

export interface OfficeProject {
  id: string;
  category: string;
  year: string;
  title: string;
  summary: string;
  tags: string[];
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
  email: 'saurav14th@gmail.com',
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
    id: 'astra-erp',
    category: 'Enterprise Software',
    year: '2026',
    title: 'Astra ERP',
    summary:
      'A robust enterprise resource planning solution for companies and organizations. It streamlines operations, enhances productivity, and provides real-time insights for informed decision-making.',
    tags: ['postgreSQL', 'prisma', 'React', 'GSAP', 'node.js', 'express.js', 'typescript'],
    art: 'tideline',
    artLabel: 'Abstract bar chart artwork for Tideline',
  },
  {
    id: 'tessel-marketplace',
    category: 'Marketplace Application',
    year: '2025',
    title: 'Tessel Marketplace',
    summary:
      'A Marketplace where users can explore clothing products, Food products, groceries, and cosmetics. The interface is engaging, with smooth animations and transitions that make browsing a pleasure.',
    tags: ['postgreSQL', 'prisma', 'React', 'GSAP', 'node.js', 'express.js', 'typescript'],
    art: 'fieldnotes',
    artLabel: 'Abstract stacked text artwork for Fieldnotes',
  },
  {
    id: 'pro-store',
    category: 'E-commerce',
    year: '2024',
    title: 'Pro Store',
    summary:
      'A Marketplace where users can explore products across various categories and also purchase them. The interface is engaging, with smooth animations and transitions that make browsing a pleasure.',
    tags: ['Next.js', 'Turborepo', 'prisma', 'PostgreSQL', 'stripe', 'payment gateway', 'typescript'],
    art: 'orbit',
    artLabel: 'Abstract concentric circles artwork for Tessel Atlas',

  },
  {
    id: 'Medico',
    category: 'Healthcare',
    year: '2023',
    title: 'Medicox',
    summary:
      'A Healthcare application that allows users to book appointments with doctors, view their medical history, and access health-related information. The interface is user-friendly and intuitive, making it easy for users to navigate and find the information they need.',
    tags: ['PostgreSQL', 'Prisma', 'Zod', 'Next.js'],
    art: 'kiln',
    artLabel: 'Abstract arches artwork for Kiln',

  },
];

export const officeProjects: OfficeProject[] = [
  {
    id: 'grande-hospital',
    category: 'Healthcare',
    year: '2024',
    title: 'Grande Hospital',
    summary: "A Healthcare application that allows users to book appointments with doctors, view their medical history, and access health-related information. The interface is user-friendly and intuitive, making it easy for users to navigate and find the information they need.",
    tags: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },

  {
    id: 'goodwill-finance',
    category: 'Finance',
    year: '2023',
    title: 'Goodwill Finance',
    summary: "Worked on a finance application that allows users to manage their finances, track expenses, and view financial reports. The interface is user-friendly and intuitive, making it easy for users to navigate and find the information they need.",
    tags: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },
  {
    id: 'Hulas Remittance',
    category: 'Finance',
    year: '2023',
    title: 'Hulas Remittance',
    summary: "Remittance application that allows users to send and receive money internationally. The interface is user-friendly and intuitive, making it easy for users to navigate and find the information they need.",
    tags: ['React', 'Next.js', 'Laravel', 'MySQL'],
  },
  {
    id: 'Online Notes Nepal',
    category: 'Education',
    year: '2024',
    title: 'Online Notes Nepal',
    summary: "An educational platform that allows users to access study materials, notes, and resources for various subjects. The interface is user-friendly and intuitive, making it easy for users to navigate and find the information they need.",
    tags: ['React', 'Next.js', 'Nest.js', 'Redis', 'PostgreSQL', 'MongoDB'],
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
