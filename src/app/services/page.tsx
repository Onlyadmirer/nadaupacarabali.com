import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/constants/services";
import { image } from "@/constants/images";
import ServiceCard from "./components/ServiceCard";

export const metadata: Metadata = {
  title: "Layanan Kami | Nada Upacara Bali",
  description:
    "Upacara Adat, Pernikahan Tradisi Bali, Corporate & International Events, Kolaborasi & Edukasi Budaya — layanan profesional pertunjukan seni tradisional Bali.",
  openGraph: {
    title: "Layanan Kami | Nada Upacara Bali",
    description:
      "Menghadirkan seni pertunjukan tradisional Bali dengan standar profesionalisme dan pelayanan premium.",
  },
};

export default function ServicesPage() {
  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-50 relative overflow-hidden'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex flex-col justify-center items-center text-center px-6 mb-24'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={image.img2}
            alt='Layanan Nada Upacara Bali'
            fill
            sizes='100vw'
            className='object-cover'
            priority
            fetchPriority='high'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/90' />
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-4xl mx-auto flex flex-col items-center'>
          <div className='mb-4'>
            <span className='font-outfit uppercase tracking-[0.2em] text-sm text-[#d58058] font-semibold'>
              Pilar Layanan
            </span>
          </div>
          <h1 className='font-libre-baskerville italic text-5xl md:text-7xl font-bold mb-6 text-[#f09a73] tracking-tight'>
            Layanan Kami
          </h1>
          <div className='flex justify-center mb-8'>
            <div className='w-24 h-px bg-linear-to-r from-transparent via-[#d58058] to-transparent'></div>
          </div>
          <p className='font-outfit md:max-w-4xl mx-auto text-lg md:text-xl text-neutral-300 leading-relaxed font-light'>
            Menghadirkan seni pertunjukan tradisional Bali dengan standar
            profesionalisme, ketepatan waktu, dan pelayanan premium untuk
            berbagai kebutuhan acara Anda.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className='flex flex-col relative z-10'>
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </section>

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
            Siap Mewujudkan Acara Anda?
          </h2>
          <p className='font-cormorant-garamond text-neutral-300 text-lg lg:text-xl mb-12 font-light max-w-2xl mx-auto'>
            Mari diskusikan kebutuhan pertunjukan untuk momen spesial Anda
            bersama tim Nada Upacara Bali.
          </p>
          <Link
            href='https://wa.me/6285119309088'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button className='font-outfit bg-[#a05530] hover:bg-[#7a3f20] text-white rounded-none px-6 md:px-12 py-7 text-xs lg:text-base tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(160,85,48,0.2)] hover:shadow-[0_0_30px_rgba(122,63,32,0.4)]'>
              Hubungi Kami Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
