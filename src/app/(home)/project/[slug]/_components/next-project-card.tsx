"use client";

import { BentoCard } from "@/components/ui/bento-grid";
import { ChevronRightIcon, MoveRight } from "lucide-react";
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
      className="lg:col-span-4 col-span-12 lg:row-span-1 py-2 cursor-pointer font-kaisei"
      onClick={handleNextProject}
    >
      <div className="flex justify-between h-full items-center">
        <span className="text-4xl">{nextProject.title}</span>
        <MoveRight className="w-10 h-10" />
      </div>
    </BentoCard>
  );
}
