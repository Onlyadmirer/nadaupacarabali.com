import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/constants/contact";
import { image } from "@/constants/images";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import dynamic from "next/dynamic";
import ContactCard from "./components/ContactCard";
import Reveal from "@/components/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

const ContactForm = dynamic(() => import("./components/ContactForm"), {
  loading: () => (
    <section className='container mx-auto px-6 py-12 max-w-7xl'>
      <div className='max-w-3xl mx-auto'>
        <div className='bg-card rounded-2xl border border-border p-12 animate-pulse'>
          <div className='h-8 bg-[#f5eee6] rounded w-48 mx-auto mb-8' />
          <div className='space-y-6'>
            <div className='h-12 bg-[#f5eee6] rounded' />
            <div className='h-12 bg-[#f5eee6] rounded' />
            <div className='h-32 bg-[#f5eee6] rounded' />
            <div className='h-12 bg-[#f5eee6] rounded w-40 mx-auto' />
          </div>
        </div>
      </div>
    </section>
  ),
});

export const metadata: Metadata = {
  title: "Hubungi Kami | Nada Upacara Bali",
  description:
    "Hubungi Nada Upacara Bali untuk konsultasi pertunjukan seni tradisional Bali — via WhatsApp, email, atau kunjungi lokasi kami di Denpasar.",
  openGraph: {
    title: "Hubungi Kami | Nada Upacara Bali",
    description:
      "Kami siap membantu mewujudkan acara Anda dengan pertunjukan seni tradisional Bali yang autentik dan profesional.",
  },
};

export default function ContactPage() {
  return (
    <main className='min-h-screen bg-background text-foreground relative overflow-hidden'>
      {/* Hero Section */}
      <section className='relative h-screen min-h-125 flex flex-col justify-center items-center text-center px-6 mb-12'>
        <div className='absolute inset-0 z-0'>
          <Image
            src={image.img1}
            alt='Hubungi Nada Upacara Bali'
            fill
            sizes='100vw'
            className='object-cover'
            priority
            fetchPriority='high'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/90' />
        </div>

        <Reveal className='relative z-10 max-w-4xl mx-auto flex flex-col items-center'>
          <div className='mb-4'>
            <span className='font-outfit uppercase tracking-[0.2em] text-sm text-[#d58058] font-semibold'>
              Kontak
            </span>
          </div>
          <h1 className='font-libre-baskerville italic text-5xl md:text-7xl font-bold mb-6 text-[#f09a73] tracking-tight'>
            Hubungi Kami
          </h1>
          <div className='flex justify-center mb-8'>
            <div className='w-24 h-px bg-linear-to-r from-transparent via-[#d58058] to-transparent'></div>
          </div>
          <p className='font-outfit md:max-w-4xl mx-auto text-lg md:text-xl text-neutral-300 leading-relaxed font-light'>
            Kami siap mendengarkan kebutuhan Anda. Diskusikan acara,
            pertunjukan, atau kolaborasi seni bersama tim Nada Upacara Bali.
          </p>
        </Reveal>
      </section>

      {/* Contact Cards */}
      <section className='container mx-auto px-6 py-12 max-w-7xl'>
        <StaggerContainer className='grid md:grid-cols-2 gap-8'>
          <StaggerItem>
            <ContactCard
              icon={<Phone className='w-6 h-6' />}
              title='WhatsApp'
              description={`Hubungi kami langsung via WhatsApp untuk respons cepat. Tim kami siap membantu ${contactInfo.hours.toLowerCase()}.`}
              action={{
                label: `Chat ${contactInfo.phone}`,
                href: contactInfo.whatsapp,
                external: true,
              }}
            />
          </StaggerItem>
          <StaggerItem>
            <ContactCard
              icon={<Mail className='w-6 h-6' />}
              title='Email'
              description='Kirimkan pertanyaan atau proposal kerja sama melalui email. Kami akan merespon dalam 1x24 jam.'
              action={{
                label: contactInfo.email,
                href: `mailto:${contactInfo.email}`,
                external: true,
              }}
            />
          </StaggerItem>
          <StaggerItem>
            <ContactCard
              icon={<MapPin className='w-6 h-6' />}
              title='Lokasi'
              description='Berbasis di Denpasar, Bali. Kami siap tampil di berbagai venue di seluruh Bali dan luar daerah.'
              action={{
                label: "Lihat di Google Maps",
                href: "https://maps.google.com/?q=Denpasar+Bali+Indonesia",
                external: true,
              }}
            />
          </StaggerItem>
          <StaggerItem>
            <ContactCard
              icon={<Send className='w-6 h-6' />}
              title='Sosial Media'
              description='Ikuti perjalanan seni kami melalui media sosial untuk update pertunjukan dan kegiatan terbaru.'
              action={{
                label: "Ikuti Kami",
                href: contactInfo.social.instagram,
                external: true,
              }}
            />
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Social Media Links */}
      <Reveal>
        <section className='container mx-auto px-6 py-12 max-w-7xl'>
          <div className='flex flex-wrap items-center justify-center gap-6'>
            <span className='font-outfit uppercase tracking-[0.2em] text-xs text-[#6f6055]'>
              Ikuti Kami
            </span>
            <div className='flex gap-4'>
              <a
                href={contactInfo.social.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 rounded-full border border-border flex items-center justify-center text-[#6f6055] hover:bg-[#c05621] hover:border-[#c05621] hover:text-white transition-all duration-300'
                aria-label='Instagram'
              >
                <svg
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='2' y='2' width='20' height='20' rx='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
                </svg>
              </a>
              <a
                href={contactInfo.social.youtube}
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 rounded-full border border-border flex items-center justify-center text-[#6f6055] hover:bg-[#c05621] hover:border-[#c05621] hover:text-white transition-all duration-300'
                aria-label='YouTube'
              >
                <svg
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z' />
                  <polygon points='9.75 15.02 15.5 12 9.75 8.98 9.75 15.02' />
                </svg>
              </a>
              <a
                href={contactInfo.social.tiktok}
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 rounded-full border border-border flex items-center justify-center text-[#6f6055] hover:bg-[#c05621] hover:border-[#c05621] hover:text-white transition-all duration-300'
                aria-label='TikTok'
              >
                <svg
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5' />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Contact Form */}
      <ContactForm />

      {/* Map Section */}
      <Reveal>
        <section className='container mx-auto px-6 py-12 max-w-5xl'>
          <div className='mb-8 text-center'>
            <span className='font-outfit uppercase tracking-[0.2em] text-sm text-[#c05621] font-semibold'>
              Lokasi
            </span>
            <h2 className='font-libre-baskerville italic text-3xl md:text-4xl font-bold mt-2 text-[#9a3412]'>
              Temukan Kami
            </h2>
            <div className='flex justify-center mt-4 mb-2'>
              <div className='w-16 h-px bg-linear-to-r from-transparent via-[#d58058] to-transparent'></div>
            </div>
          </div>
          <div className='h-105 w-full overflow-hidden rounded-xl border border-border'>
            <iframe
              src={contactInfo.googleMapsEmbed}
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Lokasi Nada Upacara Bali'
              className='w-full h-full'
            />
          </div>
        </section>
      </Reveal>

      {/* CTA Section */}
      <Reveal>
        <section className='container mx-auto px-6 py-32 text-center max-w-7xl relative'>
          <div
            className='absolute inset-0 -z-10 pointer-events-none'
            style={{
              background:
                "radial-gradient(circle at center, rgba(178,116,87,0.14) 0%, transparent 70%)",
            }}
          ></div>
          <div className='max-w-4xl mx-auto border border-[#f3cdb6] bg-card shadow-sm py-12 px-6 md:px-20 md:py-20 rounded-2xl relative overflow-hidden group'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-[#f09a73]/10 blur-3xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150'></div>
            <div className='absolute bottom-0 left-0 w-32 h-32 bg-[#d58058]/10 blur-3xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150'></div>

            <h2 className='font-libre-baskerville italic text-4xl lg:text-5xl mb-6 text-[#9a3412]'>
              Siap Bekerja Sama?
            </h2>
            <p className='font-cormorant-garamond text-[#4e4239] text-lg lg:text-xl mb-12 font-light max-w-2xl mx-auto'>
              Jangan ragu untuk menghubungi kami. Tim Nada Upacara Bali siap
              membantu mewujudkan acara Anda dengan pertunjukan seni tradisional
              yang autentik dan profesional.
            </p>
            <Link
              href={contactInfo.whatsapp}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='font-outfit bg-[#b4501f] hover:bg-[#8f3d16] text-white rounded-none px-6 md:px-12 py-7 text-xs lg:text-base tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(180,80,31,0.2)] hover:shadow-[0_0_30px_rgba(143,61,22,0.4)]'>
                Hubungi Kami Sekarang
              </Button>
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
