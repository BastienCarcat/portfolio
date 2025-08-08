import { BentoCard } from "@/components/ui/bento-grid";

interface ProjectSkillsProps {
  skills: string[];
}

export default function ProjectSkills({ skills }: ProjectSkillsProps) {
  return (
    <BentoCard className="col-span-12 p-6 lg:col-span-4 lg:row-span-3">
      <div>
        <h2 className="font-kaisei mb-4 text-lg font-semibold italic sm:mb-6 sm:text-xl lg:mb-8 lg:text-2xl">
          Compétences
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground lg:text-md group/skill relative overflow-hidden rounded-full px-3 py-1 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm lg:px-5"
            >
              <span className="relative z-20">{skill}</span>
              <span className="absolute -top-[50px] -left-[75px] z-10 h-[110px] w-[25px] rotate-[35deg] bg-white/70 opacity-50 transition-all duration-[550ms] ease-out group-hover/skill:left-[125%]"></span>
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
