import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";
import CatalogGrid from "./components/CatalogGrid";
import { image } from "@/constants/images";
import { siteUrl, waLink } from "@/constants/contact";
import { getPublishedCatalog } from "@/lib/catalog";
import { getStartingPrice } from "@/types/catalog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Katalog Pertunjukan | Nada Upacara Bali",
  description:
    "Jelajahi katalog lengkap pertunjukan seni tradisional Bali: Rindik, Gender Wayang, Gamelan, Wayang, Tari Tradisional, dan Topeng Sakral. Lengkap dengan harga dan paket.",
  openGraph: {
    title: "Katalog Pertunjukan | Nada Upacara Bali",
    description:
      "Temukan pertunjukan seni tradisional Bali terbaik untuk upacara adat, pernikahan, corporate event, dan edukasi budaya.",
  },
};

export default async function CatalogPage() {
  const { categories, items } = await getPublishedCatalog();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog Pertunjukan Nada Upacara Bali",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.title,
        description: item.description,
        serviceType: item.category,
        provider: {
          "@type": "Organization",
          name: "Nada Upacara Bali",
          url: siteUrl,
        },
        offers: {
          "@type": "Offer",
          price: getStartingPrice(item),
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <main className='min-h-screen bg-background text-foreground'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        image={image.img5}
        alt='Katalog pertunjukan Nada Upacara Bali'
        eyebrow='Katalog Pertunjukan'
        title='Experiences & Pricing'
        description='Jelajahi ragam pertunjukan seni tradisional Bali mulai dari gamelan sakral, wayang klasik, hingga tarian elegan lengkap dengan informasi paket dan harga.'
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Katalog" }]}
      />

      <CatalogGrid categories={categories} items={items} />

      <CtaBanner
        title='Tidak Menemukan yang Sesuai?'
        description='Kami siap menyesuaikan pertunjukan dengan kebutuhan spesifik acara Anda. Hubungi kami untuk diskusi lebih lanjut.'
        href={waLink()}
        external
      />
    </main>
  );
}
