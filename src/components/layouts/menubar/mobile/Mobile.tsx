"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { allNavItems, isActivePath, noHeroRoutes } from "../nav-items";

function Mobile() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solidNav =
    scrolled || noHeroRoutes.some((route) => pathName.startsWith(route));

  return (
    <nav
      aria-label='Navigasi utama'
      className={`fixed z-50 flex w-full flex-row items-center justify-between border-b px-4 py-2 transition-all duration-400 ease-in-out ${
        solidNav
          ? "border-border bg-background/90 backdrop-blur-xl"
          : "border-transparent bg-transparent py-4"
      }`}
    >
      <Link
        href='/'
        aria-label='Beranda Nada Upacara Bali'
        className='relative flex size-14 items-center justify-center overflow-hidden rounded-full'
      >
        <Image
          src='/logo/logo.png'
          alt='Logo Nada Upacara Bali'
          fill
          priority
          sizes='56px'
          className='object-contain'
        />
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            type='button'
            aria-label='Buka menu navigasi'
            className='hover:bg-secondary'
          >
            <Menu
              className={`size-6 ${
                solidNav ? "text-primary" : "text-gold-soft"
              }`}
              aria-hidden='true'
            />
          </Button>
        </SheetTrigger>
        <SheetContent
          className='bg-card text-foreground'
          showCloseButton={true}
        >
          <SheetHeader className='pr-12'>
            <SheetTitle className='sr-only'>Menu Navigasi</SheetTitle>
            <SheetDescription className='sr-only'>
              Menu navigasi Nada Upacara Bali
            </SheetDescription>
            <p className='font-ui text-[10px] tracking-[0.4em] text-primary uppercase'>
              Nada Upacara Bali
            </p>
          </SheetHeader>

          <nav
            aria-label='Navigasi seluler'
            className='flex flex-col gap-1 px-4 pt-4'
          >
            {allNavItems.map((item) => {
              const isActive = isActivePath(pathName, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-lg px-3 font-ui text-sm tracking-[0.14em] uppercase transition-colors ${
                    isActive
                      ? "bg-secondary text-primary"
                      : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Mobile;
