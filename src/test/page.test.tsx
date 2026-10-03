import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import HomePage from "@/app/page";

describe("Root Page Assembly & Footer (Seam 1)", () => {
  it("renders complete single-page portfolio layout with all major sections and new features", () => {
    render(<HomePage />);

    // Navbar & Hero
    expect(screen.getAllByText(/jayadityadev\.tech/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Jayaditya Dev");

    // Avatar Fig. 1.
    expect(screen.getByText(/Fig\. 1\./i)).toBeInTheDocument();

    // Marquee
    expect(screen.getByTestId("marquee-ticker")).toBeInTheDocument();

    // Experience
    expect(screen.getAllByText("7HiddenLayers").length).toBeGreaterThan(0);

    // Projects Bento (All 4 projects + GitHub graph)
    expect(screen.getByText("Guardian AI")).toBeInTheDocument();
    expect(screen.getByText("Brain Tumor Classification System")).toBeInTheDocument();
    expect(screen.getByText("QuizGenAI")).toBeInTheDocument();
    expect(screen.getByText("QuantNiti")).toBeInTheDocument();
    expect(screen.getByText(/Fig\. 2\./i)).toBeInTheDocument();
    expect(screen.queryByText(/Autonomous Agentic Engineering/i)).not.toBeInTheDocument();

    // Credentials
    expect(screen.getByText(/TryHackMe Top 5% Globally/i)).toBeInTheDocument();

    // Terminal Footer
    expect(screen.getAllByText(/jayadityadev10@gmail\.com/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Bengaluru, Karnataka, IN/i)).toBeInTheDocument();
    expect(screen.getByText(/curl -sL .*api\/contact\.json/i)).toBeInTheDocument();
  });
});
