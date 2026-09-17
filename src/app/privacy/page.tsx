import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Lock, EyeOff, Server, Mail } from "lucide-react";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `Privacy Policy | ${profileData.name} Portfolio`,
  description: `Privacy Policy and data protection practices for ${profileData.name}'s professional portfolio website.`,
};

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-4 h-4" />
            <span>Information Security & Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Effective Date: {lastUpdated} &nbsp;•&nbsp; Compliance Standards: ISO/IEC 27001 &amp; NIST Privacy Framework
          </p>
        </div>

        {/* Content Body */}
        <div className="prose dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              1. Overview &amp; Privacy Commitment
            </h2>
            <p>
              This personal portfolio website operates under strict data minimization and privacy-by-design principles. As an Information Security professional, I believe in complete transparency regarding any technical or personal information processed when you visit this website.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              2. Zero Tracking Cookies &amp; Telemetry Policy
            </h2>
            <p>
              This website <strong>does not use advertising cookies, third-party behavioral trackers, or cross-site tracking pixels</strong>. The website uses standard client-side state (such as your chosen light or dark theme stored in your browser&apos;s local storage) solely for site presentation. No personal browsing habits are transmitted or sold.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              3. Information Collected via Contact Inquiries
            </h2>
            <p>
              When you voluntarily reach out using the Contact &amp; Recruitment form on this website, the following details are submitted:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Full Name</li>
              <li>Work or Personal Email Address</li>
              <li>Organization or Company Name (optional)</li>
              <li>Inquiry Classification (e.g., Hiring / Recruitment, GRC Consultation)</li>
              <li>Message Content</li>
            </ul>
            <p>
              <strong>Purpose of Processing:</strong> This information is utilized solely to evaluate job opportunities, reply to recruitment inquiries, and coordinate professional communications. Contact form data is never shared with third-party advertisers or marketing data brokers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              4. AI Portfolio Assistant Data Practices
            </h2>
            <p>
              If you interact with the interactive <strong>AI Portfolio Assistant</strong> (&ldquo;Ask My Portfolio&rdquo;):
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Queries submitted to the chat assistant are processed in-memory to retrieve relevant portfolio facts.</li>
              <li>Chat conversations are stored only in your local browser session and are automatically cleared when you refresh or close the tab, or when you click the &ldquo;Clear Conversation&rdquo; button.</li>
              <li>Personal identity details are not recorded by the AI assistant.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              5. Data Retention &amp; Security Controls
            </h2>
            <p>
              Inquiry messages are retained only as long as necessary to fulfill professional communication. Technical security controls deployed on this site include:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300">
              <li>TLS 1.3 encryption in transit for all communications</li>
              <li>Strict HTTP Security Headers: Content-Type-Options (nosniff), Referrer-Policy, Permissions-Policy</li>
              <li>Server-side cross-site scripting (XSS) sanitation on all submitted payloads</li>
              <li>Bot honeypot spam mitigation mechanisms</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              6. Third-Party Links &amp; Credentials
            </h2>
            <p>
              This portfolio links to third-party services including GitHub, LinkedIn, Coursera, and Oracle University for verifiable project source code and certificate credentials. I am not responsible for the privacy practices of external platforms.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              7. Your Rights as a Data Subject &amp; Contact Information
            </h2>
            <p>
              In accordance with international privacy principles (including GDPR and CCPA considerations), you have the right to inspect, correct, or request the permanent deletion of any personal data you have transmitted through the Contact Form. To exercise your rights or ask questions regarding this policy, please contact:
            </p>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm">
              <p><strong>Name:</strong> {profileData.name}</p>
              <p><strong>Email:</strong> {profileData.email}</p>
              <p><strong>Location:</strong> {profileData.location}</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
