import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft, ShieldCheck, AlertCircle, ExternalLink, Code } from "lucide-react";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `Terms of Use | ${profileData.name} Portfolio`,
  description: `Terms and conditions governing the use of ${profileData.name}'s professional portfolio website.`,
};

export default function TermsOfUse() {
  const lastUpdated = "September 2026";

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Navigation Back */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <FileText className="w-4 h-4" />
            <span>Legal Notice &amp; Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Terms of Use
          </h1>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Effective Date: {lastUpdated}
          </p>
        </div>

        {/* Content Body */}
        <div className="prose dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or viewing this personal portfolio website (&ldquo;Site&rdquo;), you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please discontinue using this website.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              2. Permitted Use &amp; Professional Purpose
            </h2>
            <p>
              This Site is maintained by {profileData.name} for the legitimate purpose of presenting professional qualifications, software engineering accomplishments, and Information Security / GRC case studies to prospective employers, recruiters, colleagues, and academic peers.
            </p>
            <p>
              You agree not to engage in unauthorized security testing (e.g., denial of service attacks, vulnerability scanning without consent) or misuse the Contact Form to transmit unsolicited commercial advertisements or abusive content.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise noted, all text, architecture diagrams, website source code, project documentations, and layout designs on this site are the intellectual property of {profileData.name}. Open-source code repositories linked on GitHub are governed by their respective repository licenses (e.g., MIT License).
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Case Studies &amp; Compliance Demonstrations
            </h2>
            <p>
              Projects and case studies presented on this site (such as PayNova, CloudDesk, MediCloud, and IndusMach) represent technical architectural designs, control assurance models, and educational security implementations. Any simulated customer or enterprise datasets referenced are created for demonstration purposes.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              5. External Links &amp; Credentials
            </h2>
            <p>
              This site includes hyperlinks to third-party web domains including GitHub, LinkedIn, Coursera, and Oracle University. These links are provided solely for convenience and credential verification. {profileData.name} does not endorse or accept responsibility for the content, privacy practices, or availability of third-party platforms.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              6. AI Portfolio Assistant Information Notice
            </h2>
            <p>
              The AI Portfolio Assistant (&ldquo;Ask My Portfolio&rdquo;) provides interactive automated summaries grounded in verified portfolio data. While engineered with strict anti-hallucination guardrails, all mission-critical hiring or contractual decisions should be validated directly against the primary portfolio sections, resume, or official credential verification links.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              7. Disclaimer of Warranties &amp; Limitation of Liability
            </h2>
            <p>
              This Site and its contents are provided on an &ldquo;as is&rdquo; basis without warranties of any kind, whether express or implied. In no event shall {profileData.name} be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this Site.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              8. Changes &amp; Inquiries
            </h2>
            <p>
              I reserve the right to update these Terms of Use as needed. For any questions regarding these terms, please contact <strong>{profileData.email}</strong>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
