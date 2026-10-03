export interface Profile {
  name: string;
  role: string;
  tagline: string;
  status: string;
  email: string;
  location: string;
  summary: string;
  links: {
    github: string;
    linkedin: string;
    resume: string;
  };
  education: {
    degree: string;
    institution: string;
    timeline: string;
    cgpa: string;
  };
  achievements: {
    title: string;
    description: string;
    badge?: string;
  }[];
  interests: {
    icon: string;
    label: string;
  }[];
}

export const profileData: Profile = {
  name: "Jayaditya Dev",
  role: "Systems / Backend / AI Engineer",
  tagline: "Backend engineer. AI systems. Production-first.",
  status: "AVAILABLE FOR FULL-TIME ROLES",
  email: "jayadityadev10@gmail.com",
  location: "Bengaluru, Karnataka, IN",
  summary:
    "Backend-focused engineer building reliable, production-oriented, and secure backend systems, APIs, deployment workflows, and service-oriented architectures. Currently building RAG pipelines and multi-agent systems at 7HiddenLayers.",
  links: {
    github: "https://github.com/jayadityadev",
    linkedin: "https://linkedin.com/in/jayadityadev26",
    resume: "/resume.pdf",
  },
  education: {
    degree: "Bachelor of Engineering, Computer Science & Engineering",
    institution: "KS Institute of Technology, Bengaluru",
    timeline: "Expected 2027",
    cgpa: "8.88",
  },
  achievements: [
    {
      title: "TryHackMe Top 5% Globally",
      description:
        "Ranked in the Top 5% globally through Capture the Flag (CTF) challenges with a focus on web application and authentication security.",
      badge: "Cybersecurity & Web Sec",
    },
    {
      title: "Hire-4-Thon Hackathon — 2nd Place",
      description:
        "Secured Second Place at the National Level Hire-4-Thon Hackathon (2026) for QuizGenAI dynamic assessment platform.",
      badge: "National Runner-Up",
    },
    {
      title: "Academic Excellence",
      description: "Maintained a CGPA of 8.88 through Semester 6 in Computer Science & Engineering at KSIT.",
      badge: "CGPA 8.88",
    },
  ],
  interests: [
    { icon: "🎸", label: "Guitar" },
    { icon: "⚡", label: "Breaking Systems" },
    { icon: "🏓", label: "Table Tennis" },
    { icon: "🎯", label: "Valorant" },
  ],
};
