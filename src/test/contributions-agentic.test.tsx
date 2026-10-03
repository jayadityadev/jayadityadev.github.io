import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { GithubContributions } from "@/components/ui/github-contributions";

describe("GitHub Contributions Component (Seam 1)", () => {
  it("renders monochrome GitHub contribution graph with technical caption Fig. 2.", () => {
    render(<GithubContributions />);

    expect(screen.getByText(/Fig\. 2\./i)).toBeInTheDocument();
    expect(screen.getByText(/contributions/i)).toBeInTheDocument();
    expect(screen.getByText(/Less/i)).toBeInTheDocument();
    expect(screen.getByText(/More/i)).toBeInTheDocument();
  });
});
