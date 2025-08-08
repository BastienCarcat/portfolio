"use client";

import { BentoGrid } from "@/components/ui/bento-grid";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { useAnimation } from "@/lib/animation-context";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import HeaderCard from "../(home)/_components/header-card";
import TitleCard from "../(home)/_components/title-card";
import DescriptionCard from "../(home)/_components/description-card";
import PictureCard from "../(home)/_components/picture-card";
import ProjectsCard from "../(home)/_components/projects-card";
import SocialsCard from "../(home)/_components/socials-card";
import ContactCard from "../(home)/_components/contact-card";
import { Mouse } from "lucide-react";

export default function HomePage() {
  const containerRef = useRef(null);
  const breakpoint = useBreakpoint();
  const isMobile =
    breakpoint === "xs" || breakpoint === "sm" || breakpoint === "md";
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { persistedProgress, setPersistedProgress } = useAnimation();
  const [isGrid, setIsGrid] = useState(persistedProgress > 0.2);

  const setIsGridCallback = useCallback(
    (progress: number) => {
      if (isMobile) {
        return;
      }

      if (progress > persistedProgress) {
        setPersistedProgress(progress);
      }

      const shouldBeGrid = progress > 0.2;
      setIsGrid(shouldBeGrid);
    },
    [persistedProgress, setPersistedProgress, isMobile],
  );

  useEffect(() => {
    if (isMobile) {
      setIsGrid(true);
      return;
    }

    if (persistedProgress > 0.2) {
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

  const cardVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        scale: 0.9,
        y: 20,
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      },
    }),
    [],
  );

  const containerVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.1,
        },
      },
    }),
    [],
  );

  const MotionHeaderCard = useMemo(() => motion(HeaderCard), []);
  const MotionTitleCard = useMemo(() => motion(TitleCard), []);
  const MotionDescriptionCard = useMemo(() => motion(DescriptionCard), []);
  const MotionPictureCard = useMemo(() => motion(PictureCard), []);
  const MotionProjectsCard = useMemo(() => motion(ProjectsCard), []);
  const MotionSocialsCard = useMemo(() => motion(SocialsCard), []);
  const MotionContactCard = useMemo(() => motion(ContactCard), []);

  return (
    <div
      ref={containerRef}
      className={`${isMobile ? "min-h-screen" : "min-h-[200vh]"} relative mx-auto max-w-[110rem]`}
    >
      {!isGrid && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="relative">
            <MotionPictureCard
              layoutId="picture"
              layout
              className="!col-span-auto !row-span-auto pointer-events-auto h-80 w-64 scale-110 lg:h-96 lg:w-80 lg:scale-150"
              transition={{
                layout: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            />

            <Mouse className="absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2 translate-y-32 transform lg:h-9 lg:w-9 lg:translate-y-48" />
          </div>
        </div>
      )}

      {isGrid && (
        <motion.div
          className={`${isMobile ? "relative" : "fixed inset-0"} mx-auto max-w-[110rem]`}
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
                transition={{
                  layout: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
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
