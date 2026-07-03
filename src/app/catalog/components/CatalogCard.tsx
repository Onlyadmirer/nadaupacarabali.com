"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { CatalogItem } from "@/constants/catalog";

interface CatalogCardProps {
  item: CatalogItem;
}

function waMessage(item: CatalogItem): string {
  const text = `Halo, saya tertarik dengan pertunjukan *${item.title}* (${item.category}). Bisa informasikan detail harga dan ketersediaan?`;
  return `https://wa.me/6285119309088?text=${encodeURIComponent(text)}`;
}

export default function CatalogCard({ item }: CatalogCardProps) {
  return (
    <div
      id={item.id}
      className='group relative bg-neutral-900/40 border border-neutral-800/60 rounded-xl overflow-hidden hover:border-[#d58058]/30 transition-all duration-500'
    >
      {/* Image */}
      <div className='relative aspect-16/10 w-full overflow-hidden'>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className='object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105'
          sizes='(max-width: 640px) 100vw 80vw'
        />
        <div className='absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent' />
        <div className='absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-colors duration-700' />

        {/* Category badge on image */}
        <div className='absolute top-4 left-4'>
          <span className='font-outfit text-[10px] tracking-widest uppercase text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10'>
            {item.category}
          </span>
        </div>
      </div>

      <div className='p-6 lg:p-8 flex flex-col'>
        {/* Title */}
        <h3 className='font-libre-baskerville italic text-xl lg:text-2xl text-[#f09a73] mb-3 leading-tight'>
          {item.title}
        </h3>

        {/* Description */}
        <p className='font-cormorant-garamond text-neutral-400 text-sm leading-relaxed mb-5 line-clamp-2'>
          {item.description}
        </p>

        {/* Meta Info */}
        <div className='flex flex-wrap gap-2 mb-6'>
          <span className='font-outfit text-[11px] tracking-wide uppercase text-neutral-500 bg-neutral-800/60 px-3 py-1.5 rounded-md border border-neutral-700/50'>
            {item.duration}
          </span>
          {item.personnel && (
            <span className='font-outfit text-[11px] tracking-wide uppercase text-neutral-500 bg-neutral-800/60 px-3 py-1.5 rounded-md border border-neutral-700/50'>
              {item.personnel}
            </span>
          )}
        </div>

        {/* Packages / Tier */}
        {item.packages.length > 0 && (
          <div className='mt-auto space-y-2 pt-4 border-t border-neutral-800/60'>
            {item.packages.map((pkg, idx) => (
              <div
                key={idx}
                className='flex items-center py-1.5 px-3 rounded-lg bg-neutral-800/30'
              >
                <span className='font-outfit text-xs tracking-wide text-neutral-300'>
                  {pkg.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <a
          href={waMessage(item)}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-5 block'
        >
          <Button className='font-outfit w-full text-xs tracking-[0.15em] uppercase bg-transparent border border-[#d58058]/40 text-[#d58058] hover:bg-[#d58058] hover:text-white rounded-lg py-5 transition-all duration-300'>
            Tanya Harga via WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}
