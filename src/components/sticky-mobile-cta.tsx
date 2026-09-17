"use client";

import { useState, useEffect } from "react";
import { FolderGit2, Mail, FileText } from "lucide-react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA once user has scrolled past the hero section (approx 350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      role="region"
      aria-label="Mobile Quick Actions"
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 px-4 shadow-lg pb-[calc(0.625rem+env(safe-area-inset-bottom))] transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href="#projects"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Projects</span>
        </a>

        <a
          href="#resume"
          className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-300 dark:border-slate-700"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-300 dark:border-slate-700"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
}
