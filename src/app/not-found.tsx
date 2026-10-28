import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/site/Container";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan | Nada Upacara Bali",
  description: "Halaman yang Anda cari tidak tersedia.",
};

export default function NotFound() {
  return (
    <main
      id='main-content'
      tabIndex={-1}
      className='relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-4 py-24 text-foreground outline-none'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_14%,transparent)_0%,transparent_65%)]'
      />
      <Container className='max-w-2xl text-center'>
        <p className='font-ui text-xs font-semibold tracking-[0.32em] text-primary uppercase'>
          404
        </p>
        <h1 className='mt-4 font-heading text-4xl leading-tight font-semibold text-foreground md:text-6xl'>
          Halaman Tidak Ditemukan
        </h1>
        <div className='mx-auto my-6 h-px w-20 bg-linear-to-r from-transparent via-primary/50 to-transparent' />
        <p className='mx-auto max-w-lg font-body text-base leading-relaxed text-muted-foreground md:text-lg'>
          Maaf, halaman yang Anda cari mungkin sudah dipindahkan atau tidak
          pernah ada. Mari kembali menjelajahi Nada Upacara Bali.
        </p>

        <div className='mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <Button asChild size='lg' className='w-full rounded-full sm:w-auto'>
            <Link href='/'>
              <ArrowLeft className='size-4' aria-hidden='true' />
              Kembali ke Beranda
            </Link>
          </Button>
          <Button
            asChild
            size='lg'
            variant='outline'
            className='w-full rounded-full sm:w-auto'
          >
            <Link href='/catalog'>
              <Compass className='size-4' aria-hidden='true' />
              Lihat Katalog
            </Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
