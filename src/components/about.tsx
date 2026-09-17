"use client";

import { motion } from "framer-motion";
import { Shield, Target, FileText, CheckCircle2, TrendingUp, Cpu, Award } from "lucide-react";
import { profileData } from "@/data/profile";

export function About() {
  const pillars = [
    {
      icon: Shield,
      title: "Risk Management & Quantification",
      description:
        "I evaluate IT and cloud risks using structured frameworks like NIST 800-30 and FAIR. I translate raw vulnerability data into actionable risk matrices that business stakeholders and executive leadership can prioritize.",
    },
    {
      icon: FileText,
      title: "Governance & Policy Architecture",
      description:
        "I author clear, operational security policies aligned with ISO/IEC 27001 and NIST CSF. My goal is to create governance documents that reflect actual engineering workflows without adding unnecessary friction.",
    },
    {
      icon: Target,
      title: "Compliance & Audit Defensibility",
      description:
        "I lead internal audit preparation and external CPA auditor engagements for SOC 2 Type II, ISO 27001, and PCI DSS. I focus on automated evidence collection to minimize engineering audit fatigue.",
    },
    {
      icon: TrendingUp,
      title: "Business Alignment & Continuous Improvement",
      description:
        "I view security compliance as an enabler of enterprise revenue. By unblocking vendor security questionnaires and maintaining strong compliance posture, I help accelerate enterprise deal velocity.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Shield className="w-4 h-4" />
            <span>Professional Profile & Methodology</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About My GRC Approach
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-sm sm:text-base">
            Bridging the gap between technical security controls and executive business risk management.
          </p>
        </div>

        {/* Bio Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {profileData.fullBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Highlight Card */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-950 p-6 rounded-lg border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Core Competency Summary
            </h3>
            <ul className="space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>ISO 27001 ISMS Implementation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>NIST 800-53 / CSF 2.0 Mapping</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>SOC 2 Type II Audit Readiness</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Third-Party Risk Management (TPRM)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Cloud Posture & IAM Access Review</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3 shadow-subtle hover:border-blue-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
