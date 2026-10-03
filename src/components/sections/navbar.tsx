"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Github, Linkedin, FileText, Terminal } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-5 py-2.5 rounded-full border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl shadow-2xl max-w-4xl w-full">
        {/* Brand Terminal Mark */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-sm tracking-wider text-zinc-100 hover:text-accent transition-colors"
        >
          <Terminal className="w-4 h-4 text-accent" />
          <span className="font-semibold">jayaditya.dev</span>
        </a>

        {/* Anchor Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono tracking-widest uppercase text-zinc-400">
          <a href="#about" className="hover:text-zinc-100 transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#credentials" className="hover:text-zinc-100 transition-colors">
            Credentials
          </a>
        </div>

        {/* Action Buttons & Socials */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={profileData.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Jayaditya_Dev_Resume.pdf"
            aria-label="Download Resume"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-accent text-white hover:bg-accent-muted transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
