import { BentoCard } from "@/components/ui/bento-grid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <BentoCard className="p-0 col-span-3 sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-24 sm:min-h-28 lg:min-h-32 hover:bg-secondary transition-colors cursor-pointer">
      <Link href="/" className="h-full flex items-center justify-center">
        <ArrowLeft className="w-7 h-7 sm:w-8 sm:h-8 group-hover:text-secondary-foreground transition-colors" />
      </Link>
    </BentoCard>
  );
}
