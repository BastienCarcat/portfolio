export const siteConfig = {
  // Site Metadata
  metadata: {
    title: "Bastien - Développeur front-end",
    description:
      "Portfolio de Bastien, développeur front-end spécialisé en React, Next.js et TypeScript",
    author: "Bastien",
    keywords: [
      "développeur",
      "front end",
      "React",
      "Next.js",
      "TypeScript",
      "portfolio",
    ],
    url: "https://votre-domaine.com",
    image: "/profile-picture.png",
  },

  // Contact Information
  contact: {
    email: "bastien-carcat@orange.fr",
  },

  // Social Links
  social: {
    github: "https://github.com/BastienCarcat",
    linkedin: "https://www.linkedin.com/in/bastien-carcat-1a8707175",
    malt: "https://malt.fr/profile/bastiencarcat",
    x: "https://x.com/BastienCrct",
  },

  // Personal Information
  personal: {
    name: "Bastien",
    title: "Développeur Full Stack",
    description: "Développeur passionné par les technologies web modernes",
  },

  // External Services
  external: {
    simpleIcons: "https://cdn.simpleicons.org",
  },
} as const;

export type SiteConfig = typeof siteConfig;
