import React from "react";

const TECH_TOKENS = [
  "Python (uv)",
  "FastAPI",
  "PostgreSQL",
  "PyTorch",
  "RAG Systems",
  "WebSockets",
  "Docker",
  "AWS Lambda",
  "SQLAlchemy",
  "Multi-Agent",
  "Computer Networks",
  "Linux",
  "Vector DBs",
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div
      data-testid="marquee-ticker"
      className="relative w-full overflow-hidden border-y border-border bg-surface/50 py-3 select-none"
    >
      {/* Side edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee-x gap-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        {[...TECH_TOKENS, ...TECH_TOKENS].map((tech, idx) => (
          <span key={idx} className="flex items-center gap-6 whitespace-nowrap">
            <span className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">{tech}</span>
            <span className="text-zinc-400 dark:text-zinc-600">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};
