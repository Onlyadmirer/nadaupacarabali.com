"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-amber-900 selection:text-white'>
      <section className='relative h-screen flex flex-col justify-center items-center text-center px-4'>
        <div>
          <Image
            src='/images/hero.jpg'
            alt='Pementasan Seni Bali'
            fill
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/90' />
        </div>

        {/* Konten Hero */}
        <div className='z-20 max-w-4xl mx-auto flex flex-col items-center mt-16'>
          <h1 className='text-5xl md:text-7xl font-libre-baskerville italic lg:text-8xl mb-6 mt-2 tracking-tight text-neutral-200'>
            Nada Upacara Bali
          </h1>
          <p className='text-[#ffc3a8] tracking-[0.3em] text-xs md:text-sm uppercase mb-4 font-semibold'>
            {"• Sakral • Penuh Rasa • Profesional •"}
          </p>
        </div>
      </section>

      {/* 3. TENTANG KAMI SECTION (Singkat & Elegan) */}
      <section className='py-24 px-6 md:px-12 max-w-5xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-cormorant-garamond uppercase text-[#b66c4a] mb-8'>
          Tradisi Bertemu Elegansi
        </h2>
        <p className='text-neutral-300 font-cormorant-garamond text-base md:text-lg leading-relaxed font-light'>
          Kami adalah penyedia pertunjukan seni tradisional Bali mulai dari
          Rindik, Gender Wayang, hingga tari tradisional. Visi kami sederhana:
          menjaga seni Bali tetap hidup dengan rasa yang sakral, penuh rasa, dan
          profesional.
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
            TENTANG <span className='text-[#b66c4a]'>KAMI</span>
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

      <section className='flex flex-col md:flex-row p-8 pt-18 md:pt-26 bg-[#faf7f2]'>
        <div className='flex-1 flex text-neutral-900 flex-col justify-center md:pl-24'>
          <h1 className='text-3xl font-libre-baskerville uppercase'>
            Salam dari <span className='text-[#b66c4a]'>Pendiri</span>
          </h1>
          <h2 className='font-outfit'>I Made Mahotama Warmasuta</h2>
          <p className='mt-4 font-cormorant-garamond text-xl tracking-tight'>
            Selamat datang di Nada Upacara Bali. Kami adalah perusahaan penyedia
            pertunjukan seni tradisional Bali mulai dari Rindik, Gender Wayang,
            Semar Pegulingan, Selonding, Angklung Bali, hingga pertunjukan
            Wayang, Joged Bumbung, dan berbagai tari tradisional lainnya.{" "}
          </p>
          <p className='mt-4 font-cormorant-garamond text-xl tracking-tight'>
            <span className='text-[#b66c4a]'>Visi kami sederhana:</span> <br />
            menjaga seni Bali tetap hidup dengan rasa yang sakral, penuh rasa,
            dan profesional.{" "}
          </p>
          <p className='mt-4 font-cormorant-garamond text-xl tracking-tight'>
            Saya percaya seni Bali pantas dihormati, tidak hanya lewat karya,
            tapi juga lewat sikap. Kami berkomitmen menjaga standar berpakaian
            rapi, hadir tepat waktu, tampil dengan penuh tanggung jawab. Nada
            Upacara Bali hadir untuk menjembatani tradisi dengan kebutuhan masa
            kini. Untuk upacara adat, pernikahan, acara perusahaan, hingga
            pertunjukan berskala internasional kami siap menghadirkan seni
            pertunjukan terbaik.
          </p>
        </div>
        <div className='flex-1 flex py-6 items-center justify-center'>
          <Image
            src={"/images/mahotama.png"}
            alt='mahotama-warmasuta'
            width={300}
            height={300}
            className='rounded-full'
          ></Image>
        </div>
      </section>
    </div>
  );
}
