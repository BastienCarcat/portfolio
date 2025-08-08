import { BentoCard } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { siteConfig } from "@/config/site";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { forwardRef, useCallback } from "react";

const HeaderCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  const breakpoint = useBreakpoint();

  const handleMailtoClick = useCallback(() => {
    window.open(siteConfig.contact.callBooking, "_blank");
  }, []);

  return (
    <BentoCard
      ref={ref}
      className="col-span-12 lg:col-span-12 lg:row-span-1 py-4 lg:py-2 lg:px-11 px-4"
    >
      <div className="flex items-center justify-between h-full">
        <p className="text-xl lg:text-2xl tracking-tighter font-kaisei">
          Bastien
          <span className="font-light"> CARCAT</span>
        </p>
        <InteractiveHoverButton
          className="md:py-2 lg:px-6 py-2 px-4 sm:block hidden"
          icon={<Calendar className="h-3 w-3 lg:h-4 lg:w-4" />}
          onClick={handleMailtoClick}
        >
          <span className="text-sm lg:text-base">Réserver un appel</span>
        </InteractiveHoverButton>
        <Button
          className="sm:hidden block"
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
