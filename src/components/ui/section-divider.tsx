import React from "react";

export const SectionDivider: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="w-full flex justify-center border-y border-border h-6 sm:h-8 bg-[repeating-linear-gradient(315deg,var(--border-subtle)_0,var(--border-subtle)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]"
    >
      <div className="max-w-4xl w-full border-x border-border h-full" />
    </div>
  );
};
