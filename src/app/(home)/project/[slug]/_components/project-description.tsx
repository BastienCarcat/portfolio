import { BentoCard } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectDescriptionProps {
  description: string;
  url: string;
}

export default function ProjectDescription({
  description,
  url,
}: ProjectDescriptionProps) {
  return (
    <BentoCard className="col-span-12 px-6 py-6 lg:col-span-4 lg:row-span-5 lg:py-8 lg:pr-12 lg:pl-11 xl:py-12 xl:pr-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <p className="font-satoshi lg:text-md text-sm sm:text-base xl:text-lg">
          {description}
        </p>
        <Button asChild variant="portfolio" className="flex sm:hidden">
          <Link href={url} target="_blank" rel="noopener">
            Visiter
            <SquareArrowOutUpRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </BentoCard>
  );
}
