import { BentoCard } from "@/components/ui/bento-grid";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import { forwardRef, useCallback } from "react";

const ContactCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  const handleMailtoClick = useCallback(() => {
    window.location.href = `mailto:${siteConfig.contact.email}`;
  }, []);

  return (
    <BentoCard
      ref={ref}
      className="col-span-12 lg:col-span-4 lg:row-span-4 group cursor-pointer font-kaisei"
      variant="secondary"
      onClick={handleMailtoClick}
    >
      <div className="flex h-full flex-col justify-between min-h-32 md:min-h-44">
        <div className="flex justify-between items-start">
          <p className="text-md md:text-lg lg:text-xl font-satoshi">
            Un projet en tête ?
          </p>
        </div>

        <div className="text-4xl md:text-5xl xl:text-6xl">
          Me <span className="italic">contacter</span>
        </div>
      </div>

      <ArrowUpRight className="absolute top-2 right-2 w-18 h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 stroke-[0.75] transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-3" />
    </BentoCard>
  );
});

ContactCard.displayName = "ContactCard";

export default ContactCard;
