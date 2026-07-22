import type { TimelineEntry } from "@/data/experience";
import { Reveal } from "@/components/layout/reveal";

export function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  return (
    <Reveal delayMs={index * 60}>
      <div className="timeline-rail relative flex gap-5 pb-10 last:pb-0">
        <div className="flex flex-col items-center pt-1">
          <span className="timeline-dot" />
        </div>
        <div className="glass-panel flex-1 p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-[#FFB6D9]">{entry.period}</p>
          <h3 className="mt-2 text-xl font-black text-white">{entry.title}</h3>
          <p className="mt-1 text-sm font-semibold text-zinc-400">{entry.organization}</p>
          <p className="mt-3 text-base leading-7 text-zinc-300">{entry.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span className="skill-pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
