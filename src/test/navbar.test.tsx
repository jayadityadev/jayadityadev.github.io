import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Navbar } from "@/components/sections/navbar";

describe("Navbar Component (Seam 1 & 2)", () => {
  it("renders brand prompt and section navigation links", () => {
    render(<Navbar />);

    expect(screen.getByText(/jayaditya\.dev/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /experience/i })).toHaveAttribute("href", "#experience");
    expect(screen.getByRole("link", { name: /projects/i })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /credentials/i })).toHaveAttribute("href", "#credentials");
  });

  it("provides links for resume download and social profiles", () => {
    render(<Navbar />);

    const resumeLink = screen.getByRole("link", { name: /resume/i });
    expect(resumeLink).toHaveAttribute("href", "/resume.pdf");

    const githubLinks = screen.getAllByRole("link").filter(
      (a) => a.getAttribute("href") === "https://github.com/jayadityadev"
    );
    expect(githubLinks.length).toBeGreaterThan(0);
  });
});
