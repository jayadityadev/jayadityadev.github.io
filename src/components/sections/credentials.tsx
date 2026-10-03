"use client";

import React from "react";
import { ShieldAlert, Trophy, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const CredentialsSection: React.FC = () => {
  return (
    <motion.section
      id="credentials"
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
            <span>03 // SIGNALS & CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
            Proven Engineering Signals & Foundations
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl font-mono">
            Competitive global rankings, national hackathon podium, and high academic performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Signal 1: TryHackMe Top 5% */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-xl border border-border bg-surface/50 p-5 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="flex flex-col gap-3.5">
              <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 w-fit border border-border text-zinc-800 dark:text-zinc-200">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  TryHackMe Global Ranking
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-1 font-sans">
                  TryHackMe Top 5% Globally
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                Ranked in top 5% worldwide solving CTFs with emphasis on web application vulnerabilities, authentication mechanics, and exploit analysis.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-border text-xs font-mono text-zinc-500">
              Field: Application Security
            </div>
          </motion.div>

          {/* Signal 2: Hire-4-Thon 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="rounded-xl border border-border bg-surface/50 p-5 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="flex flex-col gap-3.5">
              <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 w-fit border border-border text-zinc-800 dark:text-zinc-200">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  National Hackathon Runner-Up
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-1 font-sans">
                  Hire-4-Thon Hackathon — 2nd Place
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                Secured 2nd place nationwide in 2026 for building QuizGenAI, dynamic assessment generation backend powered by asynchronous FastAPI pipelines.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-border text-xs font-mono text-zinc-500">
              Year: 2026
            </div>
          </motion.div>

          {/* Signal 3: Academic Foundations */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.19 }}
            className="rounded-xl border border-border bg-surface/50 p-5 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="flex flex-col gap-3.5">
              <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 w-fit border border-border text-zinc-800 dark:text-zinc-200">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium">
                  Academic Record
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-1 font-sans">
                  KS Institute of Technology
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                B.E. in Computer Science & Engineering. Maintained an 8.88 CGPA through Semester 6 with strong command over algorithms, operating systems, and networking.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-border text-xs font-mono text-zinc-500 flex justify-between">
              <span>CGPA: 8.88 / 10.0</span>
              <span>Expected 2027</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
