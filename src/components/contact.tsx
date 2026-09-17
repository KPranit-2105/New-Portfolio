"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, ShieldCheck, Lock, AlertCircle } from "lucide-react";
import { profileData } from "@/data/profile";
import { ContactFormData } from "@/types";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Hiring / Recruitment",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [botcheck, setBotcheck] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");
    setErrorMessage("");

    // Length check
    if (formData.message.trim().length < 5) {
      setErrorMessage("Please enter a message with at least 5 characters.");
      setFormStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Client-side XSS sanitization check
    if (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(formData.message)) {
      setErrorMessage("Script tags and unsafe HTML are strictly blocked.");
      setFormStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, botcheck }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          inquiryType: "Hiring / Recruitment",
          message: "",
        });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Failed to transmit message. Please try again.");
        setFormStatus("error");
      }
    } catch {
      setErrorMessage("Network connection error. Please try again later.");
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Mail className="w-4 h-4" />
            <span>Encrypted Professional Communication</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact & Recruitment Inquiries
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-sm sm:text-base">
            Reach out regarding GRC opportunities, security audit consultations, or recruitment inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Contact Channels & Security Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle space-y-6">
              
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Direct Communication Channels
              </h3>

              {/* One-Click Copy Email Box */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Primary Email Address:
                </label>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {profileData.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors shrink-0 ml-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 animate-fadeIn">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location & Social Links */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm font-mono">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{profileData.location}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600 dark:text-blue-400 truncate"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <Github className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0" />
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600 dark:text-blue-400 truncate"
                  >
                    GitHub Portfolio
                  </a>
                </div>
              </div>

              {/* Security Banner */}
              <div className="p-3 bg-blue-50/70 dark:bg-blue-950/30 rounded-lg border border-blue-200/60 dark:border-blue-900/50 flex items-start gap-2.5 text-xs text-blue-900 dark:text-blue-200">
                <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  <strong>Security Note:</strong> Submissions are validated for XSS and processed with standard encryption. No sensitive confidential credentials should be sent via public forms.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column - Validated Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle space-y-4"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Send Inquiry Message
              </h3>

              {/* Form Status Notifications */}
              {formStatus === "success" && (
                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-mono text-emerald-800 dark:text-emerald-200 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Message Transmitted Successfully!</strong>
                    <p className="mt-0.5">Thank you. I will review your inquiry and respond within 24 business hours.</p>
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-xs font-mono text-red-800 dark:text-red-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Validation Error:</strong> {errorMessage}
                  </div>
                </div>
              )}

              {/* Bot Honeypot Field (Hidden from humans, traps spambots) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-botcheck">Leave this field blank</label>
                <input
                  id="contact-botcheck"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                />
              </div>

              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="jane.doe@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contact-organization" className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Organization / Company
                  </label>
                  <input
                    id="contact-organization"
                    type="text"
                    placeholder="Acme Corp / Enterprise Risk"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-inquiryType" className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Inquiry Classification <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contact-inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) =>
                      setFormData({ ...formData, inquiryType: e.target.value as ContactFormData["inquiryType"] })
                    }
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  >
                    <option value="Hiring / Recruitment">Hiring / Recruitment</option>
                    <option value="GRC Consultation">GRC Consultation</option>
                    <option value="General Security Inquiry">General Security Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-message" className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                  Inquiry Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  minLength={5}
                  maxLength={5000}
                  placeholder="Please describe the role, GRC project requirements, or security inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {isSubmitting ? (
                  <span>Transmitting Encrypted Data...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Security Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
