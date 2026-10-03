import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Hero } from "@/components/sections/hero";

describe("Hero Component (Seam 1)", () => {
  it("renders name, status badge, and engineering tagline", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Jayaditya Dev");
    expect(screen.getByText(/Backend engineer\. AI systems\. Production-first\./i)).toBeInTheDocument();
    expect(screen.getByText(/AVAILABLE FOR FULL-TIME ROLES/i)).toBeInTheDocument();
  });

  it("renders CTAs and illustrated dual-theme avatar", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /view projects/i })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute("href", "/resume.pdf");
    expect(screen.getByText(/Fig\. 1\./i)).toBeInTheDocument();
  });
});
