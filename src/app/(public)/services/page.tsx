import type { Metadata } from "next";
import { servicesData } from "@/constants/services";
import { image } from "@/constants/images";
import ServiceCard from "./components/ServiceCard";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import { waLink } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Layanan Kami | Nada Upacara Bali",
  description:
    "Layanan profesional pertunjukan seni tradisional Bali untuk Upacara Adat, Pernikahan Tradisi Bali, Corporate & International Events, serta Kolaborasi & Edukasi Budaya.",
  openGraph: {
    title: "Layanan Kami | Nada Upacara Bali",
    description:
      "Menghadirkan seni pertunjukan tradisional Bali dengan standar profesionalisme dan pelayanan premium.",
  },
};

export default function ServicesPage() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <PageHero
        image={image.img2}
        alt='Layanan pertunjukan Nada Upacara Bali'
        eyebrow='Pilar Layanan'
        title='Layanan Kami'
        description='Menghadirkan seni pertunjukan tradisional Bali dengan standar profesionalisme, ketepatan waktu, dan pelayanan premium untuk berbagai kebutuhan acara Anda.'
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Layanan" }]}
      />

      <section className='flex flex-col'>
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
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
