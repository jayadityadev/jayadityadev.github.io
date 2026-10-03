import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { GithubContributions } from "@/components/ui/github-contributions";
import { AgenticEngineeringCard } from "@/components/ui/agentic-card";

describe("GitHub Contributions & Agentic Engineering (Seam 1 & 2)", () => {
  it("renders monochrome GitHub contribution graph with technical caption Fig. 2.", () => {
    render(<GithubContributions />);

    expect(screen.getByText(/Fig\. 2\./i)).toBeInTheDocument();
    expect(screen.getByText(/contributions/i)).toBeInTheDocument();
    expect(screen.getByText(/Less/i)).toBeInTheDocument();
    expect(screen.getByText(/More/i)).toBeInTheDocument();
  });

  it("renders autonomous agentic engineering card with Matt Pocock skills", () => {
    render(<AgenticEngineeringCard />);

    expect(screen.getByText(/Autonomous Agentic Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/to-spec/i)).toBeInTheDocument();
    expect(screen.getAllByText(/tdd/i).length).toBeGreaterThan(0);
  });
});
