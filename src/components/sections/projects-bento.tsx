"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { BentoCard } from "@/components/ui/bento-card";
import { GithubContributions } from "@/components/ui/github-contributions";
import { Github, ArrowUpRight, CheckCircle, Cpu, Shield, Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const ProjectsBento: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "guardian-ai":
        return <Shield className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />;
      case "brain-tumor":
        return <Brain className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />;
      case "quiz-gen-ai":
        return <Sparkles className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />;
      case "quant-niti":
      default:
        return <Cpu className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />;
    }
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="w-full flex justify-center"
    >
      <div className="max-w-4xl w-full border-x border-border px-4 sm:px-6 py-14 bg-background">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-1.5 mb-8 pb-5 border-b border-border">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-zinc-500">
            <span>02 // ARCHITECTURE & IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
            Production Systems & Flagship Repositories
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xl font-mono">
            Compact 2×2 engineering matrix spanning real-time backends, ML inference pipelines, and quantitative decision systems.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Top Spanned Card: Functional Monochrome GitHub Contribution Graph (Fig. 2.) */}
          <BentoCard size="large">
            <GithubContributions />
          </BentoCard>

          {/* 2x2 Compact Projects Matrix */}
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="col-span-1 lg:col-span-6 flex flex-col h-full"
            >
              <BentoCard size="medium" className="h-full flex flex-col justify-between">
                <div>
                  {/* Top Bar: Icon, Title & Metric */}
                  <div className="flex items-start justify-between gap-2.5 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-border">
                        {getProjectIcon(project.id)}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold font-sans text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {project.metric && (
                      <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-100 dark:bg-zinc-900 border border-border text-zinc-800 dark:text-zinc-200">
                        {project.metric}
                      </span>
                    )}
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 font-sans">
                    {project.description}
                  </p>

                  {/* Compact Architecture Highlights */}
                  <div className="flex flex-col gap-1.5 mb-4 bg-surface/60 p-2.5 rounded-lg border border-border/80">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Architecture Decisions:
                    </span>
                    {project.architectureHighlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3 h-3 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-snug font-sans">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tags & Repository Link */}
                <div className="mt-auto pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} repository`}
                    className="inline-flex items-center gap-1 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors group"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
