import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";

const featured = [
  {
    id: "sang-pajegan",
    title: "Sang Pajegan",
    category: "The Sacred Solo Mask Dance",
    description:
      "Pertunjukan solo dramatis yang menjelajahi tiga wajah utama budaya Bali melalui tarian topeng sakral.",
    image: "/images/featured/sang-pajegan.png",
    link: "/catalog#sang-pajegan",
  },
  {
    id: "prabangkara-hanoman",
    title: "Prabangkara Hanoman",
    category: "Tari Pengiring Pengantin",
    description:
      "Tarian solo dinamis yang membawakan karakter suci dan kuat untuk membuka jalur prosesi mempelai.",
    image: "/images/featured/prabangkara-hanoman.png",
    link: "/catalog#prabangkara-hanoman",
  },
  {
    id: "wayang-peteng-tradisi",
    title: "Wayang Peteng Tradisi",
    category: "Wayang Kulit Klasik Bali",
    description:
      "Pertunjukan wayang dengan kelir dan lampu damar yang menghadirkan suasana magis khas Bali.",
    image: "/images/featured/wayang-peteng.png",
    link: "/catalog#wayang-peteng-tradisi",
  },
];

export default function FeaturedPerformances() {
  return (
    <section className='section-spacing bg-secondary/60'>
      <Container>
        <SectionHeading
          align='left'
          eyebrow='Mahakarya Kami'
          title='Featured Performances'
          description='Tiga pertunjukan pilihan yang paling sering diminta untuk momen istimewa.'
          className='mb-12 border-b border-border/70 pb-8 md:mb-16'
          action={
            <Link
              href='/catalog'
              className='group inline-flex min-h-11 items-center gap-2 font-ui text-xs font-semibold tracking-[0.18em] text-primary uppercase transition-colors hover:text-primary-hover'
            >
              Lihat Semua Katalog
              <ChevronRight
                className='size-4 transition-transform group-hover:translate-x-1'
                aria-hidden='true'
              />
            </Link>
          }
        />

        <StaggerContainer className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8'>
          {featured.map((item) => (
            <StaggerItem key={item.id}>
              <Link
                href={item.link}
                className='group relative flex h-[26rem] w-full items-end overflow-hidden rounded-2xl shadow-[0_30px_80px_-40px_rgba(139,94,60,0.55)] ring-1 ring-border/70 transition-all duration-300 hover:-translate-y-1'
              >
                <div className='absolute inset-0'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                  />
                </div>

                <div className='absolute inset-0 bg-linear-to-t from-neutral-950/95 via-neutral-950/55 to-transparent' />

                <div className='relative z-10 flex w-full flex-col gap-2 p-6 md:p-7'>
                  <p className='font-ui text-[11px] font-semibold tracking-[0.22em] text-gold-soft uppercase'>
                    {item.category}
                  </p>
                  <h3 className='font-heading text-2xl leading-tight font-semibold text-white md:text-3xl'>
                    {item.title}
                  </h3>
                  <p className='font-body text-sm leading-relaxed text-white/80'>
                    {item.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
