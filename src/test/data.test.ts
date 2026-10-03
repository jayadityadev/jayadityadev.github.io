import { describe, it, expect } from "vitest";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";

describe("Data Contract Seam", () => {
  it("profileData has valid candidate identity and links", () => {
    expect(profileData.name).toBe("Jayaditya Dev");
    expect(profileData.status).toBe("AVAILABLE FOR FULL-TIME ROLES");
    expect(profileData.status).not.toContain("2027");
    expect(profileData.email).toBe("jayadityadev10@gmail.com");
    expect(profileData.links.github).toBe("https://github.com/jayadityadev");
    expect(profileData.links.linkedin).toBe("https://linkedin.com/in/jayadityadev26");
    expect(profileData.links.resume).toBe("/resume.pdf");
    expect(profileData.education.institution).toContain("KS Institute of Technology");
    expect(profileData.education.cgpa).toBe("8.88");
  });

  it("projectsData contains the four flagship projects with required properties", () => {
    expect(projectsData).toHaveLength(4);
    const titles = projectsData.map((p) => p.title);
    expect(titles).toContain("Guardian AI");
    expect(titles).toContain("Brain Tumor Classification System");
    expect(titles).toContain("QuizGenAI");
    expect(titles).toContain("QuantNiti");

    // Guardian AI checks
    const guardian = projectsData.find((p) => p.title === "Guardian AI");
    expect(guardian).toBeDefined();
    expect(guardian?.tags).toContain("FastAPI");
    expect(guardian?.tags).toContain("WebSockets");
    expect(guardian?.githubUrl).toContain("github.com/jayadityadev/Guardian-AI");

    // Brain Tumor checks
    const brainTumor = projectsData.find((p) => p.title === "Brain Tumor Classification System");
    expect(brainTumor).toBeDefined();
    expect(brainTumor?.metric).toBe("99.21% Accuracy");
    expect(brainTumor?.githubUrl).toContain("github.com/jayadityadev/BrainTumorClassification");

    // QuizGenAI checks
    const quizGen = projectsData.find((p) => p.title === "QuizGenAI");
    expect(quizGen).toBeDefined();
    expect(quizGen?.metric).toContain("2nd Place");

    // QuantNiti checks
    const quant = projectsData.find((p) => p.title === "QuantNiti");
    expect(quant).toBeDefined();
    expect(quant?.githubUrl).toContain("github.com/jayadityadev/QuantNiti");
  });

  it("experienceData contains 7HiddenLayers internship with production achievements", () => {
    expect(experienceData.company).toBe("7HiddenLayers");
    expect(experienceData.role).toBe("AI Backend Engineer Intern");
    expect(experienceData.period).toBe("June 2026 - Present");
    expect(experienceData.highlights.length).toBeGreaterThanOrEqual(3);
    const text = experienceData.highlights.join(" ");
    expect(text).toContain("RAG");
    expect(text).toContain("ingestion");
    expect(text).toContain("citation");
  });
});
