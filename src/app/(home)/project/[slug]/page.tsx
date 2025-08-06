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
    title: "Gym Fit API",
    description:
      "Lors de mes études, j'ai développé une app de suivi d'entrainements de musculation et j'ai rapidement été confronté à un défi de taille : rassembler et structurer des centaines d'exercices, leurs variantes, les groupes musculaires ciblés... Un travail de titan qui freine l'innovation. GymFit API résout ce problème en proposant une base de données complète et des outils de calcul, permettant aux développeurs de se concentrer sur ce qui compte vraiment : l'expérience utilisateur.",
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
      "Next.js",
      "TypeScript",
      "Prisma",
      "Node.js",
      "NestJS",
      "PostrgreSQL",
      "S3 Storage",
    ],
    url: siteConfig.projects.gymFit,
  },
  {
    key: "forminotion",
    title: "Forminotion",
    description:
      "Ma pratique intensive de Notion et la création de templates m'ont révélé un manque criant : comment capturer efficacement des données externes pour alimenter ses bases ? Les utilisateurs transforment Notion en CRM performant mais restent démunis pour créer des formulaires de contact, d'inscription ou de leads. Forminotion résout cette équation en générant des formulaires embarquables qui synchronisent automatiquement avec vos modèles Notion existants.",
    images: [
      {
        src: "/forminotion-1.png",
        alt: "Forminotion illustration 1",
      },
      {
        src: "/forminotion-2.png",
        alt: "Forminotion illustration 2",
      },
    ],
    skills: ["React", "Tailwind CSS", "react-final-form", "react-dnd", "auth0"],
    url: siteConfig.projects.forminotion,
  },
  {
    key: "thumbly",
    title: "Thumbly",
    description:
      "En expérimentant avec le dernier modèle de génération d'images d'OpenAI, j'ai été frappé par sa capacité à produire des visuels professionnels en quelques secondes. Une évidence s'est imposée : pourquoi ne pas l'appliquer aux miniatures YouTube ? Sachant l'impact crucial de la thumbnail sur le taux de clic d'une vidéo, Thumbly est né de cette révélation, permettant aux créateurs de générer instantanément des miniatures accrocheuses et professionnelles.",
    images: [
      {
        src: "/thumbly-1.png",
        alt: "Thumbly illustration 1",
      },
      {
        src: "/thumbly-2.png",
        alt: "Thumbly illustration 2",
      },
    ],
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Prisma",
      "Supabase",
      "S3 Storage",
    ],
    url: siteConfig.projects.thumbly,
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
