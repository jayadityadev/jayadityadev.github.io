"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Terminal, Copy, Check, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const curlCommand = `curl -X POST https://jayadityadev.tech/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Recruiter", "email": "${profileData.email}", "message": "Let us connect"}'`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="w-full flex justify-center"
    >
      <div className="max-w-4xl w-full border-x border-border px-4 sm:px-6 py-16 bg-background">
        <div className="flex flex-col items-start gap-2 mb-10 pb-6 border-b border-border">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-zinc-500">
            <span>04 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
            Let’s Build High-Throughput Production Systems
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-lg font-mono">
            Actively seeking full-time backend and AI engineering opportunities. Reach out via email, terminal, or LinkedIn.
          </p>
        </div>

        {/* Terminal Block */}
        <div className="relative rounded-xl border border-border bg-surface/70 overflow-hidden mb-10 shadow-sm">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="ml-2 font-mono text-xs text-zinc-500 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>bash - contact.sh</span>
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-border text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all"
              aria-label="Copy curl command"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied!</span>
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
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 overflow-x-auto leading-relaxed select-all">
            <pre className="font-mono">{curlCommand}</pre>
          </div>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-12">
          <a
            href={`mailto:${profileData.email}`}
            className="flex items-center gap-3 p-3.5 rounded-xl border border-border bg-surface/40 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-border text-zinc-800 dark:text-zinc-200">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Email</span>
              <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 truncate font-mono">
                {profileData.email}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3 p-3.5 rounded-xl border border-border bg-surface/40">
            <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-border text-zinc-800 dark:text-zinc-200">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Location</span>
              <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 font-mono">
                {profileData.location}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-surface/40">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-xs font-mono text-zinc-500">
          <div>
            <span>© {new Date().getFullYear()} Jayaditya Dev. Systems / Backend / AI.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Operational · Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
