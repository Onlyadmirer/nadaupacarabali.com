import Image from "next/image";
import Link from "next/link";

export default function PreviewGallery() {
  // Array gambar dengan tambahan konfigurasi 'className' untuk ukuran Bento Grid
  const previewImages = [
    {
      src: "/images/gallery-1.jpg",
      alt: "Highlight Pementasan 1",
      // Gambar 1: Besar (Persegi/Landscape besar) - Mengambil 2 kolom & 2 baris
      className: "col-span-2 row-span-2",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Highlight Pementasan 2",
      // Gambar 2: Kecil (Persegi) - Mengambil 1 kolom & 1 baris
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Highlight Pementasan 3",
      // Gambar 3: Tinggi (Portrait) - Mengambil 1 kolom & 2 baris (memanjang ke bawah)
      className: "col-span-1 row-span-2",
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Highlight Pementasan 4",
      // Gambar 4: Kecil (Persegi) - Mengambil 1 kolom & 1 baris (mengisi bawah gambar 2)
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/gallery-5.jpg",
      alt: "Highlight Pementasan 5",
      // Gambar 5: Lebar (Landscape) - Mengambil 2 kolom & 1 baris
      className: "col-span-2 row-span-1",
    },
    {
      src: "/images/gallery-6.jpg",
      alt: "Highlight Pementasan 6",
      // Gambar 6: Lebar (Landscape) - Mengambil 2 kolom & 1 baris
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
              // className dari array disisipkan ke sini
              className={`group relative w-full h-full overflow-hidden rounded-md bg-neutral-900 ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-80'
              />
              <div className='absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500'></div>
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
