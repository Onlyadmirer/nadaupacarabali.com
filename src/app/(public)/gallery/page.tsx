import type { Metadata } from "next";
import GalleryGrid from "./components/GalleryGrid";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import { image } from "@/constants/images";
import { waLink } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Galeri | Nada Upacara Bali",
  description:
    "Jelajahi galeri foto pertunjukan seni tradisional Bali: gamelan, tari, wayang, dan topeng sakral dari Nada Upacara Bali.",
  openGraph: {
    title: "Galeri | Nada Upacara Bali",
    description:
      "Momen-momen terbaik pertunjukan seni tradisional Bali dalam balutan budaya dan profesionalisme.",
  },
};

export default function GalleryPage() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <PageHero
        image={image.img3}
        alt='Galeri pertunjukan Nada Upacara Bali'
        eyebrow='Galeri'
        title='Visual Journey'
        description='Setiap pertunjukan adalah cerita. Jelajahi momen-momen terbaik pementasan seni tradisional Bali dalam balutan budaya, rasa, dan profesionalisme.'
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Galeri" }]}
      />

      <GalleryGrid />

      <CtaBanner
        title='Ingin Tampil di Galeri Kami?'
        description='Jadilah bagian dari perjalanan seni kami. Hubungi kami untuk kolaborasi pertunjukan tradisional Bali.'
        href={waLink()}
        external
      />
    </main>
  );
}
