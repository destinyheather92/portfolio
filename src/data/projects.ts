export type Project = {
  name: string;
  description: string;
  tech: string[];
  href?: string;
  demoHref?: string;
  caseStudyHref?: string;
  language?: string | null;
  stars?: number;
  updatedAt?: string;
  /** Local image paths in /public. Empty/undefined renders a reserved placeholder frame. */
  screenshots?: string[];
};

export const caseCompassProject: Project = {
  name: "CaseCompass AI",
  description:
    "An AI-powered legal research roadmap platform that helps incarcerated individuals understand where to begin, what to research, and how to navigate complex legal information through personalized, plain-language guidance.",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "OpenAI API",
    "Clerk",
    "Prisma",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "Framer Motion",
    "Zustand",
  ],
  href: "https://github.com/destinyheather92/CaseCompassAI",
  demoHref: "https://case-compass-ai.vercel.app",
  screenshots: ["/projects/CaseCompassAI.png"],
};

export const caseCompassSpotlight = {
  mission:
    "Make legal research accessible to the people who need it most — starting with those who have the fewest resources to navigate it alone.",
  problem:
    "The legal system is notoriously difficult to navigate, especially for incarcerated individuals who often lack reliable internet access, legal literacy, or an attorney to guide them. Legal research databases assume a baseline of legal knowledge most people don't have, leaving people to make life-altering decisions without understanding where to even begin.",
  solution:
    "CaseCompass AI turns a person's situation into a personalized, plain-language legal research roadmap — breaking down what to look into, in what order, and why, without requiring prior legal knowledge or access to expensive research tools.",
  features: [
    "Personalized legal research roadmaps generated from a person's situation",
    "Plain-language explanations of legal concepts and next steps",
    "Structured, step-by-step guidance instead of raw legal database search",
    "Secure, authenticated access to personal case research",
  ],
  architecture:
    "Built as a Next.js App Router application with Clerk handling authentication and access control, PostgreSQL via Prisma for structured case and research data, Supabase for storage, and the OpenAI API powering plain-language roadmap generation. Zustand manages client state; the interface is styled with Tailwind CSS and animated with Framer Motion.",
  techStackGroups: [
    { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"] },
    { label: "Backend & Data", items: ["Prisma", "PostgreSQL", "Supabase"] },
    { label: "Auth", items: ["Clerk"] },
    { label: "AI", items: ["OpenAI API"] },
    { label: "Testing", items: ["Vitest", "Playwright", "React Testing Library"] },
  ],
  roadmap: [
    "Expand plain-language coverage across more legal topics and jurisdictions",
    "Add guided document preparation workflows",
    "Partner with legal aid organizations and reentry programs",
    "Add multi-language support for broader accessibility",
  ],
  videoSrc: "/finaldemo.mp4",
} as const;

/**
 * Curated allowlist of real public repos used two ways:
 * 1. As the ordering/inclusion reference once GitHub pinned data loads (matched by repoName).
 * 2. As offline fallback cards if the GitHub API is unavailable.
 * CaseCompassAI is intentionally excluded from this list's rendering in the GitHub
 * section — it already has a dedicated Featured Project card and full Spotlight section.
 */
export type CuratedRepo = {
  repoName: string;
  displayName: string;
  description: string;
  tech: string[];
  demoHref?: string;
  /** Local path in /public/projects, matched by repoName where available. */
  screenshot?: string;
};

export const curatedPinnedRepos: CuratedRepo[] = [
  {
    repoName: "CaseCompassAI",
    displayName: "CaseCompass AI",
    description: caseCompassProject.description,
    tech: ["TypeScript", "Next.js"],
    demoHref: "https://case-compass-ai.vercel.app",
    screenshot: "/projects/CaseCompassAI.png",
  },
  {
    repoName: "LandStrong-Nervous-System-Simulator",
    displayName: "LandStrong Nervous System Simulator",
    description:
      "An immersive front-end nervous system regulation experience that helps users ground themselves through breathing exercises, calming environments, and emotional reflection tools.",
    tech: ["JavaScript", "HTML", "CSS"],
    demoHref: "https://landstrong-nervous-system-simulator.vercel.app/",
    screenshot: "/projects/LandStrong-Nervous-System-Simulator.png",
  },
  {
    repoName: "Construction-Tracker",
    displayName: "Construction Tracker",
    description:
      "Full-stack construction project management application featuring secure authentication, project dashboards, task tracking, document management, and responsive design.",
    tech: ["JavaScript"],
    screenshot: "/projects/Construction-Tracker.png",
  },
  {
    repoName: "LandStrongClientCarePortal",
    displayName: "LandStrong Client Care Portal",
    description:
      "Clerk-authenticated therapist and client portals with Google Calendar/Meet scheduling, invoicing, email notifications, and an AI-assisted session note draft generator.",
    tech: ["TypeScript", "Clerk"],
    demoHref: "https://land-strong-client-care-portal.vercel.app",
    screenshot: "/projects/LandStrongClientCarePortal.png",
  },
  {
    repoName: "jigsawSurveillanceEngine",
    displayName: "Jigsaw Surveillance Engine",
    description:
      "A full-stack decision simulator where scenarios are scored by a rules-based judgment engine and every decision is stored in a local SQLite evidence archive.",
    tech: ["TypeScript", "SQLite"],
    demoHref: "https://jigsaw-surveillance-engine-client.vercel.app",
  },
  {
    repoName: "dmdigitalboutique",
    displayName: "DM Digital Boutique",
    description:
      "Personal brand and business website platform for custom websites, automation, content systems, and digital strategy services.",
    tech: ["TypeScript", "Next.js"],
    demoHref: "https://dmdigitalboutique.vercel.app",
  },
  {
    repoName: "NYC311ConspiracyTracker",
    displayName: "NYC 311 Conspiracy Tracker",
    description:
      "Analyzes NYC 311 public complaint data to uncover bizarre, paranormal, and conspiracy-themed reports hidden within civic records.",
    tech: ["JavaScript"],
    screenshot: "/projects/NYC311ConspiracyTracker.png",
  },
];
