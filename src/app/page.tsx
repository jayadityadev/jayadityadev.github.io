import React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { MarqueeTicker } from "@/components/ui/marquee";
import { ExperienceSection } from "@/components/sections/experience";
import { TimelineSection } from "@/components/sections/timeline";
import { ProjectsBento } from "@/components/sections/projects-bento";
import { CredentialsSection } from "@/components/sections/credentials";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen bg-background overflow-hidden">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section with Mouse Aura & 3D Tilt Avatar */}
      <div id="about" className="w-full">
        <Hero />
      </div>

      {/* Infinite Capability Ticker */}
      <div className="w-full my-6">
        <MarqueeTicker />
      </div>

      {/* Experience Spotlight (7HiddenLayers) */}
      <ExperienceSection />

      {/* Trajectory & Milestones Connected Timeline */}
      <TimelineSection />

      {/* Balanced Bento Grid Projects (Guardian, Brain Tumor, QuizGen, QuantNiti, GitHub Graph, Agentic) */}
      <ProjectsBento />

      {/* Credentials & Signals */}
      <CredentialsSection />

      {/* Terminal Contact Footer */}
      <Footer />
    </main>
  );
}
