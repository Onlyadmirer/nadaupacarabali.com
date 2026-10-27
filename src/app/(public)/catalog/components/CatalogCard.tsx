"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getStartingPrice, type CatalogItemView } from "@/types/catalog";
import { waLink } from "@/constants/contact";
import { formatRupiah } from "@/lib/utils";

interface CatalogCardProps {
  item: CatalogItemView;
}

function waMessage(item: CatalogItemView): string {
  const text = `Halo, saya tertarik dengan pertunjukan *${item.title}* (${item.category}). Bisa informasikan detail harga dan ketersediaan?`;
  return waLink(text);
}

export default function CatalogCard({ item }: CatalogCardProps) {
  return (
    <div
      id={item.id}
      className='group relative flex h-full flex-col bg-card ring-1 ring-border/60 rounded-sm overflow-hidden shadow-[0_15px_70px_-30px_rgba(139,94,60,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_80px_-35px_rgba(139,94,60,0.45)]'
    >
      {/* Image */}
      <div className='relative aspect-16/10 w-full overflow-hidden'>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className='object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />
        <div className='absolute inset-0 bg-linear-to-t from-neutral-950/90 via-neutral-950/30 to-transparent' />
        <div className='absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-colors duration-700' />

        {/* Category badge on image */}
        <div className='absolute top-4 left-4'>
          <span className='font-outfit text-[10px] tracking-[0.2em] uppercase text-white/90 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full ring-1 ring-white/15'>
            {item.category}
          </span>
        </div>
      </div>

      <div className='p-6 lg:p-8 flex flex-1 flex-col'>
        {/* Title */}
        <h3 className='font-libre-baskerville italic text-xl lg:text-2xl text-foreground mb-3 leading-tight'>
          {item.title}
        </h3>

        {/* Description */}
        <p className='font-cormorant-garamond text-muted-foreground text-base leading-relaxed mb-5 line-clamp-2 min-h-[2lh]'>
          {item.description}
        </p>

        {/* Meta Info */}
        <div className='flex flex-wrap gap-2 mb-6'>
          <span className='font-outfit text-[11px] tracking-[0.15em] uppercase text-muted-foreground bg-secondary/80 px-3 py-1.5 rounded-full ring-1 ring-border/70'>
            {item.duration}
          </span>
          {item.personnel && (
            <span className='font-outfit text-[11px] tracking-[0.15em] uppercase text-muted-foreground bg-secondary/80 px-3 py-1.5 rounded-full ring-1 ring-border/70'>
              {item.personnel}
            </span>
          )}
        </div>

        {/* Packages / Tier */}
        {item.packages.length > 0 && (
          <div className='mt-auto space-y-2 pt-4 border-t border-border/70'>
            {item.packages.map((pkg, idx) => (
              <div
                key={idx}
                className='flex items-center py-1.5 px-3 rounded-full bg-secondary/80 ring-1 ring-border/70'
              >
                <span className='font-outfit text-xs tracking-[0.12em] uppercase text-muted-foreground'>
                  {pkg.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Starting Price */}
        {item.packages.length > 0 && (
          <div className='mt-5 flex items-baseline justify-between gap-2'>
            <span className='font-outfit text-[10px] tracking-[0.2em] uppercase text-muted-foreground'>
              Mulai dari
            </span>
            <span className='font-outfit text-lg font-semibold text-primary'>
              {formatRupiah(getStartingPrice(item))}
            </span>
          </div>
        )}

        {/* CTA */}
        <a
          href={waMessage(item)}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-5 block'
        >
          <Button
            variant='outline'
            className='font-outfit w-full text-xs tracking-[0.2em] uppercase py-5'
          >
            Konsultasi via WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}
