"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ShieldCheck, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is Pranit's core technical background and specialization?",
    answer:
      "Pranit is a Java Backend Developer with professional experience at HCLTech building scalable enterprise services using Java 17/21, Spring Boot 3, RESTful APIs, Spring Data JPA, Hibernate, PostgreSQL, and AWS. He bridges strong backend engineering depth with hands-on Information Security, GRC (Governance, Risk & Compliance), and Generative AI integrations.",
    category: "Background & Profile",
  },
  {
    question: "Why is he transitioning from Java Backend Engineering into GRC Cybersecurity?",
    answer:
      "Having built production-grade microservices and APIs from the ground up, Pranit understands technical security controls from the inside out — including JWT authentication, BCrypt hashing, Role-Based Access Control (RBAC), database encryption, and CI/CD Policy-as-Code (OPA/Rego). This technical engineering depth allows him to assess risks, conduct control assurance, and interface with developers with authentic technical credibility.",
    category: "Career & Transition",
  },
  {
    question: "What enterprise compliance frameworks has he worked with?",
    answer:
      "Pranit has mapped technical controls, authored security policies, and performed gap assessments across ISO/IEC 27001:2022 (Annex A Statement of Applicability), NIST SP 800-53 Rev. 5, NIST Cybersecurity Framework (CSF 2.0), SOC 2 Type II, PCI DSS v4.0 (Network Segmentation & CDE Scope Reduction), HIPAA Security Rule, and NIST AI RMF / EU AI Act.",
    category: "Compliance & Frameworks",
  },
  {
    question: "What are his featured technical and GRC projects?",
    answer:
      "His portfolio showcases 15 verified GitHub projects including PayNova GRC360 (enterprise risk & ServiceNow GRC), CoreStack (Java Spring Boot microservices platform with API Gateway and Docker), CloudDesk GRC360 (SaaS security & AWS CIS benchmarks), Cloud Security CI/CD Pipeline (OPA Rego policies), and Borrow Platform (Spring Boot REST API).",
    category: "Projects",
  },
  {
    question: "What cloud and DevOps technologies does he have experience with?",
    answer:
      "Pranit works with AWS cloud services including EC2, S3, RDS, Lambda, API Gateway, CloudTrail, CloudWatch, and KMS, alongside Terraform Infrastructure-as-Code (IaC), Docker containerization, and automated CI/CD security scanning pipelines (Checkov/Trivy).",
    category: "Cloud & DevOps",
  },
  {
    question: "What verified certifications does he hold?",
    answer:
      "Pranit holds 4 verified credentials: Google Project Management Professional Certificate, Google Foundations of Cybersecurity, Oracle Certified Foundations Associate (Agentic AI - Credential ID: 330048172AAI26OFA), and Google AI Essentials, each with direct verification links on this site.",
    category: "Certifications",
  },
  {
    question: "What roles is he targeting and how can recruiters get in touch?",
    answer:
      "He is targeting roles including GRC Analyst, Information Security Analyst, Cyber Risk & Compliance Analyst, and Security Governance Specialist. Recruiters can connect via the Contact Form on this site, email him directly at kpranit2105@gmail.com, or reach out via LinkedIn.",
    category: "Hiring & Contact",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <HelpCircle className="w-4 h-4" />
            <span>Recruiter &amp; Hiring Manager FAQ</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct, factual answers regarding Pranit&apos;s technical background, GRC transition, project portfolio, and hiring availability.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3" role="region" aria-label="Frequently Asked Questions Accordion">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const buttonId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-subtle transition-all duration-200 hover:border-blue-500/50"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 animate-fadeIn"
                  >
                    <div className="pt-2">
                      <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-mono font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase">
                        {faq.category}
                      </span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Note */}
        <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-blue-900 dark:text-blue-200">
            <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>Have a specific opportunity or security consultation in mind?</span>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shrink-0"
          >
            Contact Pranit Directly
          </a>
        </div>

      </div>
    </section>
  );
}
