import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

const bentoCardVariants = cva(
  "group relative px-11 py-7 rounded-xl transform-gpu transition-colors",
  {
    variants: {
      variant: {
        secondary:
          // light styles
          "bg-secondary text-secondary-foreground " +
          // dark styles
          "dark:bg-secondary text-secondary-foreground ",
        default:
          // light styles
          "text-primary-foreground bg-primary " +
          // dark styles
          "dark:bg-primary text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BentoCardProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof bentoCardVariants> {
  children: ReactNode;
  className?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full grid-cols-12 gap-4", className)} {...props}>
      {children}
    </div>
  );
};

const BentoCard = forwardRef<HTMLDivElement, BentoCardProps>(
  ({ className, variant, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative",
        // light styles,
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles,
        "dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
        bentoCardVariants({ variant, className }),
      )}
      {...props}
    >
      {children}
    </div>
  ),
);

BentoCard.displayName = "BentoCard";

export { BentoCard, BentoGrid, bentoCardVariants };
