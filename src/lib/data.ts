export const profile = {
  firstName: "Fahan",
  lastName: "Tabassum",
  fullName: "Fahan Tabassum",
  role: "Computer Science Undergrad '27",
  concentration: "Artificial Intelligence & Machine Learning",
  about:
    "I'm Fahan Tabassum, a Computer Science undergraduate with concentration in Artificial Intelligence and Machine Learning (AIML). I love building new things. I build reliable, scalable applications with a strong focus on clean backend systems.",
  email: "fahantabassum43@gmail.com",
  github: "https://github.com/tabby305",
  githubHandle: "tabby305",
  linkedin: "https://www.linkedin.com/in/fahan-tabassum-18a3662ba",
  linkedinHandle: "fahan-tabassum-18a3662ba",
} as const;

export const education = {
  line1: "Final-year Engineering Student",
  line2: "Computer Science Undergraduate '27",
  line3: "Concentration: Artificial Intelligence & Machine Learning",
} as const;

export const skillGroups: { label: string; skills: string[] }[] = [
  { label: "Languages", skills: ["Python", "JavaScript", "SQL"] },
  { label: "Web", skills: ["HTML", "CSS", "React"] },
  { label: "AI", skills: ["OpenCode"] },
  { label: "Tools", skills: ["Git", "GitHub", "VS Code", "Microsoft Office"] },
];

export type Project = {
  index: string;
  name: string;
  repo: string;
  url: string;
  description: string;
  stack: string[];
  span: "wide" | "half";
};

export const projects: Project[] = [
  {
    index: "01",
    name: "GitHub Issue Resolver",
    repo: "tabby305/GitHub-Issue-Resolver",
    url: "https://github.com/tabby305/GitHub-Issue-Resolver",
    description:
      "An agent that reads a GitHub issue and proposes a fix using classical NLP and static analysis: TF-IDF code retrieval to locate relevant files, Python AST inspection to find bug patterns, deterministic patch generation, and pytest validation — with human approval required before any file is modified. Ships with a Streamlit interface and intentionally uses no LLM.",
    stack: ["Python", "scikit-learn", "Streamlit", "pytest", "GitHub REST API"],
    span: "wide",
  },
  {
    index: "02",
    name: "Sales Analytics",
    repo: "tabby305/sales-analytics",
    url: "https://github.com/tabby305/sales-analytics",
    description:
      "End-to-end analytics on the Superstore retail dataset: pandas cleaning and exploratory analysis in a Jupyter notebook, plus an interactive Streamlit dashboard with Plotly charts, region and category filters, KPI metrics and CSV export of filtered data.",
    stack: ["Python", "pandas", "Streamlit", "Plotly", "Jupyter"],
    span: "half",
  },
  {
    index: "03",
    name: "Digital Doppelganger",
    repo: "tabby305/Digital-Doppelganger",
    url: "https://github.com/tabby305/Digital-Doppelganger",
    description:
      "Detects possible online impersonation by scoring public identity signals — username, name, bio and keywords — with weighted, explainable similarity metrics. Returns a 0–100 risk score with plain-language reasons, side-by-side profile comparison and recommended next steps.",
    stack: ["React", "FastAPI", "Python", "Tailwind CSS"],
    span: "half",
  },
];

export const experience = {
  role: "Operations Head",
  org: "E-Cell, SEACET",
  period: "June 2024 — June 2025",
  points: [
    "Spearheaded the establishment of the Entrepreneurship Cell (E-Cell) at SEACET, focusing on strategic planning and team leadership.",
    "Organized 5+ successful events, fostering a vibrant entrepreneurial community and improving student engagement.",
  ],
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
