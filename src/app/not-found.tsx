import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home, FolderGit2, FileText, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* Error Shield Icon */}
        <div className="mx-auto w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-card">
          <ShieldAlert className="w-10 h-10" />
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
            HTTP 404 • Resource Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            The requested portfolio path does not exist or has been relocated within the security architecture.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Available Portfolio Sections:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <Link
              href="/"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home Page</span>
            </Link>
            <Link
              href="/#projects"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Case Studies</span>
            </Link>
            <Link
              href="/#resume"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </Link>
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Form</span>
            </Link>
          </div>
        </div>

        {/* Primary CTA */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
