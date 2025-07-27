import { BentoCard } from "@/components/ui/bento-grid";
import { forwardRef } from "react";

const DescriptionCard = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof BentoCard>
>((_, ref) => {
  return (
    <BentoCard ref={ref} className="lg:col-span-4 col-span-12 lg:row-span-4">
      <div className="flex h-full items-end">
        <p className="text-xl">
          J’ai commencé le développement par curiosité, j’y suis resté par
          passion. Ce qui m’anime aujourd’hui, c’est de créer des interfaces qui
          font la différence : belles, rapides, faciles à maintenir. J’ai
          naturellement trouvé ma voie dans le front-end, à la croisée du design
          et de la technique. Spécialisé en React / Next.js, je mets l’accent
          sur l’expérience utilisateur, la performance, et la qualité du code.
          Mon objectif : vous aider à livrer un produit qui inspire confiance
          dès le premier clic. Et si votre interface devenait un vrai atout pour
          votre business ?
        </p>
      </div>
    </BentoCard>
  );
});

DescriptionCard.displayName = "DescriptionCard";

export default DescriptionCard;
