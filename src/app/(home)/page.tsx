"use client";

import { BentoGrid } from "@/components/ui/bento-grid";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { useAnimation } from "@/lib/animation-context";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { use3DCardEffect } from "@/hooks/use-3d-card-effect";
import {
  cardVariants,
  containerVariants,
  layoutTransition,
} from "@/lib/animation-variants";
import HeaderCard from "../(home)/_components/header-card";
import TitleCard from "../(home)/_components/title-card";
import DescriptionCard from "../(home)/_components/description-card";
import PictureCard from "../(home)/_components/picture-card";
import ProjectsCard from "../(home)/_components/projects-card";
import SocialsCard from "../(home)/_components/socials-card";
import ContactCard from "../(home)/_components/contact-card";
import ScrollDown from "@/components/ui/scroll-down";

const SCROLL_THRESHOLD = 0.2;

// Motion components - memoized outside component to prevent recreation
const MotionHeaderCard = motion(HeaderCard);
const MotionTitleCard = motion(TitleCard);
const MotionDescriptionCard = motion(DescriptionCard);
const MotionPictureCard = motion(PictureCard);
const MotionProjectsCard = motion(ProjectsCard);
const MotionSocialsCard = motion(SocialsCard);
const MotionContactCard = motion(ContactCard);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpoint();
  const isMobile = useMemo(
    () => breakpoint === "xs" || breakpoint === "sm" || breakpoint === "md",
    [breakpoint],
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { persistedProgress, setPersistedProgress } = useAnimation();
  const [isGrid, setIsGrid] = useState(
    () => persistedProgress > SCROLL_THRESHOLD,
  );

  const cardEffect = use3DCardEffect({ rotationIntensity: 10 });

  const setIsGridCallback = useCallback(
    (progress: number) => {
      if (isMobile) return;

      if (progress > persistedProgress) {
        setPersistedProgress(progress);
      }

      const shouldBeGrid = progress > SCROLL_THRESHOLD;
      setIsGrid(shouldBeGrid);
    },
    [persistedProgress, setPersistedProgress, isMobile],
  );

  useEffect(() => {
    if (isMobile) {
      setIsGrid(true);
      return;
    }

    if (persistedProgress > SCROLL_THRESHOLD) {
      setIsGrid(true);

      const scrollPosition =
        persistedProgress *
        (document.documentElement.scrollHeight - window.innerHeight);
      window.scrollTo({ top: scrollPosition, behavior: "instant" });
    }
  }, [persistedProgress, isMobile]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", setIsGridCallback);
    return () => unsubscribe();
  }, [scrollYProgress, setIsGridCallback]);

  const containerClasses = useMemo(
    () =>
      `${isMobile ? "min-h-screen" : "min-h-[200vh]"} relative mx-auto max-w-[110rem]`,
    [isMobile],
  );

  const gridClasses = useMemo(
    () => `${isMobile ? "relative" : "fixed inset-0"} mx-auto max-w-[110rem]`,
    [isMobile],
  );

  return (
    <div ref={containerRef} className={containerClasses}>
      {!isGrid && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="relative">
            <div
              ref={cardEffect.containerRef}
              style={cardEffect.containerStyle}
              onMouseEnter={cardEffect.onMouseEnter}
              onMouseLeave={cardEffect.onMouseLeave}
            >
              <motion.div ref={cardEffect.ref} style={cardEffect.style}>
                <MotionPictureCard
                  layoutId="picture"
                  layout
                  className="!col-span-auto !row-span-auto pointer-events-auto h-80 w-64 scale-110 lg:h-96 lg:w-80 lg:scale-150"
                  transition={layoutTransition}
                />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-32 lg:translate-y-56">
              <ScrollDown size="md" />
            </div>
          </div>
        </div>
      )}

      {isGrid && (
        <motion.div
          className={gridClasses}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <BentoGrid className="h-auto grid-rows-none p-3 will-change-transform lg:h-screen lg:grid-rows-10 lg:p-5">
            <AnimatePresence>
              <MotionHeaderCard
                key="header"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />

              <MotionTitleCard
                key="title"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />

              <MotionPictureCard
                layoutId="picture"
                layout
                transition={layoutTransition}
              />

              <MotionProjectsCard
                key="projects"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />

              <MotionDescriptionCard
                key="description"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />

              <MotionContactCard
                key="contact"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />

              <MotionSocialsCard
                key="socials"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
            </AnimatePresence>
          </BentoGrid>
        </motion.div>
      )}
    </div>
  );
}
