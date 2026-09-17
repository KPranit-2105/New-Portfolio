"use client";

import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { educationData, achievementsData } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background & Honors</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Recognition
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-sm sm:text-base">
            Formal education, academic honors, specialized cybersecurity coursework, and industry recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Degrees Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Academic Degrees
            </h3>

            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 self-start sm:self-auto">
                    Graduated: {edu.graduationYear}
                  </span>
                </div>

                {edu.honors && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-medium bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{edu.honors}</span>
                  </div>
                )}

                {/* Coursework */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    Specialized Security Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.relevantCoursework.map((course) => (
                      <span
                        key={course}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Recognition & Leadership Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Honors & Thought Leadership
            </h3>

            <div className="space-y-4">
              {achievementsData.map((achieve) => (
                <div
                  key={achieve.id}
                  className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                      {achieve.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{achieve.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {achieve.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {achieve.organization}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {achieve.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
