"use client";

import React from "react";
import { Briefcase, Trophy, Brain, ShieldAlert, GraduationCap } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  ongoing?: boolean;
}

export const TimelineSection: React.FC = () => {
  const milestones: Milestone[] = [
    {
      year: "2026 — Present",
      title: "7HiddenLayers",
      role: "AI Backend Engineer Intern",
      description:
        "Building production RAG pipelines with delta-document ingestion logic, citation-constrained SLM retrieval infrastructure, and automated multi-agent content benchmark suites.",
      tags: ["FastAPI", "RAG", "SLMs", "Multi-Agent", "Python uv"],
      icon: <Briefcase className="w-4 h-4 text-accent" />,
      ongoing: true,
    },
    {
      year: "2026",
      title: "Hire-4-Thon Hackathon — 2nd Place",
      role: "National Runner-Up",
      description:
        "Secured 2nd place nationwide building QuizGenAI, an AI dynamic assessment platform with token authentication and isolated LLM contracts.",
      tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT"],
      icon: <Trophy className="w-4 h-4 text-accent" />,
    },
    {
      year: "2025",
      title: "CE-MRI Medical Image Classification",
      role: "Deep Learning Research & System",
      description:
        "Engineered DenseNet121 & ResNet50 pipelines reaching 99.21% accuracy on 1,519 MRI evaluation slices with OpenCV preprocessing and Grad-CAM visual diagnostic overlays.",
      tags: ["TensorFlow", "OpenCV", "Grad-CAM", "Docker"],
      icon: <Brain className="w-4 h-4 text-accent" />,
    },
    {
      year: "2024",
      title: "TryHackMe Global Top 5%",
      role: "Capture The Flag (CTF) Security",
      description:
        "Ranked in the top 5% globally on TryHackMe, specializing in web application vulnerability analysis, authorization bypass, and secure API hardening.",
      tags: ["Application Security", "CTF", "Authentication", "Linux"],
      icon: <ShieldAlert className="w-4 h-4 text-accent" />,
    },
    {
      year: "2023 — 2027",
      title: "KS Institute of Technology",
      role: "B.E. Computer Science & Engineering",
      description:
        "Maintaining an 8.88 CGPA with deep focus on systems programming, operating systems, database management, and computer networks.",
      tags: ["Data Structures", "OS", "Networks", "DBMS"],
      icon: <GraduationCap className="w-4 h-4 text-accent" />,
    },
  ];

  return (
    <section id="trajectory" className="py-20 px-4 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-accent">
          <span>02 // TRAJECTORY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-sans">
          Engineering Trajectory & Milestones
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg">
          Key inflection points: from foundational CTFs and computer vision models to production AI engineering.
        </p>
      </div>

      {/* Connected Line Architecture */}
      <div className="relative space-y-8 before:absolute before:left-4 sm:before:left-6 before:top-3 before:bottom-3 before:w-px before:bg-zinc-800/80">
        {milestones.map((item, idx) => (
          <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
            {/* Left Node Badge */}
            <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-zinc-700/80 bg-zinc-950 text-zinc-300 group-hover:border-accent transition-colors shadow-lg shrink-0">
              {item.icon}
            </div>

            {/* Content Card */}
            <div className="flex-1 p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/60 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  {item.ongoing && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>Ongoing</span>
                    </span>
                  )}
                </div>

                <span className="text-xs font-mono text-zinc-500 shrink-0">
                  {item.year}
                </span>
              </div>

              <p className="text-xs font-mono text-accent mb-2.5">{item.role}</p>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-900">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900/80 text-zinc-400 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
