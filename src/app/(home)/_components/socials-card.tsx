import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef } from "react";

const SocialsCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard ref={ref} className="lg:col-span-4 col-span-12 lg:row-span-1">
      <div className="text-2xl">Réseaux</div>
    </BentoCard>
  );
});

SocialsCard.displayName = "SocialsCard";

export default SocialsCard;
