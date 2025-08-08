import { BentoCard } from "@/components/ui/bento-grid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <BentoCard className="hover:bg-secondary col-span-3 min-h-24 cursor-pointer p-0 transition-colors sm:col-span-2 sm:min-h-28 lg:col-span-1 lg:row-span-2 lg:min-h-32">
      <Link href="/" className="flex h-full items-center justify-center">
        <ArrowLeft className="group-hover:text-secondary-foreground h-7 w-7 transition-colors sm:h-8 sm:w-8" />
      </Link>
    </BentoCard>
  );
}
