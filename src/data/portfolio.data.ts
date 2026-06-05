// portfolio.data.ts
// Single source of truth for all portfolio content.
// Edit this file to update the site — no touching component JSX.

export interface Project {
  id: string;
  num: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  year: string;
  featured?: boolean;
  featuredCode?: string;
  href?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  highlight?: boolean;
}

export const meta = {
  name: "Oluwaferanmi Aruaji",
  initials: "OA",
  role: "Full-Stack Developer & Builder",
  location: "Abuja, Nigeria",
  tagline:
    "I architect and ship things that live on the web. React, Node, TypeScript — structured systems with obsessive attention to detail. Currently building in public.",
  email: "aruajiferanmi@gmail.com",
  github: "github.com/Oluwaferanmi17",
  buildVersion: "V1.0.0",
} as const;

export const stats: { value: string; label: string }[] = [
  { value: "4+", label: "Years Building" },
  { value: "10+", label: "Projects Built" },
  { value: "10+", label: "Tech Stack" },
  { value: "∞", label: "Commits Made" },
];

export const terminalLines: {
  text: string;
  status: "ok" | "warn" | "plain";
}[] = [
  { text: "$ node portfolio.js --mode=production", status: "plain" },
  { text: "[✓] React v18 — loaded", status: "ok" },
  { text: "[✓] TypeScript — compiled", status: "ok" },
  { text: "[✓] Supabase — connected", status: "ok" },
  { text: "[~] Turbo cache — warm", status: "warn" },
  { text: "[✓] All systems nominal", status: "ok" },
];

export const techStack: string[] = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Supabase",
  "Vite",
  "TailwindCSS",
  "MUI",
  "Turbo",
  "Jest",
  "PostgreSQL",
  "Git",
];

export const processSteps: { n: string; label: string }[] = [
  { n: "01", label: "Plan & map" },
  { n: "02", label: "Design system" },
  { n: "03", label: "Implement" },
  { n: "04", label: "Peer review" },
  { n: "05", label: "Ship & iterate" },
];

export const aboutText: string[] = [
  "I build software that bridges ideas and execution.",
  "From booking platforms and business management systems to AI-powered applications and computer vision projects, I enjoy creating products that are both technically robust and genuinely useful. My approach combines structured problem-solving, thoughtful design, and a focus on delivering real value to users.",
  "I specialize in full-stack development using React, Next.js, TypeScript, Node.js, Prisma, and MongoDB, with growing interests in artificial intelligence, computer vision, and interactive user experiences.",
  "Every project I build is an opportunity to learn something new, improve a process, or solve a problem more effectively. Whether I'm designing system architecture, developing APIs, or crafting responsive user interfaces, I aim to create software that is reliable, scalable, and enjoyable to use.",
];

export const projects: Project[] = [
  {
    id: "avira",
    num: "00 — FEATURED",
    title: "Avira",
    type: "Travel & Accommodation Platform",
    description:
      "A full-stack accommodation and events booking platform featuring guest and host dashboards, booking workflows, property management, and real-time communication.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "Pusher.js",
      "TailwindCSS",
    ],
    year: "2025",
    featured: true,
  },

  {
    id: "mimi-couture",
    num: "01",
    title: "Mimi Couture",
    type: "Fashion & Dry Cleaning Platform",
    description:
      "A business management platform for tailoring and dry-cleaning services with pickup scheduling, customer management, order tracking, and service workflows.",
    stack: ["Next.js", "TypeScript", "Prisma", "MongoDB", "TailwindCSS"],
    year: "2025",
  },

  {
    id: "daily-brief-news",
    num: "02",
    title: "Daily Brief News",
    type: "AI News Application",
    description:
      "A modern news platform that delivers concise news summaries, category filtering, search functionality, and mobile-first reading experiences.",
    stack: ["React Native", "Expo", "TypeScript", "News API", "AI"],
    year: "2026",
  },

  {
    id: "ecommerce",
    num: "03",
    title: "E-Commerce Website",
    type: "Frontend Development",
    description:
      "A responsive online shopping experience featuring product listings, product details, reusable UI components, and shopping cart functionality.",
    stack: ["React", "TypeScript", "TailwindCSS"],
    year: "2024",
  },

  {
    id: "gesture-ui",
    num: "04",
    title: "Neural Gesture Interface",
    type: "Computer Vision & AR",
    description:
      "A futuristic human-computer interaction system that uses real-time hand tracking, gesture classification, swipe recognition, and 3D visual feedback to control digital interfaces without physical input devices.",
    stack: [
      "React",
      "TypeScript",
      "MediaPipe Hands",
      "Three.js",
      "WebGL",
      "Computer Vision",
    ],
    year: "2026",
  },

  {
    id: "portfolio",
    num: "05",
    title: "Personal Portfolio Website",
    type: "Personal Brand",
    description:
      "A developer portfolio showcasing projects, skills, and experience with responsive design, smooth interactions, and strong performance optimization.",
    stack: ["React", "TypeScript", "TailwindCSS"],
    year: "2025",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: meta.email },
  { label: "Location", value: meta.location },
  { label: "GitHub", value: meta.github },
  { label: "Availability", value: "Open to work", highlight: true },
];
