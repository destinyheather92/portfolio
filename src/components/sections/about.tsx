import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/layout/reveal";

const storyParagraphs = [
  "Before I wrote a line of production code, I worked inside the legal system — first as a legal secretary, then studying to become a paralegal. I spent years watching people try to navigate case files, filings, and legal research with little to no guidance, and watching how much that gap in accessibility could cost them.",
  "That experience is what pulled me toward software engineering. I wanted to build the tools I wished existed — systems that turn complicated, high-stakes processes into something a person can actually understand and act on. I taught myself React, Next.js, TypeScript, and full stack development, then started shipping real projects: client portals, dashboards, and AI-assisted tools.",
  "Today I work as an AI Builder, shipping production AI-assisted applications and automation systems, and I'm the founder of CaseCompass AI — a platform that gives incarcerated individuals a personalized, plain-language roadmap for their own legal research.",
  "My background in legal support and paralegal studies isn't separate from my engineering work — it's the reason I build the way I do. I understand the problem from the inside, which lets me build software that's practical, accessible, and genuinely useful for the people who need it most.",
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="From legal support to building legal-tech AI."
            description="A background in law, a career in software — and a startup built at the intersection of both."
          />
        </Reveal>
        <Reveal variant="scale" delayMs={80}>
          <div className="glass-panel space-y-5 p-6 sm:p-8">
            {storyParagraphs.map((paragraph) => (
              <p className="text-lg leading-9 text-zinc-200" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
