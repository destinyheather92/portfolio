import Image from "next/image";
import { GithubRepositories } from "@/components/github-repositories";
import { ProjectCard, type Project } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

const featuredProjects: Project[] = [
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

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "Supabase"],
  },
  {
    title: "AI & Automation",
    skills: ["OpenAI", "Zapier", "Prompt Engineering", "Workflow Automation"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    title: "Business",
    skills: ["Branding", "Digital Strategy", "Client Communication", "Project Management"],
  },
];

const services = [
  "Custom business websites",
  "Full-stack web applications",
  "AI-assisted workflow automation",
  "Lead capture and client intake systems",
  "Brand and digital strategy support",
  "Operational dashboards and internal tools",
];

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/destinyheather92",
    href: "https://github.com/destinyheather92",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/destinyhmills225/",
    href: "#contact",
  },
  {
    label: "Email",
    value: "dhmills292@gmail.com",
    href: "#contact",
  },
  {
    label: "DM Digital Boutique",
    value: "dmdigitalboutique.com",
    href: "#contact",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Hero />
      <About />
      <Skills />
      <Services />
      <FeaturedProjects />
      <GithubRepositories />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[88svh] items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-12">
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

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(320px,0.72fr)] lg:items-center">
        <div className="animate-fade-up max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-[#FF2DAA]/40 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase text-[#FFB6D9] shadow-[0_0_26px_rgba(255,45,170,0.28)] backdrop-blur">
            Full Stack Developer
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Destiny Mills
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-semibold leading-snug text-[#FFB6D9] sm:text-3xl">
            Full Stack Developer | AI Automation Builder | Digital Solutions
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
            I build websites, AI automations, and digital systems that help small
            businesses save time, show up professionally, and grow online.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="btn-primary" href="#featured-projects">
              View Projects
            </a>
            <a
              className="btn-secondary"
              href="https://github.com/destinyheather92"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="animate-float hidden min-h-[430px] rounded-[28px] border border-white/12 bg-white/[0.04] p-5 shadow-[0_0_70px_rgba(255,0,127,0.2)] backdrop-blur-xl lg:block">
          <div className="h-full rounded-[22px] border border-[#FF2DAA]/20 bg-[#050505]/75 p-6">
            <div className="mb-8 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF2DAA]" />
              <span className="h-3 w-3 rounded-full bg-[#FFB6D9]" />
              <span className="h-3 w-3 rounded-full bg-white" />
            </div>
            <div className="space-y-5 font-mono text-sm text-zinc-300">
              <CodeLine label="build" value="business systems" />
              <CodeLine label="stack" value="next + typescript" />
              <CodeLine label="automate" value="ai workflows" />
              <CodeLine label="deliver" value="polished digital experiences" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4 shadow-[inset_0_0_22px_rgba(255,45,170,0.06)]">
      <span className="text-[#FF2DAA]">{label}</span>
      <span className="text-zinc-500">: </span>
      <span className="text-white">&quot;{value}&quot;</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Practical builds with a sharp digital edge."
          description="I blend development, automation, operations, and brand thinking into systems that make business feel lighter."
        />
        <div className="glass-panel p-6 sm:p-8">
          <p className="text-lg leading-9 text-zinc-200">
            I&apos;m a full stack developer with experience in React, Next.js,
            TypeScript, Node.js, Prisma, PostgreSQL, Supabase, Vercel, and AI
            automation tools like OpenAI and Zapier. I also bring a background in
            legal support, business operations, branding, and digital strategy,
            which helps me build solutions that are practical, user-focused, and
            business-minded.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Tech stack for polished, useful systems."
        description="Frontend clarity, backend structure, automation thinking, and client-ready communication."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {skillGroups.map((group) => (
          <article className="glass-panel p-5" key={group.title}>
            <h3 className="text-lg font-bold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="Services"
          title="Digital solutions for small businesses that need momentum."
          description="Clean interfaces, reliable data flow, thoughtful automation, and a brand presence that feels intentional."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div className="glass-panel group p-5" key={service}>
              <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF007F] to-[#FFB6D9] shadow-[0_0_18px_rgba(255,45,170,0.55)] transition-all duration-300 group-hover:w-20" />
              <p className="text-base font-semibold leading-7 text-white">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section id="featured-projects" className="section-shell">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected builds with business impact."
        description="A focused mix of web apps, brand platforms, dashboards, and AI-assisted workflows."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell pb-20">
      <div className="relative overflow-hidden rounded-[28px] border border-[#FF2DAA]/25 bg-[#111111]/85 p-6 shadow-[0_0_70px_rgba(255,0,127,0.18)] sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,45,170,0.22),transparent_42%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s build something sharp."
            description="Open to full-stack projects, digital business systems, AI automation builds, and small-business web strategy."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF2DAA]/60 hover:bg-white/[0.07] hover:shadow-[0_0_26px_rgba(255,45,170,0.2)]"
                href={link.href}
                key={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <p className="text-sm font-bold uppercase text-[#FFB6D9]">
                  {link.label}
                </p>
                <p className="mt-3 break-words text-lg font-semibold text-white">
                  {link.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
