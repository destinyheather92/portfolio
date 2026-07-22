# Destiny Mills Portfolio

Personal portfolio website for Destiny Mills, built with Next.js, TypeScript,
and Tailwind CSS. The site uses a dark, neon pink visual system, responsive
glassmorphism cards, curated featured projects, and a live GitHub repositories
section powered by the GitHub API.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## GitHub Repositories

The repositories section fetches public repos from:

```text
https://api.github.com/users/destinyheather92/repos?sort=updated&per_page=6
```

If the GitHub API is unavailable or rate-limited, the site automatically shows
curated fallback project cards.

## Project Structure

```text
src/app/page.tsx                    Main portfolio sections
src/app/globals.css                 Global theme, animations, and reusable classes
src/components/github-repositories.tsx
src/components/project-card.tsx
src/components/section-heading.tsx
public/hero-neon-workspace.png      Generated hero visual
```

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- GitHub REST API

## Deployment

Deploy on Vercel or any host that supports Next.js:

```bash
npm run build
npm run start
```
