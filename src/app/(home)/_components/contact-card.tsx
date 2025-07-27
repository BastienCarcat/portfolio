import { BentoCard } from "@/components/ui/bento-grid";
import { ArrowUpRight } from "lucide-react";
import { forwardRef, useCallback } from "react";

const ContactCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  const handleMailtoClick = useCallback(() => {
    window.location.href = "mailto:mail";
  }, []);

  return (
    <BentoCard
      ref={ref}
      className="lg:col-span-4 col-span-12 lg:row-span-4 group cursor-pointer"
      variant="accent"
      onClick={handleMailtoClick}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex justify-between items-start">
          <p className="text-2xl">Un projet en tête ? </p>
        </div>

        <div className="text-7xl">
          Contactez <span className="italic">moi</span>
        </div>
      </div>

      <ArrowUpRight className="absolute top-2 right-2 w-24 h-24 stroke-[0.75] transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-3" />
    </BentoCard>
  );
});

ContactCard.displayName = "ContactCard";

export default ContactCard;
