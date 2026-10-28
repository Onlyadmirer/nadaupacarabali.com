import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { contactInfo, siteUrl } from "@/constants/contact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit-font",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nada Upacara Bali | Balinese Creative-Cultural Service",
  description:
    "Cultural performance house Bali yang menghadirkan pertunjukan seni tradisional Bali untuk upacara adat, pernikahan, corporate event, dan edukasi budaya.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Nada Upacara Bali",
    locale: "id_ID",
    url: siteUrl,
    title: "Nada Upacara Bali | Balinese Creative-Cultural Service",
    description:
      "Cultural performance house yang menghadirkan pengalaman budaya Bali secara sakral, emosional, dan profesional.",
    images: [
      {
        url: "https://res.cloudinary.com/drldcq7wa/image/upload/v1782903146/IMG_4609_uu2bkp.jpg",
        width: 1200,
        height: 630,
        alt: "Nada Upacara Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nada Upacara Bali | Balinese Creative-Cultural Service",
    description:
      "Cultural performance house yang menghadirkan pengalaman budaya Bali secara sakral, emosional, dan profesional.",
    images: [
      "https://res.cloudinary.com/drldcq7wa/image/upload/v1782903146/IMG_4609_uu2bkp.jpg",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nada Upacara Bali",
  description:
    "Cultural performance house yang menghadirkan pengalaman budaya Bali secara sakral, emosional, dan profesional.",
  url: siteUrl,
  logo: `${siteUrl}/logo/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contactInfo.phone,
    contactType: "customer service",
    availableLanguage: ["Indonesian", "English"],
  },
  sameAs: [
    contactInfo.social.instagram,
    contactInfo.social.youtube,
    contactInfo.social.tiktok,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='id'
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        outfit.variable,
        cormorantGaramond.variable,
      )}
    >
      <head>
        <meta name='theme-color' content='#f8f4ef' />
        <meta name='color-scheme' content='light' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className='min-h-full flex flex-col'>
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:font-ui focus:text-sm focus:text-primary-foreground'
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
