import { image } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

export default function PreviewGallery() {
  const previewImages = [
    {
      src: image.aboutBg,
      alt: "Highlight Pementasan 1",
      className: "col-span-2 row-span-2",
    },
    {
      src: image.img5,
      alt: "Highlight Pementasan 2",
      className: "col-span-1 row-span-1",
    },
    {
      src: image.img3,
      alt: "Highlight Pementasan 3",
      className: "col-span-1 row-span-2",
    },
    {
      src: image.img4,
      alt: "Highlight Pementasan 4",
      className: "col-span-1 row-span-1",
    },
    {
      src: image.img2,
      alt: "Highlight Pementasan 5",
      className: "col-span-2 row-span-1",
    },
    {
      src: image.homeBg,
      alt: "Highlight Pementasan 6",
      className: "col-span-2 row-span-1",
    },
  ];
  return (
    <section className='py-24 bg-neutral-950'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12'>
          <div className='max-w-2xl'>
            <h2 className='text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3'>
              Cuplikan Momen
            </h2>
            <h3 className='text-4xl md:text-5xl tracking-tight font-cormorant-garamond text-neutral-300'>
              Galeri & Visual
            </h3>
          </div>
          <div className='hidden md:block mt-6 md:mt-0'>
            <Link
              href='/gallery'
              className='text-[#d58058] hover:text-amber-500 text-sm tracking-wider uppercase border-b border-[#d58058] pb-1 transition-colors'
            >
              Lihat Semua Galeri
            </Link>
          </div>
        </div>

        {/* 
          BENTO GRID LAYOUT 
          - grid-cols-2: HP (2 Kolom)
          - md:grid-cols-4: Laptop (4 Kolom)
          - auto-rows-[150px] md:auto-rows-[250px]: Mengunci tinggi 1 baris. 
            Jika elemen memiliki 'row-span-2', tingginya otomatis jadi 2x lipat.
        */}
        <div className='grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] gap-2 md:gap-4'>
          {previewImages.map((image, index) => (
            <div
              key={index}
              className={`group relative w-full h-full overflow-hidden rounded-md ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black/30'></div>
            </div>
          ))}
        </div>

        {/* Tombol ke halaman Gallery utuh (Khusus mobile) */}
        <div className='mt-10 flex justify-center md:hidden'>
          <Link
            href='/gallery'
            className='px-6 py-3 border border-[#d58058] text-[#d58058] text-sm tracking-wider uppercase transition-colors rounded-sm'
          >
            Lihat Semua Galeri
          </Link>
        </div>
      </div>
    </section>
  );
}
