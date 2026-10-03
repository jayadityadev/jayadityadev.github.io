import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { AntigravityParticles } from "@/components/ui/antigravity-particles";

describe("Antigravity Particles Canvas (Hero Interaction)", () => {
  it("renders canvas element with interactive accessibility", () => {
    const { container } = render(<AntigravityParticles />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass("pointer-events-none");
  });
});
