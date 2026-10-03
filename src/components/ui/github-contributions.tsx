"use client";

import React, { useState } from "react";
import { GitCommit, Github } from "lucide-react";

export const GithubContributions: React.FC = () => {
  const [activeCell, setActiveCell] = useState<{
    date: string;
    count: number;
  } | null>(null);

  // Generate 52 weeks of realistic contribution data (seeded deterministic pattern)
  const weeks = 52;
  const daysPerWeek = 7;
  const totalWeeks = Array.from({ length: weeks }, (_, wIndex) => {
    return Array.from({ length: daysPerWeek }, (_, dIndex) => {
      // Deterministic pseudo-random contribution intensity
      const seed = Math.sin(wIndex * 7 + dIndex + 42) * 10000;
      const pseudo = seed - Math.floor(seed);
      let level = 0;
      let count = 0;
      if (pseudo > 0.85) {
        level = 4;
        count = Math.floor(pseudo * 12) + 6;
      } else if (pseudo > 0.65) {
        level = 3;
        count = Math.floor(pseudo * 8) + 3;
      } else if (pseudo > 0.4) {
        level = 2;
        count = Math.floor(pseudo * 5) + 2;
      } else if (pseudo > 0.2) {
        level = 1;
        count = 1;
      }

      return {
        level,
        count,
        date: `Week ${wIndex + 1}, Day ${dIndex + 1}`,
      };
    });
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 4:
        return "bg-zinc-950 dark:bg-zinc-100";
      case 3:
        return "bg-zinc-700 dark:bg-zinc-300";
      case 2:
        return "bg-zinc-400 dark:bg-zinc-500";
      case 1:
        return "bg-zinc-200 dark:bg-zinc-800";
      case 0:
      default:
        return "bg-zinc-100 dark:bg-zinc-900/60";
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Header Info */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <GitCommit className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
          <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            1,480+ contributions
          </span>
          <span className="text-zinc-500 font-mono text-xs hidden sm:inline">
            (last year)
          </span>
        </div>

        <a
          href="https://github.com/jayadityadev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1 transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>@jayadityadev</span>
        </a>
      </div>

      {/* Monochrome Heatmap Horizontal Scroll Container */}
      <div className="relative overflow-x-auto pb-2 pt-1 no-scrollbar">
        <div className="flex gap-[3px] min-w-max">
          {totalWeeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-[3px]">
              {week.map((day, dIdx) => (
                <div
                  key={dIdx}
                  onMouseEnter={() =>
                    setActiveCell({ date: day.date, count: day.count })
                  }
                  onMouseLeave={() => setActiveCell(null)}
                  className={`w-[10px] h-[10px] rounded-[2px] transition-colors cursor-pointer border border-border/20 ${getCellColor(
                    day.level
                  )} hover:ring-1 hover:ring-zinc-400`}
                  title={`${day.count} contribution(s)`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer & Legend */}
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1">
        <figcaption>
          <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Fig. 2.</span> Monochrome Contribution Graph
        </figcaption>

        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-100 dark:bg-zinc-900/60 border border-border/20" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-200 dark:bg-zinc-800 border border-border/20" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-400 dark:bg-zinc-500 border border-border/20" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-700 dark:bg-zinc-300 border border-border/20" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-950 dark:bg-zinc-100 border border-border/20" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};
