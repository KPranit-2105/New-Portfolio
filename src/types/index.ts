export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  fullBio: string[];
  status: string;
  securityClearance?: string;
  frameworks: string[];
}

export type SkillCategory =
  | "Governance"
  | "Risk Management"
  | "Compliance"
  | "Cloud & IT Security"
  | "Security Frameworks"
  | "Audit & Controls"
  | "Technical & Scripting"
  | "Security Tools & GRC"
  | "Soft Skills & Business Alignment";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: "Expert" | "Advanced" | "Proficient";
  frameworkMapping?: string[];
  featured?: boolean;
}

export type ProjectCategory =
  | "All"
  | "GRC & Cybersecurity"
  | "Java Backend"
  | "AI & GenAI"
  | "Cloud & DevOps"
  | "Governance & Policy"
  | "Risk Assessment"
  | "Compliance & Audit"
  | "Cloud Security";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  summary: string;
  problemStatement: string;
  solution: string;
  toolsUsed: string[];
  responsibilities: string[];
  businessImpact: string[];
  keyLearnings: string[];
  frameworks: string[];
  githubUrl?: string;
  demoUrl?: string;
  date: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  status: "Active" | "In Progress" | "Completed";
  skillsCovered: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  type: "Full-Time" | "Contract" | "Internship";
  responsibilities: string[];
  keyAchievements: string[];
  frameworksUsed: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  graduationYear: string;
  honors?: string;
  relevantCoursework: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  inquiryType: "Hiring / Recruitment" | "GRC Consultation" | "General Security Inquiry" | "Other";
  message: string;
}
