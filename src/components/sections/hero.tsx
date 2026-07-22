import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { Headshot } from "@/components/media/headshot";
import { Reveal } from "@/components/layout/reveal";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-[92svh] items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-12">
      <Image
        src="/hero-neon-workspace.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.9)_38%,rgba(5,5,5,0.45)_72%,rgba(5,5,5,0.76)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_28%,rgba(255,45,170,0.25),transparent_34%),linear-gradient(180deg,rgba(5,5,5,0)_62%,#050505_100%)]" />

      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.6fr)] lg:items-center">
        <div className="animate-fade-up max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-[#FF2DAA]/40 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase text-[#FFB6D9] shadow-[0_0_26px_rgba(255,45,170,0.28)] backdrop-blur">
            Software Engineer &middot; AI Builder &middot; Full Stack Developer
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-semibold leading-snug text-[#FFB6D9] sm:text-3xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
            {siteConfig.summary}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="btn-primary" href="#featured-projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a className="btn-secondary" href="#casecompass">
              View CaseCompass AI
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-bold text-white transition hover:border-[#FF2DAA]/50 hover:bg-white/[0.08]"
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-bold text-white transition hover:border-[#FF2DAA]/50 hover:bg-white/[0.08]"
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-bold text-white transition hover:border-[#FF2DAA]/50 hover:bg-white/[0.08]"
              href={siteConfig.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-4 w-4" aria-hidden />
              Resume
            </a>
          </div>
        </div>

        <Reveal variant="scale" className="hidden justify-self-center lg:flex">
          <Headshot
            src={siteConfig.headshotSrc}
            alt={`${siteConfig.name} headshot`}
            initials={siteConfig.initials}
            size={320}
          />
        </Reveal>
      </div>
    </section>
  );
}
