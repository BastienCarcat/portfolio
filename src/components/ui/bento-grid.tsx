import { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className: string;
  ref?: React.Ref<HTMLDivElement>;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full grid-cols-12 gap-4", className)} {...props}>
      {children}
    </div>
  );
};

const BentoCard = ({ className, children, ...props }: BentoCardProps) => (
  <div
    ref={props.ref}
    className={cn(
      "group relative overflow-hidden px-11 py-7 rounded-xl",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    {children}
  </div>
);

export { BentoCard, BentoGrid };
