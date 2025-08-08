import { BentoCard } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { siteConfig } from "@/config/site";
import { Calendar } from "lucide-react";
import { forwardRef, useCallback } from "react";

const HeaderCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {

  const handleMailtoClick = useCallback(() => {
    window.open(siteConfig.contact.callBooking, "_blank");
  }, []);

  return (
    <BentoCard
      ref={ref}
      className="col-span-12 px-4 py-4 lg:col-span-12 lg:row-span-1 lg:px-11 lg:py-2"
    >
      <div className="flex h-full items-center justify-between">
        <p className="font-kaisei text-xl tracking-tighter lg:text-2xl">
          Bastien
          <span className="font-light"> CARCAT</span>
        </p>
        <InteractiveHoverButton
          className="hidden px-4 py-2 sm:block md:py-2 lg:px-6"
          icon={<Calendar className="h-3 w-3 lg:h-4 lg:w-4" />}
          onClick={handleMailtoClick}
        >
          <span className="text-sm lg:text-base">Réserver un appel</span>
        </InteractiveHoverButton>
        <Button
          className="block sm:hidden"
          variant="portfolio"
          onClick={handleMailtoClick}
        >
          Réserver un appel
        </Button>
      </div>
    </BentoCard>
  );
});

HeaderCard.displayName = "HeaderCard";

export default HeaderCard;
