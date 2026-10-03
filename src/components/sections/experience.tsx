import React from "react";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-accent">
          <span>01 // EXPERIENCE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-sans">
          Production Systems & Internships
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg">
          Direct engineering impact building AI backend infrastructure and retrieval systems.
        </p>
      </div>

      {/* Experience Spotlight Card */}
      <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-6 sm:p-8 transition-all hover:border-zinc-700/80 group">
        {/* Subtle accent corner highlight */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-zinc-100 font-sans tracking-tight">
                {experienceData.company}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-accent/15 border border-accent/30 text-accent font-medium">
                {experienceData.type}
              </span>
            </div>
            <p className="text-base text-zinc-300 font-mono mt-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-accent" />
              <span>{experienceData.role}</span>
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              <span>{experienceData.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>{experienceData.location}</span>
            </div>
          </div>
        </div>

        {/* Highlights List */}
        <div className="py-6 flex flex-col gap-4">
          {experienceData.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
              <p className="text-sm text-zinc-300 leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-zinc-500 mr-2 uppercase tracking-wider">
            Stack:
          </span>
          {experienceData.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800/60 border border-zinc-700/50 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
