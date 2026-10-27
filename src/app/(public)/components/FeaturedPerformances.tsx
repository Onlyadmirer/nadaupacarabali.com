"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

export default function FeaturedPerformances() {
  // Data 3 pertunjukan unggulan (Featured)
  const featured = [
    {
      id: "sang-pajegan",
      title: "Sang Pajegan",
      category: "The Sacred Solo Mask Dance",
      categoryId: "topeng-sakral",
      description:
        "Pertunjukan solo dramatis yang menjelajahi tiga wajah utama budaya Bali melalui tarian topeng sakral.",
      image: "/images/featured/sang-pajegan.png",
      link: "/catalog#sang-pajegan",
    },
    {
      id: "prabangkara-hanoman",
      title: "Prabangkara Hanoman",
      category: "Tari Pengiring Pengantin",
      categoryId: "tari-tradisional",
      description:
        "Tarian solo dinamis yang membawakan karakter suci dan kuat untuk membuka jalur prosesi mempelai.",
      image: "/images/featured/prabangkara-hanoman.png",
      link: "/catalog#prabangkara-hanoman",
    },
    {
      id: "wayang-peteng-tradisi",
      title: "Wayang Peteng Tradisi",
      category: "Wayang Kulit Klasik Bali",
      categoryId: "wayang",
      description:
        "Pertunjukan wayang dengan kelir dan lampu damar yang menghadirkan suasana magis khas Bali.",
      image: "/images/featured/wayang-peteng.png",
      link: "/catalog#wayang-peteng-tradisi",
    },
  ];

  return (
    <section className='py-28 sm:py-32 bg-secondary/70'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Header Section */}
        <div className='flex flex-1 w-full flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 border-b border-border/70 pb-8'>
          <div className='max-w-2xl'>
            <h2 className='text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-4'>
              Mahakarya Kami
            </h2>
            <h3 className='text-4xl md:text-5xl lg:text-6xl tracking-tight font-cormorant-garamond text-foreground text-balance'>
              Featured Performances
            </h3>
          </div>
          <div className='mt-6 md:mt-0'>
            <Link
              href='/catalog'
              className='group inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm tracking-[0.2em] uppercase transition-colors'
            >
              Lihat Semua Katalog
              <ChevronRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </div>

        {/* 3-Column Grid Layout */}
        <StaggerContainer className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {featured.map((item, index) => (
            <StaggerItem key={index}>
              <Link
                href={item.link}
                className='group block relative h-[26rem] w-full overflow-hidden rounded-sm ring-1 ring-border/60 shadow-[0_30px_80px_-40px_rgba(139,94,60,0.6)] transition-all duration-700 hover:-translate-y-1'
              >
                {/* Gambar Background */}
                <div className='absolute inset-0'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading='eager'
                    sizes='(max-width: 768px) 100vw 80vw'
                    className='object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105'
                  />
                </div>

                {/* Gradient Overlay dari bawah (lebih gelap di bawah untuk teks) */}
                <div className='absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-700 group-hover:opacity-95'></div>

                {/* Konten Teks di bagian bawah kartu */}
                <div className='absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end gap-2'>
                  <p className='text-[#f3d6b8] text-xs tracking-[0.25em] uppercase font-medium'>
                    {item.category}
                  </p>
                  <h4 className='text-2xl md:text-3xl font-outfit tracking-wide text-white'>
                    {item.title}
                  </h4>

                  {/* Deskripsi */}
                  <p className='text-white/80 text-sm leading-relaxed transition-all duration-700 group-hover:text-white/90'>
                    {item.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
