"use client";

import { portfolioData } from "@/data/portfolio";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: portfolioData.role,
    description: portfolioData.about,
    url: typeof window !== "undefined" ? window.location.origin : "",
    image:
      typeof window !== "undefined"
        ? `${window.location.origin}${portfolioData.profileImage}`
        : portfolioData.profileImage,
    sameAs: portfolioData.social
      .filter((s) => s.platform !== "Email")
      .map((s) => s.url),
    knowsAbout: [
      ...portfolioData.skills.languages,
      ...portfolioData.skills.backend,
      ...portfolioData.skills.frontend,
      ...portfolioData.skills.databasesAndTools,
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${portfolioData.name} Portfolio`,
    description: portfolioData.about,
    url: typeof window !== "undefined" ? window.location.origin : "",
    author: {
      "@type": "Person",
      name: portfolioData.name,
    },
    inLanguage: "en-US",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01", // Update this to when you first created your portfolio
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "Person",
      name: portfolioData.name,
      description: portfolioData.about,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />
    </>
  );
}
