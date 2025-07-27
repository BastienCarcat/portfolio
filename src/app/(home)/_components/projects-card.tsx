import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ProjectsCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const projects = useMemo(() => {
    return [
      { name: "GymFit", id: 0 },
      { name: "Forminotion", id: 1 },
      { name: "Thumbly", id: 2 },
    ];
  }, []);

  return (
    <BentoCard ref={ref} className="lg:col-span-4 col-span-12 lg:row-span-8">
      <ul>
        {projects.map((project, i) => (
          <motion.li
            whileHover={{
              backgroundColor: "red",
              transition: { duration: 1 },
            }}
            className="py-6 group relative hover:cursor-none"
            key={i}
            onMouseEnter={(e) => {
              setHoveredIndex(i);
              setCursorPosition({ x: e.clientX, y: e.clientY });
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={(e) => {
              setCursorPosition({ x: e.clientX, y: e.clientY });
            }}
          >
            <span className="text-6xl">{project.name}</span>
            {hoveredIndex === project.id && (
              <div
                className="custom-cursor fixed w-10 h-10 bg-black rounded-full flex items-center justify-center pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: cursorPosition.x, top: cursorPosition.y }}
              >
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </BentoCard>
  );
});

ProjectsCard.displayName = "ProjectsCard";

export default ProjectsCard;
