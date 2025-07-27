import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef } from "react";

const HeaderCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard ref={ref} className="col-span-12 lg:row-span-1 py-2">
      <div className="flex items-center h-full">
        <p className="text-6xl font-newtitle">
          Bastien
          <span className="font-light"> CARCAT</span>
        </p>
      </div>
    </BentoCard>
  );
});

HeaderCard.displayName = "HeaderCard";

export default HeaderCard;
