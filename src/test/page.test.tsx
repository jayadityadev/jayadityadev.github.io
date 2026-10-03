import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import HomePage from "@/app/page";

describe("Root Page Assembly & Footer (Seam 1)", () => {
  it("renders complete single-page portfolio layout with all major sections", () => {
    render(<HomePage />);

    // Navbar & Hero
    expect(screen.getAllByText(/jayaditya\.dev/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Jayaditya Dev");

    // Marquee
    expect(screen.getByTestId("marquee-ticker")).toBeInTheDocument();

    // Experience
    expect(screen.getByText("7HiddenLayers")).toBeInTheDocument();

    // Projects Bento
    expect(screen.getByText("Guardian AI")).toBeInTheDocument();
    expect(screen.getByText("Brain Tumor Classification System")).toBeInTheDocument();

    // Credentials
    expect(screen.getByText(/TryHackMe Top 5% Globally/i)).toBeInTheDocument();

    // Terminal Footer
    expect(screen.getAllByText(/jayadityadev10@gmail\.com/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Bengaluru, Karnataka, IN/i)).toBeInTheDocument();
    expect(screen.getByText(/curl -X POST/i)).toBeInTheDocument();
  });
});
