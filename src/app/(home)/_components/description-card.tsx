import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef } from "react";

const DescriptionCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard ref={ref} className="lg:col-span-4 col-span-12 lg:row-span-4">
      <div className="text-2xl">Description</div>
    </BentoCard>
  );
});

DescriptionCard.displayName = "DescriptionCard";

export default DescriptionCard;
