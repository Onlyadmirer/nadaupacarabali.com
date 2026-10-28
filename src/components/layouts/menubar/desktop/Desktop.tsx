"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  isActivePath,
  leftNavItems,
  noHeroRoutes,
  rightNavItems,
} from "../nav-items";

function Desktop() {
  const [scrolled, setScrolled] = useState(false);
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
  const linkColor = solidNav ? "text-foreground/75" : "text-white/85";
  const linkHover = solidNav
    ? "group-hover:text-primary"
    : "group-hover:text-gold-soft";
  const linkActive = solidNav ? "text-primary" : "text-gold-soft";
  const underlineColor = solidNav ? "bg-primary" : "bg-gold-soft";

  return (
    <nav
      aria-label='Navigasi utama'
      className={`fixed z-50 grid w-full grid-cols-[1fr_auto_1fr] items-center px-4 py-2 transition-all duration-400 xl:px-6 ${
        solidNav
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <div className='flex w-full items-center justify-end gap-6 pr-6 font-ui text-[11px] font-medium tracking-[0.14em] xl:gap-10 xl:pr-10 xl:text-xs'>
        {leftNavItems.map((item) => {
          const isActive = isActivePath(pathName, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className='group relative w-fit py-2'
            >
              <span
                className={`uppercase transition-colors duration-200 ${linkHover} ${
                  isActive ? linkActive : linkColor
                }`}
              >
                {item.label}
              </span>
              <span
                aria-hidden='true'
                className={`absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full ${underlineColor} ${
                  isActive ? "w-full" : ""
                }`}
              />
            </Link>
          );
        })}
      </div>

      <Link
        href='/'
        aria-label='Beranda Nada Upacara Bali'
        className='relative flex size-16 items-center justify-center overflow-hidden rounded-full transition-opacity hover:opacity-90'
      >
        <Image
          src='/logo/logo.png'
          alt='Logo Nada Upacara Bali'
          fill
          priority
          sizes='64px'
          className='object-contain'
        />
      </Link>

      <div className='flex w-full items-center justify-start gap-6 pl-6 font-ui text-[11px] font-medium tracking-[0.14em] xl:gap-10 xl:pl-10 xl:text-xs'>
        {rightNavItems.map((item) => {
          const isActive = isActivePath(pathName, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className='group relative w-fit py-2'
            >
              <span
                className={`uppercase transition-colors duration-200 ${linkHover} ${
                  isActive ? linkActive : linkColor
                }`}
              >
                {item.label}
              </span>
              <span
                aria-hidden='true'
                className={`absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full ${underlineColor} ${
                  isActive ? "w-full" : ""
                }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Desktop;
