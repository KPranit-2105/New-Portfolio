import { Skill } from "@/types";

export const skillsData: Skill[] = [

  // Governance

  { id: "gov-1", name: "Security Policy & Procedure Development", category: "Governance", level: "Proficient", frameworkMapping: ["ISO 27001:2022", "NIST CSF 2.0"], featured: true },

  { id: "gov-2", name: "Information Security Management System (ISMS)", category: "Governance", level: "Proficient", frameworkMapping: ["ISO 27001:2022"], featured: true },

  { id: "gov-3", name: "Security Governance & Risk Alignment", category: "Governance", level: "Proficient", frameworkMapping: ["NIST CSF 2.0"], featured: true },

  { id: "gov-4", name: "Security Awareness & Training Fundamentals", category: "Governance", level: "Proficient", frameworkMapping: ["CIS Controls v8"] },

  // Risk Management

  { id: "risk-1", name: "IT Risk Assessment & Risk Matrix Analysis", category: "Risk Management", level: "Advanced", frameworkMapping: ["NIST SP 800-30", "ISO 27005"], featured: true },

  { id: "risk-2", name: "Third-Party Risk Management (TPRM)", category: "Risk Management", level: "Advanced", frameworkMapping: ["NIST SP 800-161"], featured: true },

  { id: "risk-3", name: "Risk Register & Risk Treatment Tracking", category: "Risk Management", level: "Advanced", frameworkMapping: ["ISO 27005"], featured: true },

  { id: "risk-4", name: "Business Continuity & Disaster Recovery (BCP/DR)", category: "Risk Management", level: "Proficient", frameworkMapping: ["ISO 22301"] },

  // Compliance

  { id: "comp-1", name: "SOC 2 Control Mapping & Readiness", category: "Compliance", level: "Advanced", frameworkMapping: ["AICPA Trust Services Criteria"], featured: true },

  { id: "comp-2", name: "ISO/IEC 27001 Gap Assessment & Control Mapping", category: "Compliance", level: "Advanced", frameworkMapping: ["ISO 27001:2022"], featured: true },

  { id: "comp-3", name: "PCI DSS v4.0 Compliance Assessment", category: "Compliance", level: "Proficient", frameworkMapping: ["PCI DSS v4.0"], featured: true },

  { id: "comp-4", name: "HIPAA & GDPR Compliance Fundamentals", category: "Compliance", level: "Proficient", frameworkMapping: ["HIPAA Security Rule", "GDPR"] },

  // Cloud & IT Security

  { id: "cloud-1", name: "AWS Security & Compliance Posture", category: "Cloud & IT Security", level: "Advanced", frameworkMapping: ["CIS AWS Foundations Benchmark"] },

  { id: "cloud-2", name: "Cloud Security & Compliance Fundamentals", category: "Cloud & IT Security", level: "Proficient", frameworkMapping: ["Microsoft Cloud Security Benchmark"] },

  { id: "cloud-3", name: "Identity & Access Management (IAM) Governance", category: "Cloud & IT Security", level: "Advanced", frameworkMapping: ["NIST SP 800-63B"], featured: true },

  { id: "cloud-4", name: "Security Monitoring & Compliance Concepts", category: "Cloud & IT Security", level: "Proficient", frameworkMapping: ["CIS Controls v8"] },

  // Audit & Controls

  { id: "audit-1", name: "Internal Control Assessment & Testing", category: "Audit & Controls", level: "Advanced", frameworkMapping: ["NIST SP 800-53A"], featured: true },

  { id: "audit-2", name: "Audit Evidence Collection & Documentation", category: "Audit & Controls", level: "Advanced", frameworkMapping: ["AICPA Trust Services Criteria"], featured: true },

  { id: "audit-3", name: "Findings, Exceptions & Remediation Tracking", category: "Audit & Controls", level: "Advanced", frameworkMapping: ["ISO 27001:2022"] },

  // Technical & Scripting

  { id: "tech-1", name: "Python for GRC Automation & Data Processing", category: "Technical & Scripting", level: "Proficient" },

  { id: "tech-2", name: "PowerShell & Windows Security Fundamentals", category: "Technical & Scripting", level: "Proficient" },

  { id: "tech-3", name: "SQL & Data Analytics for Compliance Reporting", category: "Technical & Scripting", level: "Advanced" },

  // Security Tools & GRC

  { id: "tools-1", name: "ServiceNow GRC / IRM Fundamentals", category: "Security Tools & GRC", level: "Proficient", featured: true },

  { id: "tools-2", name: "Jira / Confluence Risk & Compliance Workflows", category: "Security Tools & GRC", level: "Advanced" },

  { id: "tools-3", name: "Microsoft Defender for Cloud & Sentinel Fundamentals", category: "Security Tools & GRC", level: "Proficient" },

  { id: "tools-4", name: "Splunk SIEM Fundamentals & Security Log Review", category: "Security Tools & GRC", level: "Proficient" },

  { id: "tools-5", name: "GRC Platform & Compliance Workflow Fundamentals", category: "Security Tools & GRC", level: "Proficient" },

  // Soft Skills & Business Alignment

  { id: "soft-1", name: "Technical-to-Business Risk Communication", category: "Soft Skills & Business Alignment", level: "Advanced", featured: true },

  { id: "soft-2", name: "Cross-Functional Stakeholder Communication", category: "Soft Skills & Business Alignment", level: "Advanced" },

  { id: "soft-3", name: "Technical Policy Writing & Security Documentation", category: "Soft Skills & Business Alignment", level: "Advanced" },

];