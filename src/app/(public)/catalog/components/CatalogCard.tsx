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
    <article
      id={item.id}
      className='group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl bg-card shadow-[0_15px_70px_-35px_rgba(139,94,60,0.4)] ring-1 ring-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_80px_-35px_rgba(139,94,60,0.5)]'
    >
      <div className='relative aspect-16/10 w-full overflow-hidden'>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />
        <div className='absolute inset-0 bg-linear-to-t from-neutral-950/85 via-neutral-950/20 to-transparent' />
        <div className='absolute top-4 left-4'>
          <span className='rounded-full bg-neutral-950/50 px-3 py-1.5 font-ui text-[10px] tracking-[0.16em] text-white uppercase ring-1 ring-white/20 backdrop-blur'>
            {item.category}
          </span>
        </div>
      </div>

      <div className='flex flex-1 flex-col p-6 lg:p-7'>
        <h3 className='font-heading text-xl leading-tight font-semibold text-foreground lg:text-2xl'>
          {item.title}
        </h3>

        <p className='mt-3 line-clamp-2 min-h-[2lh] font-body text-sm leading-relaxed text-muted-foreground'>
          {item.description}
        </p>

        <div className='mt-4 flex flex-wrap gap-2'>
          <span className='rounded-full bg-secondary/80 px-3 py-1.5 font-ui text-[10px] tracking-[0.14em] text-muted-foreground uppercase ring-1 ring-border/70'>
            {item.duration}
          </span>
          {item.personnel && (
            <span className='rounded-full bg-secondary/80 px-3 py-1.5 font-ui text-[10px] tracking-[0.14em] text-muted-foreground uppercase ring-1 ring-border/70'>
              {item.personnel}
            </span>
          )}
        </div>

        {item.packages.length > 0 && (
          <div className='mt-5 space-y-2 border-t border-border/70 pt-4'>
            {item.packages.map((pkg, idx) => (
              <div
                key={idx}
                className='flex items-center justify-between gap-3 rounded-lg bg-secondary/60 px-3 py-2'
              >
                <span className='font-ui text-[10px] tracking-[0.12em] text-muted-foreground uppercase'>
                  {pkg.name}
                </span>
                <span className='font-ui text-xs font-semibold text-foreground'>
                  {formatRupiah(pkg.price)}
                </span>
              </div>
            ))}
          </div>
        )}

        {item.packages.length > 0 && (
          <div className='mt-auto flex items-baseline justify-between gap-2 pt-4'>
            <span className='font-ui text-[10px] tracking-[0.16em] text-muted-foreground uppercase'>
              Mulai dari
            </span>
            <span className='font-ui text-lg font-semibold text-primary'>
              {formatRupiah(getStartingPrice(item))}
            </span>
          </div>
        )}

        <Button
          asChild
          variant='outline'
          className='mt-5 w-full text-xs tracking-[0.14em] uppercase'
        >
          <a
            href={waMessage(item)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Konsultasi via WhatsApp
          </a>
        </Button>
      </div>
    </article>
  );
}
