"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { galleryImages } from "@/constants/gallery";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import Container from "@/components/site/Container";

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
    <section className='section-spacing'>
      <Container>
        <StaggerContainer className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
          {galleryImages.map((img, index) => (
            <StaggerItem key={`${img.src}-${index}`}>
              <button
                type='button'
                onClick={() => setLightboxIndex(index)}
                aria-label={`Buka foto: ${img.alt}`}
                aria-haspopup='dialog'
                className='group relative aspect-4/3 w-full overflow-hidden rounded-xl bg-secondary text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                  sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
                />
                <div className='absolute inset-0 bg-neutral-950/0 transition-colors duration-300 group-hover:bg-neutral-950/45 group-focus-visible:bg-neutral-950/45' />

                <div className='absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100'>
                  <div className='rounded-lg bg-neutral-950/75 px-3 py-2 backdrop-blur-sm'>
                    <p className='font-body text-xs leading-snug text-white'>
                      {img.alt}
                    </p>
                    {img.category && (
                      <span className='mt-1 block font-ui text-[10px] tracking-[0.18em] text-gold-soft uppercase'>
                        {img.category}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

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
