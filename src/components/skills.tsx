"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Layers, CheckCircle2, Shield, Filter } from "lucide-react";
import { skillsData } from "@/data/skills";
import { SkillCategory } from "@/types";

export function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories: string[] = [
    "All",
    "Governance",
    "Risk Management",
    "Compliance",
    "Cloud & IT Security",
    "Audit & Controls",
    "Technical & Scripting",
    "Security Tools & GRC",
    "Soft Skills & Business Alignment",
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    const matchesQuery =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.frameworkMapping?.some((f) =>
        f.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Layers className="w-4 h-4" />
            <span>Technical & Governance Matrix</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Security Framework Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-sm sm:text-base">
            Searchable inventory of risk evaluation methods, security control frameworks, GRC platform tools, and technical audit capabilities.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search skills (e.g. ISO 27001, AWS, Risk Register, Python)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
              />
            </div>

            {/* Total Count Pill */}
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 self-end sm:self-center">
              <Filter className="w-3.5 h-3.5" />
              Showing {filteredSkills.length} of {skillsData.length} Competencies
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  selectedCategory === cat
                    ? "bg-slate-900 dark:bg-blue-600 text-white font-semibold"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle hover:border-blue-500/50 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {skill.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                        skill.level === "Expert"
                          ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                          : skill.level === "Advanced"
                          ? "bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">
                    Category: {skill.category}
                  </span>
                </div>

                {/* Framework Mappings */}
                {skill.frameworkMapping && skill.frameworkMapping.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1">
                    {skill.frameworkMapping.map((fw) => (
                      <span
                        key={fw}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No skills found matching &quot;{searchQuery}&quot;. Try resetting filters or search terms.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
