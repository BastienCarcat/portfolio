import { BentoCard } from "@/components/ui/bento-grid";

interface ProjectTitleProps {
  title: string;
}

export default function ProjectTitle({ title }: ProjectTitleProps) {
  return (
    <BentoCard className="col-span-9 row-span-2 flex px-16 items-center ">
      <h1 className="text-7xl font-kaisei font-bold">{title}</h1>
    </BentoCard>
  );
}
