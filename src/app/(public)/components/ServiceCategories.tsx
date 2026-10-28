import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceCategories } from "@/constants/services";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";

export default function ServiceCategories() {
  return (
    <section className='section-spacing bg-secondary/60'>
      <Container>
        <SectionHeading
          eyebrow='Spesialisasi Kami'
          title={
            <>
              Layanan <span className='text-primary italic'>Utama</span>
            </>
          }
          description='Pilih pengalaman yang paling sesuai dengan momen dan kebutuhan acara Anda.'
          className='mb-14 md:mb-16'
        />

        <StaggerContainer className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
          {serviceCategories.map((service, index) => (
            <StaggerItem key={index}>
              <Link
                href={service.link}
                className='group relative flex h-80 items-end overflow-hidden rounded-2xl shadow-[0_25px_80px_-40px_rgba(139,94,60,0.5)] ring-1 ring-border/70 transition-all duration-300 hover:-translate-y-1 md:h-[26rem]'
              >
                <div className='absolute inset-0'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 50vw'
                    className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                  />
                </div>

                <div className='absolute inset-0 bg-linear-to-t from-neutral-950/95 via-neutral-950/55 to-transparent' />

                <div className='relative z-10 w-full p-6 md:p-8'>
                  <h3 className='font-heading text-2xl leading-tight font-semibold text-gold-soft transition-transform duration-300 group-hover:-translate-y-0.5 md:text-3xl'>
                    {service.title}
                  </h3>
                  <p className='mt-2 font-body text-sm leading-relaxed text-white/80'>
                    {service.description}
                  </p>
                  <span className='mt-4 inline-flex items-center gap-1 font-ui text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase'>
                    Lihat Detail
                    <ChevronRight className='size-4' aria-hidden='true' />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
