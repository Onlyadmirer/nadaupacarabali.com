import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/site/Container";
import SocialLinks from "@/components/site/SocialLinks";
import { contactInfo } from "@/constants/contact";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services & Experiences" },
  { href: "/catalog", label: "Katalog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className='mt-auto border-t border-border bg-secondary/60 pt-16 pb-8'>
      <Container>
        <h2 className='sr-only'>Informasi Nada Upacara Bali</h2>

        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col gap-5 lg:pr-4'>
            <Link
              href='/'
              aria-label='Beranda Nada Upacara Bali'
              className='relative flex size-16 items-center justify-center overflow-hidden rounded-full'
            >
              <Image
                src='/logo/logo.png'
                alt='Logo Nada Upacara Bali'
                fill
                sizes='64px'
                className='object-contain'
              />
            </Link>
            <p className='max-w-xs font-body text-base leading-relaxed text-muted-foreground'>
              Cultural performance house yang menghadirkan pengalaman budaya
              Bali secara sakral, emosional, dan profesional.
            </p>
            <SocialLinks />
          </div>

          <nav aria-label='Tautan cepat'>
            <h3 className='font-ui text-sm font-semibold tracking-[0.18em] text-foreground uppercase'>
              Quick Links
            </h3>
            <div className='mt-5 grid grid-cols-2 gap-x-6 gap-y-3'>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-primary'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h3 className='font-ui text-sm font-semibold tracking-[0.18em] text-foreground uppercase'>
              Contact Us
            </h3>
            <ul className='mt-5 flex flex-col gap-4'>
              <li className='flex items-start gap-3 font-body text-sm text-muted-foreground'>
                <Phone className='mt-0.5 size-4 shrink-0 text-primary' aria-hidden='true' />
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className='transition-colors hover:text-primary'
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className='flex items-start gap-3 font-body text-sm text-muted-foreground'>
                <Mail className='mt-0.5 size-4 shrink-0 text-primary' aria-hidden='true' />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='break-all transition-colors hover:text-primary'
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className='flex items-start gap-3 font-body text-sm leading-relaxed text-muted-foreground'>
                <MapPin className='mt-0.5 size-4 shrink-0 text-primary' aria-hidden='true' />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-ui text-sm font-semibold tracking-[0.18em] text-foreground uppercase'>
              Jam Layanan
            </h3>
            <p className='mt-5 font-body text-sm leading-relaxed text-muted-foreground'>
              {contactInfo.hours}
            </p>
            <p className='mt-3 font-body text-sm leading-relaxed text-muted-foreground'>
              Berbasis di Denpasar, Bali. Melayani pertunjukan di seluruh Bali.
            </p>
          </div>
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row'>
          <p className='font-body text-xs tracking-wide text-muted-foreground'>
            &copy; {new Date().getFullYear()} Nada Upacara Bali. All rights
            reserved.
          </p>
          <div className='flex gap-6 font-body text-xs tracking-wide text-muted-foreground'>
            <Link
              href='/privacy-policy'
              className='transition-colors hover:text-primary'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms-of-service'
              className='transition-colors hover:text-primary'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
