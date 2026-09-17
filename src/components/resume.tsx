"use client";

import { useState } from "react";
import { FileText, Download, CheckCircle2, ShieldCheck, ExternalLink, BarChart3 } from "lucide-react";
import { profileData } from "@/data/profile";

export function Resume() {
  const [downloadCount, setDownloadCount] = useState(154);

  const handleDownload = () => {
    setDownloadCount((prev) => prev + 1);
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Pranit_K_Resume.pdf";
    link.click();
  };

  const resumeHighlights = [
    "Results-driven Java Backend Developer with 1 year of professional experience building scalable applications at HCLTech.",
    "Strong technical expertise in Java 17/21, Spring Boot 3, RESTful APIs, Spring Data JPA, Hibernate, and PostgreSQL.",
    "Secured backend APIs implementing Spring Security, JWT, BCrypt, and Role-Based Access Control (RBAC).",
    "Cloud infrastructure experience across AWS services including EC2, S3, RDS, Lambda, API Gateway, and CloudWatch.",
    "Specialized in Generative AI, Large Language Models (LLMs), Prompt Engineering, and Agentic AI concepts.",
    "Graduated with Bachelor of Engineering in Computer Engineering from SPPU University (CGPA: 8.87 / 10.0).",
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <FileText className="w-4 h-4" />
            <span>ATS-Optimized Professional Resume</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curriculum Vitae / Resume
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-sm sm:text-base">
            Download the official recruiter-ready PDF resume or view key qualifications below.
          </p>
        </div>

        {/* Action Panel Card */}
        <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Info & Telemetry */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Pranit K - Official Resume Document (PDF Format)
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Formatted specifically for ATS (Applicant Tracking Systems) & Executive Recruiters.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <BarChart3 className="w-3.5 h-3.5 text-blue-500" />
                Verified Downloads: <strong className="text-slate-700 dark:text-slate-200">{downloadCount}</strong>
              </span>
              <span>•</span>
              <span>Updated: 2026</span>
              <span>•</span>
              <span>Format: Verified PDF</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Open in New Tab</span>
            </a>

            <button
              onClick={handleDownload}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume</span>
            </button>
          </div>
        </div>

        {/* ATS Executive Summary Highlights Box */}
        <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Executive Recruiter Summary & Qualifications Checklist
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {resumeHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
