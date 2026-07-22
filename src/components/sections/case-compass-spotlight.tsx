import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { Reveal } from "@/components/layout/reveal";
import { ScreenshotGallery } from "@/components/media/screenshot-gallery";
import { VideoModal } from "@/components/media/video-modal";
import { caseCompassProject, caseCompassSpotlight } from "@/data/projects";

export function CaseCompassSpotlight() {
  return (
    <section id="casecompass" className="section-shell">
      <div className="gradient-pan relative overflow-hidden rounded-[32px] border border-[#FF2DAA]/25 bg-[linear-gradient(120deg,#111111_0%,#1a0b13_45%,#111111_100%)] p-6 shadow-[0_0_90px_rgba(255,0,127,0.16)] sm:p-10 lg:p-14">
        <div className="relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF2DAA]/40 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase text-[#FFB6D9]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Startup Spotlight
            </span>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
              CaseCompass AI
            </h2>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[#FFB6D9]">
              {caseCompassSpotlight.mission}
            </p>
          </Reveal>

          <Reveal variant="scale" delayMs={80}>
            <div className="mt-10">
              <ScreenshotGallery screenshots={caseCompassProject.screenshots ?? []} altPrefix="CaseCompass AI" />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="glass-panel h-full p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-wide text-[#FFB6D9]">The Problem</p>
                <p className="mt-3 text-base leading-8 text-zinc-200">{caseCompassSpotlight.problem}</p>
              </div>
            </Reveal>
            <Reveal delayMs={60}>
              <div className="glass-panel h-full p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-wide text-[#FFB6D9]">The Solution</p>
                <p className="mt-3 text-base leading-8 text-zinc-200">{caseCompassSpotlight.solution}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={100}>
            <div className="glass-panel mt-5 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wide text-[#FFB6D9]">Key Features</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {caseCompassSpotlight.features.map((feature) => (
                  <li className="flex items-start gap-2 text-sm leading-7 text-zinc-200" key={feature}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF2DAA]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="glass-panel mt-5 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wide text-[#FFB6D9]">Architecture Overview</p>
              <p className="mt-3 text-base leading-8 text-zinc-200">{caseCompassSpotlight.architecture}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {caseCompassSpotlight.techStackGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-bold uppercase text-zinc-500">{group.label}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span className="skill-pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={140}>
            <div className="glass-panel mt-5 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wide text-[#FFB6D9]">Roadmap</p>
              <ul className="mt-4 space-y-3">
                {caseCompassSpotlight.roadmap.map((item, index) => (
                  <li className="flex items-start gap-3 text-sm leading-7 text-zinc-200" key={item}>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#FF2DAA]/40 bg-[#FF2DAA]/10 text-xs font-bold text-[#FFB6D9]">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {caseCompassProject.demoHref && (
                <a
                  className="btn-primary"
                  href={caseCompassProject.demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </a>
              )}
              {caseCompassProject.href && (
                <a className="btn-secondary" href={caseCompassProject.href} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              )}
              <VideoModal src={caseCompassSpotlight.videoSrc} label="Watch Demo" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
