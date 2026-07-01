"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ServiceCategories from "./components/ServiceCategories";
import FeaturedPerformances from "./components/FeaturedPerformances";
import PreviewGallery from "./components/PreviewGallery";

export default function Home() {
  return (
    <div className='min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-amber-900 selection:text-white'>
      <section className='relative h-screen flex flex-col justify-center items-center text-center px-4'>
        <Image
          src='https://res.cloudinary.com/drldcq7wa/image/upload/v1782903146/IMG_4609_uu2bkp.jpg'
          alt='Pementasan Seni Bali'
          fill
          className='w-full h-full object-[49%_20%] object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/90' />
        <div className='z-20 max-w-4xl mx-auto flex flex-col items-center mt-16'>
          <span className='uppercase font-sans text-sm md:text-base tracking-wide font-semibold text-[#f09a73]'>
            Balinese Creative-Cultural Service
          </span>
          <h1 className='text-5xl md:text-7xl font-libre-baskerville italic lg:text-8xl mb-6 mt-2 tracking-tight text-neutral-200'>
            Nada Upacara Bali
          </h1>
          <p className='text-[#ffffff] tracking-[0.3em] text-xs md:text-sm uppercase mb-4 font-semibold'>
            {"• Sakral • Penuh Rasa • Profesional •"}
          </p>
        </div>
      </section>

      {/* 3. TENTANG KAMI SECTION (Singkat & Elegan) */}
      <section className='py-24 px-6 md:px-12 max-w-5xl mx-auto text-center'>
        <h2 className='text-3xl text-neutral-200 md:text-4xl font-cormorant-garamond uppercase  mb-8'>
          Tradisi Bertemu <span className='text-[#d58058]'>Elegansi</span>
        </h2>
        <p className='text-neutral-300 font-cormorant-garamond text-base md:text-lg leading-relaxed font-light'>
          Nada Upacara Bali bukan hanya penyedia pertunjukan seni tradisional
          Bali, tetapi sebuah cultural performance house yang menghadirkan
          pengalaman budaya Bali secara sakral, emosional, dan profesional.
          Website ini dirancang untuk membangun trust, meningkatkan inquiry,
          serta memperkuat positioning sebagai premium Balinese
          Creative-Cultural Service.
        </p>
      </section>

      <section className='flex mt-8 flex-col md:flex-row bg-neutral-900 justify-center items-center'>
        <div className='flex-2 w-full'>
          <iframe
            className='w-full aspect-video'
            src={`https://www.youtube.com/embed/-yp5DuntO9c`}
            allowFullScreen
          />
        </div>
        <div className='flex flex-col flex-1 gap-4 p-6 py-10 md:px-24'>
          <h1 className='text-3xl tracking-wide font-cormorant-garamond'>
            TENTANG <span className='text-[#d58058]'>KAMI</span>
          </h1>
          <p className='font-cormorant-garamond text-lg'>
            Kami percaya bahwa seni tidak hanya untuk dilestarikan, tapi juga
            dihormati. Filosofi kami sederhana, setiap nada dan gerak harus
            membawa makna yang disajikan dengan keindahan, kesakralan, dan
            disiplin profesional.
          </p>
          <Link href={"/tentang-kami"}>
            <Button
              variant={"outline"}
              className='text-neutral-200 font-outfit transition-all duration-300 bg-transparent cursor-pointer'
            >
              SELENGKAPNYA
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </section>

      <ServiceCategories />
      <FeaturedPerformances />
      <PreviewGallery />
    </div>
  );
}
