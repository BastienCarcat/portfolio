import { BentoCard } from "@/components/ui/bento-grid";
import { ArrowUpRight } from "lucide-react";

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
        className="group flex items-center justify-center w-full h-full rounded-lg transition-colors relative"
      >
        <div className="relative">
          <div
            className="w-21 h-21 border-4 border-secondary-foreground rounded-lg"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 55px) 0, calc(100% - 55px) 55px, 100% 55px, 100% 100%, 0 100%)",
            }}
          />

          <ArrowUpRight className="absolute -top-7 -right-7 w-24 h-24 stroke-[1] transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
        </div>
      </a>
    </BentoCard>
  );
}
