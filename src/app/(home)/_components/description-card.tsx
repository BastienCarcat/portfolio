import SquareCross from "@/components/shapes/square-cross";
import { BentoCard } from "@/components/ui/bento-grid";
import { Breakpoint, useBreakpoint } from "@/hooks/use-breakpoint";
import { forwardRef, useMemo } from "react";

const DescriptionCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  const breakpoint = useBreakpoint();
  const iconSize = useMemo(() => {
    switch (breakpoint) {
      case Breakpoint.Lg:
        return 80;
      case Breakpoint.Md:
        return 70;
      case Breakpoint.SM:
      default:
        return 60;
    }
  }, [breakpoint]);

  return (
    <BentoCard
      ref={ref}
      className="xs:pr-14 col-span-12 px-6 sm:pr-32 lg:col-span-4 lg:row-span-4 lg:pr-18 lg:pl-11 xl:pr-30"
    >
      <div className="absolute top-2 flex flex-col items-center lg:top-3 lg:left-8 xl:top-5 xl:left-10">
        <SquareCross size={iconSize} />
      </div>
      <div className="xs:min-h-48 flex h-full min-h-58 items-end sm:min-h-40">
        <p className="font-satoshi lg:text-md text-base xl:text-lg">
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
