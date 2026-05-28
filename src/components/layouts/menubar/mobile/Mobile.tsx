"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Mobile() {
  const waLink = "https://wa.me/6285119309088";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`flex fixed w-full transition-all duration-300 z-50 flex-row px-4 py-2 justify-between items-center ${scrolled ? "bg-neutral-800/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"}`}
    >
      <div className='h-16 w-16 overflow-hidden relative'>
        <Image
          src={"/logo/logo.png"}
          alt='nada-upacara-bali-logo'
          fill
          className='w-full h-full bg-cover'
        ></Image>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size={"icon-lg"}
            className='cursor-pointer hover:bg-transparent z-50'
          >
            <Menu className='w-full h-full scale-150 text-amber-500' />
          </Button>
        </SheetTrigger>
        <SheetContent
          className='bg-black/50 border-l text-neutral-200 border-px border-neutral-600 backdrop-blur-lg'
          showCloseButton={true}
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className='flex flex-col h-full pt-20 gap-16 tracking-wider text-neutral-200 font-outfit font-medium text-lg items-center w-full'>
            <Link href={"/"} className='group w-fit relative'>
              <p className='text-white group-hover:text-amber-500 transition-all duration-300'>
                HOME
              </p>
              <span className='absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-amber-600 transition-all duration-300 group-hover:w-full'></span>
            </Link>
            <Link href={"/tentang-kami"} className='group w-fit relative'>
              <p className='text-white group-hover:text-amber-500 transition-all duration-300'>
                TENTANG KAMI
              </p>
              <span className='absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-amber-600 transition-all duration-300 group-hover:w-full'></span>
            </Link>
            <Link href={"/layanan"} className='group w-fit relative'>
              <p className='text-white group-hover:text-amber-500 transition-all duration-300'>
                LAYANAN
              </p>
              <span className='absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-amber-600 transition-all duration-300 group-hover:w-full'></span>
            </Link>
            <Link href={"/katalog-seni"} className='group w-fit relative'>
              <p className='text-white group-hover:text-amber-500 transition-all duration-300'>
                KATALOG SENI
              </p>
              <span className='absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-amber-600 transition-all duration-300 group-hover:w-full'></span>
            </Link>
            <Link
              href={waLink}
              target='_blank'
              rel='noopener noreferrer'
              className='group w-fit relative'
            >
              <p className='text-white group-hover:text-amber-500 transition-all duration-300'>
                HUBUNGI KAMI
              </p>
              <span className='absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-amber-600 transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Mobile;
