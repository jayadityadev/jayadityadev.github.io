"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Github, Linkedin, FileText, Terminal, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-3 md:gap-8 px-4 sm:px-5 py-2 rounded-full border border-border bg-surface/80 dark:bg-surface/85 backdrop-blur-xl shadow-lg max-w-4xl w-full">
        {/* Brand Terminal Mark */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors shrink-0"
        >
          <Terminal className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
          <span className="font-semibold">jayadityadev.tech</span>
        </a>

        {/* Desktop Anchor Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
          <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#credentials" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Credentials
          </a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </div>

        {/* Actions: Socials + Theme Toggle + Resume */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle />

          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all hidden sm:flex"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all hidden sm:flex"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={profileData.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Jayaditya_Dev_Resume.pdf"
            aria-label="Download Resume"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-all shadow-sm shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white md:hidden"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 p-5 rounded-2xl border border-border bg-surface/95 dark:bg-surface/95 backdrop-blur-2xl md:hidden shadow-2xl flex flex-col gap-4 text-xs font-mono tracking-widest uppercase text-zinc-700 dark:text-zinc-300">
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-zinc-950 dark:hover:text-white"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-zinc-950 dark:hover:text-white"
          >
            Projects
          </a>
          <a
            href="#credentials"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-zinc-950 dark:hover:text-white"
          >
            Credentials
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-zinc-950 dark:hover:text-white"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-border flex gap-4 text-zinc-500 dark:text-zinc-400">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              GitHub ↗
            </a>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
