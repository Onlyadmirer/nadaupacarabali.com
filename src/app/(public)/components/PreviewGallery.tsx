import { image } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";

const previewImages = [
  {
    src: image.aboutBg,
    alt: "Pementasan tari tradisional Bali di atas panggung",
    className: "col-span-2 row-span-2",
  },
  {
    src: image.img5,
    alt: "Detail kostum penari Bali",
    className: "col-span-1 row-span-1",
  },
  {
    src: image.img3,
    alt: "Penabuh gamelan Bali dalam upacara",
    className: "col-span-1 row-span-2",
  },
  {
    src: image.img4,
    alt: "Tari sambutan dalam acara pernikahan",
    className: "col-span-1 row-span-1",
  },
  {
    src: image.img2,
    alt: "Suasana pertunjukan seni di pura",
    className: "col-span-2 row-span-1",
  },
  {
    src: image.homeBg,
    alt: "Pementasan seni tradisional Bali",
    className: "col-span-2 row-span-1",
  },
];

export default function PreviewGallery() {
  return (
    <section className='section-spacing'>
      <Container>
        <SectionHeading
          align='left'
          eyebrow='Cuplikan Momen'
          title='Galeri & Visual'
          description='Sekilas momen dari panggung dan upacara yang kami hadiri.'
          className='mb-10'
          action={
            <Link
              href='/gallery'
              className='group inline-flex min-h-11 items-center gap-2 font-ui text-xs font-semibold tracking-[0.18em] text-primary uppercase transition-colors hover:text-primary-hover'
            >
              Lihat Semua Galeri
              <ArrowUpRight
                className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                aria-hidden='true'
              />
            </Link>
          }
        />

        <StaggerContainer className='grid auto-rows-[150px] grid-cols-2 gap-2 md:auto-rows-[250px] md:grid-cols-4 md:gap-4'>
          {previewImages.map((item, index) => (
            <StaggerItem
              key={index}
              className={`group relative h-full w-full overflow-hidden rounded-xl ${item.className}`}
            >
              <Link
                href='/gallery'
                aria-label='Buka galeri lengkap'
                className='absolute inset-0 z-10'
              />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes='(max-width: 768px) 50vw, 25vw'
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-neutral-950/25 transition-colors duration-300 group-hover:bg-neutral-950/10' />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className='mt-8 flex justify-center md:hidden'>
          <Link
            href='/gallery'
            className='inline-flex min-h-11 items-center rounded-full border border-primary px-6 font-ui text-xs font-semibold tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground'
          >
            Lihat Semua Galeri
          </Link>
        </div>
      </Container>
    </section>
  );
}
