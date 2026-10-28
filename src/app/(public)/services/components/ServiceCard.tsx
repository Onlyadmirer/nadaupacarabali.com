import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Service } from "@/constants/services";
import Reveal from "@/components/Reveal";
import Container from "@/components/site/Container";

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
        className={`relative scroll-mt-24 py-20 lg:py-28 ${
          isEven ? "bg-secondary/50" : "bg-transparent"
        }`}
      >
        <Container>
          <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20'>
            <div className={`relative group ${!isEven ? "lg:order-2" : ""}`}>
              <div
                aria-hidden='true'
                className={`absolute inset-0 -z-10 rounded-2xl border border-primary/25 transition-transform duration-500 ${
                  isEven
                    ? "translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5"
                    : "-translate-x-3 translate-y-3 group-hover:-translate-x-5 group-hover:translate-y-5"
                }`}
              />
              <div className='relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border shadow-xl'>
                <div className='absolute inset-0 z-10 bg-neutral-950/10 transition-colors duration-500 group-hover:bg-transparent' />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </div>
            </div>

            <div
              className={`relative flex flex-col gap-6 ${!isEven ? "lg:order-1" : ""}`}
            >
              <div
                aria-hidden='true'
                className={`pointer-events-none absolute -top-10 select-none font-ui text-[7rem] leading-none font-bold text-primary/5 lg:-top-16 lg:text-[10rem] ${
                  isEven ? "-left-2 lg:-left-6" : "-right-2 lg:-right-6"
                }`}
              >
                0{index + 1}
              </div>

              <p className='relative z-10 font-ui text-xs font-semibold tracking-[0.2em] text-primary uppercase'>
                Kategori 0{index + 1}
              </p>

              <div className='relative z-10'>
                <h2 className='font-heading text-3xl leading-tight font-semibold text-foreground lg:text-4xl'>
                  {service.title}
                </h2>
                <p className='mt-4 font-body text-base leading-relaxed text-muted-foreground'>
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          <div className='mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8'>
            {service.sections.map((section, secIdx) => (
              <div
                key={secIdx}
                className='h-full rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8'
              >
                <h3 className='font-heading text-xl font-semibold text-foreground'>
                  {section.title}
                </h3>
                {section.text && (
                  <p className='mt-3 font-body text-sm leading-relaxed text-muted-foreground'>
                    {section.text}
                  </p>
                )}
                {section.items && (
                  <ul className='mt-4 space-y-3'>
                    {section.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className='flex items-start gap-3 font-body text-sm leading-relaxed text-muted-foreground'
                      >
                        <span className='mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary'>
                          <Check className='size-3' aria-hidden='true' />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className='flex items-center justify-center lg:col-span-2'>
              <Button asChild size='lg' className='w-full rounded-full sm:max-w-sm'>
                <Link href={`/catalog#${service.id}`}>
                  Lihat Katalog Pertunjukan
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </Reveal>
  );
}
