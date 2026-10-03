export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: Experience = {
  company: "7HiddenLayers",
  role: "AI Backend Engineer Intern",
  location: "Bengaluru, IN",
  period: "June 2026 - Present",
  type: "Internship",
  summary:
    "Developing production AI infrastructure, RAG retrieval pipelines, and autonomous agent orchestration systems.",
  highlights: [
    "Designed incremental ingestion logic for a RAG-based legal document parsing system, ensuring partial document updates re-process only modified segments instead of the entire knowledge base.",
    "Built client-facing query infrastructure where small language models retrieve from a centralized knowledge base, strictly constraining responses to verified source citations to eliminate hallucinations.",
    "Constructed a multi-agent orchestration pipeline that automatically benchmarks creator posts against organizational SOPs, surfacing actionable revisions prior to approver review.",
  ],
  technologies: ["Python", "uv", "FastAPI", "RAG Systems", "SLMs", "Multi-Agent Orchestration", "Vector DBs"],
};
