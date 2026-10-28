import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  title: string;
  description: string;
  label?: string;
  href: string;
  external?: boolean;
  className?: string;
}

export default function CtaBanner({
  title,
  description,
  label = "Hubungi Kami Sekarang",
  href,
  external = false,
  className,
}: CtaBannerProps) {
  const cta = (
    <Button asChild size='lg' className='rounded-full px-8'>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {label}
        <ArrowRight className='size-4' aria-hidden='true' />
      </Link>
    </Button>
  );

  return (
    <Reveal>
      <section className={cn("section-spacing", className)}>
        <Container>
          <div className='relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-[0_30px_90px_-50px_rgba(139,94,60,0.45)] md:px-16 md:py-20'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-accent/10 blur-3xl'
            />
            <div
              aria-hidden='true'
              className='pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-primary/10 blur-3xl'
            />

            <div className='relative'>
              <h2 className='font-heading text-3xl leading-tight font-semibold text-foreground text-balance md:text-4xl lg:text-5xl'>
                {title}
              </h2>
              <p className='mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-muted-foreground text-balance md:text-lg'>
                {description}
              </p>
              <div className='mt-8 flex justify-center'>{cta}</div>
            </div>
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
