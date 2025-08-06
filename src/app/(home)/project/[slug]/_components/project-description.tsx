import { BentoCard } from "@/components/ui/bento-grid";

interface ProjectDescriptionProps {
  description: string;
}

export default function ProjectDescription({
  description,
}: ProjectDescriptionProps) {
  return (
    <BentoCard className="col-span-4 row-span-5 pl-11 pr-24 py-12">
      <div className="flex h-full items-end">
        <p className="font-satoshi text-lg">{description}</p>
      </div>
    </BentoCard>
  );
}
