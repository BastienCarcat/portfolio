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
      let initialDelay = NUMBER_OF_SHAPES * 0.1;
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
    [breakpoint, NUMBER_OF_SHAPES]
  );

  return (
    <BentoCard
      ref={ref}
      className="col-span-12 lg:col-span-5 lg:row-span-5 px-4 py-6 lg:pl-11 pr-20 md:pr-18 xl:pr-32 font-kaisei"
    >
      <div className="absolute top-6 lg:top-8 xl:top-10 flex items-center flex-col right-4 lg:right-9 xl:right-15">
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

      <div className="flex items-end h-full">
        <p className="text-3xl lg:text-5xl xl:text-6xl lg:leading-13 xl:leading-16">
          Développeur d'interfaces web <br className="hidden md:block" />
          <span className="italic font-light mr-1 lg:mr-2">
            modernes{" "}
          </span> et{" "}
          <span className="italic font-light mr-1 lg:mr-2">performantes</span>
        </p>
      </div>
    </BentoCard>
  );
});

TitleCard.displayName = "TitleCard";

export default TitleCard;
