"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceSection: React.FC = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="w-full flex justify-center"
    >
      <div className="max-w-4xl w-full border-x border-border px-4 sm:px-6 py-16 bg-background">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-10 pb-6 border-b border-border">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-zinc-500">
            <span>01 // PRODUCTION EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
            AI Backend Infrastructure & Retrieval Systems
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl font-mono">
            Direct engineering impact building production RAG pipelines and multi-agent systems at 7HiddenLayers.
          </p>
        </div>

        {/* Experience Spotlight Card */}
        <div className="relative rounded-xl border border-border bg-surface/50 p-6 sm:p-8 transition-colors hover:border-zinc-400 dark:hover:border-zinc-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 font-sans tracking-tight">
                  {experienceData.company}
                </h3>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {experienceData.type}
                </span>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 font-mono mt-1 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                <span>{experienceData.role}</span>
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>{experienceData.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{experienceData.location}</span>
              </div>
            </div>
          </div>

          {/* Highlights List */}
          <div className="py-6 flex flex-col gap-3.5">
            {experienceData.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-zinc-100 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-4 border-t border-border flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 mr-2 uppercase tracking-wider">
              Core Stack:
            </span>
            {experienceData.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-border text-zinc-800 dark:text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
