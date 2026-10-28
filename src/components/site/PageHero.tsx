import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "./Container";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  image: string;
  alt: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: BreadcrumbItem[];
  size?: "full" | "compact";
  priority?: boolean;
  objectPosition?: string;
  children?: ReactNode;
  className?: string;
}

export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  description,
  breadcrumb,
  size = "compact",
  priority = true,
  objectPosition = "center",
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex flex-col justify-center overflow-hidden px-4 sm:px-6",
        size === "full"
          ? "min-h-svh"
          : "min-h-[58svh] md:min-h-[64svh]",
        className,
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
        sizes='100vw'
        className='object-cover'
        style={{ objectPosition }}
      />
      <div className='absolute inset-0 bg-linear-to-t from-black/92 via-black/55 to-black/80' />

      <Container className='relative z-10 pt-28 pb-16 md:pt-32 md:pb-20'>
        <Reveal className='mx-auto flex max-w-4xl flex-col items-center text-center'>
          {breadcrumb && breadcrumb.length > 0 && (
            <nav
              aria-label='Breadcrumb'
              className='mb-7 flex flex-wrap items-center justify-center gap-1.5 font-ui text-[11px] tracking-[0.18em] text-white/75 uppercase'
            >
              {breadcrumb.map((item, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <span key={`${item.label}-${index}`} className='flex items-center gap-1.5'>
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className='transition-colors hover:text-white'
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span aria-current={isLast ? "page" : undefined}>
                        {item.label}
                      </span>
                    )}
                    {!isLast && (
                      <ChevronRight className='size-3 text-white/40' aria-hidden='true' />
                    )}
                  </span>
                );
              })}
            </nav>
          )}

          {eyebrow && (
            <span className='font-ui text-xs font-semibold tracking-[0.32em] text-gold-soft uppercase md:text-sm'>
              {eyebrow}
            </span>
          )}

          <h1 className='mt-4 font-heading text-4xl leading-[1.05] font-semibold text-white text-balance italic sm:text-5xl md:text-6xl lg:text-7xl'>
            {title}
          </h1>

          <div className='my-6 h-px w-20 bg-linear-to-r from-transparent via-gold-soft/70 to-transparent' />

          {description && (
            <p className='max-w-2xl font-body text-base leading-relaxed text-white/85 text-balance md:text-lg'>
              {description}
            </p>
          )}

          {children && (
            <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
              {children}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
