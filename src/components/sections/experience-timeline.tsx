import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/layout/reveal";
import { TimelineItem } from "@/components/ui/timeline-item";
import { experienceTimeline } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="The path from legal support to founder."
          description="Every stop on this timeline feeds directly into how I build CaseCompass AI today."
        />
      </Reveal>
      <div className="mt-10 max-w-3xl">
        {experienceTimeline.map((entry, index) => (
          <TimelineItem entry={entry} index={index} key={entry.title} />
        ))}
      </div>
    </section>
  );
}
