"use client";

import React from "react";
import Image from "next/image";

interface IllustratedAvatarProps {
  className?: string;
  style?: React.CSSProperties;
}

export const IllustratedAvatar: React.FC<IllustratedAvatarProps> = ({
  className = "",
  style,
}) => {
  return (
    <figure
      style={style}
      className={`flex flex-col items-center gap-3 select-none ${className}`}
    >
      <div className="relative group">
        {/* Ambient background glow */}
        <div className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />

        {/* Circular portrait frame */}
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border border-zinc-700/60 dark:border-zinc-800 shadow-2xl bg-zinc-950">
          {/* Light Mode: Pencil/Ink Sketch */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar-sketch.jpg"
            alt="Avatar sketch in light mode"
            className="block dark:hidden w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dark Mode: Cyberpunk / Anime Digital Art */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar-dark.jpg"
            alt="Avatar dark in dark mode"
            className="hidden dark:block w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Inset hairline ring */}
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 dark:ring-white/10" />
        </div>

        {/* Technical HUD reticle brackets */}
        <span className="pointer-events-none absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-accent/70" />
        <span className="pointer-events-none absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-accent/70" />
        <span className="pointer-events-none absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-accent/70" />
        <span className="pointer-events-none absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-accent/70" />
      </div>

      {/* Technical Caption Fig. 1. */}
      <figcaption className="text-center font-mono text-xs text-zinc-500 tracking-wider">
        <span className="text-accent font-semibold">Fig. 1.</span> Jayaditya Dev — Systems Engineer
      </figcaption>
    </figure>
  );
};
