import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { requireAdmin } from "@/lib/auth";
import AdminSidebar from "./_components/AdminSidebar";

export const metadata: Metadata = {
  title: "Panel Admin | Nada Upacara Bali",
  robots: { index: false, follow: false },
};

export default async function AdminPanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireAdmin();

  return (
    <div className='min-h-screen bg-background'>
      <AdminSidebar />

      <div className='lg:pl-64'>
        <header className='sticky top-0 z-20 hidden items-center justify-between border-b border-border/70 bg-background/90 px-6 py-3.5 backdrop-blur lg:flex'>
          <p className='font-outfit text-[10px] tracking-[0.3em] text-muted-foreground uppercase'>
            Manajemen Katalog Pertunjukan
          </p>
          <Link
            href='/catalog'
            target='_blank'
            rel='noopener noreferrer'
            className='font-outfit inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground'
          >
            Lihat situs
            <ArrowUpRight className='size-3.5' />
          </Link>
        </header>

        <main id='main-content' tabIndex={-1} className='mx-auto w-full max-w-6xl px-4 pt-6 pb-16 outline-none sm:px-6 lg:px-10 lg:pt-10'>
          {children}
        </main>
      </div>
    </div>
  );
}
