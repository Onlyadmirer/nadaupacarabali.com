import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/constants/contact";
import { image } from "@/constants/images";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import dynamic from "next/dynamic";
import ContactCard from "./components/ContactCard";

const ContactForm = dynamic(() => import("./components/ContactForm"), {
  loading: () => (
    <section className='container mx-auto px-6 py-12 max-w-7xl'>
      <div className='max-w-3xl mx-auto'>
        <div className='bg-neutral-900/50 rounded-2xl border border-neutral-800/60 p-12 animate-pulse'>
          <div className='h-8 bg-neutral-800 rounded w-48 mx-auto mb-8' />
          <div className='space-y-6'>
            <div className='h-12 bg-neutral-800 rounded' />
            <div className='h-12 bg-neutral-800 rounded' />
            <div className='h-32 bg-neutral-800 rounded' />
            <div className='h-12 bg-neutral-800 rounded w-40 mx-auto' />
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
    <main className='min-h-screen bg-neutral-950 text-neutral-50 relative overflow-hidden'>
      {/* Hero Section */}
      <section className='relative h-[85vh] min-h-125 flex flex-col justify-center items-center text-center px-6 mb-12'>
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

        <div className='relative z-10 max-w-4xl mx-auto flex flex-col items-center'>
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
            Kami siap mendengarkan kebutuhan Anda. Diskusikan acara, pertunjukan,
            atau kolaborasi seni bersama tim Nada Upacara Bali.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className='container mx-auto px-6 py-12 max-w-7xl'>
        <div className='grid md:grid-cols-2 gap-8'>
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
        </div>
      </section>

      {/* Social Media Links */}
      <section className='container mx-auto px-6 py-12 max-w-7xl'>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          <span className='font-outfit uppercase tracking-[0.2em] text-xs text-neutral-400'>
            Ikuti Kami
          </span>
          <div className='flex gap-4'>
            <a
              href={contactInfo.social.instagram}
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 rounded-full border border-neutral-700/60 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              aria-label='Instagram'
            >
              <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><rect x='2' y='2' width='20' height='20' rx='5'/><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/><line x1='17.5' y1='6.5' x2='17.51' y2='6.5'/></svg>
            </a>
            <a
              href={contactInfo.social.youtube}
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 rounded-full border border-neutral-700/60 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              aria-label='YouTube'
            >
              <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z'/><polygon points='9.75 15.02 15.5 12 9.75 8.98 9.75 15.02'/></svg>
            </a>
            <a
              href={contactInfo.social.tiktok}
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 rounded-full border border-neutral-700/60 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              aria-label='TikTok'
            >
              <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5'/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Google Maps */}
      <section className='container mx-auto px-6 py-12 max-w-7xl'>
        <Link
          href='https://maps.google.com/?q=Denpasar+Bali+Indonesia'
          target='_blank'
          rel='noopener noreferrer'
          className='group block rounded-xl overflow-hidden border border-neutral-800/60 hover:border-[#d58058]/30 transition-all duration-500'
        >
          <div className='relative h-80 md:h-100 bg-neutral-900 flex flex-col items-center justify-center p-8 overflow-hidden'>
            {/* Decorative grid pattern */}
            <div
              className='absolute inset-0 opacity-[0.04]'
              style={{
                backgroundImage:
                  "linear-gradient(rgba(213,128,88,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(213,128,88,.3) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div className='absolute top-0 right-0 w-64 h-64 bg-[#f09a73]/5 blur-3xl rounded-full' />
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-[#d58058]/5 blur-3xl rounded-full' />

            <MapPin className='w-16 h-16 text-[#d58058] mb-6 transition-transform duration-500 group-hover:scale-110' />
            <p className='font-libre-baskerville italic text-2xl md:text-3xl text-[#f09a73] mb-3'>
              Denpasar, Bali
            </p>
            <p className='font-cormorant-garamond text-neutral-400 text-lg mb-8 text-center max-w-md'>
              Berbasis di Denpasar, Bali — siap tampil di berbagai venue di
              seluruh Bali dan luar daerah.
            </p>
            <span className='font-outfit text-xs tracking-[0.2em] uppercase text-[#d58058] group-hover:text-[#f09a73] transition-colors duration-300 inline-flex items-center gap-2'>
              Buka di Google Maps
              <span className='transition-transform duration-300 group-hover:translate-x-1'>
                &rarr;
              </span>
            </span>
          </div>
        </Link>
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
            Siap Bekerja Sama?
          </h2>
          <p className='font-cormorant-garamond text-neutral-300 text-lg lg:text-xl mb-12 font-light max-w-2xl mx-auto'>
            Jangan ragu untuk menghubungi kami. Tim Nada Upacara Bali siap
            membantu mewujudkan acara Anda dengan pertunjukan seni tradisional
            yang autentik dan profesional.
          </p>
          <Link
            href={contactInfo.whatsapp}
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
