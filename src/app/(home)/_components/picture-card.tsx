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
        "col-span-12 overflow-hidden p-0 lg:col-span-3 lg:row-span-5",
        className,
      )}
    >
      <div className="relative aspect-[3/4] h-full w-full">
        <Image
          src="/profile-picture.png"
          alt="Picture of me"
          fill
          className="scale-125 object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </BentoCard>
  );
});

PictureCard.displayName = "PictureCard";

export default PictureCard;
