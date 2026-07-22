export type SkillCategory = {
  title: string;
  icon:
    | "frontend"
    | "backend"
    | "databases"
    | "cloud"
    | "auth"
    | "ai"
    | "testing"
    | "deployment"
    | "legal";
  skills: string[];
};

export const skillGroups: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: ["Node.js", "Express", "Prisma", "REST APIs", "Zod"],
  },
  {
    title: "Databases",
    icon: "databases",
    skills: ["PostgreSQL", "Supabase", "Prisma ORM", "SQLite"],
  },
  {
    title: "Cloud & Hosting",
    icon: "cloud",
    skills: ["Vercel", "Supabase Cloud", "Serverless Functions"],
  },
  {
    title: "Authentication",
    icon: "auth",
    skills: ["Clerk", "Session Management", "Role-Based Access Control"],
  },
  {
    title: "AI",
    icon: "ai",
    skills: ["OpenAI API", "Prompt Engineering", "AI Workflow Automation", "Zapier"],
  },
  {
    title: "Testing",
    icon: "testing",
    skills: ["Vitest", "Playwright", "React Testing Library"],
  },
  {
    title: "Deployment",
    icon: "deployment",
    skills: ["Git", "GitHub", "CI/CD", "Vercel Deployments"],
  },
  {
    title: "Legal Technology",
    icon: "legal",
    skills: [
      "Legal Research Systems",
      "Plain-Language Legal Design",
      "Case Management Workflows",
      "Legal Accessibility",
    ],
  },
];
