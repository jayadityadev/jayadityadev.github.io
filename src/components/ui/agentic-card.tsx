import React from "react";
import { Bot, Terminal, CheckCircle2, ArrowRight } from "lucide-react";

export const AgenticEngineeringCard: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-accent/15 border border-accent/30 text-accent">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-sans text-zinc-100 tracking-tight">
                Autonomous Agentic Engineering
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                Matt Pocock Skills · Spec-Driven Dev · TDD
              </p>
            </div>
          </div>

          <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
            Agent Loops
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
          I build systems using autonomous AI agent loops, strict domain modeling, and test-driven verification. Rather than casual prompting, engineering is driven by rigorous specifications and verified seams.
        </p>

        {/* Workflow steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-mono text-xs text-zinc-200">/to-spec</span>
              <span className="text-[11px] text-zinc-400">Issue-driven spec synthesis</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-mono text-xs text-zinc-200">/tdd</span>
              <span className="text-[11px] text-zinc-400">Red-Green-Refactor test loops</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-mono text-xs text-zinc-200">/wayfinder</span>
              <span className="text-[11px] text-zinc-400">Frontier graph navigation</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-mono text-xs text-zinc-200">/domain-modeling</span>
              <span className="text-[11px] text-zinc-400">GLOSSARY & ADR compliance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal prompt pill */}
      <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-1.5 text-accent">
          <Terminal className="w-3.5 h-3.5" />
          <span>agy exec --mode tdd</span>
        </div>
        <span className="text-[11px] text-zinc-500">Autonomous Execution</span>
      </div>
    </div>
  );
};
