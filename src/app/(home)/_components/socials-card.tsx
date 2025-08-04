import { LinkedinIcon } from "@/components/icons/linkedin";
import { BentoCard } from "@/components/ui/bento-grid";
import { siteConfig } from "@/config/site";
import { forwardRef, JSX, useMemo } from "react";

type Icon = {
  name: string;
  href: string;
  icon?: JSX.Element;
};

const SocialsCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  const icons: Icon[] = useMemo(
    () => [
      { name: "github", href: siteConfig.social.github },
      {
        name: "malt",
        href: siteConfig.social.malt,
      },
      {
        name: "x",
        href: siteConfig.social.x,
      },
      {
        name: "linkedin",
        href: siteConfig.social.linkedin,
        icon: <LinkedinIcon className="w-8 h-8 text-secondary" />,
      },
    ],
    []
  );

  return (
    <BentoCard
      ref={ref}
      className="lg:col-span-4 col-span-12 lg:row-span-1 py-2"
    >
      <div className="flex items-center h-full gap-12 justify-center">
        {icons.map((icon, i) => (
          <a
            className="hover:scale-110"
            key={i}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            // className="p-2 rounded-lg bg-card-accent hover:bg-primary dark:hover:bg-primary transition-colors"
          >
            {!!icon.icon ? (
              icon.icon
            ) : (
              <img
                height="32"
                width="32"
                src={`${siteConfig.external.simpleIcons}/${icon.name}/a8977b`}
              />
            )}
          </a>
        ))}
      </div>
    </BentoCard>
  );
});

SocialsCard.displayName = "SocialsCard";

export default SocialsCard;
