export interface CaseStudy {
  overview: string;
  problem: string;
  objectives: string[];
  solution: string;
  myContribution: string[];
  technicalArchitecture: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    aiServices?: string[];
    mediaAndServices?: string[];
    deployment?: string[];
  };
  implementation: {
    phase: string;
    description: string;
  }[];
  challenges: {
    challenge: string;
    resolution: string;
  }[];
  results?: string[];
  screenshots: {
    title: string;
    caption: string;
    placeholderLabel?: string;
    url?: string;
  }[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  isFeatured?: boolean;
  status: "In Active Development" | "Shipped Production Platform" | "Production Web Application";
  date?: string;
  cardVariant: "mint" | "lavender" | "peach" | "white" | "cream" | "mustard" | "black" | "paper" | "secondary";
  radius: "28" | "32";
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: CaseStudy;
}
