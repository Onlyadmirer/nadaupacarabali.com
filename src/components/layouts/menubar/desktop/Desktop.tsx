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
  { href: "/performance-katalog", label: "KATALOG" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
];

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
  return (
    <nav
      className={`fixed w-full z-50 grid grid-cols-[1fr_auto_1fr] items-center px-6 py-2 transition-all duration-300 ${scrolled ? "bg-neutral-800/30 backdrop-blur-xl " : "bg-transparent"}`}
    >
      <div className='flex justify-end pr-12 gap-26 tracking-wider text-neutral-200 font-outfit font-medium text-sm items-center w-full'>
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
              <p
                className={` uppercase group-hover:text-[#b27457] transition-all duration-300 ${isActive ? "text-[#b27457]" : "text-neutral-300"}`}
              >
                {item.label}
              </p>
              <span
                className={`absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-[#b27457] transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : ""}`}
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
          className='w-full h-full bg-cover'
        ></Image>
      </div>
      <div className='flex justify-start gap-26 pl-12 tracking-wider text-neutral-200 font-outfit font-medium text-sm items-center w-full'>
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
              <p
                className={` uppercase group-hover:text-[#b27457] transition-all duration-300 ${isActive ? "text-[#b27457]" : "text-neutral-300"}`}
              >
                {item.label}
              </p>
              <span
                className={`absolute left-1/2 -translate-x-1/2 ease-in-out -bottom-1 h-px w-0 bg-[#b27457] transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : ""}`}
              ></span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Desktop;
