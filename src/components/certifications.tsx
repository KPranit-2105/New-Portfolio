"use client";

import { Award, ExternalLink, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { certificationsData } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Award className="w-4 h-4" />
            <span>Professional Credentials & Validation</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-sm sm:text-base">
            Verified credentials in cybersecurity governance, cloud security architecture, and systems auditing.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle hover:border-blue-500/60 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium shrink-0 ${
                      cert.status === "Active"
                        ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                        : "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
                    }`}
                  >
                    {cert.status === "Active" ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3" />
                    )}
                    {cert.status}
                  </span>
                </div>

                {/* Dates & Credential ID */}
                <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
                  <div>Issue Date: <span className="text-slate-800 dark:text-slate-200 font-semibold">{cert.issueDate}</span></div>
                  {cert.expiryDate && (
                    <div>Validity: <span className="text-slate-800 dark:text-slate-200 font-semibold">{cert.expiryDate}</span></div>
                  )}
                  {cert.credentialId && (
                    <div>ID: <span className="text-slate-800 dark:text-slate-200 font-semibold">{cert.credentialId}</span></div>
                  )}
                </div>

                {/* Skills Covered Pills */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                    Domains Verified:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verify Link */}
              {cert.verifyUrl && (
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded p-1"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
