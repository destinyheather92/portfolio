import { ArrowUpRight, Scale } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/layout/reveal";
import { ScreenshotGallery } from "@/components/media/screenshot-gallery";
import { caseCompassProject, caseCompassSpotlight } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected builds with real-world impact."
          description="CaseCompass AI is the flagship — a full breakdown lives further down the page. More builds, pulled live from GitHub, below."
        />
      </Reveal>

      <Reveal variant="scale" delayMs={80}>
        <article className="glass-panel mt-10 overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-3 sm:p-5 lg:p-6">
              <ScreenshotGallery
                screenshots={caseCompassProject.screenshots ?? []}
                altPrefix="CaseCompass AI"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FF2DAA]/40 bg-[#FF2DAA]/10 px-3 py-1 text-xs font-bold uppercase text-[#FFB6D9]">
                <Scale className="h-3.5 w-3.5" aria-hidden />
                Flagship Project
              </span>
              <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                {caseCompassProject.name}
              </h3>
              <p className="mt-4 text-base leading-8 text-zinc-300">{caseCompassProject.description}</p>
              <p className="mt-4 text-sm font-semibold leading-7 text-[#FFB6D9]">
                Problem solved: {caseCompassSpotlight.problem.split(".")[0]}.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {caseCompassProject.tech.slice(0, 6).map((tech) => (
                  <span className="skill-pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
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
                  <a
                    className="btn-secondary"
                    href={caseCompassProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                )}
                <a className="btn-secondary" href="#casecompass">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
