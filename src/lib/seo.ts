import { Profile } from "@/types";

export function generatePersonJsonLd(profile: Profile) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    url: "https://grc-portfolio.vercel.app", // TODO: Replace with your actual domain URL
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: profile.frameworks,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "State University", // TODO: Replace with your institution
    },
  };
}

export function generateBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://grc-portfolio.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://grc-portfolio.vercel.app/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://grc-portfolio.vercel.app/#projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Certifications",
        item: "https://grc-portfolio.vercel.app/#certifications",
      },
    ],
  };
}
