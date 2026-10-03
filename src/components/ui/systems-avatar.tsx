"use client";

import React from "react";

export const SystemsAvatar: React.FC = () => {
  return (
    <div
      data-testid="systems-avatar"
      className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-accent/15 blur-3xl -z-10 animate-depth-breathe" />

      {/* Rotating geometric outer ring */}
      <div className="absolute inset-2 rounded-full border border-zinc-800/80 border-dashed animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-8 rounded-full border border-zinc-700/40" />

      {/* SVG Neural/Systems Node Grid */}
      <svg
        viewBox="0 0 240 240"
        className="w-full h-full relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection paths */}
        <path
          d="M120 40 L60 90 L60 160 L120 200 L180 160 L180 90 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-zinc-800"
        />
        <path
          d="M120 40 L120 120 M60 90 L120 120 M60 160 L120 120 M120 200 L120 120 M180 160 L120 120 M180 90 L120 120"
          stroke="currentColor"
          strokeWidth="1"
          className="text-zinc-700/60"
        />
        <path
          d="M60 90 L180 90 M60 160 L180 160"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 3"
          className="text-zinc-700/40"
        />

        {/* Central Core Node */}
        <circle cx="120" cy="120" r="16" className="fill-zinc-900 stroke-accent" strokeWidth="2" />
        <circle cx="120" cy="120" r="6" className="fill-accent animate-pulse" />

        {/* Outer Perimeter Nodes */}
        <g className="transition-all duration-300">
          {/* Top Node (API / Gateway) */}
          <circle cx="120" cy="40" r="8" className="fill-zinc-900 stroke-zinc-500" strokeWidth="1.5" />
          <circle cx="120" cy="40" r="3" className="fill-zinc-300" />

          {/* Top-Left Node (ML Pipeline) */}
          <circle cx="60" cy="90" r="8" className="fill-zinc-900 stroke-accent/80" strokeWidth="1.5" />
          <circle cx="60" cy="90" r="3" className="fill-accent" />

          {/* Bottom-Left Node (Storage / DB) */}
          <circle cx="60" cy="160" r="8" className="fill-zinc-900 stroke-zinc-500" strokeWidth="1.5" />
          <circle cx="60" cy="160" r="3" className="fill-zinc-300" />

          {/* Bottom Node (Workers / Async) */}
          <circle cx="120" cy="200" r="8" className="fill-zinc-900 stroke-zinc-500" strokeWidth="1.5" />
          <circle cx="120" cy="200" r="3" className="fill-zinc-300" />

          {/* Bottom-Right Node (RAG / Knowledge Base) */}
          <circle cx="180" cy="160" r="8" className="fill-zinc-900 stroke-accent/80" strokeWidth="1.5" />
          <circle cx="180" cy="160" r="3" className="fill-accent" />

          {/* Top-Right Node (Auth / Security) */}
          <circle cx="180" cy="90" r="8" className="fill-zinc-900 stroke-zinc-500" strokeWidth="1.5" />
          <circle cx="180" cy="90" r="3" className="fill-zinc-300" />
        </g>

        {/* Ambient Data Pulse Rings */}
        <circle
          cx="120"
          cy="120"
          r="48"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="text-accent/30 animate-[spin_30s_linear_infinite_reverse]"
        />
      </svg>

      {/* Decorative corner reticle markers */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent/60" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent/60" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent/60" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent/60" />
    </div>
  );
};
