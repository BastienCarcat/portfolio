export const siteConfig = {
  // Site Metadata
  metadata: {
    title: "Bastien CARCAT - Développeur React/Next.js Freelance",
    description:
      "Portfolio de Bastien CARCAT, développeur front-end spécialisé en React et Next.js",
    author: "Bastien CARCAT",
    keywords: [
      "développeur",
      "freelance",
      "front end",
      "React",
      "Next.js",
      "TypeScript",
      "portfolio",
    ],
    url: "https://www.bastien-carcat.dev",
    image: "/profile-picture.png",
  },

  // Contact Information
  contact: {
    email: "bastien-carcat@orange.fr",
    callBooking: "https://pim.ms/cal",
  },

  // Social Links
  social: {
    github: "https://github.com/BastienCarcat",
    linkedin: "https://www.linkedin.com/in/bastien-carcat-1a8707175",
    malt: "https://pim.ms/EvmsDMW",
    x: "https://x.com/BastienCrct",
  },

  // External Services
  external: {
    simpleIcons: "https://cdn.simpleicons.org",
  },

  projects: {
    gymFit: "https://www.gymfit-api.com/",
    forminotion:
      "https://github.com/BastienCarcat/forminotion-web-app/tree/master",
    thumbly: "https://github.com/BastienCarcat/thumbly",
  },
};

export type SiteConfig = typeof siteConfig;
