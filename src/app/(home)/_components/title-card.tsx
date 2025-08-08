import Semicircle from "@/components/shapes/semicircle";
import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef, useCallback } from "react";
import { motion } from "motion/react";
import { Breakpoint, useBreakpoint } from "@/hooks/use-breakpoint";

const NUMBER_OF_SHAPES = 3;

const TitleCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  const breakpoint = useBreakpoint();

  const shapeIteration = useCallback(
    (index: number) => {
      let initialSize = 30;
      const initialDelay = NUMBER_OF_SHAPES * 0.1;
      switch (breakpoint) {
        case Breakpoint.Xl:
        case Breakpoint.Xxl:
          initialSize = 60;
          break;
        case Breakpoint.Lg:
          initialSize = 50;
          break;
        case Breakpoint.Md:
          initialSize = 30;
          break;
        default:
          break;
      }

      return {
        size: initialSize + index * 10,
        delay: initialDelay - index * 0.1,
      };
    },
    [breakpoint],
  );

  return (
    <BentoCard
      ref={ref}
      className="font-kaisei col-span-12 px-4 py-6 pr-20 md:pr-18 lg:col-span-5 lg:row-span-5 lg:pl-11 xl:pr-32"
    >
      <div className="absolute top-6 right-4 flex flex-col items-center lg:top-8 lg:right-9 xl:top-10 xl:right-15">
        {Array(NUMBER_OF_SHAPES)
          .fill("")
          .map((_, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2.4,
                delay: shapeIteration(index).delay,
              }}
            >
              <Semicircle size={shapeIteration(index).size} />
            </motion.div>
          ))}
      </div>

      <div className="flex h-full items-end">
        <p className="text-3xl lg:text-5xl lg:leading-13 xl:text-6xl xl:leading-16">
          Développeur d&apos;interfaces web <br className="hidden md:block" />
          <span className="mr-1 font-light italic lg:mr-2">
            modernes{" "}
          </span> et{" "}
          <span className="mr-1 font-light italic lg:mr-2">performantes</span>
        </p>
      </div>
    </BentoCard>
  );
});

TitleCard.displayName = "TitleCard";

export default TitleCard;
