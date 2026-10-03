import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { TimelineSection } from "@/components/sections/timeline";

describe("Timeline Section (Seam 1)", () => {
  it("renders chronological trajectory milestones with continuous connecting line", () => {
    render(<TimelineSection />);

    expect(screen.getByText(/Engineering Trajectory/i)).toBeInTheDocument();
    expect(screen.getAllByText(/7HiddenLayers/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Hire-4-Thon/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/TryHackMe/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/KS Institute of Technology/i).length).toBeGreaterThan(0);

    // Ongoing beacon
    expect(screen.getByText(/Ongoing/i)).toBeInTheDocument();
  });
});
