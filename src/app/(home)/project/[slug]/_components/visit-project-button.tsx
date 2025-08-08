import { BentoCard } from "@/components/ui/bento-grid";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface VisitProjectButtonProps {
  url: string;
}

export default function VisitProjectButton({ url }: VisitProjectButtonProps) {
  return (
    <BentoCard
      className="hidden items-center justify-center sm:flex md:col-span-2 lg:row-span-2"
      variant="secondary"
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener"
        className="group relative flex h-full w-full items-center justify-center rounded-lg transition-colors"
      >
        <div className="relative">
          <div
            className="border-secondary-foreground h-21 w-21 rounded-lg border-4"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 55px) 0, calc(100% - 55px) 55px, 100% 55px, 100% 100%, 0 100%)",
            }}
          />

          <ArrowUpRight className="absolute -top-7 -right-7 h-24 w-24 stroke-[1] transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
        </div>
      </Link>
    </BentoCard>
  );
}
