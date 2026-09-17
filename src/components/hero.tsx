"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Download, ArrowRight, Mail, CheckCircle2, Lock, FileCheck, Layers } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Professional Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profileData.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {profileData.title}
              </h1>
              <p className="text-sm sm:text-base font-mono font-medium text-blue-600 dark:text-blue-400">
                {profileData.subtitle}
              </p>
            </div>

            {/* Executive Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {profileData.summary}
            </p>

            {/* Core Framework Trust Badges */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                Target Framework & Compliance Competencies:
              </span>
              <div className="flex flex-wrap gap-2">
                {profileData.frameworks.map((framework) => (
                  <span
                    key={framework}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 shadow-subtle"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Clear Primary Conversion Goal */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {/* PRIMARY CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                <span>View Projects &amp; Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* SECONDARY ACTION */}
              <a
                href="#resume"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-medium text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Resume PDF</span>
              </a>

              {/* TERTIARY ACTION */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Enterprise Security Access Badge Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-card space-y-6 overflow-hidden">
              
              {/* Badge Top Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Security Personnel Badge #GRC-9402
                  </span>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  VERIFIED
                </span>
              </div>

              {/* Profile Details Header */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-slate-700 dark:text-slate-200 font-mono text-xl font-bold shadow-inner shrink-0">
                  <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {profileData.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Information Security Analyst
                  </p>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mt-1">
                    {profileData.location}
                  </p>
                </div>
              </div>

              {/* Key Competency Summary Box */}
              <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800 text-xs font-mono">
                <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                  <span>Risk Management:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">NIST 800-30 / FAIR</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                  <span>Audit Readiness:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">SOC 2 / ISO 27001</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                  <span>Vendor Risk:</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">TPRM / SIG Assessment</span>
                </div>
                {profileData.securityClearance && (
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-2 mt-2">
                    <span>Clearance:</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{profileData.securityClearance}</span>
                  </div>
                )}
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md border border-slate-100 dark:border-slate-800">
                  <div className="text-base font-bold text-slate-900 dark:text-white">100%</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Audit Pass Rate</div>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md border border-slate-100 dark:border-slate-800">
                  <div className="text-base font-bold text-slate-900 dark:text-white">93+</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Annex A Controls</div>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800/50 rounded-md border border-slate-100 dark:border-slate-800">
                  <div className="text-base font-bold text-slate-900 dark:text-white">&lt;5 Days</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Vendor SLA</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
