import { LinkedinIcon } from "@/components/icons/linkedin";
import { BentoCard } from "@/components/ui/bento-grid";
import { siteConfig } from "@/config/site";
import { Breakpoint, useBreakpoint } from "@/hooks/use-breakpoint";
import Image from "next/image";
import Link from "next/link";
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
          <LinkedinIcon className="text-secondary h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        ),
      },
    ],
    [],
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
      className="col-span-12 py-4 md:py-6 lg:col-span-4 lg:row-span-1 lg:py-2"
    >
      <div className="flex h-full items-center justify-center gap-8 md:gap-16 lg:gap-12">
        {icons.map((icon, i) => (
          <Link
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
              <Image
                alt={`${icon.name} social icon`}
                height={iconSize}
                width={iconSize}
                className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
                src={`${siteConfig.external.simpleIcons}/${icon.name}/a8977b`}
              />
            )}
          </Link>
        ))}
      </div>
    </BentoCard>
  );
});

SocialsCard.displayName = "SocialsCard";

export default SocialsCard;
