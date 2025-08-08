import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef, useMemo, useState } from "react";
import { ArrowUpRight, MoveRight } from "lucide-react";
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
      className="font-kaisei col-span-12 px-4 lg:col-span-4 lg:row-span-8 lg:px-7"
    >
      <ul>
        {projects.map((project, i) => (
          <li
            className="group hover:bg-secondary hover:text-secondary-foreground relative rounded-lg px-4 py-4 hover:cursor-none lg:py-8"
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
            <div className="flex items-center justify-between">
              <span className="text-2xl lg:text-4xl">{project.name}</span>
              <MoveRight className="h-6 w-6 lg:h-10 lg:w-10" />
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
                className="custom-cursor bg-secondary-foreground pointer-events-none fixed z-50 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full"
                style={{ left: cursorPosition.x, top: cursorPosition.y }}
              >
                <ArrowUpRight className="text-secondary h-8 w-8" />
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
