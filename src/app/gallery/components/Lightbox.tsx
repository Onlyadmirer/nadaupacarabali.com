"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/constants/gallery";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [handleKeyDown]);

  const current = images[currentIndex];

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md'
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className='absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors'
        aria-label='Tutup'
      >
        <X className='w-8 h-8' />
      </button>

      {/* Counter */}
      <div className='absolute top-6 left-6 font-outfit text-sm text-white/60 tracking-wider'>
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className='absolute left-4 md:left-8 z-10 text-white/60 hover:text-white transition-colors'
        aria-label='Sebelumnya'
      >
        <ChevronLeft className='w-10 h-10' />
      </button>

      {/* Image */}
      <div
        className='relative w-full max-w-5xl max-h-[85vh] mx-4 md:mx-16 aspect-video'
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className='object-contain'
          priority
          sizes='(max-width: 768px) 100vw, 80vw'
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className='absolute right-4 md:right-8 z-10 text-white/60 hover:text-white transition-colors'
        aria-label='Selanjutnya'
      >
        <ChevronRight className='w-10 h-10' />
      </button>

      {/* Caption */}
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 font-cormorant-garamond text-white/70 text-lg text-center max-w-lg px-4'>
        {current.alt}
      </div>
    </div>
  );
}
