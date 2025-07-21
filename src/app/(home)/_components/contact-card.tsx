import { BentoCard } from "@/components/ui/bento-grid";

export default function ContactCard(
  props: React.ComponentPropsWithRef<typeof BentoCard>
) {
  return (
    <BentoCard
      ref={props.ref}
      className="lg:col-span-4 col-span-12 lg:row-span-4"
    >
      <div className="text-2xl">Contact</div>
    </BentoCard>
  );
}
