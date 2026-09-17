"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { experienceData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Briefcase className="w-4 h-4" />
            <span>Career Progression & Audits</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-sm sm:text-base">
            Track record of leading security risk assessments, establishing enterprise governance policies, and guiding organizations through external compliance examinations.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-10">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-subtle hover:border-blue-500/50 transition-colors space-y-4">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
                    Core Responsibilities:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements Box */}
                {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                  <div className="p-3.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Quantifiable Achievements & Outcomes:
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-800 dark:text-slate-200">
                      {exp.keyAchievements.map((achieve, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-medium">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{achieve}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Framework Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.frameworksUsed.map((fw) => (
                    <span
                      key={fw}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {fw}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
