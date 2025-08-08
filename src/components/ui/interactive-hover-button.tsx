import React, { JSX, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  icon: JSX.Element;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, icon, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group/button relative w-auto cursor-pointer overflow-hidden rounded-md bg-secondary py-2 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-md bg-secondary-foreground transition-all duration-300 group-hover/button:scale-[100.8]"></div>
        <span className="text-secondary-foreground inline-block transition-all duration-300 group-hover/button:translate-x-12 group-hover/button:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-secondary opacity-0 transition-all duration-300 group-hover/button:-translate-x-5 group-hover/button:opacity-100">
        <span>{children}</span>
        {icon}
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
