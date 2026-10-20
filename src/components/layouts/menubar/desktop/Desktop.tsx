"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const leftNavItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/services", label: "SERVICES & EXPERIENCES" },
];

const rightNavItems = [
  { href: "/catalog", label: "CATALOG" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
];

// Halaman tanpa hero gambar: navbar harus langsung memakai latar terang.
const NO_HERO_ROUTES = ["/privacy-policy", "/terms-of-service"];

function Desktop() {
  const [scrolled, setScrolled] = useState(false);
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
  const linkColor = solidNav ? "text-[#4e4239]" : "text-white/90";
  const linkHover = solidNav
    ? "group-hover:text-[#c05621]"
    : "group-hover:text-[#f5b892]";
  const linkActive = solidNav ? "text-[#c05621]" : "text-[#f5b892]";
  const underlineColor = solidNav ? "bg-[#c05621]" : "bg-[#f5b892]";

  return (
    <nav
      className={`fixed w-full z-50 grid grid-cols-[1fr_auto_1fr] items-center px-6 py-2 transition-all duration-300 ${
        solidNav
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className='flex justify-end pr-12 gap-26 tracking-wider font-outfit font-medium text-sm items-center w-full'>
        {leftNavItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathName === "/"
              : pathName.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className='group w-fit relative'
            >
              <span
                className={` uppercase transition-all duration-300 ${linkHover} ${isActive ? linkActive : linkColor}`}
              >
                {item.label}
              </span>
              <span
                className={`absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 ${underlineColor} transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : ""}`}
              ></span>
            </Link>
          );
        })}
      </div>
      <div className='h-18 w-18 overflow-hidden flex justify-center relative'>
        <Image
          src={"/logo/logo.png"}
          alt='nada-upacara-bali-logo'
          fill
          loading='eager'
          sizes='72px'
          className='w-full h-full bg-cover'
        ></Image>
      </div>
      <div className='flex justify-start gap-26 pl-12 tracking-wider font-outfit font-medium text-sm items-center w-full'>
        {rightNavItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathName === "/"
              : pathName.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className='group w-fit relative'
            >
              <span
                className={` uppercase transition-all duration-300 ${linkHover} ${isActive ? linkActive : linkColor}`}
              >
                {item.label}
              </span>
              <span
                className={`absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 ${underlineColor} transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : ""}`}
              ></span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Desktop;
