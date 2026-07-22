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
    period: "[ADD DATE]",
    title: "Legal Secretary",
    organization: "[ADD ORGANIZATION]",
    description:
      "Supported attorneys with case files, filings, and client communication — gaining firsthand experience with how confusing and inaccessible the legal system can be for the people navigating it.",
    tags: ["Legal Operations", "Client Communication", "Case Files"],
  },
  {
    period: "[ADD DATE]",
    title: "Paralegal Studies",
    organization: "[ADD SCHOOL / PROGRAM]",
    description:
      "Studied legal research, civil procedure, and case analysis — building the domain knowledge that later shaped CaseCompass AI's approach to plain-language legal guidance.",
    tags: ["Legal Research", "Civil Procedure", "Case Analysis"],
  },
  {
    period: "[ADD DATE]",
    title: "Teaching Assistant",
    organization: "[ADD PROGRAM]",
    description:
      "Taught foundational web development concepts to new developers, breaking down React and JavaScript fundamentals into approachable, hands-on lessons.",
    tags: ["React", "JavaScript", "Mentorship"],
  },
  {
    period: "[ADD DATE]",
    title: "Transition into Software Engineering",
    organization: "Self-Directed + Project-Based Learning",
    description:
      "Made the shift from legal support into full stack development, shipping real projects — dashboards, client portals, and interactive web apps — while learning React, Next.js, TypeScript, and backend fundamentals.",
    tags: ["React", "Next.js", "TypeScript", "Full Stack"],
  },
  {
    period: "[ADD DATE] — Present",
    title: "AI Builder Apprenticeship",
    organization: "[ADD PROGRAM NAME]",
    description:
      "Building production-grade AI-assisted applications and automation systems, deepening skills in prompt engineering, AI workflow design, and shipping AI features end to end.",
    tags: ["OpenAI API", "AI Workflows", "Automation"],
  },
  {
    period: "[ADD DATE] — Present",
    title: "Founder, CaseCompass AI",
    organization: "CaseCompass AI",
    description:
      "Founded and built CaseCompass AI, an AI-powered legal research roadmap platform that helps incarcerated individuals understand where to begin, what to research, and how to navigate complex legal information through personalized, plain-language guidance.",
    tags: ["Founder", "Next.js", "OpenAI API", "Legal Accessibility"],
  },
];
