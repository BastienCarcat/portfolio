import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef } from "react";

const TitleCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard ref={ref} className="lg:col-span-5 col-span-12 lg:row-span-5">
      <div className="flex items-end h-full">
        <p className="text-8xl">
          Développeur d’interfaces web{" "}
          <span className="italic font-light mr-2">modernes </span> et{" "}
          <span className="italic font-light mr-2">performantes</span> en React
          / Next.js
        </p>
      </div>
    </BentoCard>
  );
});

TitleCard.displayName = "TitleCard";

export default TitleCard;
