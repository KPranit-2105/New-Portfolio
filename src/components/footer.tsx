"use client";

import { ShieldCheck, ArrowUp, Lock } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-900 pb-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                {profileData.name}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                | Information Security & GRC Portfolio
              </span>
            </div>
          </div>

          {/* Compliance Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Posture Status: Compliant (TLS 1.3 Encrypted)</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Navigation & Legal Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 py-2 border-b border-slate-100 dark:border-slate-900">
          <div className="flex flex-wrap items-center gap-4">
            <a href="/#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Case Studies
            </a>
            <span>•</span>
            <a href="/#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Experience
            </a>
            <span>•</span>
            <a href="/#certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Certifications
            </a>
            <span>•</span>
            <a href="/#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline">
              Terms of Use
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-500 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} {profileData.name}. All security case studies documented for compliance demonstration.
          </p>
          <p className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-slate-400" />
            Zero Tracking Cookies • Security Headers Active
          </p>
        </div>

      </div>
    </footer>
  );
}
