import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/layout/reveal";
import { services } from "@/data/site-config";

export function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Digital solutions for teams that need momentum."
            description="Clean interfaces, reliable data flow, thoughtful automation, and a brand presence that feels intentional."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal delayMs={index * 50} key={service}>
              <div className="glass-panel group p-5">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF007F] to-[#FFB6D9] shadow-[0_0_18px_rgba(255,45,170,0.55)] transition-all duration-300 group-hover:w-20" />
                <p className="text-base font-semibold leading-7 text-white">{service}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
