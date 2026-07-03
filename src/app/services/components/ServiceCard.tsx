import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Service } from "@/constants/services";
import Reveal from "@/components/Reveal";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <Reveal>
      <div
        id={service.id}
        className={`py-24 lg:py-36 relative ${isEven ? "bg-neutral-900/30" : "bg-transparent"}`}
      >
        {!isEven && (
          <div className='absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent opacity-50'></div>
        )}

        <div className='container mx-auto px-6 lg:px-12 max-w-7xl'>
          {/* Main Image + Text Row */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
            {/* Image */}
            <div className={`relative group ${!isEven ? "lg:order-2" : ""}`}>
              <div
                className={`absolute inset-0 border border-[#b27457]/30 rounded-xl transition-transform duration-700 -z-10 
              ${isEven ? "translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6" : "-translate-x-4 translate-y-4 group-hover:-translate-x-6 group-hover:translate-y-6"}`}
              ></div>

              <div className='relative aspect-4/3 w-full overflow-hidden rounded-xl border border-neutral-800 shadow-2xl'>
                <div className='absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-700 z-10'></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className='object-cover transition-transform duration-1000 group-hover:scale-105'
                  sizes='(max-width: 1024px) 100vw, 50vw'
                />
              </div>
            </div>

            {/* Title + Description */}
            <div
              className={`flex flex-col space-y-10 relative ${!isEven ? "lg:order-1" : ""}`}
            >
              {/* Large Background Numbering */}
              <div
                className={`absolute -top-8 lg:-top-16 ${isEven ? "-left-4 lg:-left-8" : "-right-4 lg:-right-8"} text-[8rem] lg:text-[12rem] font-outfit font-bold text-[#f09a73] opacity-[0.08] select-none pointer-events-none leading-none`}
              >
                0{index + 1}
              </div>

              {/* Category tag */}
              <div className='relative z-10'>
                <span className='font-outfit uppercase tracking-[0.2em] text-xs text-[#d58058] font-semibold'>
                  Kategori 0{index + 1}
                </span>
              </div>

              <div className='relative z-10'>
                <h2 className='font-libre-baskerville italic text-4xl lg:text-5xl font-semibold mb-6 text-[#f09a73] leading-tight'>
                  {service.title}
                </h2>
                <p className='font-outfit text-neutral-300 text-base leading-relaxed font-light'>
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          {/* Section Cards — full width, 2 columns */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16'>
            {service.sections.map((section, secIdx) => (
              <div
                key={secIdx}
                className='bg-neutral-950/40 p-6 lg:p-8 rounded-xl border border-neutral-800/60 backdrop-blur-sm'
              >
                <h3 className='font-libre-baskerville italic text-xl mb-4 text-[#d58058]'>
                  {section.title}
                </h3>
                {section.text && (
                  <p className='font-outfit text-neutral-300 leading-relaxed mb-5 font-light'>
                    {section.text}
                  </p>
                )}
                {section.items && (
                  <ul className='space-y-4 font-outfit text-neutral-300 font-light'>
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className='flex items-start group/item'>
                        <span className='text-[#b27457] mr-4 mt-1 text-sm transform transition-transform group-hover/item:scale-125'>
                          ✦
                        </span>
                        <span className='leading-relaxed'>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <div
              className={`flex items-center justify-center ${service.sections.length % 2 === 0 ? "lg:col-span-2" : ""}`}
            >
              <Link href={`/catalog#${service.id}`} className='w-full'>
                <Button className='font-outfit bg-[#a05530] hover:bg-[#7a3f20] text-white rounded-none px-6 md:px-12 py-7 text-xs lg:text-base tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(160,85,48,0.2)] hover:shadow-[0_0_30px_rgba(122,63,32,0.4)]'>
                  Lihat Katalog Pertunjukan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
