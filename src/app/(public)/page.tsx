import type { Metadata } from "next";
import dynamic from "next/dynamic";
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
import { image } from "@/constants/images";
import Reveal from "@/components/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import { waLink } from "@/constants/contact";

const ServiceCategories = dynamic(
  () => import("./components/ServiceCategories"),
  {
    loading: () => (
      <section className='py-24 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='animate-pulse space-y-6'>
            <div className='h-8 bg-[#e9ded3] rounded w-64 mx-auto' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[...Array(4)].map((_, i) => (
                <div key={i} className='h-64 bg-[#e9ded3]/50 rounded-xl' />
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
  },
);
const FeaturedPerformances = dynamic(
  () => import("./components/FeaturedPerformances"),
  {
    loading: () => (
      <section className='py-24 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='animate-pulse space-y-6'>
            <div className='h-8 bg-[#e9ded3] rounded w-64 mx-auto' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[...Array(3)].map((_, i) => (
                <div key={i} className='h-80 bg-[#e9ded3]/50 rounded-xl' />
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
  },
);
const PreviewGallery = dynamic(() => import("./components/PreviewGallery"), {
  loading: () => (
    <section className='py-24 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='animate-pulse space-y-6'>
          <div className='h-8 bg-[#e9ded3] rounded w-64 mx-auto' />
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='aspect-square bg-[#e9ded3]/50 rounded-xl'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  ),
});

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
    <main className='min-h-screen bg-background text-foreground font-sans selection:bg-[#f09a73]/40 selection:text-[#2b211b]'>
      <section className='relative h-screen flex flex-col justify-center items-center text-center px-4'>
        <Image
          src={image.homeBg}
          alt='Pementasan Seni Bali'
          fill
          sizes='100vw'
          className='w-full h-full object-[49%_20%] object-cover'
          priority
          fetchPriority='high'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-black/95' />
        <Reveal className='z-20 max-w-4xl mx-auto flex flex-col items-center mt-16'>
          <span className='uppercase font-outfit text-sm md:text-base tracking-[0.35em] font-semibold text-[#f3d6b8]'>
            Balinese Creative-Cultural Service
          </span>
          <h1 className='text-5xl md:text-7xl font-libre-baskerville italic lg:text-8xl mb-6 mt-4 tracking-tight text-neutral-100 text-balance'>
            Nada Upacara Bali
          </h1>
          <p className='text-white/90 tracking-[0.4em] text-xs md:text-sm uppercase mb-4 font-medium'>
            {"• Sakral • Penuh Rasa • Profesional •"}
          </p>
        </Reveal>
      </section>

      {/* 3. TENTANG KAMI SECTION (Singkat & Elegan) */}
      <Reveal>
        <section className='py-28 sm:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center'>
          <h2 className='text-3xl text-foreground md:text-5xl lg:text-6xl font-cormorant-garamond uppercase mb-8 text-balance'>
            Tradisi Bertemu <span className='text-primary'>Elegansi</span>
          </h2>
          <p className='text-neutral-900 font-medium font-cormorant-garamond text-lg md:text-xl leading-relaxed text-balance'>
            Nada Upacara Bali bukan hanya penyedia pertunjukan seni tradisional
            Bali, tetapi sebuah cultural performance house yang menghadirkan
            pengalaman budaya Bali secara sakral, emosional, dan profesional.
            Website ini dirancang untuk membangun trust, meningkatkan inquiry,
            serta memperkuat positioning sebagai premium Balinese
            Creative-Cultural Service.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className='flex mt-8 flex-col md:flex-row bg-secondary/80 justify-center items-center overflow-hidden'>
          <div className='flex-2 w-full'>
            <iframe
              className='w-full aspect-video'
              src={`https://www.youtube-nocookie.com/embed/-yp5DuntO9c`}
              allowFullScreen
              loading='lazy'
              title='Video Profile Nada Upacara Bali'
            />
          </div>
          <div className='flex flex-col flex-1 gap-5 p-6 py-12 md:px-16 lg:px-24'>
            <h2 className='text-3xl md:text-4xl tracking-[0.25em] font-cormorant-garamond uppercase'>
              Tentang <span className='text-primary'>Kami</span>
            </h2>
            <p className='font-cormorant-garamond text-lg md:text-xl text-muted-foreground leading-relaxed text-balance'>
              Kami percaya bahwa seni tidak hanya untuk dilestarikan, tapi juga
              dihormati. Filosofi kami sederhana, setiap nada dan gerak harus
              membawa makna yang disajikan dengan keindahan, kesakralan, dan
              disiplin profesional.
            </p>
            <Link href={"/about"}>
              <Button
                variant={"outline"}
                className='text-foreground font-outfit tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer'
              >
                Selengkapnya
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </section>
      </Reveal>

      <ServiceCategories />
      <FeaturedPerformances />
      <PreviewGallery />

      {/* Alur Pemesanan */}
      <Reveal>
        <section className='relative py-28 sm:py-32 overflow-hidden'>
          <div
            className='absolute inset-0 -z-10 pointer-events-none'
            style={{
              background:
                "radial-gradient(circle at center, rgba(139,94,60,0.12) 0%, transparent 70%)",
            }}
          ></div>

          <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
            {/* Header */}
            <div className='text-center mb-16 md:mb-20'>
              <span className='font-outfit uppercase tracking-[0.25em] text-sm text-primary font-semibold'>
                Alur Kerja
              </span>
              <h2 className='font-libre-baskerville italic text-4xl md:text-5xl lg:text-6xl mt-4 mb-4 text-[#c05621] text-balance'>
                Mari Memulai Harmoni Bersama!
              </h2>
              <div className='flex justify-center'>
                <div className='w-24 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent'></div>
              </div>
            </div>

            {/* Steps Grid */}
            <StaggerContainer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
              {steps.map((step, index) => {
                const IconComponent = step.icon;

                return (
                  <StaggerItem key={step.id} className='relative group'>
                    {/* Connecting line (desktop only) */}
                    {index < steps.length - 1 && (
                      <div className='hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-linear-to-r from-primary/30 to-transparent' />
                    )}

                    <div className='relative bg-card ring-1 ring-border/60 shadow-[0_20px_80px_-30px_rgba(139,94,60,0.4)] rounded-xl p-6 lg:p-8 transition-all duration-500 h-full hover:-translate-y-1 hover:shadow-[0_30px_90px_-35px_rgba(139,94,60,0.45)]'>
                      {/* Step Number Badge */}
                      <div className='absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-outfit text-sm font-semibold shadow-[0_10px_40px_-15px_rgba(139,94,60,0.9)]'>
                        0{step.id}
                      </div>

                      {/* Glow */}
                      <div className='absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150' />

                      {/* Icon */}
                      <div className='w-14 h-14 flex items-center justify-center rounded-full bg-secondary/80 ring-1 ring-border/70 mb-6 transition-all duration-300 group-hover:ring-primary/40'>
                        <IconComponent
                          strokeWidth={1.5}
                          className='w-7 h-7 text-primary'
                        />
                      </div>

                      {/* Title */}
                      <h3 className='font-outfit text-sm tracking-[0.25em] text-foreground mb-3 uppercase'>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className='font-cormorant-garamond text-muted-foreground text-base leading-relaxed'>
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <Reveal>
              {/* CTA */}
              <div className='flex justify-center mt-16'>
                <Link href={waLink()} target='_blank' rel='noopener noreferrer'>
                  <Button className='font-outfit rounded-full px-8 md:px-14 py-7 text-xs lg:text-sm tracking-[0.25em] uppercase transition-all duration-300'>
                    Hubungi Kami Sekarang
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
