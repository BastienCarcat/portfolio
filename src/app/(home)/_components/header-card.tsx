import { BentoCard } from "@/components/ui/bento-grid";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { siteConfig } from "@/config/site";
import { Mail, SendHorizonal } from "lucide-react";
import { forwardRef, useCallback } from "react";

const HeaderCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  const handleMailtoClick = useCallback(() => {
    window.location.href = `mailto:${siteConfig.contact.email}`;
  }, []);
  return (
    <BentoCard ref={ref} className="col-span-12 lg:row-span-1 py-2">
      <div className="flex items-center justify-between h-full">
        <p className="text-2xl tracking-tighter font-kaisei">
          Bastien
          <span className="font-light"> CARCAT</span>
        </p>
        <InteractiveHoverButton
          icon={<Mail className="h-4 w-4" />}
          onClick={handleMailtoClick}
        >
          Contact
        </InteractiveHoverButton>
      </div>
    </BentoCard>
  );
});

HeaderCard.displayName = "HeaderCard";

export default HeaderCard;
