"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Desktop() {
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
      className={`fixed w-full z-50 flex items-center px-6 py-2 transition-all duration-300 ${scrolled ? "bg-neutral-800/30 backdrop-blur-lg border-b border-white/5" : "bg-transparent"}`}
    >
      <div className='flex flex-row justify-center gap-26 tracking-wider text-neutral-200 font-outfit font-medium text-sm items-center w-full'>
        <Link href={"/"} className='group w-fit relative'>
          <p className='text-neutral-300 group-hover:text-[#b27457] transition-all duration-300'>
            HOME
          </p>
          <span className='absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-[#b27457] transition-all duration-300 group-hover:w-full'></span>
        </Link>
        <Link href={"/tentang-kami"} className='group w-fit relative'>
          <p className='text-neutral-300 group-hover:text-[#b27457] transition-all duration-300'>
            TENTANG KAMI
          </p>
          <span className='absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-[#b27457] transition-all duration-300 group-hover:w-full'></span>
        </Link>
        <div className='h-18 w-18 overflow-hidden relative'>
          <Image
            src={"/logo/logo.png"}
            alt='nada-upacara-bali-logo'
            fill
            className='w-full h-full bg-cover'
          ></Image>
        </div>
        <Link href={"/layanan"} className='group w-fit relative'>
          <p className='text-neutral-300 group-hover:text-[#b27457] transition-all duration-300'>
            LAYANAN
          </p>
          <span className='absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-[#b27457] transition-all duration-300 group-hover:w-full'></span>
        </Link>
        <Link href={"/katalog-seni"} className='group w-fit relative'>
          <p className='text-neutral-300 group-hover:text-[#b27457] transition-all duration-300'>
            KATALOG SENI
          </p>
          <span className='absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-[#b27457] transition-all duration-300 group-hover:w-full'></span>
        </Link>
      </div>
      <Link
        href={waLink}
        target='_blank'
        rel='noopener noreferrer'
        className='absolute right-6 font-outfit px-8 py-2 bg-linear-to-r from-[#ff8b55] to-[#db7140] text-neutral-800 text-sm font-medium hover:bg-amber-500 tracking-wide transition-all duration-300 rounded-xs overflow-hidden shadow-[0_0_40px_rgba(217,119,6,0.3)]'
      >
        HUBUNGI KAMI
      </Link>
    </nav>
  );
}

export default Desktop;
