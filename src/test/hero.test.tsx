import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Hero } from "@/components/sections/hero";

describe("Hero Component (Seam 1)", () => {
  it("renders name with verified badge, status bar without 2027, and engineering tagline", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Jayaditya Dev");
    expect(screen.getByText(/Backend engineer\. AI systems\. Production-first\./i)).toBeInTheDocument();
    expect(screen.getByText(/AVAILABLE FOR FULL-TIME ROLES/i)).toBeInTheDocument();
    expect(screen.queryByText(/2027/i)).not.toBeInTheDocument();
  });

  it("renders social links, CV download, and architectural schematic Fig. 1.", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /github profile/i })).toHaveAttribute(
      "href",
      "https://github.com/jayadityadev"
    );
    expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute("href", "/resume.pdf");
    expect(screen.getByText(/Fig\. 1\./i)).toBeInTheDocument();
  });
});
