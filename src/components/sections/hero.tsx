"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { IllustratedAvatar } from "@/components/ui/illustrated-avatar";
import { TerminalTypewriter } from "@/components/ui/terminal-typewriter";
import { LatencyTester } from "@/components/ui/latency-tester";
import { Github, Linkedin, Mail, FileText, MapPin, GraduationCap } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center pt-20">
      <div className="max-w-4xl w-full border-x border-border flex flex-col bg-background">
        {/* Banner Section with Isometric Blueprint Wireframe & Fig. 1. */}
        <div className="relative w-full aspect-[2.6/1] sm:aspect-[3.6/1] border-b border-border bg-surface overflow-hidden flex items-center justify-center">
          {/* Subtle blueprint dot grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_0)] bg-[size:14px_14px] opacity-70" />

          {/* Isometric Blueprint Wireframe (Chanh Dai / Technical Drafting Style) */}
          <svg
            className="w-full h-full max-w-xl opacity-35 dark:opacity-40 pointer-events-none select-none text-zinc-400 dark:text-zinc-600"
            viewBox="0 0 600 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            {/* Perspective grid guidelines */}
            <line x1="0" y1="180" x2="600" y2="40" strokeDasharray="3 3" />
            <line x1="0" y1="20" x2="600" y2="160" strokeDasharray="3 3" />

            {/* Left Isometric Cube Unit */}
            <g transform="translate(140, 70)">
              <polygon
                points="0,-30 50,-55 100,-30 50,-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polygon
                points="0,-30 50,-5 50,45 0,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polygon
                points="50,-5 100,-30 100,20 50,45"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <line x1="12" y1="-24" x2="50" y2="-5" strokeWidth="0.6" strokeDasharray="2 2" />
              <line x1="25" y1="-18" x2="50" y2="-5" strokeWidth="0.6" strokeDasharray="2 2" />
              <line x1="50" y1="-5" x2="88" y2="-24" strokeWidth="0.6" strokeDasharray="2 2" />
            </g>

            {/* Center Elevated Isometric Node */}
            <g transform="translate(260, 40)">
              <polygon
                points="0,-25 60,-55 120,-25 60,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <polygon
                points="25,-25 60,-42 95,-25 60,-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              <polygon
                points="0,-25 60,5 60,55 0,25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <polygon
                points="60,5 120,-25 120,25 60,55"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </g>

            {/* Right Isometric Cube Unit */}
            <g transform="translate(400, 85)">
              <polygon
                points="0,-20 40,-40 80,-20 40,0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polygon
                points="0,-20 40,0 40,35 0,15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polygon
                points="40,0 80,-20 80,15 40,35"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </g>
          </svg>

          {/* Technical Caption Fig. 1. */}
          <span className="absolute bottom-2.5 right-3.5 font-mono text-[11px] text-zinc-500 tracking-wider select-none bg-surface/80 px-2 py-0.5 rounded border border-border/40">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Fig. 1.</span> Architectural Schematic
          </span>
        </div>

        {/* Profile Card Header: Left Avatar + Right Identity (Social Media Profile Architecture) */}
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-stretch border-b border-border">
          {/* Left Column: Circular Avatar with hairline ring, strictly static */}
          <div className="p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-border shrink-0 flex items-center justify-center w-full sm:w-auto bg-surface/20">
            <IllustratedAvatar sizeClassName="w-24 h-24 sm:w-36 sm:h-36" />
          </div>

          {/* Right Column: Name, Tagline & Summary */}
          <div className="flex flex-col flex-1 min-w-0 w-full">
            {/* Terminal Command & Status Bar with dynamic typewriter */}
            <div className="w-full px-4 py-2 sm:py-2.5 border-b border-border bg-surface/40 flex flex-wrap items-center justify-between gap-2 font-mono text-xs select-none">
              <TerminalTypewriter />

              <div className="flex items-center gap-2 text-zinc-500 shrink-0 ml-auto">
                <span className="text-[11px] uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
                  {profileData.status}
                </span>
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
            </div>

            {/* Name without verified badge + Tagline */}
            <div className="px-4 py-3 sm:py-4 border-b border-border">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
                {profileData.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                {profileData.tagline}
              </p>
            </div>

            {/* Summary & Passions */}
            <div className="px-4 py-3 sm:py-3.5 bg-surface/10 flex-1 flex flex-col justify-center gap-2">
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {profileData.summary}
              </p>

              {/* Subtle Off-Duty Passions & Interests */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] font-mono text-zinc-500">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium mr-1 select-none">
                  Off-duty:
                </span>
                {profileData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-border/80 bg-surface/80 text-zinc-700 dark:text-zinc-300 select-none hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                  >
                    <span>{interest.icon}</span>
                    <span>{interest.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Action Pill Bar */}
        <div className="w-full px-4 py-3 border-b border-border flex flex-wrap items-center justify-between gap-3 bg-surface/30">
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email Jayaditya"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <a
              href={profileData.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Jayaditya_Dev_Resume.pdf"
              aria-label="Download CV"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-xs font-mono font-medium hover:opacity-90 transition-opacity"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Interactive Hero Element: Edge Ping Latency Tester + Signal Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500">
            <LatencyTester />

            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Bengaluru, IN</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
              <span>KSIT (8.88 CGPA)</span>
            </span>
          </div>
        </div>

        {/* Technical Blueprint Striped Spacer Bar */}
        <div className="w-full h-6 sm:h-8 border-b border-border bg-[repeating-linear-gradient(315deg,var(--border-subtle)_0,var(--border-subtle)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]" />
      </div>
    </section>
  );
};
