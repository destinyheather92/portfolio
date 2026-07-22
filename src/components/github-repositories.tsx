"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

type RepoState =
  | { status: "loading"; repos: GitHubRepo[]; message?: undefined }
  | { status: "success"; repos: GitHubRepo[]; message?: undefined }
  | { status: "error"; repos: GitHubRepo[]; message: string };

const fallbackProjects = [
  {
    name: "LandStrong Nervous System Simulator",
    description:
      "Interactive mental wellness web app with breathing animations, nervous system education, grounding tools, and mobile-responsive UI.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "DM Digital Boutique",
    description:
      "Business website and brand platform for custom websites, automation, content systems, and digital strategy services.",
    tech: ["Next.js", "Tailwind CSS", "Branding", "SEO"],
  },
  {
    name: "LifeOS Goals Dashboard",
    description:
      "Full-stack goal tracking dashboard with onboarding, user profiles, milestones, progress tracking, and personalized user experience.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Tailwind CSS"],
  },
  {
    name: "AI Workflow Automation Demo",
    description:
      "Simple automation system that captures leads, organizes submissions, and sends notifications using AI-assisted workflows.",
    tech: ["Zapier", "OpenAI", "Google Sheets", "Gmail"],
  },
];

const repoEndpoint =
  "https://api.github.com/users/destinyheather92/repos?sort=updated&per_page=6";

export function GithubRepositories() {
  const [repoState, setRepoState] = useState<RepoState>({
    status: "loading",
    repos: [],
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        const response = await fetch(repoEndpoint, {
          signal: controller.signal,
          headers: {
            Accept: "application/vnd.github+json",
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub responded with ${response.status}`);
        }

        const repos = (await response.json()) as GitHubRepo[];

        if (!Array.isArray(repos)) {
          throw new Error("GitHub returned an unexpected response.");
        }

        setRepoState({ status: "success", repos });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setRepoState({
          status: "error",
          repos: [],
          message:
            error instanceof Error
              ? error.message
              : "GitHub repositories could not be loaded.",
        });
      }
    }

    loadRepos();

    return () => controller.abort();
  }, []);

  return (
    <section id="github-repositories" className="section-shell">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="GitHub Repositories"
          title="Latest public work from GitHub."
          description="Public repositories are fetched live from the GitHub API and sorted by recent updates."
        />
        <a
          className="text-link w-fit"
          href="https://github.com/destinyheather92"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Profile
        </a>
      </div>

      {repoState.status === "loading" && <RepositoryLoadingGrid />}

      {repoState.status === "error" && (
        <>
          <div className="mt-8 rounded-2xl border border-[#FF2DAA]/30 bg-[#FF2DAA]/10 p-4 text-sm leading-6 text-[#FFB6D9]">
            GitHub repos could not be loaded. Showing curated fallback projects.
            <span className="sr-only"> Error detail: {repoState.message}</span>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {fallbackProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </>
      )}

      {repoState.status === "success" && (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {repoState.repos.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
}

function RepositoryLoadingGrid() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3" aria-label="Loading repositories">
      {Array.from({ length: 6 }, (_, index) => (
        <div className="glass-panel min-h-72 animate-pulse p-6" key={index}>
          <div className="h-4 w-24 rounded-full bg-white/10" />
          <div className="mt-6 h-7 w-3/4 rounded-full bg-white/10" />
          <div className="mt-5 space-y-3">
            <div className="h-3 rounded-full bg-white/10" />
            <div className="h-3 w-5/6 rounded-full bg-white/10" />
            <div className="h-3 w-2/3 rounded-full bg-white/10" />
          </div>
          <div className="mt-8 flex gap-2">
            <div className="h-8 w-20 rounded-full bg-white/10" />
            <div className="h-8 w-20 rounded-full bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

function RepositoryCard({ repo }: { repo: GitHubRepo }) {
  const updatedAt = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(repo.updated_at));

  const homepage = repo.homepage?.trim();

  return (
    <article className="glass-panel group flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-[#FF2DAA]/35 bg-[#FF2DAA]/10 px-3 py-1 text-xs font-bold uppercase text-[#FFB6D9]">
          {repo.language ?? "Code"}
        </span>
        <span className="text-xs font-medium text-zinc-400">Updated {updatedAt}</span>
      </div>
      <h3 className="mt-5 text-2xl font-black leading-tight text-white">
        {repo.name}
      </h3>
      <p className="mt-4 flex-1 text-base leading-8 text-zinc-300">
        {repo.description ?? "Public GitHub repository by Destiny Mills."}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <RepoMetric label="Stars" value={repo.stargazers_count} />
        <RepoMetric label="Forks" value={repo.forks_count} />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          className="text-link"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
        {homepage && (
          <a
            className="text-link"
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

function RepoMetric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
      <p className="text-xs uppercase text-zinc-500">{label}</p>
      <p className="mt-1 text-lg font-black text-white">{value}</p>
    </div>
  );
}
