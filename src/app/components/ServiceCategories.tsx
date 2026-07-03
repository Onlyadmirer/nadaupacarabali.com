import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceCategories } from "@/constants/services";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

export default function ServiceCategories() {
  return (
    <section className='py-24 bg-linear-to-b from-black via-neutral-950 to-[#1a1105]'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h2 className='text-sm font-semibold tracking-widest text-[#d58058] uppercase mb-3'>
            Spesialisasi Kami
          </h2>
          <h3 className='text-4xl md:text-5xl font-cormorant-garamond text-white'>
            Layanan <span className='text-[#d58058]'>Utama</span>
          </h3>
        </div>

        {/* Grid Cards 2x2 */}
        <StaggerContainer className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
          {serviceCategories.map((service, index) => (
            <StaggerItem key={index}><Link
              href={service.link}
              className='group relative h-80 md:h-96 overflow-hidden flex items-end rounded-md'
            >
              {/* Background Image dengan efek Zoom saat di-hover */}
              <div className='absolute inset-0'>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes='(max-width: 768px) 100vw 80vw'
                  className='object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                />
              </div>

              {/* Overlay gelap agar teks tetap terbaca */}
              <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/40 md:to-black/30 transition-opacity duration-500 group-hover:opacity-90'></div>

              {/* Konten Teks */}
              <div className='relative z-10 p-4 md:p-8 w-full'>
                <h4 className='text-2xl font-outfit text-[#d58058] mb-2 transition-transform duration-500 group-hover:-translate-y-2'>
                  {service.title}
                </h4>

                {/* Deskripsi: Awalnya transparan dan agak ke bawah, muncul saat di-hover */}
                <p className='text-neutral-300 text-sm leading-relaxed translate-y-2 transition-all duration-500  group-hover:translate-y-0'>
                  {service.description}
                </p>

                {/* Tombol kecil (opsional) */}
                <div className='mt-4 flex items-center text-[#d58058] text-sm font-medium opacity-0 translate-y-4 transition-all duration-500 delay-75 group-hover:opacity-100 group-hover:translate-y-0'>
                  Lihat Detail
                  <ChevronRight
                    size={16}
                    className='relative ml-1 top-[0.3px] shrink-0'
                  />
                </div>
              </div>
            </Link></StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
