import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ExperienceSection } from "@/components/sections/experience";
import { MarqueeTicker } from "@/components/ui/marquee";

describe("Experience & Ticker Components (Seam 1)", () => {
  it("renders 7HiddenLayers role, timeline, and production achievements", () => {
    render(<ExperienceSection />);

    expect(screen.getByText("7HiddenLayers")).toBeInTheDocument();
    expect(screen.getByText(/AI Backend Engineer Intern/i)).toBeInTheDocument();
    expect(screen.getByText(/June 2026 - Present/i)).toBeInTheDocument();

    expect(screen.getByText(/incremental ingestion/i)).toBeInTheDocument();
    expect(screen.getByText(/citation/i)).toBeInTheDocument();
    expect(screen.getAllByText(/multi-agent orchestration/i).length).toBeGreaterThan(0);
  });

  it("renders continuous marquee ticker with core technology tokens", () => {
    render(<MarqueeTicker />);

    expect(screen.getByTestId("marquee-ticker")).toBeInTheDocument();
    expect(screen.getAllByText(/FastAPI/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/PostgreSQL/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/PyTorch/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Docker/i).length).toBeGreaterThan(0);
  });
});
