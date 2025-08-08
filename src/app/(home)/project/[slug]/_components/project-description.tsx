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
    <BentoCard className="col-span-12 lg:col-span-4 lg:row-span-5 px-6 lg:pl-11 lg:pr-12 xl:pr-24 py-6 lg:py-8 xl:py-12">
      <div className="flex sm:flex-row flex-col sm:items-end gap-4">
        <p className="font-satoshi text-sm sm:text-base lg:text-md xl:text-lg">
          {description}
        </p>
        <Button asChild variant="portfolio" className="sm:hidden flex">
          <Link href={url} target="_blank" rel="noopener">
            Visiter
            <SquareArrowOutUpRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </BentoCard>
  );
}
