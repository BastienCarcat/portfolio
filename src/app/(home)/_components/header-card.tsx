import { BentoCard } from "@/components/ui/bento-grid";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Mail, SendHorizonal } from "lucide-react";
import { forwardRef } from "react";

const HeaderCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard ref={ref} className="col-span-12 lg:row-span-1 py-2">
      <div className="flex items-center justify-between h-full">
        <p className="text-2xl tracking-tighter font-literata">
          Bastien
          <span className="font-light"> CARCAT</span>
        </p>
        <InteractiveHoverButton icon={<Mail className="h-4 w-4" />}>
          Contact
        </InteractiveHoverButton>
      </div>
    </BentoCard>
  );
});

HeaderCard.displayName = "HeaderCard";

export default HeaderCard;
