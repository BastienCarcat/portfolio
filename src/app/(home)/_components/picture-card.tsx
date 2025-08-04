import { BentoCard } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { forwardRef } from "react";

const PictureCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((props, ref) => {
  const { className } = props;

  return (
    <BentoCard
      ref={ref}
      className={cn(
        "lg:col-span-3 col-span-12 lg:row-span-5 overflow-hidden p-0",
        className
      )}
    >
      <div className="relative w-full h-full aspect-[3/4]">
        <Image
          src="/profile-picture.png"
          alt="Picture of me"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </BentoCard>
  );
});

PictureCard.displayName = "PictureCard";

export default PictureCard;
