import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useCallback } from "react";

interface ScrollDownProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  chevronsNumber?: number;
}

const sizeConfig = {
  sm: {
    width: "w-[24px]",
    height: "h-[40px]",
    border: "border-2",
    dot: "w-1 h-1",
    chevron: "w-3 h-3",
  },
  md: {
    width: "w-[30px]",
    height: "h-[50px]",
    border: "border-[3px]",
    dot: "w-1.5 h-1.5",
    chevron: "w-4 h-4",
  },
  lg: {
    width: "w-[36px]",
    height: "h-[60px]",
    border: "border-4",
    dot: "w-2 h-2",
    chevron: "w-5 h-5",
  },
};

const MotionChevronDown = motion(ChevronDown);

export default function ScrollDown({
  className,
  size = "md",
  chevronsNumber = 3,
}: ScrollDownProps) {
  const config = useMemo(() => sizeConfig[size], [size]);

  const dotAnimation = useMemo(
    () => ({
      opacity: [0, 1, 0, 0],
      height: ["6px", "10px", "10px", "3px"],
      y: [0, 0, 20, 20],
    }),
    [],
  );

  const dotTransition = useMemo(
    () => ({
      duration: 2,
      repeat: Infinity,
      times: [0, 0.4, 0.8, 1],
      ease: "easeOut" as const,
    }),
    [],
  );

  const chevronAnimation = useMemo(
    () => ({
      opacity: [0, 0.5],
    }),
    [],
  );

  const getChevronTransition = useCallback(
    (index: number) => ({
      delay: index * 0.25,
      duration: 0.7,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    }),
    [],
  );

  const dotBottomStyle = useMemo(
    () => ({
      bottom: size === "sm" ? "24px" : size === "md" ? "30px" : "36px",
    }),
    [size],
  );

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative mb-3">
        <div
          className={cn(
            "border-secondary relative box-border rounded-[50px]",
            config.width,
            config.height,
            config.border,
          )}
        >
          <motion.div
            className={cn(
              "bg-secondary absolute left-1/2 -translate-x-1/2 rounded-full",
              config.dot,
            )}
            style={dotBottomStyle}
            animate={dotAnimation}
            transition={dotTransition}
          />
        </div>
      </div>

      {chevronsNumber > 0 && (
        <div className="flex flex-col items-center">
          {[...Array(chevronsNumber)].map((_, index) => (
            <MotionChevronDown
              key={index}
              className={cn("text-secondary -mt-1.5", config.chevron)}
              animate={chevronAnimation}
              transition={getChevronTransition(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
