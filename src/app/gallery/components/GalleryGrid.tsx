"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { galleryImages } from "@/constants/gallery";

const Lightbox = dynamic(() => import("./Lightbox"), { ssr: false });

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null,
    );
  }, []);

  const onNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null,
    );
  }, []);

  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24'>
      {/* Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'>
        {galleryImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setLightboxIndex(index)}
            className='group relative aspect-4/3 w-full overflow-hidden rounded-lg bg-neutral-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d58058]'
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className='object-cover transition-transform duration-700 ease-in-out group-hover:scale-105'
              sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
            />
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500' />

            {/* Hover Caption */}
            <div className='absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'>
              <div className='bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2'>
                <p className='font-cormorant-garamond text-white text-sm text-left leading-tight'>
                  {img.alt}
                </p>
                {img.category && (
                  <span className='font-outfit text-[10px] tracking-widest uppercase text-[#d58058] mt-1 block'>
                    {img.category}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  );
}
