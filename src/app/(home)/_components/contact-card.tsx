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
      className="group font-kaisei col-span-12 cursor-pointer lg:col-span-4 lg:row-span-4"
      variant="secondary"
      onClick={handleMailtoClick}
    >
      <div className="flex h-full min-h-32 flex-col justify-between md:min-h-44">
        <div className="flex items-start justify-between">
          <p className="text-md font-satoshi md:text-lg lg:text-xl">
            Un projet en tête ?
          </p>
        </div>

        <div className="text-4xl md:text-5xl xl:text-6xl">
          Me <span className="italic">contacter</span>
        </div>
      </div>

      <ArrowUpRight className="absolute top-2 right-2 h-18 w-18 stroke-[0.75] transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-3 md:h-20 md:w-20 lg:h-24 lg:w-24" />
    </BentoCard>
  );
});

ContactCard.displayName = "ContactCard";

export default ContactCard;
