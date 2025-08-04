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
    <BentoCard className="col-span-8 row-span-7 p-0">
      <div className="h-full relative rounded-xl overflow-hidden group">
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
          className="absolute group/button-left cursor-pointer left-0 top-0 w-1/2 h-full flex items-center justify-start pl-4 text-gray-600/70 hover:text-gray-600  transition-colors"
          aria-label="Image précédente"
        >
          <ChevronLeft
            size={32}
            className="opacity-0 group-hover:opacity-100 transition-opacity group-hover/button-left:scale-125"
          />
        </button>

        <button
          onClick={nextImage}
          className="absolute group/button-right cursor-pointer right-0 top-0 w-1/2 h-full flex items-center justify-end pr-4 text-gray-600/70 hover:text-gray-600 transition-colors"
          aria-label="Image suivante"
        >
          <ChevronRight
            size={32}
            className="opacity-0 group-hover:opacity-100 transition-opacity group-hover/button-right:scale-125"
          />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 cursor-pointer h-2 rounded-full transition-colors ${
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
