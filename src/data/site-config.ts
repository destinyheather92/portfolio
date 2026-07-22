export const siteConfig = {
  name: "Destiny Mills",
  initials: "DM",
  roles: ["Software Engineer", "AI Builder", "Full Stack Developer"],
  tagline: "Founder of CaseCompass AI",
  summary:
    "I'm a full stack developer and AI builder who spent years inside the legal system as a legal secretary and paralegal-in-training before moving into software engineering. I build production web apps, AI-assisted tools, and automation systems — and I'm currently building CaseCompass AI, a platform that helps incarcerated individuals navigate legal research in plain language.",
  location: "United States",
  githubUsername: "destinyheather92",
  social: {
    github: "https://github.com/destinyheather92",
    linkedin: "https://www.linkedin.com/in/destinyhmills225/",
    email: "dhmills292@gmail.com",
  },
  resumeHref: "/resume.pdf",
  headshotSrc: "/headshot.PNG" as string | null,
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#featured-projects" },
  { label: "GitHub", href: "#github" },
  { label: "CaseCompass AI", href: "#casecompass" },
  { label: "Contact", href: "#contact" },
] as const;
