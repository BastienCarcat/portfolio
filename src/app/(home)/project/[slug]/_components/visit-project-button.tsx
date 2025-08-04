import { BentoCard } from "@/components/ui/bento-grid";
import { ExternalLink } from "lucide-react";

interface VisitProjectButtonProps {
  url: string;
}

export default function VisitProjectButton({ url }: VisitProjectButtonProps) {
  return (
    <BentoCard
      className="col-span-2 row-span-2 flex items-center justify-center"
      variant="secondary"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full hover:bg-secondary rounded-lg transition-colors"
      >
        <ExternalLink className="w-8 h-8" />
      </a>
    </BentoCard>
  );
}
