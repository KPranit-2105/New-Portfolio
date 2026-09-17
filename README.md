# Enterprise GRC & Cybersecurity Analyst Personal Portfolio

A recruiter-focused personal portfolio website engineered specifically for **Governance, Risk & Compliance (GRC)**, **Information Security**, and **Cyber Risk Analyst** roles. 

Designed with an enterprise consulting & security dashboard aesthetic (inspired by CrowdStrike, Palo Alto Networks, AWS Security, and Deloitte Cyber) while avoiding generic AI template cliches.

---

## 🚀 Key Features & Highlights

- **Executive Security Access Badge & Hero**: High-impact headline, live compliance status indicator, trust framework badges (ISO 27001, NIST CSF, SOC 2, PCI DSS).
- **First-Person Bio & GRC Philosophy**: Risk quantification focus, business alignment narrative, and 4 core methodology pillars.
- **Interactive Skills Matrix**: Categorized across 8 domains with live keyword search and framework mapping tags.
- **Searchable Case Studies**: Realistic GRC projects (ISO 27001 readiness, AWS NIST 800-53 assessment, SOC 2 Type II remediation, TPRM vendor risk program) with interactive modal popups detailing Problem, Solution, Responsibilities, Metrics, and Key Learnings.
- **Verification Cards**: Industry certifications (CompTIA Security+, AWS Security Specialty, ISO 27001 Lead Auditor, CISA candidate status) with direct credential verification links.
- **Quantifiable Experience Timeline**: Outcome-driven career trajectory documenting audit pass rates and SLA reductions.
- **ATS Resume Previewer & Telemetry**: Native PDF viewer toggle, direct download button with simulated telemetry analytics, and executive bullet summary.
- **Secure Encrypted Contact Form**: Client-side XSS protection, input validation, toast notifications, one-click copy email button, and server-side API processing.
- **Enterprise Design & Accessibility**: Slate palette (`#0F172A`, `#1E293B`, `#2563EB`, `#16A34A`), 8px rounded corners (`rounded-lg`), dark/light mode persistence, WCAG AA compliance, and scroll progress tracking.
- **Lighthouse & SEO Optimized**: JSON-LD Structured Data (`Person` & `BreadcrumbList`), OpenGraph metadata, `robots.txt`, dynamic `sitemap.ts`, and strict HTTP security headers.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14/15 (App Router, Server Components)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS, `next-themes`
- **Icons**: Lucide React
- **Animations**: Framer Motion (Minimal fade & slide transitions)
- **SEO & Metadata**: JSON-LD, OpenGraph, Twitter Cards, Sitemap

---

## 📁 Directory Structure

```
porfolio-site/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Secure API contact route with XSS validation
│   │   ├── globals.css            # Global CSS variables & scrollbar styles
│   │   ├── layout.tsx             # Root layout with metadata, JSON-LD, ThemeProvider
│   │   ├── page.tsx               # Main executive GRC dashboard page
│   │   ├── robots.ts              # SEO Robots.txt generator
│   │   └── sitemap.ts             # Dynamic Sitemap generator
│   ├── components/
│   │   ├── about.tsx              # GRC bio & methodology pillars
│   │   ├── certifications.tsx     # Credential cards & verification links
│   │   ├── contact.tsx            # Contact form & anti-XSS validation
│   │   ├── education.tsx          # Academic degrees & achievements
│   │   ├── experience.tsx         # Career timeline with audit results
│   │   ├── footer.tsx             # Corporate footer with posture badge
│   │   ├── hero.tsx               # Executive headline & security access badge
│   │   ├── navbar.tsx             # Scroll progress & theme switch header
│   │   ├── projects.tsx           # Searchable GRC case studies & modal view
│   │   ├── resume.tsx             # PDF previewer & download component
│   │   ├── skills.tsx             # Categorized skill matrix with search
│   │   └── theme-provider.tsx     # Next-themes wrapper
│   ├── data/                      # Centralized candidate data files
│   │   ├── achievements.ts
│   │   ├── certifications.ts
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── profile.ts             # Candidate profile & contact info
│   │   ├── projects.ts            # Detailed GRC case studies
│   │   └── skills.ts              # Skill items & framework crosswalks
│   ├── lib/
│   │   ├── seo.ts                 # JSON-LD structured data generators
│   │   └── utils.ts               # Tailwind class merge helper
│   └── types/
│       └── index.ts               # Shared TypeScript interface definitions
├── public/
│   └── resume.pdf                 # Placeholder resume document
├── next.config.mjs                # Next.js config with HTTP security headers
├── tailwind.config.ts             # Custom enterprise palette & 8px radii
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📦 Installation & Local Setup

### Prerequisites
- Node.js 18.x or higher
- npm / yarn / pnpm

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the live portfolio.

---

## 🏗️ Building for Production

To validate TypeScript compilation and generate the optimized production build:

```bash
npm run build
```

To run the production server locally:
```bash
npm start
```

---

## 🚀 Deployment Instructions

### Deploying to Vercel (Recommended)

1. Push your code repository to GitHub / GitLab / Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio-site` repository.
4. Framework Preset: **Next.js**.
5. Click **"Deploy"**. Vercel will automatically build and assign an SSL domain.

### Deploying to Netlify

1. Push your repository to GitHub.
2. Log in to [Netlify](https://netlify.com) and select **"Add new site" > "Import an existing project"**.
3. Set Build Command: `npm run build`
4. Set Publish Directory: `.next`
5. Click **"Deploy site"**.

---

## ✏️ Customization Guide

To personalize this portfolio with your own details:

1. **Profile & Contact Details**: Edit `src/data/profile.ts` (replace name, email, location, LinkedIn/GitHub links).
2. **Projects & Case Studies**: Edit `src/data/projects.ts` to reflect your specific GRC projects and metrics.
3. **Skills & Frameworks**: Edit `src/data/skills.ts` to adjust your proficiency levels and control framework mappings.
4. **Certifications**: Update `src/data/certifications.ts` with your credential IDs and verification URLs.
5. **Resume PDF**: Replace `public/resume.pdf` with your actual ATS-formatted resume PDF.

---

## 🔒 Security Compliance

This site enforces strict enterprise security best practices:
- **HTTP Security Headers**: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-XSS-Protection`.
- **Form Sanitization**: Rejects script tags and dangerous HTML injections.
- **Zero Third-Party Tracking**: Respects user privacy with zero invasive analytics scripts.
