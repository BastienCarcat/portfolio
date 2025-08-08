import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef, useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const ProjectsCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const projects = useMemo(() => {
    return [
      { name: "Gym Fit", id: 0, key: "gym-fit" },
      { name: "Forminotion", id: 1, key: "forminotion" },
      { name: "Thumbly", id: 2, key: "thumbly" },
    ];
  }, []);

  const handleProjectClick = (projectKey: string) => {
    router.push(`/project/${projectKey}`);
  };

  return (
    <BentoCard
      ref={ref}
      className="col-span-12 lg:col-span-4 lg:row-span-8 font-kaisei px-4 lg:px-7"
    >
      <ul>
        {projects.map((project, i) => (
          <li
            className="py-4 lg:py-8 px-4 group relative hover:cursor-none rounded-lg hover:bg-secondary hover:text-secondary-foreground"
            key={i}
            onClick={() => handleProjectClick(project.key)}
            onMouseEnter={(e) => {
              setHoveredIndex(i);
              setCursorPosition({ x: e.clientX, y: e.clientY });
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={(e) => {
              setCursorPosition({ x: e.clientX, y: e.clientY });
            }}
          >
            <div className="flex justify-between items-center">
              <span className="text-2xl lg:text-4xl">{project.name}</span>
              <MoveRight className="w-6 h-6 lg:w-10 lg:h-10" />
            </div>

            {/* <motion.div
              whileHover={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
            
              }}
              className="flex justify-between items-center rounded-lg hover:bg-card-accent"
            > <span className="text-5xl">{project.name}</span>
              <MoveRight className="w-10 h-10" /></motion.div> */}

            {hoveredIndex === project.id && (
              <div
                className="custom-cursor fixed w-14 h-14 bg-secondary-foreground rounded-full flex items-center justify-center pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: cursorPosition.x, top: cursorPosition.y }}
              >
                <ArrowUpRight className="w-8 h-8 text-secondary" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
});

ProjectsCard.displayName = "ProjectsCard";

export default ProjectsCard;
