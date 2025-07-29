import Semicircle from "@/components/shapes/semicircle";
import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef } from "react";

const TitleCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard
      ref={ref}
      className="lg:col-span-5 col-span-12 lg:row-span-5 pl-11 pr-32 font-literata"
    >
      <div className="absolute top-10 flex items-center flex-col right-15">
        <Semicircle size={60} />
        <Semicircle size={70} />
        <Semicircle size={80} />
      </div>

      <div className="flex items-end h-full">
        <p className="text-5xl leading-13">
          Développeur d’interfaces web{" "}
          <span className="italic font-light mr-2">modernes </span> et{" "}
          <span className="italic font-light mr-2">performantes</span> en React
          et Next.js
        </p>
      </div>
    </BentoCard>
  );
});

TitleCard.displayName = "TitleCard";

export default TitleCard;
