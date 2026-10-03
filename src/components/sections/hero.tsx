"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { PulseBadge } from "@/components/ui/pulse-badge";
import { IllustratedAvatar } from "@/components/ui/illustrated-avatar";
import { AntigravityParticles } from "@/components/ui/antigravity-particles";
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react";

export const Hero: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0, pctX: 50, pctY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles (max +/- 8 degrees)
    const tiltX = -((y - centerY) / centerY) * 8;
    const tiltY = ((x - centerX) / centerX) * 8;

    setMouseOffset({
      x: tiltY,
      y: tiltX,
      pctX: (x / rect.width) * 100,
      pctY: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0, pctX: 50, pctY: 50 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Interactive Antigravity Particle Physics Canvas */}
      <AntigravityParticles />

      {/* Interactive mouse-following radial spotlight aura */}
      <div
        className="absolute pointer-events-none -z-10 transition-all duration-300 ease-out"
        style={{
          top: `${mouseOffset.pctY}%`,
          left: `${mouseOffset.pctX}%`,
          width: "600px",
          height: "400px",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, var(--accent-glow, rgba(139, 92, 246, 0.18)) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Status Badge */}
          <PulseBadge label={profileData.status} />

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
              {profileData.name}
            </h1>
            <p className="text-xl sm:text-2xl font-mono text-accent font-medium tracking-tight">
              {profileData.tagline}
            </p>
          </div>

          {/* Summary */}
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            {profileData.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-zinc-100 text-zinc-950 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
            >
              <span>View Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href={profileData.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Jayaditya_Dev_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider border border-zinc-700/80 bg-zinc-900/60 text-zinc-200 hover:border-accent hover:text-white transition-all backdrop-blur-md"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Download CV</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right column: 3D Tilt Illustrated Avatar */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <IllustratedAvatar
            style={{
              transform: `perspective(1000px) rotateX(${mouseOffset.y}deg) rotateY(${mouseOffset.x}deg)`,
              transition: "transform 0.15s ease-out",
            }}
          />
        </div>
      </div>
    </section>
  );
};
