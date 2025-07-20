import { BentoGrid } from "@/components/ui/bento-grid";
import HeaderCard from "./_components/header-card";
import TitleCard from "./_components/title-card";
import DescriptionCard from "./_components/description-card";
import PictureCard from "./_components/picture-card";
import ProjectsCard from "./_components/projects-card";
import SocialsCard from "./_components/socials-card";
import ContactCard from "./_components/contact-card";

export default function Home() {
  return (
    <BentoGrid className="lg:h-screen py-5 lg:grid-rows-10">
      <HeaderCard />
      <TitleCard />
      <PictureCard />
      <ProjectsCard />
      <DescriptionCard />
      <ContactCard />
      <SocialsCard />
    </BentoGrid>
  );
}
