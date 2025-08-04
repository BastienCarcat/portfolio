import { BentoCard } from "@/components/ui/bento-grid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <BentoCard className="p-0 col-span-1 row-span-2 hover:bg-secondary transition-colors cursor-pointer">
      <Link href="/" className="h-full flex items-center justify-center">
        <ArrowLeft className="w-8 h-8 group-hover:text-secondary-foreground transition-colors" />
      </Link>
    </BentoCard>
  );
}
