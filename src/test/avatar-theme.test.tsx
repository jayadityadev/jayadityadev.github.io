import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { IllustratedAvatar } from "@/components/ui/illustrated-avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

describe("Illustrated Avatar & Theme Toggle", () => {
  it("renders dual-theme avatar with static light and dark mode images", () => {
    render(<IllustratedAvatar />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByAltText(/avatar in light mode/i)).toBeInTheDocument();
    expect(screen.getByAltText(/avatar in dark mode/i)).toBeInTheDocument();
  });

  it("renders theme toggle button with accessible label", () => {
    render(<ThemeToggle />);

    const button = screen.getByRole("button", { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
