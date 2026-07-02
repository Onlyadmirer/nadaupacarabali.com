import type { Metadata } from "next";
import Image from "next/image";
import SalamPendiri from "./components/SalamPendiri";
import { image } from "@/constants/images";

export const metadata: Metadata = {
  title: "Tentang Kami | Nada Upacara Bali",
  description:
    "Mengenal lebih dekat Nada Upacara Bali — cultural performance house yang menghadirkan seni pertunjukan tradisional Bali secara sakral, emosional, dan profesional.",
  openGraph: {
    title: "Tentang Kami | Nada Upacara Bali",
    description:
      "Mengenal lebih dekat Nada Upacara Bali — cultural performance house yang menghadirkan seni pertunjukan tradisional Bali.",
  },
};

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-neutral-950 text-neutral-200 selection:bg-[#d58058] selection:text-white pb-24'>
      {/* Hero Section */}
      <section className='relative h-screen flex flex-col justify-center items-center text-center px-4 mb-24'>
        <div className='absolute inset-0 z-0'>
          <Image
            src={image.aboutBg}
            alt='Nada Upacara Bali Team'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='w-full h-full object-[49%_20%] object-cover'
          />
          <div className='absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-neutral-950/90' />
        </div>
        <div className='relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-24'>
          <span className='text-[#d58058] font-outfit uppercase tracking-[0.2em] text-sm font-semibold mb-4'>
            Mengenal Lebih Dekat
          </span>
          <h1 className='text-5xl md:text-7xl font-libre-baskerville italic text-neutral-100 mb-6'>
            Tentang Kami
          </h1>
          <p className='text-[#ffffff] tracking-[0.3em] text-xs md:text-sm uppercase mb-4 font-semibold'>
            {"• Sakral • Penuh Rasa • Profesional •"}
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className=' mx-auto flex flex-col gap-24'>
        {/* Section 2: Sejarah & Filosofi */}
        <section className='max-w-4xl px-6 mx-auto text-center'>
          <h2 className='text-sm font-outfit font-semibold tracking-[0.2em] text-[#d58058] uppercase mb-4'>
            Sejarah & Filosofi
          </h2>
          <h3 className='text-4xl md:text-5xl font-cormorant-garamond text-neutral-200 mb-8 leading-tight'>
            Tradisi Bertemu{" "}
            <span className='text-neutral-400 italic'>Elegansi</span>
          </h3>
          <p className='text-neutral-300 font-cormorant-garamond text-xl leading-relaxed mb-6 font-light'>
            Nada Upacara Bali adalah kelompok seni pertunjukan yang lahir dari
            keinginan sederhana: menghadirkan seni tradisional Bali dengan
            standar profesional.
          </p>
          <p className='text-neutral-400 font-cormorant-garamond text-lg leading-relaxed mb-8'>
            Berawal dari komunitas kecil pecinta musik tradisional, kami
            berkembang menjadi penyedia pertunjukan seni yang dipercaya di
            berbagai upacara adat, pernikahan, dan event modern. Kami percaya
            bahwa seni tidak hanya untuk dilestarikan, tapi juga dihormati.
          </p>
          <div className='bg-neutral-900 border-l-4 border-[#b27457] p-8 mt-12 text-left'>
            <p className='text-neutral-300 font-cormorant-garamond text-2xl italic leading-relaxed'>
              &quot;Filosofi kami sederhana: setiap nada dan gerak harus membawa
              makna, disajikan dengan keindahan, kesakralan, dan disiplin
              profesional.&quot;
            </p>
          </div>
        </section>

        <SalamPendiri />
        {/* Section 3: Keunikan Kami */}
        <section className='max-w-7xl px-6 mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-sm font-outfit font-semibold tracking-[0.2em] text-[#d58058] uppercase mb-4'>
              Keunikan Kami
            </h2>
            <h3 className='text-3xl md:text-4xl font-cormorant-garamond text-neutral-200'>
              Nilai Tambah Kami
            </h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='group bg-neutral-900/40 border border-neutral-800/60 p-8 rounded-lg hover:bg-neutral-900 hover:border-[#d58058]/50 transition-all duration-500'>
              <div className='text-4xl font-libre-baskerville text-neutral-700 group-hover:text-[#d58058] transition-colors duration-500 mb-6'>
                01
              </div>
              <h4 className='font-outfit text-neutral-200 font-medium tracking-wide mb-3'>
                Pionir Seni Tradisi Profesional
              </h4>
              <p className='font-cormorant-garamond text-neutral-400 text-lg leading-relaxed'>
                Memadukan nilai budaya tradisional Bali yang luhur dengan etika
                kerja dan manajemen modern yang sistematis.
              </p>
            </div>

            <div className='group bg-neutral-900/40 border border-neutral-800/60 p-8 rounded-lg hover:bg-neutral-900 hover:border-[#d58058]/50 transition-all duration-500'>
              <div className='text-4xl font-libre-baskerville text-neutral-700 group-hover:text-[#d58058] transition-colors duration-500 mb-6'>
                02
              </div>
              <h4 className='font-outfit text-neutral-200 font-medium tracking-wide mb-3'>
                Standar Layanan Premium
              </h4>
              <p className='font-cormorant-garamond text-neutral-400 text-lg leading-relaxed'>
                Kami menjaga kualitas mulai dari kerapian penampilan, tata
                busana panggung, hingga ketepatan waktu hadir.
              </p>
            </div>

            <div className='group bg-neutral-900/40 border border-neutral-800/60 p-8 rounded-lg hover:bg-neutral-900 hover:border-[#d58058]/50 transition-all duration-500'>
              <div className='text-4xl font-libre-baskerville text-neutral-700 group-hover:text-[#d58058] transition-colors duration-500 mb-6'>
                03
              </div>
              <h4 className='font-outfit text-neutral-200 font-medium tracking-wide mb-3'>
                Pelestarian Budaya Relevan
              </h4>
              <p className='font-cormorant-garamond text-neutral-400 text-lg leading-relaxed'>
                Fokus pelestarian budaya kami sajikan dengan gaya elegan yang
                tetap relevan dan memukau di acara masa kini.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
