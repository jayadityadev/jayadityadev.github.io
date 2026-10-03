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
      <div className="max-w-4xl w-full border-x border-border px-4 sm:px-6 py-16 bg-background">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-10 pb-6 border-b border-border">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-zinc-500">
            <span>02 // ARCHITECTURE & IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
            Production Systems & Flagship Repositories
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl font-mono">
            Balanced 2×2 architecture matrix spanning real-time backends, ML inference pipelines, and autonomous workflows.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Top Spanned Card: Monochrome GitHub Contribution Graph (Fig. 2.) */}
          <BentoCard size="large">
            <GithubContributions />
          </BentoCard>

          {/* 2x2 Projects Matrix (Guardian AI, Brain Tumor, QuizGenAI, QuantNiti) */}
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="col-span-1 lg:col-span-6 flex flex-col h-full"
            >
              <BentoCard size="medium" className="h-full flex flex-col justify-between">
                <div>
                  {/* Top Bar: Icon, Title & Metric */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-border">
                        {getProjectIcon(project.id)}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold font-sans text-zinc-900 dark:text-zinc-100 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {project.metric && (
                      <span className="shrink-0 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-900 border border-border text-zinc-800 dark:text-zinc-200">
                        {project.metric}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 font-sans">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="flex flex-col gap-2 mb-6 bg-surface/50 p-3.5 rounded-lg border border-border">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Key Architecture Decisions:
                    </span>
                    {project.architectureHighlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tags & Repository Link */}
                <div className="mt-auto pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-border"
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
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors group"
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
