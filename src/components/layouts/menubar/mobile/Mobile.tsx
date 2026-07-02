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

function Mobile() {
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "home", path: "/" },
    { name: "about us", path: "/about" },
    { name: "service & experience", path: "/services" },
    { name: "catalog", path: "/catalog" },
    { name: "gallery", path: "/gallery" },
    { name: "blog", path: "/blog" },
    { name: "contact", path: "/contact" },
  ];
  return (
    <nav
      className={`flex fixed w-full transition-all duration-300 z-50 flex-row px-4 py-2 justify-between items-center ${scrolled ? "bg-neutral-800/80 backdrop-blur-xl" : "bg-transparent"}`}
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
            type='button'
            className='cursor-pointer hover:bg-transparent z-50'
          >
            <Menu className='w-full h-full scale-150 text-[#d58058]' />
          </Button>
        </SheetTrigger>
        <SheetContent
          className='bg-black/50 border-l text-neutral-200 border-px border-neutral-600 backdrop-blur-lg'
          showCloseButton={true}
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className='sr-only'>Menu</SheetDescription>
          </SheetHeader>
          <div className='flex flex-col pt-12 h-full gap-12 tracking-wider text-neutral-200 font-outfit font-medium text-lg items-center w-full'>
            {navLinks.map((nav) => {
              const isActive =
                nav.path === "/"
                  ? pathName === "/"
                  : pathName.startsWith(nav.path);
              return (
                <Link
                  key={nav.name}
                  href={nav.path}
                  className=' w-fit relative'
                >
                  <p
                    className={` uppercase  transition-all duration-300 ${isActive ? "text-[#d58058]" : "text-neutral-200"}`}
                  >
                    {nav.name}
                  </p>
                  <span
                    className={`absolute -bottom-1 h-px  transition-all duration-300 w-full ${isActive ? "w-full bg-[#d58058]" : "bg-neutral-300"}`}
                  ></span>
                </Link>
              );
            })}

            {/* <Link
              href={waLink}
              target='_blank'
              rel='noopener noreferrer'
              className='group w-fit relative'
            >
              <p className='text-white group-hover:text-[#d58058] transition-all duration-300'>
                HUBUNGI KAMI
              </p>
              <span className='absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-amber-600 transition-all duration-300 group-hover:w-full'></span>
            </Link> */}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Mobile;
