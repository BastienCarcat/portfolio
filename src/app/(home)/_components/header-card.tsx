import { BentoCard } from "@/components/ui/bento-grid";

export default function HeaderCard(
  props: React.ComponentPropsWithRef<typeof BentoCard>
) {
  return (
    <BentoCard ref={props.ref} className="col-span-12 lg:row-span-1">
      <div className="text-2xl">Bastien CARCAT</div>
    </BentoCard>
  );
}
