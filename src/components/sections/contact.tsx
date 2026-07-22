import { FileText, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/layout/reveal";
import { siteConfig } from "@/data/site-config";

const contactLinks: {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  external?: boolean;
}[] = [
  {
    label: "GitHub",
    value: "github.com/destinyheather92",
    href: siteConfig.social.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/destinyhmills225",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Email",
    value: siteConfig.social.email,
    href: `mailto:${siteConfig.social.email}`,
    icon: Mail,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: siteConfig.resumeHref,
    icon: FileText,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-20">
      <div className="relative overflow-hidden rounded-[28px] border border-[#FF2DAA]/25 bg-[#111111]/85 p-6 shadow-[0_0_70px_rgba(255,0,127,0.18)] sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,45,170,0.22),transparent_42%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s build something sharp."
              description="Open to full-stack roles, AI-builder opportunities, and conversations about CaseCompass AI and legal-tech accessibility."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link, index) => (
              <Reveal delayMs={index * 50} key={link.label}>
                <a
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF2DAA]/60 hover:bg-white/[0.07] hover:shadow-[0_0_26px_rgba(255,45,170,0.2)]"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  <span className="flex items-center gap-2 text-sm font-bold uppercase text-[#FFB6D9]">
                    <link.icon className="h-4 w-4" aria-hidden />
                    {link.label}
                  </span>
                  <p className="mt-3 break-words text-lg font-semibold text-white">{link.value}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
