"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/layout/reveal";
import { StatTile } from "@/components/ui/stat-tile";
import { LanguageBadge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { curatedPinnedRepos, type Project } from "@/data/projects";
import { siteConfig } from "@/data/site-config";
import type { GithubSummary } from "@/app/api/github-summary/route";

type RestRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

type SummaryState = { status: "loading" } | { status: "ready"; summary: GithubSummary };
type RecentState = { status: "loading" } | { status: "success"; repos: RestRepo[] } | { status: "error" };

const RECENT_ENDPOINT = `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=6`;

export function GithubSection() {
  const [summaryState, setSummaryState] = useState<SummaryState>({ status: "loading" });
  const [recentState, setRecentState] = useState<RecentState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/github-summary", { signal: controller.signal })
      .then((response) => response.json() as Promise<GithubSummary>)
      .then((summary) => setSummaryState({ status: "ready", summary }))
      .catch(() => {
        setSummaryState({
          status: "ready",
          summary: { degraded: true, pinned: [], languages: [], contributionsLastYear: null },
        });
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRecent() {
      try {
        const response = await fetch(RECENT_ENDPOINT, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);
        const repos = (await response.json()) as RestRepo[];
        if (!Array.isArray(repos)) throw new Error("Unexpected GitHub response");
        setRecentState({ status: "success", repos });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setRecentState({ status: "error" });
      }
    }

    loadRecent();
    return () => controller.abort();
  }, []);

  const isSummaryReady = summaryState.status === "ready";
  const summary = isSummaryReady ? summaryState.summary : null;
  const pinnedFromApi = (summary?.pinned ?? []).filter((repo) => repo.name !== "CaseCompassAI");
  const usingCuratedFallback = isSummaryReady && (summary!.degraded || pinnedFromApi.length === 0);

  const pinnedDisplay: Project[] = usingCuratedFallback
    ? curatedPinnedRepos
        .filter((repo) => repo.repoName !== "CaseCompassAI")
        .map((repo) => ({
          name: repo.displayName,
          description: repo.description,
          tech: repo.tech,
          href: `https://github.com/${siteConfig.githubUsername}/${repo.repoName}`,
          demoHref: repo.demoHref,
          screenshots: repo.screenshot ? [repo.screenshot] : [],
        }))
    : pinnedFromApi.map((repo) => ({
        name: repo.name,
        description: repo.description ?? "Public GitHub repository.",
        tech: repo.languages,
        href: repo.url,
        demoHref: repo.homepageUrl ?? undefined,
        language: repo.primaryLanguage,
        stars: repo.stars,
        screenshots: curatedPinnedRepos.find((c) => c.repoName === repo.name)?.screenshot
          ? [curatedPinnedRepos.find((c) => c.repoName === repo.name)!.screenshot!]
          : [],
      }));

  return (
    <section id="github" className="section-shell">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeading
            eyebrow="GitHub"
            title="Pinned repos, recent activity, and live stats."
            description={
              usingCuratedFallback
                ? "Showing curated projects. Live pinned-repo and contribution data unlocks once a GitHub token is connected."
                : "Pulled live from GitHub — pinned repositories, recent activity, and contribution insights."
            }
          />
        </Reveal>
        <a className="text-link w-fit" href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </div>

      {isSummaryReady && !usingCuratedFallback && (
        <Reveal delayMs={60}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StatTile label="Contributions (past year)" value={summary!.contributionsLastYear ?? "—"} />
            <StatTile label="Pinned Repositories" value={pinnedDisplay.length} />
            <StatTile label="Languages Tracked" value={summary!.languages.length} />
          </div>
          {summary!.languages.length > 0 && (
            <div className="glass-panel mt-4 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-[#FFB6D9]">Technology Usage</p>
              <div className="mt-4 space-y-3">
                {summary!.languages.map((lang) => {
                  const max = summary!.languages[0]?.count ?? 1;
                  const width = Math.max(8, Math.round((lang.count / max) * 100));
                  return (
                    <div key={lang.name}>
                      <div className="flex items-center justify-between text-xs font-semibold text-zinc-300">
                        <span>{lang.name}</span>
                        <span className="text-zinc-500">{lang.count}</span>
                      </div>
                      <div className="mt-1.5 h-2 rounded-full bg-white/[0.06]">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${width}%`,
                            background: lang.color ?? "linear-gradient(90deg, #FF007F, #FFB6D9)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </Reveal>
      )}

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {summaryState.status === "loading"
          ? Array.from({ length: 3 }, (_, index) => <SkeletonCard key={index} />)
          : pinnedDisplay.map((project, index) => (
              <Reveal delayMs={index * 60} key={project.name}>
                <ProjectCard project={project} pinned />
              </Reveal>
            ))}
      </div>

      <Reveal delayMs={80}>
        <div className="glass-panel mt-10 p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-[#FFB6D9]">Recent Activity</p>
          <div className="mt-4 divide-y divide-white/[0.06]">
            {recentState.status === "loading" &&
              Array.from({ length: 4 }, (_, index) => (
                <div className="flex animate-pulse items-center justify-between gap-4 py-4" key={index}>
                  <div className="h-4 w-40 rounded-full bg-white/10" />
                  <div className="h-3 w-24 rounded-full bg-white/10" />
                </div>
              ))}

            {recentState.status === "error" && (
              <p className="py-4 text-sm text-zinc-400">Recent activity could not be loaded right now.</p>
            )}

            {recentState.status === "success" &&
              recentState.repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 py-4 transition hover:opacity-80 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="truncate text-sm font-bold text-white">{repo.name}</span>
                    {repo.language && <LanguageBadge language={repo.language} />}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    Updated{" "}
                    {new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
                      new Date(repo.updated_at),
                    )}
                  </span>
                </a>
              ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SkeletonCard() {
  return (
    <div className="glass-panel min-h-96 animate-pulse overflow-hidden p-0" aria-hidden>
      <div className="aspect-[16/10] w-full bg-white/[0.04]" />
      <div className="p-6">
        <div className="h-4 w-24 rounded-full bg-white/10" />
        <div className="mt-5 h-6 w-3/4 rounded-full bg-white/10" />
        <div className="mt-4 space-y-2">
          <div className="h-3 rounded-full bg-white/10" />
          <div className="h-3 w-5/6 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}
