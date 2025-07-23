import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef } from "react";

const TitleCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard ref={ref} className="lg:col-span-5 col-span-12 lg:row-span-5">
      <div className="text-2xl">Title</div>
    </BentoCard>
  );
});

TitleCard.displayName = "TitleCard";

export default TitleCard;
