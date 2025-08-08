"use client";

import { BentoCard } from "@/components/ui/bento-grid";
import { MoveRight } from "lucide-react";
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
      className="lg:col-span-4 sm:col-span-6 col-span-12 lg:row-span-1 py-4 cursor-pointer font-kaisei"
      onClick={handleNextProject}
    >
      <div className="flex justify-between h-full items-center">
        <span className="text-xl sm:text-2xl lg:text-4xl">
          {nextProject.title}
        </span>
        <MoveRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
      </div>
    </BentoCard>
  );
}
