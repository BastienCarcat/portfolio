import Semicircle from "@/components/shapes/semicircle";
import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef } from "react";
import { motion } from "motion/react";

const TitleCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard
      ref={ref}
      className="lg:col-span-5 col-span-12 lg:row-span-5 pl-11 pr-32 font-kaisei"
    >
      <div className="absolute top-10 flex items-center flex-col right-15">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2.4,
            delay: 0.2,
          }}
        >
          <Semicircle size={60} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2.4,
            delay: 0.1,
          }}
        >
          <Semicircle size={70} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2.4,
          }}
        >
          <Semicircle size={80} />
        </motion.div>
      </div>

      <div className="flex items-end h-full">
        <p className="text-6xl leading-16">
          Développeur d’interfaces web{" "}
          <span className="italic font-light mr-2">modernes </span> et{" "}
          <span className="italic font-light mr-2">performantes</span>
        </p>
      </div>
    </BentoCard>
  );
});

TitleCard.displayName = "TitleCard";

export default TitleCard;
