import { BentoCard } from "@/components/ui/bento-grid";

interface ProjectSkillsProps {
  skills: string[];
}

export default function ProjectSkills({ skills }: ProjectSkillsProps) {
  return (
    <BentoCard className="col-span-4 row-span-3 p-6">
      <div>
        <h2 className="text-2xl italic font-kaisei font-semibold mb-8">
          Compétences
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="relative overflow-hidden px-5 py-2 bg-secondary text-secondary-foreground rounded-full text-md font-semibold group/skill"
            >
              <span className="relative z-20">{skill}</span>
              <span className="absolute w-[25px] h-[110px] bg-white/70 opacity-50 -top-[50px] -left-[75px] rotate-[35deg] transition-all duration-[550ms] ease-out z-10 group-hover/skill:left-[125%]"></span>
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
