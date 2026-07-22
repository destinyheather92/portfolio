export type Project = {
  name: string;
  description: string;
  tech: string[];
  href?: string;
  demoHref?: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-panel group flex h-full flex-col p-6">
      <div className="flex flex-1 flex-col">
        <p className="text-xs font-bold uppercase text-[#FFB6D9]">
          Featured Build
        </p>
        <h3 className="mt-4 text-2xl font-black leading-tight text-white">
          {project.name}
        </h3>
        <p className="mt-4 flex-1 text-base leading-8 text-zinc-300">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span className="skill-pill" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      {(project.href || project.demoHref) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.href && (
            <a
              className="text-link"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          )}
          {project.demoHref && (
            <a
              className="text-link"
              href={project.demoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
