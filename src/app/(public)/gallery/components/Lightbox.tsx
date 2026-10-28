"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
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
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    },
    [onNext, onPrev],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const current = images[currentIndex];

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className='flex h-svh w-screen max-w-none flex-col overflow-hidden rounded-none border-0 bg-neutral-950 p-0 text-white ring-0 sm:max-w-none'
      >
        <DialogTitle className='sr-only'>{current.alt}</DialogTitle>
        <DialogDescription className='sr-only'>
          Galeri foto Nada Upacara Bali. Gunakan tombol panah untuk berpindah
          foto dan tombol Escape untuk menutup.
        </DialogDescription>

        <div className='flex items-center justify-between px-4 py-3 md:px-8'>
          <p
            className='font-ui text-xs tracking-[0.2em] text-white/70'
            aria-live='polite'
          >
            {currentIndex + 1} / {images.length}
          </p>
          <button
            type='button'
            onClick={onClose}
            aria-label='Tutup galeri'
            className='inline-flex size-11 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
          >
            <X className='size-6' aria-hidden='true' />
          </button>
        </div>

        <div className='relative flex flex-1 items-center justify-center px-4 pb-4 md:px-16'>
          <button
            type='button'
            onClick={onPrev}
            aria-label='Foto sebelumnya'
            className='absolute left-1 z-10 inline-flex size-11 items-center justify-center rounded-full bg-neutral-900/70 text-white/80 transition-colors hover:bg-neutral-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:left-6'
          >
            <ChevronLeft className='size-7' aria-hidden='true' />
          </button>

          <div className='relative h-[70svh] w-full max-w-5xl'>
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className='object-contain'
              priority
              sizes='(max-width: 768px) 100vw, 80vw'
            />
          </div>

          <button
            type='button'
            onClick={onNext}
            aria-label='Foto selanjutnya'
            className='absolute right-1 z-10 inline-flex size-11 items-center justify-center rounded-full bg-neutral-900/70 text-white/80 transition-colors hover:bg-neutral-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:right-6'
          >
            <ChevronRight className='size-7' aria-hidden='true' />
          </button>
        </div>

        <p className='mx-auto max-w-2xl px-4 pb-6 text-center font-body text-sm text-white/70'>
          {current.alt}
        </p>
      </DialogContent>
    </Dialog>
  );
}
