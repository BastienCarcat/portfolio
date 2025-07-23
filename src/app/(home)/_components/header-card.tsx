import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef } from "react";

const HeaderCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard ref={ref} className="col-span-12 lg:row-span-1">
      <div className="text-2xl">Bastien CARCAT</div>
    </BentoCard>
  );
});

HeaderCard.displayName = "HeaderCard";

export default HeaderCard;
