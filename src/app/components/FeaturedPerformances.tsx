"use client";
import Image from "next/image";
import Link from "next/link";

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
    <section className='py-24 bg-linear-to-b to-black via-neutral-950 from-[#1a1105]'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Header Section */}
        <div className='flex flex-1 w-full flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-8'>
          <div className='max-w-2xl'>
            <h2 className='text-sm font-semibold tracking-widest text-[#d58058] uppercase mb-3'>
              Mahakarya Kami
            </h2>
            <h3 className='text-4xl md:text-5xl tracking-tight font-cormorant-garamond text-white'>
              Featured Performances
            </h3>
          </div>
          <div className='mt-6 md:mt-0'>
            <Link
              href='/catalog'
              className='text-[#d58058] hover:text-amber-400 text-sm tracking-wider uppercase border-b border-[#d58058] pb-1 transition-colors'
            >
              Lihat Semua Katalog
            </Link>
          </div>
        </div>

        {/* 3-Column Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {featured.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className='group block relative h-96 w-full overflow-hidden rounded-lg'
            >
              {/* Gambar Background */}
              <div className='absolute inset-0'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading='eager'
                  sizes='(max-width: 768px) 100vw 80vw'
                  className='object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105'
                />
              </div>

              {/* Gradient Overlay dari bawah (lebih gelap di bawah untuk teks) */}
              <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500'></div>

              {/* Konten Teks di bagian bawah kartu */}
              <div className='absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end'>
                <p className='text-[#d58058] text-xs tracking-widest uppercase mb-2 font-medium'>
                  {item.category}
                </p>
                <h4 className='text-2xl font-outfit text-white mb-3'>
                  {item.title}
                </h4>

                {/* Deskripsi tersembunyi yang muncul saat hover */}
                <div className='overflow-hidden'>
                  <p className='text-neutral-400 text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-700 ease-in-out'>
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
