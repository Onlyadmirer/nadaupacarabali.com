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

// Halaman tanpa hero gambar: navbar harus langsung memakai latar terang.
const NO_HERO_ROUTES = ["/privacy-policy", "/terms-of-service"];

function Mobile() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solidNav =
    scrolled || NO_HERO_ROUTES.some((route) => pathName.startsWith(route));

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
      className={`flex fixed w-full z-50 flex-row px-4 py-2 justify-between items-center
    border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-in-out
    ${
      solidNav
        ? "bg-background/85 backdrop-blur-xl border-border"
        : "bg-background/0 backdrop-blur-none border-border/0"
    }`}
    >
      <div className='h-16 w-16 overflow-hidden relative'>
        <Image
          src={"/logo/logo.png"}
          alt='nada-upacara-bali-logo'
          fill
          loading='eager'
          sizes='64px'
          className='w-full h-full bg-cover'
        ></Image>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size={"icon-lg"}
            type='button'
            aria-label='Buka menu navigasi'
            className='cursor-pointer hover:bg-transparent z-50'
          >
            <Menu
              className={`w-full h-full scale-150 ${
                solidNav ? "text-[#c05621]" : "text-[#f5b892]"
              }`}
            />
          </Button>
        </SheetTrigger>
        <SheetContent
          className='bg-card text-foreground border-l border-border'
          showCloseButton={true}
        >
          <SheetHeader>
            <SheetTitle className='sr-only'>Menu Navigasi</SheetTitle>
            <SheetDescription className='sr-only'>
              Menu navigasi Nada Upacara Bali
            </SheetDescription>
          </SheetHeader>
          <div className='flex flex-col pt-12 h-full gap-12 tracking-wider text-foreground font-outfit font-medium text-lg items-center w-full'>
            {navLinks.map((nav) => {
              const isActive =
                nav.path === "/"
                  ? pathName === "/"
                  : pathName.startsWith(nav.path);
              return (
                <Link
                  key={nav.name}
                  href={nav.path}
                  onClick={() => setOpen(false)}
                  className=' w-fit relative'
                >
                  <p
                    className={` uppercase  transition-all duration-300 ${isActive ? "text-[#c05621]" : "text-foreground"}`}
                  >
                    {nav.name}
                  </p>
                  <span
                    className={`absolute -bottom-1 h-px  transition-all duration-300 w-full ${isActive ? "w-full bg-[#c05621]" : "bg-[#e9ded3]"}`}
                  ></span>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Mobile;
