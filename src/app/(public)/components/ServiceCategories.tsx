import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceCategories } from "@/constants/services";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

export default function ServiceCategories() {
  return (
    <section className='py-28 sm:py-32 bg-secondary/70'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Header Section */}
        <div className='text-center mb-16 md:mb-20'>
          <h2 className='text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-4'>
            Spesialisasi Kami
          </h2>
          <h3 className='text-4xl md:text-5xl lg:text-6xl font-cormorant-garamond text-foreground text-balance'>
            Layanan <span className='text-primary'>Utama</span>
          </h3>
        </div>

        {/* Grid Cards 2x2 */}
        <StaggerContainer className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
          {serviceCategories.map((service, index) => (
            <StaggerItem key={index}>
              <Link
                href={service.link}
                className='group relative h-80 md:h-[26rem] overflow-hidden flex items-end rounded-sm ring-1 ring-border/60 shadow-[0_25px_80px_-40px_rgba(139,94,60,0.5)] transition-all duration-700 hover:-translate-y-1'
              >
                {/* Background Image dengan efek Zoom saat di-hover */}
                <div className='absolute inset-0'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes='(max-width: 768px) 100vw 80vw'
                    className='object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105'
                  />
                </div>

                {/* Overlay gelap agar teks tetap terbaca */}
                <div className='absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-700 group-hover:opacity-95'></div>

                {/* Konten Teks */}
                <div className='relative z-10 p-4 md:p-8 w-full'>
                  <h4 className='text-2xl md:text-3xl font-outfit tracking-wide text-[#f3d6b8] mb-2 transition-transform duration-700 group-hover:-translate-y-1'>
                    {service.title}
                  </h4>

                  {/* Deskripsi: Awalnya transparan dan agak ke bawah, muncul saat di-hover */}
                  <p className='text-white/80 text-sm leading-relaxed transition-all duration-700 group-hover:text-white/90'>
                    {service.description}
                  </p>

                  {/* Tombol kecil */}
                  <div className='mt-4 flex items-center text-[#f3d6b8] text-sm font-medium transition-all duration-700 group-hover:translate-x-1'>
                    Lihat Detail
                    <ChevronRight
                      size={16}
                      className='relative ml-1 top-[0.3px] shrink-0'
                    />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
