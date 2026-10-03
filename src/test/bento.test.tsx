import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ProjectsBento } from "@/components/sections/projects-bento";
import { CredentialsSection } from "@/components/sections/credentials";

describe("Projects Bento & Credentials Components (Seam 1 & 2)", () => {
  it("renders 4 project cards with technical tags and GitHub links", () => {
    render(<ProjectsBento />);

    expect(screen.getByText("Guardian AI")).toBeInTheDocument();
    expect(screen.getByText("Brain Tumor Classification System")).toBeInTheDocument();
    expect(screen.getByText("QuizGenAI")).toBeInTheDocument();
    expect(screen.getByText("QuantNiti")).toBeInTheDocument();

    expect(screen.getByText(/99\.21% Accuracy/i)).toBeInTheDocument();
    expect(screen.getByText(/2nd Place/i)).toBeInTheDocument();

    const guardianLink = screen.getByRole("link", { name: /guardian ai repository/i });
    expect(guardianLink).toHaveAttribute("href", "https://github.com/jayadityadev/Guardian-AI");

    const brainTumorLink = screen.getByRole("link", { name: /brain tumor classification system repository/i });
    expect(brainTumorLink).toHaveAttribute("href", "https://github.com/jayadityadev/BrainTumorClassification");
  });

  it("renders credentials, CTF security rankings, and academic standing", () => {
    render(<CredentialsSection />);

    expect(screen.getByText(/TryHackMe Top 5% Globally/i)).toBeInTheDocument();
    expect(screen.getByText(/Hire-4-Thon Hackathon — 2nd Place/i)).toBeInTheDocument();
    expect(screen.getAllByText(/8\.88/i).length).toBeGreaterThan(0);
  });
});
