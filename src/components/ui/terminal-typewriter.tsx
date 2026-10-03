"use client";

import React, { useEffect, useState } from "react";

const COMMANDS = [
  "uvx graphify",
  "uv add fastapi uvicorn",
  "uv run python main.py",
  "uv init --app backend",
  "uvx ruff check --fix",
  "uv pip compile pyproject.toml",
];

export const TerminalTypewriter: React.FC = () => {
  const [commandIndex, setCommandIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking block cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing and erasing state machine
  useEffect(() => {
    const currentFullCommand = COMMANDS[commandIndex];

    if (!isDeleting) {
      if (displayText.length < currentFullCommand.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentFullCommand.slice(0, displayText.length + 1));
        }, 65);
        return () => clearTimeout(timeout);
      } else {
        // Full command typed; pause before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1900);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentFullCommand.slice(0, displayText.length - 1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        // Fully erased; advance to next command
        setIsDeleting(false);
        setCommandIndex((prev) => (prev + 1) % COMMANDS.length);
      }
    }
  }, [displayText, isDeleting, commandIndex]);

  return (
    <div className="flex items-center font-mono text-xs text-zinc-800 dark:text-zinc-200 min-w-0 select-none">
      <span className="text-zinc-500 mr-1.5 hidden sm:inline">~/portfolio</span>
      <span className="text-emerald-500 font-bold mr-1.5">❯</span>
      <span className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">
        {displayText}
      </span>
      {/* Thick block cursor with blink */}
      <span
        className={`inline-block w-[7px] h-[14px] bg-zinc-900 dark:bg-zinc-100 ml-1 translate-y-[2px] transition-opacity duration-75 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </div>
  );
};
