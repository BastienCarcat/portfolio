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
      className="font-kaisei col-span-12 cursor-pointer py-4 sm:col-span-6 lg:col-span-4 lg:row-span-1"
      onClick={handleNextProject}
    >
      <div className="flex h-full items-center justify-between">
        <span className="text-xl sm:text-2xl lg:text-4xl">
          {nextProject.title}
        </span>
        <MoveRight className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
      </div>
    </BentoCard>
  );
}
