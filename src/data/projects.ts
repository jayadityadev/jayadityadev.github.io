export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architectureHighlights: string[];
  tags: string[];
  metric?: string;
  githubUrl: string;
  featured: boolean;
  bentoSize: "large" | "medium" | "small";
}

export const projectsData: Project[] = [
  {
    id: "guardian-ai",
    title: "Guardian AI",
    subtitle: "Real-Time Threat Assessment & Grooming Pattern Detection",
    description:
      "Modular, asynchronous threat detection platform coordinating transformer classification, speech-to-text, and LLM analysis with real-time alerting.",
    architectureHighlights: [
      "Asynchronous service-oriented backend on FastAPI, PostgreSQL, and WebSockets",
      "Coordinated ML inference pipelines with background task workers for low-latency alerts",
      "Speech-to-text integration with transformer-based multi-modal pattern detection",
    ],
    tags: ["FastAPI", "PostgreSQL", "WebSockets", "PyTorch", "React", "ML Pipelines"],
    metric: "Real-time Async ML",
    githubUrl: "https://github.com/jayadityadev/Guardian-AI",
    featured: true,
    bentoSize: "large",
  },
  {
    id: "brain-tumor",
    title: "Brain Tumor Classification System",
    subtitle: "Deep-Learning CE-MRI Classifier with Grad-CAM Localization",
    description:
      "End-to-end medical computer vision pipeline with OpenCV preprocessing (denoising, CLAHE) and explainable diagnostic overlays.",
    architectureHighlights: [
      "Peak test accuracy of 99.21% across 1,519 CE-MRI evaluation images",
      "DenseNet121 & ResNet50 architectures maintaining low latency of ~51ms per slice",
      "Grad-CAM visual localization delivering explainable heatmaps via a Flask interface",
    ],
    tags: ["Python", "TensorFlow/Keras", "OpenCV", "Flask", "Docker", "Grad-CAM"],
    metric: "99.21% Accuracy",
    githubUrl: "https://github.com/jayadityadev/BrainTumorClassification",
    featured: true,
    bentoSize: "medium",
  },
  {
    id: "quiz-gen-ai",
    title: "QuizGenAI",
    subtitle: "AI-Powered Dynamic Assessment Platform — 2nd Prize Winner",
    description:
      "Modular backend services for dynamic quiz generation, answer evaluation, and real-time leaderboards with strict API contracts.",
    architectureHighlights: [
      "Structured FastAPI service architecture with PostgreSQL, SQLAlchemy, and token authentication",
      "Isolated LLM services behind an abstraction layer for predictable structured outputs",
      "Awarded 2nd Prize at the National Level Hire-4-Thon Hackathon (2026)",
    ],
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "React", "LLM Layer", "JWT Auth"],
    metric: "🥈 2nd Place Hackathon",
    githubUrl: "https://github.com/jayadityadev/QuizGenAI",
    featured: true,
    bentoSize: "medium",
  },
  {
    id: "quant-niti",
    title: "QuantNiti",
    subtitle: "Regime-Adaptive Quantitative Intelligence & Decision Support",
    description:
      "Automated pipeline for regime-adaptive financial data modeling, time-series indicators, and systematic decision support.",
    architectureHighlights: [
      "Automated data ingestion and preprocessing workflows for multi-asset market regimes",
      "Signal generation and decision-support algorithms with statistical validation",
      "Modular Python design utilizing uv for reproducible dependency environments",
    ],
    tags: ["Python", "uv", "Quantitative", "Time-Series", "Systems Design"],
    metric: "Regime-Adaptive",
    githubUrl: "https://github.com/jayadityadev/QuantNiti",
    featured: false,
    bentoSize: "small",
  },
];
