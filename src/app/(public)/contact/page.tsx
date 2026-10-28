import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { contactInfo, waLink } from "@/constants/contact";
import { image } from "@/constants/images";
import ContactCard from "./components/ContactCard";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";
import SocialLinks from "@/components/site/SocialLinks";
import CtaBanner from "@/components/site/CtaBanner";
import Reveal from "@/components/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

const ContactForm = dynamic(() => import("./components/ContactForm"), {
  loading: () => (
    <section className='section-spacing'>
      <Container>
        <div className='mx-auto max-w-3xl animate-pulse rounded-2xl border border-border bg-card p-8 md:p-12'>
          <div className='mx-auto mb-8 h-8 w-48 rounded bg-secondary' />
          <div className='space-y-5'>
            <div className='h-11 rounded-lg bg-secondary' />
            <div className='h-11 rounded-lg bg-secondary' />
            <div className='h-32 rounded-lg bg-secondary' />
            <div className='mx-auto h-12 w-48 rounded-full bg-secondary' />
          </div>
        </div>
      </Container>
    </section>
  ),
});

export const metadata: Metadata = {
  title: "Hubungi Kami | Nada Upacara Bali",
  description:
    "Hubungi Nada Upacara Bali untuk konsultasi pertunjukan seni tradisional Bali melalui WhatsApp, email, atau kunjungi lokasi kami di Denpasar.",
  openGraph: {
    title: "Hubungi Kami | Nada Upacara Bali",
    description:
      "Kami siap membantu mewujudkan acara Anda dengan pertunjukan seni tradisional Bali yang autentik dan profesional.",
  },
};

export default function ContactPage() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <PageHero
        image={image.img1}
        alt='Hubungi Nada Upacara Bali'
        eyebrow='Kontak'
        title='Hubungi Kami'
        description='Kami siap mendengarkan kebutuhan Anda. Diskusikan acara, pertunjukan, atau kolaborasi seni bersama tim Nada Upacara Bali.'
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Kontak" }]}
      />

      <section className='section-spacing'>
        <Container>
          <SectionHeading
            eyebrow='Kanal Kontak'
            title='Pilih Cara Terbaik'
            description='Tim kami siap merespons pertanyaan Anda melalui kanal yang paling nyaman.'
            className='mb-12'
          />

          <StaggerContainer className='grid gap-6 md:grid-cols-2'>
            <StaggerItem>
              <ContactCard
                icon={<Phone className='size-6' aria-hidden='true' />}
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
                icon={<Mail className='size-6' aria-hidden='true' />}
                title='Email'
                description='Kirimkan pertanyaan atau proposal kerja sama melalui email. Kami akan merespons dalam 1x24 jam.'
                action={{
                  label: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                  external: true,
                }}
              />
            </StaggerItem>
            <StaggerItem>
              <ContactCard
                icon={<MapPin className='size-6' aria-hidden='true' />}
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
                icon={<Send className='size-6' aria-hidden='true' />}
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
        </Container>
      </section>

      <Reveal>
        <section className='pb-4'>
          <Container>
            <div className='flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card px-6 py-8 sm:flex-row'>
              <span className='font-ui text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase'>
                Ikuti Kami
              </span>
              <SocialLinks />
            </div>
          </Container>
        </section>
      </Reveal>

      <ContactForm />

      <Reveal>
        <section className='section-spacing'>
          <Container className='max-w-5xl'>
            <SectionHeading
              eyebrow='Lokasi'
              title='Temukan Kami'
              description='Kunjungi atau hubungi kami untuk diskusi lebih lanjut.'
              className='mb-8'
            />
            <div className='h-96 w-full overflow-hidden rounded-2xl border border-border md:h-[26rem]'>
              <iframe
                src={contactInfo.googleMapsEmbed}
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Lokasi Nada Upacara Bali'
                className='h-full w-full'
              />
            </div>
          </Container>
        </section>
      </Reveal>

      <CtaBanner
        title='Siap Bekerja Sama?'
        description='Jangan ragu untuk menghubungi kami. Tim Nada Upacara Bali siap membantu mewujudkan acara Anda dengan pertunjukan seni tradisional yang autentik dan profesional.'
        href={waLink()}
        external
      />
    </main>
  );
}
