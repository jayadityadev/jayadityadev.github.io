import React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { MarqueeTicker } from "@/components/ui/marquee";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsBento } from "@/components/sections/projects-bento";
import { CredentialsSection } from "@/components/sections/credentials";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SectionDivider } from "@/components/ui/section-divider";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen bg-background overflow-x-hidden selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section with Social Media Profile Layout & Isometric Blueprint Banner (Fig. 1.) */}
      <div id="about" className="w-full">
        <Hero />
      </div>

      {/* Architectural Striped Section Divider */}
      <SectionDivider />

      {/* Infinite Capability Ticker */}
      <div className="w-full">
        <MarqueeTicker />
      </div>

      {/* Architectural Striped Section Divider */}
      <SectionDivider />

      {/* Experience Spotlight (7HiddenLayers) */}
      <ExperienceSection />

      {/* Architectural Striped Section Divider */}
      <SectionDivider />

      {/* Balanced Bento Grid Projects (GitHub Graph Spanned Banner + 2x2 Flagship Projects Matrix) */}
      <ProjectsBento />

      {/* Architectural Striped Section Divider */}
      <SectionDivider />

      {/* Credentials & Signals */}
      <CredentialsSection />

      {/* Architectural Striped Section Divider */}
      <SectionDivider />

      {/* Terminal Contact Footer */}
      <Footer />
    </main>
  );
}
