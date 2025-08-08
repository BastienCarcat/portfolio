import { BentoCard } from "@/components/ui/bento-grid";

interface ProjectTitleProps {
  title: string;
}

export default function ProjectTitle({ title }: ProjectTitleProps) {
  return (
    <BentoCard className="col-span-9 sm:col-span-8 lg:col-span-9 lg:row-span-2 min-h-24 sm:min-h-28 lg:min-h-32 flex px-8 sm:px-16 items-center ">
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-kaisei font-bold">
        {title}
      </h1>
    </BentoCard>
  );
}
