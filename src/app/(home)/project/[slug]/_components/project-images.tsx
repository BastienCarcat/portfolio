"use client";

import { BentoCard } from "@/components/ui/bento-grid";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImagesProps {
  images: { src: string; alt: string }[];
}

export default function ProjectImages({ images }: ProjectImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <BentoCard className="col-span-12 min-h-96 p-0 lg:col-span-8 lg:row-span-7">
      <div className="group relative h-full overflow-hidden rounded-xl">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          priority
        />

        <button
          onClick={prevImage}
          className="group/button-left absolute top-0 left-0 flex h-full w-1/2 cursor-pointer items-center justify-start pl-4 text-gray-600/70 transition-colors hover:text-gray-600"
          aria-label="Image précédente"
        >
          <ChevronLeft
            size={32}
            className="opacity-0 transition-opacity group-hover:opacity-100 group-hover/button-left:scale-125"
          />
        </button>

        <button
          onClick={nextImage}
          className="group/button-right absolute top-0 right-0 flex h-full w-1/2 cursor-pointer items-center justify-end pr-4 text-gray-600/70 transition-colors hover:text-gray-600"
          aria-label="Image suivante"
        >
          <ChevronRight
            size={32}
            className="opacity-0 transition-opacity group-hover:opacity-100 group-hover/button-right:scale-125"
          />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-gray-600"
                  : "bg-gray-500/50 hover:bg-gray-600/70"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
