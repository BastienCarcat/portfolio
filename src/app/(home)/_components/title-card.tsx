import { BentoCard } from "@/components/ui/bento-grid";

export default function TitleCard(
  props: React.ComponentPropsWithRef<typeof BentoCard>
) {
  return (
    <BentoCard
      ref={props.ref}
      className="lg:col-span-5 col-span-12 lg:row-span-5"
    >
      <div className="text-2xl">Title</div>
    </BentoCard>
  );
}
