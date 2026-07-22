import { NextResponse } from "next/server";

const GITHUB_LOGIN = "destinyheather92";

const QUERY = `
  query PortfolioGithubSummary($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            stargazerCount
            forkCount
            updatedAt
            primaryLanguage {
              name
            }
            languages(first: 6, orderBy: { field: SIZE, order: DESC }) {
              nodes {
                name
              }
            }
          }
        }
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      repositories(first: 100, ownerAffiliations: [OWNER], isFork: false, privacy: PUBLIC) {
        nodes {
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`;

type GraphQLRepository = {
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  primaryLanguage: { name: string } | null;
  languages: { nodes: { name: string }[] } | null;
};

type GraphQLResponse = {
  data?: {
    user: {
      pinnedItems: { nodes: GraphQLRepository[] };
      contributionsCollection: {
        contributionCalendar: { totalContributions: number };
      };
      repositories: {
        nodes: { primaryLanguage: { name: string; color: string } | null }[];
      };
    } | null;
  };
  errors?: { message: string }[];
};

export type PinnedRepo = {
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  primaryLanguage: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  languages: string[];
};

export type LanguageUsage = {
  name: string;
  color: string | null;
  count: number;
};

export type GithubSummary = {
  degraded: boolean;
  pinned: PinnedRepo[];
  languages: LanguageUsage[];
  contributionsLastYear: number | null;
};

const emptySummary: GithubSummary = {
  degraded: true,
  pinned: [],
  languages: [],
  contributionsLastYear: null,
};

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(emptySummary);
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY, variables: { login: GITHUB_LOGIN } }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL responded with ${response.status}`);
    }

    const json = (await response.json()) as GraphQLResponse;

    if (json.errors?.length || !json.data?.user) {
      throw new Error(json.errors?.[0]?.message ?? "GitHub GraphQL returned no user data");
    }

    const { user } = json.data;

    const pinned: PinnedRepo[] = user.pinnedItems.nodes.map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.url,
      homepageUrl: repo.homepageUrl,
      primaryLanguage: repo.primaryLanguage?.name ?? null,
      stars: repo.stargazerCount,
      forks: repo.forkCount,
      updatedAt: repo.updatedAt,
      languages: repo.languages?.nodes.map((l) => l.name) ?? [],
    }));

    const languageCounts = new Map<string, { color: string | null; count: number }>();
    for (const repo of user.repositories.nodes) {
      const lang = repo.primaryLanguage;
      if (!lang?.name) continue;
      const existing = languageCounts.get(lang.name);
      if (existing) {
        existing.count += 1;
      } else {
        languageCounts.set(lang.name, { color: lang.color ?? null, count: 1 });
      }
    }

    const languages: LanguageUsage[] = Array.from(languageCounts.entries())
      .map(([name, value]) => ({ name, color: value.color, count: value.count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    const summary: GithubSummary = {
      degraded: false,
      pinned,
      languages,
      contributionsLastYear: user.contributionsCollection.contributionCalendar.totalContributions,
    };

    return NextResponse.json(summary);
  } catch {
    return NextResponse.json(emptySummary);
  }
}
