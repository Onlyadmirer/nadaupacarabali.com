import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/constants/contact";
import { image } from "@/constants/images";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";

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
            sizes='(max-width: 768px) 100vw 80vw'
            className='object-cover'
            priority
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
          <span className='font-outfit uppercase tracking-[0.2em] text-xs text-neutral-500'>
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
              <FaInstagram className='w-5 h-5' />
            </a>
            <a
              href={contactInfo.social.youtube}
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 rounded-full border border-neutral-700/60 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              aria-label='YouTube'
            >
              <FaYoutube className='w-5 h-5' />
            </a>
            <a
              href={contactInfo.social.tiktok}
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 rounded-full border border-neutral-700/60 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              aria-label='TikTok'
            >
              <FaTiktok className='w-5 h-5' />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Google Maps */}
      <section className='container mx-auto px-6 py-12 max-w-7xl'>
        <div className='rounded-xl overflow-hidden border border-neutral-800/60'>
          <iframe
            src={contactInfo.googleMapsEmbed}
            title='Lokasi Nada Upacara Bali - Denpasar'
            className='w-full h-80 md:h-100'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
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
            <Button className='font-outfit bg-[#d58058] hover:bg-[#b27457] text-white rounded-none px-6 md:px-12 py-7 text-xs lg:text-base tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(213,128,88,0.2)] hover:shadow-[0_0_30px_rgba(213,128,88,0.4)]'>
              Hubungi Kami Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
