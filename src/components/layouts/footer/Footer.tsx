"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

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
                sizes='(max-width: 1024px) 100vw, 50vw'
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
            <h4 className='text-neutral-200 font-outfit uppercase tracking-widest text-sm mb-6 font-semibold'>
              Quick Links
            </h4>
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
            <h4 className='text-neutral-200 font-outfit uppercase tracking-widest text-sm mb-6 font-semibold'>
              Contact Us
            </h4>
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
            <h4 className='text-neutral-200 font-outfit uppercase tracking-widest text-sm mb-6 font-semibold'>
              Follow Us
            </h4>
            <div className='flex gap-4'>
              <a
                href='https://www.instagram.com/nadaupacarabali/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              >
                <FaInstagram className='w-4 h-4' />
              </a>
              <a
                href='https://www.youtube.com/@NadaUpacaraBali'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              >
                <FaYoutube className='w-4 h-4' />
              </a>
              <a
                href='https://www.tiktok.com/@nadaupacarabali'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#d58058] hover:border-[#d58058] hover:text-white transition-all duration-300'
              >
                <FaTiktok className='w-4 h-4' />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-neutral-500 font-outfit text-xs tracking-wider'>
            &copy; {new Date().getFullYear()} Nada Upacara Bali. All rights
            reserved.
          </p>
          <div className='flex gap-6 text-neutral-500 font-outfit text-xs tracking-wider'>
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
