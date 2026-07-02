import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Handshake,
  MessageSquare,
  Presentation,
  Timer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ServiceCategories from "./components/ServiceCategories";
import FeaturedPerformances from "./components/FeaturedPerformances";
import PreviewGallery from "./components/PreviewGallery";
import { image } from "@/constants/images";

export const metadata: Metadata = {
  title: "Nada Upacara Bali | Balinese Creative-Cultural Service",
  description:
    "Cultural performance house yang menghadirkan pengalaman budaya Bali secara sakral, emosional, dan profesional — seni pertunjukan tradisional Bali.",
  openGraph: {
    title: "Nada Upacara Bali | Balinese Creative-Cultural Service",
    description:
      "Cultural performance house yang menghadirkan pengalaman budaya Bali secara sakral, emosional, dan profesional.",
  },
};

export default function Home() {
  const steps = [
    {
      id: 1,
      title: "Konsultasi & Penyesuaian",
      description:
        "Diskusikan kebutuhan acara Anda dengan tim kami. Kami siap mendengarkan dan menyesuaikan pertunjukan sesuai konsep yang Anda inginkan.",
      icon: MessageSquare,
    },
    {
      id: 2,
      title: "Konfirmasi & DP",
      description:
        "Setelah konsep disepakati, lakukan konfirmasi pemesanan dengan pembayaran DP untuk mengamankan jadwal acara Anda.",
      icon: Handshake,
    },
    {
      id: 3,
      title: "Persiapan Tim & Peralatan",
      description:
        "Kami menyiapkan tim penabuh, penari, dalang, serta peralatan sound system terbaik untuk memastikan pertunjukan berjalan sempurna.",
      icon: Timer,
    },
    {
      id: 4,
      title: "Pelaksanaan Acara",
      description:
        "Tim tampil dengan profesional, rapi, dan tepat waktu. Nikmati pertunjukan seni tradisional Bali yang penuh rasa dan kesakralan.",
      icon: Presentation,
    },
  ];
  return (
    <div className='min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-amber-900 selection:text-white'>
      <section className='relative h-screen flex flex-col justify-center items-center text-center px-4'>
        <Image
          src={image.homeBg}
          alt='Pementasan Seni Bali'
          fill
          sizes='(max-width: 768px) 100vw 80vw'
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
          <Link href={"/about"}>
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

      {/* Alur Pemesanan */}
      <section className='relative py-24 overflow-hidden'>
        <div
          className='absolute inset-0 -z-10 pointer-events-none'
          style={{
            background:
              "radial-gradient(circle at center, rgba(178,116,87,0.08) 0%, transparent 70%)",
          }}
        ></div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          {/* Header */}
          <div className='text-center mb-16'>
            <span className='font-outfit uppercase tracking-[0.2em] text-sm text-[#d58058] font-semibold'>
              Alur Kerja
            </span>
            <h2 className='font-libre-baskerville italic text-4xl md:text-5xl font-bold mt-3 mb-4 text-[#f09a73]'>
              Mari Memulai Harmoni Bersama!
            </h2>
            <div className='flex justify-center'>
              <div className='w-24 h-px bg-linear-to-r from-transparent via-[#d58058] to-transparent'></div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {steps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <div key={step.id} className='relative group'>
                  {/* Connecting line (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className='hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-linear-to-r from-[#d58058]/30 to-transparent' />
                  )}

                  <div className='relative bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-6 lg:p-8 hover:border-[#d58058]/30 transition-all duration-500 h-full'>
                    {/* Step Number Badge */}
                    <div className='absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#d58058] text-white font-outfit text-sm font-bold shadow-lg shadow-[#d58058]/20'>
                      0{step.id}
                    </div>

                    {/* Glow */}
                    <div className='absolute top-0 right-0 w-24 h-24 bg-[#f09a73]/5 blur-2xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150' />

                    {/* Icon */}
                    <div className='w-14 h-14 flex items-center justify-center rounded-full bg-neutral-800/60 border border-neutral-700/50 mb-6 group-hover:border-[#f09a73]/50 transition-all duration-300'>
                      <IconComponent
                        strokeWidth={1.5}
                        className='w-7 h-7 text-[#f09a73]'
                      />
                    </div>

                    {/* Title */}
                    <h3 className='font-outfit text-sm tracking-widest text-white mb-3 uppercase'>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className='font-cormorant-garamond text-neutral-400 text-sm leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className='flex justify-center mt-16'>
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
        </div>
      </section>
    </div>
  );
}
