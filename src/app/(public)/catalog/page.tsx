import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { image } from "@/constants/images";
import CatalogGrid from "./components/CatalogGrid";
import Reveal from "@/components/Reveal";
import { siteUrl, waLink } from "@/constants/contact";
import { catalogData, getStartingPrice } from "@/constants/catalog";

export const metadata: Metadata = {
  title: "Katalog Pertunjukan | Nada Upacara Bali",
  description:
    "Jelajahi katalog lengkap pertunjukan seni tradisional Bali — Rindik, Gender Wayang, Gamelan, Wayang, Tari Tradisional, dan Topeng Sakral. Lengkap dengan harga dan paket.",
  openGraph: {
    title: "Katalog Pertunjukan | Nada Upacara Bali",
    description:
      "Temukan pertunjukan seni tradisional Bali terbaik untuk upacara adat, pernikahan, corporate event, dan edukasi budaya.",
  },
};

export default function CatalogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog Pertunjukan Nada Upacara Bali",
    itemListElement: catalogData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.title,
        description: item.description,
        serviceType: item.category,
        provider: {
          "@type": "Organization",
          name: "Nada Upacara Bali",
          url: siteUrl,
        },
        offers: {
          "@type": "Offer",
          price: getStartingPrice(item),
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <main className='min-h-screen bg-background text-foreground relative overflow-hidden'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className='relative min-h-screen flex flex-col justify-center items-center text-center px-6 mb-12'>
        <div className='absolute inset-0 z-0'>
          <Image
            src={image.img5}
            alt='Katalog Pertunjukan Nada Upacara Bali'
            fill
            sizes='100vw'
            className='object-cover'
            priority
            fetchPriority='high'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-black/95' />
        </div>

        <Reveal className='relative z-10 max-w-4xl mx-auto flex flex-col items-center'>
          <div className='mb-4'>
            <span className='font-outfit uppercase tracking-[0.35em] text-sm text-[#f3d6b8] font-semibold'>
              Katalog Pertunjukan
            </span>
          </div>
          <h1 className='font-libre-baskerville italic text-5xl md:text-7xl lg:text-8xl font-semmibold mb-6 text-neutral-100 tracking-tight text-balance'>
            Experiences & Pricing
          </h1>
          <div className='flex justify-center mb-8'>
            <div className='w-24 h-px bg-linear-to-r from-transparent via-[#f3d6b8]/60 to-transparent'></div>
          </div>
          <p className='font-outfit md:max-w-4xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed font-semibold text-balance'>
            Jelajahi ragam pertunjukan seni tradisional Bali mulai dari gamelan
            sakral, wayang klasik, hingga tarian elegan lengkap dengan informasi
            paket dan harga.
          </p>
        </Reveal>
      </section>

      {/* Catalog Grid with Filter */}
      <CatalogGrid />

      {/* CTA Section */}
      <Reveal>
        <section className='container mx-auto px-6 py-32 text-center max-w-7xl relative'>
          <div
            className='absolute inset-0 -z-10 pointer-events-none'
            style={{
              background:
                "radial-gradient(circle at center, rgba(139,94,60,0.12) 0%, transparent 70%)",
            }}
          ></div>
          <div className='max-w-4xl mx-auto ring-1 ring-border/70 bg-card shadow-[0_30px_90px_-40px_rgba(139,94,60,0.5)] py-12 px-6 md:px-20 md:py-20 rounded-2xl relative overflow-hidden group'>
            <div className='absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-3xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150'></div>
            <div className='absolute bottom-0 left-0 w-40 h-40 bg-accent/10 blur-3xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150'></div>

            <h2 className='font-libre-baskerville italic text-4xl lg:text-5xl mb-6 text-foreground text-balance'>
              Tidak Menemukan yang Sesuai?
            </h2>
            <p className='font-cormorant-garamond text-muted-foreground text-lg lg:text-xl mb-12 font-semibold max-w-2xl mx-auto text-balance'>
              Kami siap menyesuaikan pertunjukan dengan kebutuhan spesifik acara
              Anda. Hubungi kami untuk diskusi lebih lanjut.
            </p>
            <Link href={waLink()} target='_blank' rel='noopener noreferrer'>
              <Button className='font-outfit rounded-full px-8 md:px-14 py-7 text-xs lg:text-sm tracking-[0.25em] uppercase transition-all duration-300'>
                Hubungi Kami Sekarang
              </Button>
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
