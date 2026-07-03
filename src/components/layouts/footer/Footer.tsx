"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home", className: "cols-start-1 row-start-1" },
  {
    href: "/about-us",
    label: "About Us",
    className: "cols-start-2 row-start-1",
  },
  {
    href: "/services",
    label: "Services & Experiences",
    className: "cols-start-1 row-start-2",
  },
  {
    href: "/performance-katalog",
    label: "Katalog",
    className: "cols-start-2 row-start-2",
  },
  { href: "/gallery", label: "Gallery", className: "cols-start-1 row-start-3" },
  { href: "/blog", label: "Blog", className: "cols-start-2 row-start-3" },
  { href: "/contact", label: "Contact", className: "cols-start-1 row-start-4" },
];

export default function Footer() {
  return (
    <footer className='bg-neutral-900 pt-16 pb-8 border-t border-neutral-900 mt-auto'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Brand Section */}
          <div className='flex flex-col gap-6 lg:pr-4'>
            <div className='h-16 w-16 overflow-hidden relative'>
              <Image
                src='/logo/logo.png'
                alt='Nada Upacara Bali Logo'
                fill
                sizes='64px'
                className='object-contain'
              />
            </div>
            <p className='text-neutral-400 font-cormorant-garamond text-lg leading-relaxed'>
              Cultural performance house yang menghadirkan pengalaman budaya
              Bali secara sakral, emosional, dan profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-neutral-200 font-outfit uppercase tracking-widest text-sm mb-6 font-semibold'>
              Quick Links
            </h3>
            <div className='grid grid-cols-2 grid-rows-4 gap-x-18 gap-y-4 whitespace-nowrap'>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-neutral-400 hover:text-[#d58058] transition-colors duration-300 font-outfit text-sm tracking-wide ${link.className}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-neutral-200 font-outfit uppercase tracking-widest text-sm mb-6 font-semibold'>
              Contact Us
            </h3>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-start gap-3 text-neutral-400 font-outfit text-sm'>
                <Phone className='w-5 h-5 text-[#d58058] shrink-0' />
                <span>+62 851-1930-9088</span>
              </li>
              <li className='flex items-start gap-3 text-neutral-400 font-outfit text-sm'>
                <Mail className='w-5 h-5 text-[#d58058] shrink-0' />
                <a
                  href='mailto:nadaupacarabali@gmail.com'
                  className='hover:text-[#d58058] transition-colors'
                >
                  nadaupacarabali@gmail.com
                </a>
              </li>
              <li className='flex items-start gap-3 text-neutral-400 font-outfit text-sm leading-relaxed'>
                <MapPin className='w-5 h-5 text-[#d58058] shrink-0' />
                <span>Denpasar, Bali, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
              <h3 className='text-neutral-200 font-outfit uppercase tracking-widest text-sm mb-6 font-semibold'>
              Follow Us
            </h3>
            <div className='flex gap-4'>
              <a
                href='https://www.instagram.com/nadaupacarabali/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
                className='w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              >
                <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><rect x='2' y='2' width='20' height='20' rx='5'/><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/><line x1='17.5' y1='6.5' x2='17.51' y2='6.5'/></svg>
              </a>
              <a
                href='https://www.youtube.com/@NadaUpacaraBali'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='YouTube'
                className='w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              >
                <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z'/><polygon points='9.75 15.02 15.5 12 9.75 8.98 9.75 15.02'/></svg>
              </a>
              <a
                href='https://www.tiktok.com/@nadaupacarabali'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='TikTok'
                className='w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              >
                <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5'/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-neutral-400 font-outfit text-xs tracking-wider'>
            &copy; {new Date().getFullYear()} Nada Upacara Bali. All rights
            reserved.
          </p>
          <div className='flex gap-6 text-neutral-400 font-outfit text-xs tracking-wider'>
            <Link
              href='/privacy-policy'
              className='hover:text-[#d58058] transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms-of-service'
              className='hover:text-[#d58058] transition-colors'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
