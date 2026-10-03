import React from "react";
import { profileData } from "@/data/profile";
import { ShieldAlert, Trophy, GraduationCap, Award } from "lucide-react";

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-20 px-4 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-accent">
          <span>03 // SIGNALS & CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-sans">
          Proven Engineering Signals
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg">
          Competitive rankings, hackathon runner-up results, and computer science foundations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Signal 1: TryHackMe Top 5% */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/70 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none">
          <div className="flex flex-col gap-4">
            <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 w-fit border border-zinc-200 dark:border-zinc-800 text-accent">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-medium">
                TryHackMe Global Ranking
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                TryHackMe Top 5% Globally
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Consistently ranked in the top 5% worldwide solving CTFs focused on web application vulnerabilities, privilege escalation, and auth security.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-900 text-xs font-mono text-zinc-500">
            Field: Application Security
          </div>
        </div>

        {/* Signal 2: Hire-4-Thon 2nd Place */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/70 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none">
          <div className="flex flex-col gap-4">
            <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 w-fit border border-zinc-200 dark:border-zinc-800 text-accent">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-medium">
                National Hackathon
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                Hire-4-Thon Hackathon — 2nd Place
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Secured 2nd place nationwide in 2026 for building QuizGenAI, an AI-powered dynamic evaluation platform with modular FastAPI architecture.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-900 text-xs font-mono text-zinc-500">
            Year: 2026
          </div>
        </div>

        {/* Signal 3: Academic Foundations */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/70 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none">
          <div className="flex flex-col gap-4">
            <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 w-fit border border-zinc-200 dark:border-zinc-800 text-accent">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-medium">
                Academic Record
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                KS Institute of Technology
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              B.E. in Computer Science & Engineering (Expected 2027). Maintained an 8.88 CGPA through Semester 6 with a focus on core CS fundamentals.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-900 text-xs font-mono text-zinc-500 flex justify-between">
            <span>CGPA: 8.88 / 10.0</span>
            <span>Batch of 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
};
