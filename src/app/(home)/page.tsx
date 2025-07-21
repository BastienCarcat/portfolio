"use client";

import { BentoGrid } from "@/components/ui/bento-grid";
import { motion, useScroll } from "motion/react";
import { useRef, useState, useEffect, useMemo } from "react";
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

  const animate = useMemo(() => {
    if (isGrid) {
      return "scrollDown";
    } else {
      return "scrollUp";
    }
  }, [isGrid]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (p) => {
      setIsGrid(p > 0.2); // seuil à ajuster
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const cardVariants = {
    scrollUp: { y: 50, opacity: 0 },
    scrollDown: { y: 0, opacity: 1 },
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
      {/* PHOTO CARD CENTRÉE */}
      {!isGrid && (
        <motion.div
          layoutId="picture"
          className="fixed top-1/2 left-1/2 z-50 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
        >
          <PictureCard className="custom-class" children={null} />
        </motion.div>
        // <MotionPictureCard
        //   layoutId="picture"
        //   className="fixed top-1/2 left-1/2 z-50 w-64 h-64 transform -translate-x-1/2 flex items-center justify-center -translate-y-1/2"
        //   children={null}
        // />
      )}

      {/* GRID CONTENANT LES AUTRES CARTES */}
      {isGrid && (
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none">
          <BentoGrid className="h-screen p-5 grid-rows-10">
            <MotionHeaderCard
              animate={animate}
              initial="scrollUp"
              variants={cardVariants}
            ></MotionHeaderCard>
            <MotionTitleCard
              animate={animate}
              initial="scrollUp"
              variants={cardVariants}
            ></MotionTitleCard>
            {/* <motion.div
              layoutId="picture"
              className="lg:col-span-3 col-span-12 lg:row-span-5"
            >
              <PictureCard className="custom-class" children={null} />
            </motion.div> */}
            <MotionPictureCard layoutId="picture" />
            <MotionProjectsCard
              animate={animate}
              initial="scrollUp"
              variants={cardVariants}
            ></MotionProjectsCard>
            <MotionDescriptionCard
              animate={animate}
              initial="scrollUp"
              variants={cardVariants}
            ></MotionDescriptionCard>
            <MotionContactCard
              animate={animate}
              initial="scrollUp"
              variants={cardVariants}
            ></MotionContactCard>
            <MotionSocialsCard
              animate={animate}
              initial="scrollUp"
              variants={cardVariants}
            ></MotionSocialsCard>
          </BentoGrid>
        </div>
      )}
    </div>
  );
}
