export type TimelineEntry = {
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
};

/**
 * Dates and organization names marked [ADD DATE] / [ADD ORG] are placeholders —
 * replace with real details before Demo Day.
 */
export const experienceTimeline: TimelineEntry[] = [
  {
    period: "January 2012 - October 2013",
    title: "Legal Secretary",
    organization: "Soltis Law Firm",
    description:
      "Supported attorneys with case files, filings, and client communication — gaining firsthand experience with how confusing and inaccessible the legal system can be for the people navigating it.",
    tags: ["Legal Operations", "Client Communication", "Case Files"],
  },
  {
    period: "September 2021",
    title: "Paralegal Studies",
    organization: "Blackstone Career Institute — Paralegal Certificate Program",
    description:
      "Studied legal research, civil procedure, and case analysis — building the domain knowledge that later shaped CaseCompass AI's approach to plain-language legal guidance.",
    tags: ["Legal Research", "Civil Procedure", "Case Analysis"],
  },
  {
    period: "November 2024 -November 2025",
    title: "Teaching Assistant",
    organization: "Persevere",
    description:
      "Taught foundational web development concepts to new developers, breaking down React and JavaScript fundamentals into approachable, hands-on lessons.",
    tags: ["React", "JavaScript", "Mentorship"],
  },
  {
    period: "November 2025 - Present",
    title: "Transition into Software Engineering",
    organization: "Self-Directed + Project-Based Learning",
    description:
      "Made the shift from legal support into full stack development, shipping real projects — dashboards, client portals, and interactive web apps — while learning React, Next.js, TypeScript, and backend fundamentals.",
    tags: ["React", "Next.js", "TypeScript", "Full Stack"],
  },
  {
    period: "May 2026 — Present",
    title: "AI Builder Apprenticeship",
    organization: "Next Chapter",
    description:
      "Building production-grade AI-assisted applications and automation systems, deepening skills in prompt engineering, AI workflow design, and shipping AI features end to end.",
    tags: ["OpenAI API", "AI Workflows", "Automation"],
  },
  {
    period: "May 2026 — Present",
    title: "Founder, CaseCompass AI",
    organization: "CaseCompass AI",
    description:
      "Founded and built CaseCompass AI, an AI-powered legal research roadmap platform that helps incarcerated individuals understand where to begin, what to research, and how to navigate complex legal information through personalized, plain-language guidance.",
    tags: ["Founder", "Next.js", "OpenAI API", "Legal Accessibility"],
  },
];
