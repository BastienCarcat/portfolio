"use client";

import { BentoCard } from "@/components/ui/bento-grid";
import { ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface NextProjectCardProps {
  currentProjectKey: string;
  projects: Array<{ key: string; title: string }>;
}

export default function NextProjectCard({
  currentProjectKey,
  projects,
}: NextProjectCardProps) {
  const router = useRouter();

  const currentIndex = projects.findIndex((p) => p.key === currentProjectKey);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const handleNextProject = () => {
    router.push(`/project/${nextProject.key}`);
  };

  return (
    <BentoCard
      className="lg:col-span-4 col-span-12 lg:row-span-1 py-2 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleNextProject}
    >
      <div className="flex items-center justify-between h-full px-4">
        <div>
          <p className="text-sm text-muted-foreground">Projet suivant</p>
          <p className="font-medium">{nextProject.title}</p>
        </div>
        <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
      </div>
    </BentoCard>
  );
}
