import { ArrowUpRight, FileSearch, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { ScreenshotFrame } from "@/components/media/screenshot-frame";
import { PinnedBadge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export type { Project };

type ProjectCardProps = {
  project: Project;
  pinned?: boolean;
};

export function ProjectCard({ project, pinned = false }: ProjectCardProps) {
  return (
    <article className="glass-panel group flex h-full flex-col overflow-hidden p-0">
      <div className="p-3 pb-0">
        <ScreenshotFrame src={project.screenshots?.[0]} alt={`${project.name} screenshot`} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          {pinned ? (
            <PinnedBadge />
          ) : (
            <p className="text-xs font-bold uppercase text-[#FFB6D9]">Featured Build</p>
          )}
          {project.language && (
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[0.68rem] font-bold uppercase text-zinc-400">
              {project.language}
            </span>
          )}
        </div>
        <h3 className="mt-4 text-2xl font-black leading-tight text-white">{project.name}</h3>
        <p className="mt-4 flex-1 text-base leading-8 text-zinc-300">{project.description}</p>
        {project.tech.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span className="skill-pill" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
        {typeof project.stars === "number" && (
          <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-zinc-400">
            <Star className="h-3.5 w-3.5" aria-hidden />
            {project.stars}
          </div>
        )}
      </div>
      {(project.href || project.demoHref || project.caseStudyHref) && (
        <div className="flex flex-wrap gap-4 px-6 pb-6">
          {project.href && (
            <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-1.5 inline h-4 w-4" />
              GitHub
            </a>
          )}
          {project.demoHref && (
            <a className="text-link" href={project.demoHref} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="mr-1.5 inline h-4 w-4" aria-hidden />
              Live Demo
            </a>
          )}
          {project.caseStudyHref && (
            <a className="text-link" href={project.caseStudyHref}>
              <FileSearch className="mr-1.5 inline h-4 w-4" aria-hidden />
              Case Study
            </a>
          )}
        </div>
      )}
    </article>
  );
}
