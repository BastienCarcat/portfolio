import SquareCross from "@/components/shapes/square-cross";
import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef } from "react";

const DescriptionCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard
      ref={ref}
      className="lg:col-span-4 col-span-12 lg:row-span-4 pl-11 pr-32"
    >
      <div className="absolute top-5 flex items-center flex-col left-10">
        <SquareCross size={80} />
      </div>
      <div className="flex h-full items-end">
        <p className="font-satoshi text-lg">
          J’ai commencé le développement par curiosité, j’y suis resté par
          passion. Ce qui m’anime aujourd’hui, c’est de créer des interfaces qui
          font la différence : belles, rapides, faciles à maintenir. J’ai
          naturellement trouvé ma voie dans le front-end, à la croisée du design
          et de la technique.
        </p>
      </div>
    </BentoCard>
  );
});

DescriptionCard.displayName = "DescriptionCard";

export default DescriptionCard;
