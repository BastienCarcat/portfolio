"use client";

import { BentoGrid } from "@/components/ui/bento-grid";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import HeaderCard from "../(home)/_components/header-card";
import TitleCard from "../(home)/_components/title-card";
import DescriptionCard from "../(home)/_components/description-card";
import PictureCard from "../(home)/_components/picture-card";
import ProjectsCard from "../(home)/_components/projects-card";
import SocialsCard from "../(home)/_components/socials-card";
import ContactCard from "../(home)/_components/contact-card";

export default function MotionGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      setIsGrid(progress > 0.2);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Animation variants pour les autres cartes
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  // Container variants pour l'animation échelonnée
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const MotionHeaderCard = motion(HeaderCard);
  const MotionTitleCard = motion(TitleCard);
  const MotionDescriptionCard = motion(DescriptionCard);
  const MotionPictureCard = motion(PictureCard);
  const MotionProjectsCard = motion(ProjectsCard);
  const MotionSocialsCard = motion(SocialsCard);
  const MotionContactCard = motion(ContactCard);

  return (
    <div ref={containerRef} className="min-h-[200vh] relative">
      {/* État initial : Photo centrée avec scale */}
      {!isGrid && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <MotionPictureCard
            layoutId="picture"
            layout
            className="scale-150 pointer-events-auto !col-span-auto !row-span-auto w-80 h-96"
            transition={{
              layout: {
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1],
              },
            }}
          />
        </div>
      )}

      {/* État grid : Photo dans la grid avec autres cartes */}
      {isGrid && (
        <motion.div
          className="fixed inset-0 p-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <BentoGrid className="h-screen grid-rows-10">
            <AnimatePresence>
              <MotionHeaderCard
                key="header"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="pointer-events-auto"
              />

              <MotionTitleCard
                key="title"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="pointer-events-auto"
              />

              {/* PictureCard avec taille responsive naturelle */}
              <MotionPictureCard
                layoutId="picture"
                layout
                className="pointer-events-auto"
                transition={{
                  layout: {
                    duration: 0.8,
                    ease: [0.25, 0.25, 0, 1],
                  },
                }}
              />

              <MotionProjectsCard
                key="projects"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="pointer-events-auto"
              />

              <MotionDescriptionCard
                key="description"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="pointer-events-auto"
              />

              <MotionContactCard
                key="contact"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="pointer-events-auto"
              />

              <MotionSocialsCard
                key="socials"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="pointer-events-auto"
              />
            </AnimatePresence>
          </BentoGrid>
        </motion.div>
      )}
    </div>
  );
}