import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef, useMemo } from "react";

const SocialsCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  const icons = useMemo(
    () => [
      { name: "github", href: "https://github.com" },
      {
        name: "malt",
        href: "https://malt.fr",
      },
      {
        name: "x",
        href: "https://x.com",
      },
      {
        name: "linkedin",
        href: "https://malt.fr",
      },
    ],
    []
  );

  return (
    <BentoCard
      ref={ref}
      className="lg:col-span-4 col-span-12 lg:row-span-1 py-2"
    >
      <div className="flex items-center h-full gap-8 justify-center">
        {icons.map((icon) => (
          <a
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <img
              height="32"
              width="32"
              src={`https://cdn.simpleicons.org/${icon.name}/000000`}
            />
          </a>
        ))}
      </div>
    </BentoCard>
  );
});

SocialsCard.displayName = "SocialsCard";

export default SocialsCard;
