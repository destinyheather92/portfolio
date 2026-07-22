import {
  Cloud,
  Database,
  KeyRound,
  Rocket,
  Scale,
  Server,
  Sparkles,
  FlaskConical,
  LayoutPanelTop,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/layout/reveal";
import { skillGroups, type SkillCategory } from "@/data/skills";

const iconMap: Record<SkillCategory["icon"], LucideIcon> = {
  frontend: LayoutPanelTop,
  backend: Server,
  databases: Database,
  cloud: Cloud,
  auth: KeyRound,
  ai: Sparkles,
  testing: FlaskConical,
  deployment: Rocket,
  legal: Scale,
};

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="A stack built for real products, not tutorials."
          description="Frontend clarity, backend structure, AI integration, and the legal-domain fluency that shapes CaseCompass AI."
        />
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.icon];
          return (
            <Reveal delayMs={index * 50} key={group.title}>
              <article className="glass-panel group h-full p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF2DAA]/30 bg-[#FF2DAA]/10 text-[#FFB6D9] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
