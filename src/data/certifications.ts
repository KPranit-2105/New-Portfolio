import { Certification } from "@/types";

export const certificationsData: Certification[] = [
  {
    id: "cert-google-pm",
    title: "Google Project Management Professional Certificate",
    issuer: "Google (via Coursera)",
    issueDate: "Dec 2024",
    verifyUrl: "https://coursera.org/verify/professional-cert/BCBMSOGSIQQ5",
    status: "Active",
    skillsCovered: [
      "Foundations of Project Management",
      "Project Initiation & Planning",
      "Project Execution & Risk Management",
      "Agile Project Management",
      "Stakeholder Coordination & Capstone",
    ],
  },
  {
    id: "cert-google-cybersecurity",
    title: "Foundations of Cybersecurity",
    issuer: "Google (via Coursera)",
    issueDate: "Jun 2024",
    verifyUrl: "https://coursera.org/verify/SVYDFPBD7PHH",
    status: "Active",
    skillsCovered: [
      "Information Security Fundamentals",
      "Threat Analysis & Vulnerability Assessment",
      "Security Risk Management",
      "Ethical Standards & Compliance",
    ],
  },
  {
    id: "cert-oracle-agentic-ai",
    title: "Oracle Certified Foundations Associate (Agentic AI)",
    issuer: "Oracle University",
    issueDate: "Jul 2026",
    expiryDate: "Jul 2028",
    credentialId: "330048172AAI26OFA",
    status: "Active",
    skillsCovered: [
      "Agentic AI Architecture",
      "Foundations of Artificial Intelligence",
      "Oracle AI Cloud Infrastructure Services",
      "Autonomous Decision Workflows",
    ],
  },
  {
    id: "cert-google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google (via Coursera)",
    issueDate: "Jun 2024",
    verifyUrl: "https://coursera.org/verify/H8YARYGY5A6E",
    status: "Active",
    skillsCovered: [
      "Generative AI Principles",
      "Prompt Engineering Techniques",
      "AI Productivity & Workflow Automation",
      "Responsible AI Practices",
    ],
  },
];
