import type { Metadata } from "next";
import { blogData } from "@/constants/blog";
import { image } from "@/constants/images";
import BlogCard from "./components/BlogCard";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";
import CtaBanner from "@/components/site/CtaBanner";
import Reveal from "@/components/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import { waLink } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Blog | Nada Upacara Bali",
  description:
    "Jelajahi artikel seputar seni pertunjukan tradisional Bali, mulai dari gamelan, tari, wayang, upacara adat, hingga wedding tradisi Bali.",
  openGraph: {
    title: "Blog | Nada Upacara Bali",
    description:
      "Wawasan dan inspirasi seni budaya tradisional Bali dari Nada Upacara Bali.",
  },
};

export default function BlogPage() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <PageHero
        image={image.img7}
        alt='Artikel dan wawasan seni Bali'
        eyebrow='Blog'
        title='Artikel & Wawasan'
        description='Jelajahi wawasan seputar seni dan budaya tradisional Bali, mulai dari filosofi gamelan, tari sakral, hingga panduan pernikahan adat.'
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className='section-spacing'>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow='Tulisan Terbaru'
              title='Wawasan dari Panggung'
              description='Catatan, panduan, dan cerita di balik pertunjukan seni tradisional Bali.'
              className='mb-12'
            />
          </Reveal>

          <StaggerContainer className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
            {blogData.map((post) => (
              <StaggerItem key={post.id} className='h-full'>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <CtaBanner
        title='Ingin Tahu Lebih Banyak?'
        description='Kami siap menjawab pertanyaan Anda seputar seni pertunjukan tradisional Bali. Hubungi kami untuk diskusi lebih lanjut.'
        href={waLink()}
        external
      />
    </main>
  );
}
