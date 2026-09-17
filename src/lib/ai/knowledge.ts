import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { experienceData } from "@/data/experience";
import { certificationsData } from "@/data/certifications";
import { educationData, achievementsData } from "@/data/education";
import { Project, Experience, Certification, Skill } from "@/types";

export interface KnowledgeItem {
  id: string;
  category: "profile" | "project" | "skill" | "experience" | "certification" | "education" | "achievement";
  title: string;
  summary: string;
  details: string;
  keywords: string[];
  link?: string;
  githubUrl?: string;
  metadata?: Record<string, any>;
}

/**
 * Builds a structured, searchable knowledge index directly from the portfolio data source of truth.
 * This guarantees 100% synchronization whenever any data files are updated.
 */
export function getPortfolioKnowledge(): KnowledgeItem[] {
  const items: KnowledgeItem[] = [];

  // 1. Profile Knowledge
  items.push({
    id: "profile-main",
    category: "profile",
    title: `Profile: ${profileData.name}`,
    summary: `${profileData.title} based in ${profileData.location}. ${profileData.summary}`,
    details: [
      `Name: ${profileData.name}`,
      `Title: ${profileData.title}`,
      `Subtitle: ${profileData.subtitle}`,
      `Location: ${profileData.location}`,
      `Email: ${profileData.email}`,
      `LinkedIn: ${profileData.linkedin}`,
      `GitHub: ${profileData.github}`,
      `Status: ${profileData.status}`,
      `Full Bio: ${profileData.fullBio.join(" ")}`,
      `Core Frameworks & Standards: ${profileData.frameworks.join(", ")}`,
    ].join("\n"),
    keywords: [
      "pranit", "profile", "bio", "summary", "about", "contact", "email", "linkedin",
      "github", "location", "status", "who is", "background", "experience level"
    ],
    link: "#about",
  });

  // 2. Experience Knowledge
  experienceData.forEach((exp: Experience) => {
    items.push({
      id: `exp-${exp.id}`,
      category: "experience",
      title: `Experience: ${exp.role} at ${exp.company}`,
      summary: `${exp.role} at ${exp.company} (${exp.location}) from ${exp.startDate} to ${exp.endDate} (${exp.type}).`,
      details: [
        `Role: ${exp.role}`,
        `Company: ${exp.company}`,
        `Location: ${exp.location}`,
        `Duration: ${exp.startDate} - ${exp.endDate}`,
        `Type: ${exp.type}`,
        `Responsibilities:\n- ${exp.responsibilities.join("\n- ")}`,
        `Key Achievements:\n- ${exp.keyAchievements.join("\n- ")}`,
        `Technologies & Frameworks: ${exp.frameworksUsed.join(", ")}`,
      ].join("\n"),
      keywords: [
        "experience", "job", "work", "company", exp.company.toLowerCase(),
        exp.role.toLowerCase(), exp.type.toLowerCase(), "hcltech", "internship",
        "responsibilities", "employment"
      ],
      link: "#experience",
      metadata: { company: exp.company, role: exp.role },
    });
  });

  // 3. Projects Knowledge
  projectsData.forEach((proj: Project) => {
    items.push({
      id: `proj-${proj.id}`,
      category: "project",
      title: `Project: ${proj.title}`,
      summary: `${proj.subtitle}. Category: ${proj.category}. ${proj.summary}`,
      details: [
        `Project Name: ${proj.title}`,
        `Subtitle: ${proj.subtitle}`,
        `Category: ${proj.category}`,
        `Summary: ${proj.summary}`,
        `Problem Statement: ${proj.problemStatement}`,
        `Implemented Solution: ${proj.solution}`,
        `Tools & Tech Stack: ${proj.toolsUsed.join(", ")}`,
        `Key Responsibilities:\n- ${proj.responsibilities.join("\n- ")}`,
        `Business Impact & Outcomes:\n- ${proj.businessImpact.join("\n- ")}`,
        `Key Learnings:\n- ${proj.keyLearnings.join("\n- ")}`,
        `Associated Frameworks: ${proj.frameworks.join(", ")}`,
        `Date: ${proj.date}`,
        proj.githubUrl ? `GitHub Repository: ${proj.githubUrl}` : "",
      ].filter(Boolean).join("\n"),
      keywords: [
        "project", proj.title.toLowerCase(), proj.subtitle.toLowerCase(),
        proj.category.toLowerCase(), ...proj.toolsUsed.map(t => t.toLowerCase()),
        ...proj.frameworks.map(f => f.toLowerCase()),
      ],
      link: "#projects",
      githubUrl: proj.githubUrl,
      metadata: { category: proj.category, tools: proj.toolsUsed },
    });
  });

  // 4. Skills Knowledge
  const skillsByCategory = skillsData.reduce((acc, skill: Skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(`${skill.name} (${skill.level}${skill.frameworkMapping ? ` - ${skill.frameworkMapping.join(", ")}` : ""})`);
    return acc;
  }, {} as Record<string, string[]>);

  Object.entries(skillsByCategory).forEach(([category, skillList]) => {
    items.push({
      id: `skills-${category.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
      category: "skill",
      title: `Skills Category: ${category}`,
      summary: `Verified skills in ${category}: ${skillList.join(", ")}`,
      details: `Domain: ${category}\nProficiencies:\n- ${skillList.join("\n- ")}`,
      keywords: [
        "skill", "skills", category.toLowerCase(), ...skillList.map(s => s.toLowerCase()),
        "proficiency", "competency", "tools", "stack"
      ],
      link: "#skills",
    });
  });

  // 5. Certifications Knowledge
  certificationsData.forEach((cert: Certification) => {
    items.push({
      id: `cert-${cert.id}`,
      category: "certification",
      title: `Certification: ${cert.title}`,
      summary: `Issued by ${cert.issuer} (${cert.issueDate}). Status: ${cert.status}.`,
      details: [
        `Certification Title: ${cert.title}`,
        `Issuer: ${cert.issuer}`,
        `Issue Date: ${cert.issueDate}`,
        cert.expiryDate ? `Expiry Date: ${cert.expiryDate}` : "",
        cert.credentialId ? `Credential ID: ${cert.credentialId}` : "",
        cert.verifyUrl ? `Verification Link: ${cert.verifyUrl}` : "",
        `Status: ${cert.status}`,
        `Skills & Domains Covered: ${cert.skillsCovered.join(", ")}`,
      ].filter(Boolean).join("\n"),
      keywords: [
        "certification", "certificate", "cert", cert.title.toLowerCase(),
        cert.issuer.toLowerCase(), "credential", "verify", "exam"
      ],
      link: "#certifications",
      metadata: { verifyUrl: cert.verifyUrl, credentialId: cert.credentialId },
    });
  });

  // 6. Education & Academic Knowledge
  educationData.forEach((edu) => {
    items.push({
      id: `edu-${edu.id}`,
      category: "education",
      title: `Education: ${edu.degree} in ${edu.field}`,
      summary: `${edu.degree} from ${edu.institution}, graduated ${edu.graduationYear}. Honors: ${edu.honors || "N/A"}.`,
      details: [
        `Degree: ${edu.degree}`,
        `Field of Study: ${edu.field}`,
        `Institution: ${edu.institution}`,
        `Location: ${edu.location}`,
        `Graduation Year: ${edu.graduationYear}`,
        edu.honors ? `Honors / CGPA: ${edu.honors}` : "",
        `Relevant Coursework: ${edu.relevantCoursework.join(", ")}`,
      ].filter(Boolean).join("\n"),
      keywords: [
        "education", "degree", "college", "university", "bachelor", "engineering",
        "sppu", "jscoe", "cgpa", "grades", "gpa", "coursework"
      ],
      link: "#education",
    });
  });

  // 7. Achievements Knowledge
  achievementsData.forEach((ach) => {
    items.push({
      id: `achieve-${ach.id}`,
      category: "achievement",
      title: `Achievement: ${ach.title}`,
      summary: `${ach.title} by ${ach.organization} (${ach.date}). Category: ${ach.category}.`,
      details: [
        `Achievement: ${ach.title}`,
        `Organization: ${ach.organization}`,
        `Date: ${ach.date}`,
        `Category: ${ach.category}`,
        `Description: ${ach.description}`,
      ].join("\n"),
      keywords: [
        "achievement", "award", "recognition", "hackathon", "winner",
        ach.title.toLowerCase(), ach.category.toLowerCase()
      ],
      link: "#education",
    });
  });

  return items;
}
