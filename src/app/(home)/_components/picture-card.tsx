import { BentoCard } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>(function PictureCard(props, ref) {
  const { className, ...otherProps } = props;
  
  return (
    <BentoCard
      ref={ref}
      className={cn("lg:col-span-3 col-span-12 lg:row-span-5 overflow-hidden p-0", className)}
      {...otherProps}
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