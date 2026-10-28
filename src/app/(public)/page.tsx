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
import Link from "next/link";
import { image } from "@/constants/images";
import Reveal from "@/components/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import { waLink } from "@/constants/contact";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";
import CtaBanner from "@/components/site/CtaBanner";

const ServiceCategories = dynamic(
  () => import("./components/ServiceCategories"),
  {
    loading: () => (
      <section className='section-spacing px-6'>
        <Container>
          <div className='animate-pulse space-y-6'>
            <div className='mx-auto h-8 w-64 rounded bg-secondary' />
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
              {[...Array(4)].map((_, i) => (
                <div key={i} className='h-64 rounded-2xl bg-secondary/60' />
              ))}
            </div>
          </div>
        </Container>
      </section>
    ),
  },
);

const FeaturedPerformances = dynamic(
  () => import("./components/FeaturedPerformances"),
  {
    loading: () => (
      <section className='section-spacing px-6'>
        <Container>
          <div className='animate-pulse space-y-6'>
            <div className='mx-auto h-8 w-64 rounded bg-secondary' />
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              {[...Array(3)].map((_, i) => (
                <div key={i} className='h-80 rounded-2xl bg-secondary/60' />
              ))}
            </div>
          </div>
        </Container>
      </section>
    ),
  },
);

const PreviewGallery = dynamic(() => import("./components/PreviewGallery"), {
  loading: () => (
    <section className='section-spacing px-6'>
      <Container>
        <div className='animate-pulse space-y-6'>
          <div className='mx-auto h-8 w-64 rounded bg-secondary' />
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {[...Array(6)].map((_, i) => (
              <div key={i} className='aspect-square rounded-2xl bg-secondary/60' />
            ))}
          </div>
        </div>
      </Container>
    </section>
  ),
});

export const metadata: Metadata = {
  title: "Nada Upacara Bali | Balinese Creative-Cultural Service",
  description:
    "Cultural performance house yang menghadirkan pengalaman budaya Bali secara sakral, emosional, dan profesional melalui seni pertunjukan tradisional Bali.",
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
    <main className='min-h-screen bg-background text-foreground'>
      <PageHero
        image={image.homeBg}
        alt='Pementasan seni tradisional Bali oleh Nada Upacara Bali'
        eyebrow='Balinese Creative-Cultural Service'
        title='Nada Upacara Bali'
        description='Menghadirkan seni pertunjukan tradisional Bali yang sakral, penuh rasa, dan profesional untuk momen yang berarti.'
        size='full'
        objectPosition='49% 20%'
      >
        <Button asChild size='lg' className='rounded-full px-7'>
          <Link href={waLink()} target='_blank' rel='noopener noreferrer'>
            Konsultasi via WhatsApp
          </Link>
        </Button>
        <Button
          asChild
          size='lg'
          variant='outline'
          className='rounded-full border-white/40 bg-white/5 px-7 text-white hover:border-white/60 hover:bg-white/15 hover:text-white'
        >
          <Link href='/catalog'>Jelajahi Katalog</Link>
        </Button>
      </PageHero>

      <section className='section-spacing'>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow='Tentang Kami'
              title={
                <>
                  Tradisi Bertemu{" "}
                  <span className='text-primary italic'>Elegansi</span>
                </>
              }
              description='Nada Upacara Bali bukan hanya penyedia pertunjukan seni tradisional Bali, tetapi sebuah cultural performance house yang menghadirkan pengalaman budaya Bali secara sakral, emosional, dan profesional.'
            />
          </Reveal>
        </Container>
      </section>

      <section className='pb-20 md:pb-28'>
        <Container>
          <Reveal>
            <div className='grid overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_90px_-50px_rgba(139,94,60,0.35)] lg:grid-cols-[1.5fr_1fr]'>
              <div className='relative aspect-video w-full min-w-0 bg-neutral-950'>
                <iframe
                  className='absolute inset-0 h-full w-full'
                  src='https://www.youtube-nocookie.com/embed/-yp5DuntO9c'
                  allowFullScreen
                  loading='lazy'
                  title='Video profil Nada Upacara Bali'
                />
              </div>

              <div className='flex min-w-0 flex-col justify-center gap-5 p-6 py-10 md:px-10 lg:px-12'>
                <p className='font-ui text-xs font-semibold tracking-[0.22em] text-primary uppercase'>
                  Filosofi Kami
                </p>
                <h2 className='font-heading text-3xl leading-tight font-semibold text-foreground md:text-4xl'>
                  Tentang <span className='text-primary italic'>Kami</span>
                </h2>
                <p className='font-body text-base leading-relaxed text-muted-foreground'>
                  Kami percaya bahwa seni tidak hanya untuk dilestarikan, tapi
                  juga dihormati. Setiap nada dan gerak harus membawa makna yang
                  disajikan dengan keindahan, kesakralan, dan disiplin
                  profesional.
                </p>
                <div>
                  <Button asChild variant='outline'>
                    <Link href='/about'>
                      Selengkapnya
                      <ChevronRight className='size-4' aria-hidden='true' />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ServiceCategories />
      <FeaturedPerformances />
      <PreviewGallery />

      <section className='section-spacing relative overflow-hidden'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,94,60,0.12)_0%,transparent_70%)]'
        />
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow='Alur Kerja'
              title='Mari Memulai Harmoni Bersama!'
              description='Empat langkah sederhana untuk menghadirkan pertunjukan yang selaras dengan kebutuhan acara Anda.'
            />
          </Reveal>

          <StaggerContainer className='mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
            {steps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <StaggerItem key={step.id} className='group relative h-full'>
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden='true'
                      className='absolute top-12 left-[60%] hidden h-px w-[80%] bg-linear-to-r from-primary/30 to-transparent lg:block'
                    />
                  )}

                  <div className='relative flex h-full flex-col rounded-2xl bg-card p-6 shadow-[0_20px_80px_-40px_rgba(139,94,60,0.45)] ring-1 ring-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_-40px_rgba(139,94,60,0.5)] lg:p-7'>
                    <div className='absolute -top-4 -right-3 flex size-10 items-center justify-center rounded-full bg-primary font-ui text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-15px_rgba(139,94,60,0.9)]'>
                      0{step.id}
                    </div>

                    <div className='mb-5 flex size-12 items-center justify-center rounded-full bg-secondary ring-1 ring-border transition-colors duration-300 group-hover:ring-primary/40'>
                      <IconComponent
                        strokeWidth={1.5}
                        className='size-6 text-primary'
                        aria-hidden='true'
                      />
                    </div>

                    <h3 className='min-h-[2lh] font-ui text-sm font-semibold tracking-[0.12em] text-foreground uppercase'>
                      {step.title}
                    </h3>
                    <p className='mt-3 font-body text-sm leading-relaxed text-muted-foreground'>
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      <CtaBanner
        title='Siap Mewujudkan Acara Anda?'
        description='Mari diskusikan kebutuhan pertunjukan untuk momen spesial Anda bersama tim Nada Upacara Bali.'
        href={waLink()}
        external
      />
    </main>
  );
}
