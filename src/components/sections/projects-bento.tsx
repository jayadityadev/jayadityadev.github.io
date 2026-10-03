"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { BentoCard } from "@/components/ui/bento-card";
import { GithubContributions } from "@/components/ui/github-contributions";
import { AgenticEngineeringCard } from "@/components/ui/agentic-card";
import { Github, ArrowUpRight, CheckCircle, Cpu, Shield, Brain, Sparkles } from "lucide-react";

export const ProjectsBento: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "guardian-ai":
        return <Shield className="w-5 h-5 text-accent" />;
      case "brain-tumor":
        return <Brain className="w-5 h-5 text-accent" />;
      case "quiz-gen-ai":
        return <Sparkles className="w-5 h-5 text-accent" />;
      case "quant-niti":
      default:
        return <Cpu className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-accent">
          <span>02 // ARCHITECTURE & PROJECTS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
          Production Systems & Implementations
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-lg">
          Balanced bento overview of real-time backends, ML inference pipelines, and engineering workflows.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top Spanned Card: Monochrome GitHub Contribution Graph (Fig. 2.) */}
        <BentoCard size="large">
          <GithubContributions />
        </BentoCard>

        {/* 2x2 Projects Matrix (Guardian AI, Brain Tumor, QuizGenAI, QuantNiti) */}
        {projectsData.map((project) => (
          <BentoCard key={project.id} size="medium">
            {/* Top Bar: Icon, Title & Metric */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800">
                  {getProjectIcon(project.id)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {project.metric && (
                <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-accent/15 border border-accent/30 text-accent">
                  {project.metric}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Architecture Highlights */}
            <div className="flex flex-col gap-2.5 mb-6 bg-zinc-100/70 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/60">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                Key Architecture Decisions:
              </span>
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-1" />
                  <span className="text-xs text-zinc-800 dark:text-zinc-300 leading-relaxed font-sans">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer: Tags & Repository Link */}
            <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
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
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors group"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </BentoCard>
        ))}

        {/* Bottom Spanned Card: Autonomous Agentic Engineering (Matt Pocock Skills) */}
        <BentoCard size="large">
          <AgenticEngineeringCard />
        </BentoCard>
      </div>
    </section>
  );
};
