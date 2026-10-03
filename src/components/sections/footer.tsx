"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Terminal, Copy, Check, Mail, Github, Linkedin, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const curlCommand = `curl -X POST https://jayaditya.dev/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Recruiter", "email": "${profileData.email}", "message": "Let us talk"}'`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-20 px-4 max-w-5xl mx-auto w-full border-t border-zinc-900">
      <div className="flex flex-col items-start gap-2 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-accent">
          <span>04 // INITIATE TRANSMISSION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 font-sans">
          Let’s Build High-Throughput Systems
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg">
          Actively seeking full-time backend and AI engineering opportunities. Reach out via email, terminal, or LinkedIn.
        </p>
      </div>

      {/* Terminal Block */}
      <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-md overflow-hidden mb-12 shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span>bash - contact.sh</span>
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700/80 transition-all"
            aria-label="Copy curl command"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto leading-relaxed">
          <pre className="text-accent/90">{curlCommand}</pre>
        </div>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        <a
          href={`mailto:${profileData.email}`}
          className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/50 hover:border-accent/60 transition-colors"
        >
          <div className="p-2 rounded-lg bg-zinc-900 text-accent">
            <Mail className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Email</span>
            <span className="text-xs sm:text-sm font-medium text-zinc-200">{profileData.email}</span>
          </div>
        </a>

        <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/50">
          <div className="p-2 rounded-lg bg-zinc-900 text-accent">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Location</span>
            <span className="text-xs sm:text-sm font-medium text-zinc-200">{profileData.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/50">
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-700">|</span>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Bottom Colophon */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-900 text-xs font-mono text-zinc-500">
        <div>
          <span>© {new Date().getFullYear()} Jayaditya Dev. Systems / Backend / AI.</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>All systems operational · Hosted on GitHub Pages</span>
        </div>
      </div>
    </footer>
  );
};
