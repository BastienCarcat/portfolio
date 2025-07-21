import { BentoCard } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

export default function TitleCard(
  props: React.ComponentPropsWithRef<typeof BentoCard>,
  className?: string
) {
  return (
    <BentoCard
      ref={props.ref}
      className={cn("lg:col-span-3 col-span-12 lg:row-span-5", className)}
    >
      <div className="text-2xl">Photo</div>
    </BentoCard>
  );
}
