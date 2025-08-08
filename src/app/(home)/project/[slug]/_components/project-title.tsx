import { BentoCard } from "@/components/ui/bento-grid";

interface ProjectTitleProps {
  title: string;
}

export default function ProjectTitle({ title }: ProjectTitleProps) {
  return (
    <BentoCard className="col-span-9 flex min-h-24 items-center px-8 sm:col-span-8 sm:min-h-28 sm:px-16 lg:col-span-9 lg:row-span-2 lg:min-h-32">
      <h1 className="font-kaisei text-3xl font-bold sm:text-5xl lg:text-7xl">
        {title}
      </h1>
    </BentoCard>
  );
}
