import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { notFound } from "next/navigation";
import BackButton from "./_components/back-button";
import ProjectTitle from "./_components/project-title";
import VisitProjectButton from "./_components/visit-project-button";
import ProjectDescription from "./_components/project-description";
import ProjectImages from "./_components/project-images";
import ProjectSkills from "./_components/project-skills";
import NextProjectCard from "./_components/next-project-card";
import { siteConfig } from "@/config/site";
import { LinkedinIcon } from "@/components/icons/linkedin";

const projects = [
  {
    key: "gym-fit",
    title: "Gym Fit",
    description:
      "Application de fitness moderne avec suivi des entraînements et analyses détaillées.",
    images: [
      {
        src: "/gym-fit-1.png",
        alt: "Gym Fit illustration 1",
      },
      {
        src: "/gym-fit-2.png",
        alt: "Gym Fit illustration 2",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
    url: siteConfig.projects.gymFit,
  },
  {
    key: "forminotion",
    title: "Forminotion",
    description:
      "Plateforme de formation en ligne avec gestion des cours et suivi des progrès.",
    images: [
      {
        src: "/gym-fit-1.png",
        alt: "Gym Fit illustration 1",
      },
      {
        src: "/gym-fit-2.png",
        alt: "Gym Fit illustration 2",
      },
    ],
    skills: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    url: "https://forminotion.example.com",
  },
  {
    key: "thumbly",
    title: "Thumbly",
    description: "Outil de création de miniatures YouTube avec IA intégrée.",
    images: [
      {
        src: "/gym-fit-1.png",
        alt: "Gym Fit illustration 1",
      },
      {
        src: "/gym-fit-2.png",
        alt: "Gym Fit illustration 2",
      },
    ],
    skills: ["Vue.js", "Python", "OpenAI API", "AWS"],
    url: "https://thumbly.example.com",
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.key === slug);
  if (!project) {
    return notFound();
  }
  const icons = [
    { name: "github", href: siteConfig.social.github },
    {
      name: "malt",
      href: siteConfig.social.malt,
    },
    {
      name: "x",
      href: siteConfig.social.x,
    },
    {
      name: "linkedin",
      href: siteConfig.social.linkedin,
      icon: <LinkedinIcon className="w-8 h-8 text-secondary" />,
    },
  ];
  return (
    <BentoGrid className="h-screen p-5 grid-rows-10 will-change-transform">
      <BackButton />
      <ProjectTitle title={project.title} />
      <VisitProjectButton url={project.url} />
      <ProjectDescription description={project.description} />
      <ProjectImages images={project.images} />
      <ProjectSkills skills={project.skills} />
      <NextProjectCard currentProjectKey={project.key} projects={projects} />
      <BentoCard className="lg:col-span-4 col-span-12 lg:row-span-1 py-2">
        <div className="flex items-center h-full gap-12 justify-center">
          {icons.map((icon, i) => (
            <a
              className="hover:scale-110"
              key={i}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              // className="p-2 rounded-lg bg-card-accent hover:bg-primary dark:hover:bg-primary transition-colors"
            >
              {!!icon.icon ? (
                icon.icon
              ) : (
                <img
                  height="32"
                  width="32"
                  src={`${siteConfig.external.simpleIcons}/${icon.name}/a8977b`}
                />
              )}
            </a>
          ))}
        </div>
      </BentoCard>
    </BentoGrid>
  );
}
