import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { image } from "@/constants/images";
import CatalogGrid from "./components/CatalogGrid";

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
  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-50 relative overflow-hidden'>
      {/* Hero Section */}
      <section className='relative h-[85vh] min-h-125 flex flex-col justify-center items-center text-center px-6 mb-12'>
        <div className='absolute inset-0 z-0'>
          <Image
            src={image.img5}
            alt='Katalog Pertunjukan Nada Upacara Bali'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/90' />
        </div>

        <div className='relative z-10 max-w-4xl mx-auto flex flex-col items-center'>
          <div className='mb-4'>
            <span className='font-outfit uppercase tracking-[0.2em] text-sm text-[#d58058] font-semibold'>
              Katalog Pertunjukan
            </span>
          </div>
          <h1 className='font-libre-baskerville italic text-5xl md:text-7xl font-bold mb-6 text-[#f09a73] tracking-tight'>
            Experiences & Pricing
          </h1>
          <div className='flex justify-center mb-8'>
            <div className='w-24 h-px bg-linear-to-r from-transparent via-[#d58058] to-transparent'></div>
          </div>
          <p className='font-outfit md:max-w-4xl mx-auto text-lg md:text-xl text-neutral-300 leading-relaxed font-light'>
            Jelajahi ragam pertunjukan seni tradisional Bali — dari gamelan
            sakral, wayang klasik, hingga tarian elegan — lengkap dengan
            informasi paket dan harga.
          </p>
        </div>
      </section>

      {/* Catalog Grid with Filter */}
      <CatalogGrid />

      {/* CTA Section */}
      <section className='container mx-auto px-6 py-32 text-center max-w-7xl relative'>
        <div
          className='absolute inset-0 -z-10 pointer-events-none'
          style={{
            background:
              "radial-gradient(circle at center, rgba(178,116,87,0.08) 0%, transparent 70%)",
          }}
        ></div>
        <div className='max-w-4xl mx-auto border border-[#b27457]/20 bg-neutral-900/60 p-12 md:p-20 rounded-2xl backdrop-blur-md relative overflow-hidden group'>
          <div className='absolute top-0 right-0 w-32 h-32 bg-[#f09a73]/10 blur-3xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150'></div>
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-[#d58058]/10 blur-3xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150'></div>

          <h2 className='font-libre-baskerville italic text-4xl lg:text-5xl mb-6 text-[#f09a73]'>
            Tidak Menemukan yang Sesuai?
          </h2>
          <p className='font-cormorant-garamond text-neutral-300 text-lg lg:text-xl mb-12 font-light max-w-2xl mx-auto'>
            Kami siap menyesuaikan pertunjukan dengan kebutuhan spesifik acara
            Anda. Hubungi kami untuk diskusi lebih lanjut.
          </p>
          <Link
            href='https://wa.me/6285119309088'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button className='font-outfit bg-[#d58058] hover:bg-[#b27457] text-white rounded-none px-6 md:px-12 py-7 text-xs lg:text-base tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(213,128,88,0.2)] hover:shadow-[0_0_30px_rgba(213,128,88,0.4)]'>
              Hubungi Kami Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
