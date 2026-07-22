import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { GithubSection } from "@/components/sections/github-section";
import { CaseCompassSpotlight } from "@/components/sections/case-compass-spotlight";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Hero />
      <About />
      <Skills />
      <Services />
      <ExperienceTimeline />
      <FeaturedProjects />
      <GithubSection />
      <CaseCompassSpotlight />
      <Contact />
    </main>
  );
}
