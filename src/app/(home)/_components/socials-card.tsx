import { LinkedinIcon } from "@/components/icons/linkedin";
import { BentoCard } from "@/components/ui/bento-grid";
import { siteConfig } from "@/config/site";
import { Breakpoint, useBreakpoint } from "@/hooks/use-breakpoint";
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
  const breakpoint = useBreakpoint();
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
        icon: (
          <LinkedinIcon className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6 text-secondary" />
        ),
      },
    ],
    []
  );

  const iconSize = useMemo(() => {
    switch (breakpoint) {
      case Breakpoint.Lg:
        return 32;
      case Breakpoint.Md:
        return 28;
      case Breakpoint.SM:
      default:
        return 24;
    }
  }, [breakpoint]);

  return (
    <BentoCard
      ref={ref}
      className="col-span-12 lg:col-span-4 lg:row-span-1 lg:py-2 py-4 md:py-6"
    >
      <div className="flex items-center h-full gap-8 md:gap-16 lg:gap-12 justify-center">
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
                height={iconSize}
                width={iconSize}
                className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
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
