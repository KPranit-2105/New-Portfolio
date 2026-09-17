"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Search, ExternalLink, Github, X, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    "All",
    "GRC & Cybersecurity",
    "Java Backend",
    "AI & GenAI",
    "Cloud & DevOps",
    "Compliance & Audit",
    "Risk Assessment",
    "Cloud Security",
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCat =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.frameworks.some((f) =>
        f.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCat && matchesQuery;
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <FolderGit2 className="w-4 h-4" />
            <span>Audit & Risk Case Studies</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GRC & Cybersecurity Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-sm sm:text-base">
            Detailed case studies documenting real-world ISO 27001 readiness programs, NIST 800-53 cloud risk assessments, SOC 2 Type II audit remediation, and vendor security management.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white font-semibold shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects or frameworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-6 flex flex-col justify-between shadow-subtle hover:border-blue-500/60 transition-all hover:shadow-card"
            >
              <div className="space-y-4">
                
                {/* Header Metadata */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 shrink-0">
                    {project.date}
                  </span>
                </div>

                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Key Impact Bullet Highlight */}
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                  <div className="text-[11px] font-mono font-semibold uppercase text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Key Business Outcome:
                  </div>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    {project.businessImpact[0]}
                  </p>
                </div>

                {/* Framework Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.frameworks.map((fw) => (
                    <span
                      key={fw}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-6 mt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded p-1"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
                    aria-label="View Project Artifacts on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup for Case Study Details */}
        <AnimatePresence>
          {activeProjectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-semibold uppercase text-blue-600 dark:text-blue-400">
                      {activeProjectModal.category} • {activeProjectModal.date}
                    </span>
                    <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {activeProjectModal.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Problem */}
                  <div className="p-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      Problem Statement
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeProjectModal.problemStatement}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      GRC Solution Implemented
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeProjectModal.solution}
                    </p>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
                    Analyst Responsibilities & Deliverables
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {activeProjectModal.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Impact */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
                    Measurable Business Outcomes
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {activeProjectModal.businessImpact.map((impact, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-800 dark:text-slate-200">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Tools Utilized:</span>
                  {activeProjectModal.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {activeProjectModal.githubUrl && (
                      <a
                        href={activeProjectModal.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View on GitHub</span>
                      </a>
                    )}
                    {activeProjectModal.demoUrl && (
                      <a
                        href={activeProjectModal.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    Close Case Study
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
