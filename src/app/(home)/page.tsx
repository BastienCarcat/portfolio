"use client";

import { BentoGrid } from "@/components/ui/bento-grid";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import HeaderCard from "../(home)/_components/header-card";
import TitleCard from "../(home)/_components/title-card";
import DescriptionCard from "../(home)/_components/description-card";
import PictureCard from "../(home)/_components/picture-card";
import ProjectsCard from "../(home)/_components/projects-card";
import SocialsCard from "../(home)/_components/socials-card";
import ContactCard from "../(home)/_components/contact-card";
import { Mouse } from "lucide-react";

export default function MotionGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isGrid, setIsGrid] = useState(false);

  const setIsGridCallback = useCallback((progress: number) => {
    const shouldBeGrid = progress > 0.2;
    setIsGrid((prev) => (prev !== shouldBeGrid ? shouldBeGrid : prev));
  }, []);

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
    []
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
    []
  );

  const MotionHeaderCard = useMemo(() => motion(HeaderCard), []);
  const MotionTitleCard = useMemo(() => motion(TitleCard), []);
  const MotionDescriptionCard = useMemo(() => motion(DescriptionCard), []);
  const MotionPictureCard = useMemo(() => motion(PictureCard), []);
  const MotionProjectsCard = useMemo(() => motion(ProjectsCard), []);
  const MotionSocialsCard = useMemo(() => motion(SocialsCard), []);
  const MotionContactCard = useMemo(() => motion(ContactCard), []);

  return (
    <div ref={containerRef} className="min-h-[200vh] relative">
      {!isGrid && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="relative">
            <MotionPictureCard
              layoutId="picture"
              layout
              className="scale-150 pointer-events-auto !col-span-auto !row-span-auto w-80 h-96"
              transition={{
                layout: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            />

            <Mouse className="h-9 w-9 absolute bottom-0 left-1/2 transform translate-y-52 -translate-x-1/2" />
          </div>
        </div>
      )}

      {isGrid && (
        <motion.div
          className="fixed inset-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <BentoGrid className="h-screen p-5 grid-rows-10 will-change-transform">
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
