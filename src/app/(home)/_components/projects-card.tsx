import { BentoCard } from "@/components/ui/bento-grid";

export default function ProjectsCard(
  props: React.ComponentPropsWithRef<typeof BentoCard>
) {
  return (
    <BentoCard
      ref={props.ref}
      className="lg:col-span-4 col-span-12 lg:row-span-8"
    >
      <div className="text-2xl">Projets</div>
    </BentoCard>
  );
}
