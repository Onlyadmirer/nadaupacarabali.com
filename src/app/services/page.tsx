import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    id: "upacara-adat",
    title: "Upacara Adat & Keagamaan",
    image: "/images/services/upacara-adat.jpg",
    description:
      "Di Bali, upacara adat tidak hanya soal doa dan banten. Gamelan dan tari-tarian adalah bagian penting yang melengkapi kesakralan prosesi konsep ini dikenal dalam Panca Gita, yaitu lima suara utama dalam upacara, salah satunya berasal dari bunyi gamelan. Kami memahami bahwa tidak semua orang memiliki akses atau koneksi untuk mendapatkan penyedia jasa pertunjukan adat yang profesional. Karena itu, Nada Upacara Bali hadir sebagai solusi menghadirkan musik dan pertunjukan sakral yang sesuai pakem, disajikan dengan pelayanan rapi, tepat waktu, dan penuh hormat.",
    sections: [
      {
        title: "Pilihan Layanan:",
        items: [
          "Gamelan Gender Wayang: umumnya digunakan dalam Dewa Yadnya, Manusa Yadnya, dan Pitra Yadnya.",
          "Gamelan Semarandana & Selonding: pilihan untuk upacara adat dengan skala menengah dan besar.",
          "Gamelan Angklung & Gender: sering digunakan pada prosesi ngaben atau upacara kematian.",
          "Tari Wali: seperti Topeng, Baris Gede, dan Rejang Dewa, yang menjadi simbol persembahan kepada Ida Sang Hyang Widhi Wasa.",
          "Wayang Lemah: pertunjukan wayang sakral tanpa kelir, biasanya untuk melengkapi prosesi tertentu dalam upacara adat.",
        ],
      },
    ],
  },
  {
    id: "pernikahan-tradisi-bali",
    title: "Pernikahan Tradisi Bali",
    image: "/images/services/wedding.jpg",
    description:
      "Di Bali, pernikahan bukan sekadar menyatukan dua insan Tapi juga peristiwa penuh makna, dengan tradisi yang sudah diwariskan turun-temurun. Dalam adat Bali, Panca Gita kembali menjadi unsur penting, di mana musik dan tarian adalah bagian tak terpisahkan dari prosesi.",
    sections: [
      {
        title: "1. Pernikahan dengan Upacara Adat",
        text: "Untuk pernikahan yang mengikuti tata cara adat Bali, kami menghadirkan musik sesuai pakem: Gamelan Gender Wayang, Selonding, Gamelan Semarandana. Semua disajikan untuk mendukung suasana khidmat, sakral, dan penuh hormat pada tradisi.",
      },
      {
        title: "2. Pernikahan Non-Adat atau Resepsi Modern",
        text: "Untuk pernikahan yang tidak menggunakan tata cara adat penuh, kami menyediakan musik dan pertunjukan yang elegan, hangat, dan tetap memiliki sentuhan budaya Bali, seperti: Rindik (untuk iringan welcoming guest dan suasana santai saat makan), Gamelan Show (pertunjukan gamelan dan tari tarian yang memikat tamu), Tarian Pengiring Pengantin (favorit banyak pasangan, seperti Prabangkara Hanoman, Semaradahana, dan Widyadari Panggih).",
      },
      {
        title: "Kelebihan Layanan:",
        items: [
          "Siap tampil di wedding venue premium di seluruh Bali.",
          "Kolaborasi dengan WO/EO untuk memastikan alur acara berjalan lancar.",
          "Fleksibel & open discussion kami dapat menyesuaikan format pertunjukan dengan konsep pernikahan yang Anda impikan.",
        ],
      },
    ],
  },
  {
    id: "corporate-events",
    title: "Corporate & International Events",
    image: "/images/services/international-events.png",
    description:
      "Presenting Balinese culture in refined and elegant settings. Bali dikenal di mata dunia sebagai pulau dengan seni dan budaya yang memikat. Kami menghadirkan kekayaan tersebut dalam format yang terstruktur, rapi, dan siap panggung, untuk memenuhi kebutuhan event modern — dari acara formal perusahaan hingga perhelatan internasional.",
    sections: [
      {
        title: "Layanan yang Kami Tawarkan:",
        items: [
          "Tarian Pembukaan: memberi kesan pertama yang kuat untuk memulai acara.",
          "Gamelan Show: suguhan musik tradisional dengan aransemen memukau.",
          "Dance Show: tarian khas Bali yang enerjik maupun anggun sesuai tema acara.",
          "Pertunjukan Semi Kolosal (by request): memadukan banyak penari dan pemusik dalam satu pertunjukan besar yang dramatis.",
        ],
      },
      {
        title: "Kualitas yang Kami Jaga:",
        text: "Kami memastikan penampilan bersih, sound system berkualitas, dan flow pertunjukan profesional yang selaras dengan jadwal acara. Semua detail dipersiapkan agar seni tradisional Bali tampil elegan di panggung modern.",
      },
      {
        title: "Kelebihan:",
        items: [
          "Sudah pernah tampil di hotel bintang 5 dan private villa eksklusif di Bali.",
          "Berpengalaman untuk gala dinner, product launch, hingga international cultural events.",
          "Penyesuaian konsep untuk event korporat lokal maupun tamu internasional.",
        ],
      },
    ],
  },
  {
    id: "kolaborasi-edukasi",
    title: "Kolaborasi & Edukasi Budaya",
    image: "/images/services/edukasi-budaya.jpg",
    description:
      "Workshop, Masterclass, dan pertunjukan lintas budaya. Kami percaya bahwa pelestarian budaya tidak cukup hanya dengan tampil di panggung - budaya harus diperkenalkan, diajarkan, dan dialami langsung. Karena itu, Nada Upacara Bali aktif menghadirkan program edukasi dan kolaborasi, baik untuk masyarakat lokal maupun komunitas internasional.",
    sections: [
      {
        title: "Bentuk Program Kami:",
        items: [
          'Pertunjukan Singkat "Sang Pajegan": perkenalan seni Bali melalui tarian topeng tunggal yang sarat makna.',
          "Workshop Tari: khusus untuk anak-anak, pelajar, atau sekolah internasional yang ingin mempelajari gerak tari Bali secara langsung.",
          "Workshop Gamelan Basic: pengenalan instrumen tradisional Bali, mulai dari sejarah hingga praktik bermain sederhana.",
          "Edukasi Budaya Bali: sesi interaktif yang membahas filosofi, kostum, musik, dan tarian sebagai satu kesatuan seni.",
        ],
      },
      {
        title: "Mengapa Memilih Program Kami?:",
        items: [
          "Dapat disesuaikan untuk sekolah, komunitas seni, atau event khusus.",
          "Pendekatan interaktif sehingga peserta tidak hanya menonton, tapi juga ikut terlibat.",
          "Berpengalaman bekerja sama dengan komunitas lokal dan lembaga internasional.",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-50 relative overflow-hidden'>
      {/* Background glow effect */}
      <div className='absolute top-0 inset-x-0 h-[500px] bg-[radial-linear(ellipse_at_top,_var(--tw-linear-stops))] from-[#b27457]/15 via-neutral-950 to-neutral-950 -z-10 pointer-events-none'></div>

      {/* Hero Section */}
      <section className='container mx-auto px-6 pt-36 pb-20 text-center max-w-4xl relative'>
        <h1 className='font-cormorant-garamond text-5xl md:text-7xl font-bold mb-6 text-[#f09a73] tracking-tight'>
          Layanan Kami
        </h1>
        <div className='flex justify-center mb-8'>
          <div className='w-24 h-px bg-linear-to-r from-transparent via-[#d58058] to-transparent'></div>
        </div>
        <p className='font-sans text-lg md:text-xl text-neutral-300 leading-relaxed font-light'>
          Menghadirkan seni pertunjukan tradisional Bali dengan standar
          profesionalisme, ketepatan waktu, dan pelayanan premium untuk berbagai
          kebutuhan acara Anda.
        </p>
      </section>

      {/* Services List */}
      <section className='flex flex-col relative z-10'>
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`py-24 lg:py-36 relative ${isEven ? "bg-neutral-900/30" : "bg-transparent"}`}
            >
              {/* Subtle top border for separation */}
              {!isEven && (
                <div className='absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent opacity-50'></div>
              )}

              <div className='container mx-auto px-6 lg:px-12'>
                <div
                  className={`flex flex-col gap-16 lg:gap-24 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Image Column */}
                  <div className='w-full lg:w-1/2 relative group'>
                    {/* Decorative offset frame */}
                    <div
                      className={`absolute inset-0 border border-[#b27457]/30 rounded-xl transition-transform duration-700 -z-10 
                      ${isEven ? "translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6" : "-translate-x-4 translate-y-4 group-hover:-translate-x-6 group-hover:translate-y-6"}`}
                    ></div>

                    <div className='relative aspect-4/3 w-full overflow-hidden rounded-xl border border-neutral-800 shadow-2xl'>
                      {/* Overlay to dim un-hovered image slightly */}
                      <div className='absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-700 z-10'></div>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className='object-cover transition-transform duration-1000 group-hover:scale-105'
                        sizes='(max-width: 1024px) 100vw, 50vw'
                      />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className='w-full lg:w-1/2 flex flex-col space-y-10 relative'>
                    {/* Large Background Numbering */}
                    <div
                      className={`absolute -top-16 lg:-top-24 ${isEven ? "-left-8 lg:-left-12" : "-right-8 lg:-right-12"} text-[8rem] lg:text-[12rem] font-cormorant-garamond font-bold text-[#f09a73] opacity-[0.03] select-none pointer-events-none leading-none`}
                    >
                      0{index + 1}
                    </div>

                    <div className='relative z-10'>
                      <h2 className='font-cormorant-garamond text-4xl lg:text-5xl font-semibold mb-6 text-[#f09a73] leading-tight'>
                        {service.title}
                      </h2>
                      <p className='font-sans text-neutral-300 text-lg leading-relaxed font-light'>
                        {service.description}
                      </p>
                    </div>

                    <div className='space-y-10 relative z-10'>
                      {service.sections.map((section, secIdx) => (
                        <div
                          key={secIdx}
                          className='bg-neutral-900/20 p-6 lg:p-8 rounded-xl border border-neutral-800/50 backdrop-blur-sm'
                        >
                          <h3 className='font-libre-baskerville italic text-xl mb-4 text-[#d58058]'>
                            {section.title}
                          </h3>
                          {section.text && (
                            <p className='font-sans text-neutral-300 leading-relaxed mb-5 font-light'>
                              {section.text}
                            </p>
                          )}
                          {section.items && (
                            <ul className='space-y-4 font-sans text-neutral-300 font-light'>
                              {section.items.map((item, itemIdx) => (
                                <li
                                  key={itemIdx}
                                  className='flex items-start group/item'
                                >
                                  <span className='text-[#b27457] mr-4 mt-1.5 text-xs transform transition-transform group-hover/item:scale-125'>
                                    ✦
                                  </span>
                                  <span className='leading-relaxed'>
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className='pt-4 relative z-10'>
                      <Link href={`/experiences#${service.id}`}>
                        <Button
                          variant='outline'
                          className='font-outfit border-[#d58058]/50 text-[#d58058] hover:bg-[#d58058] hover:text-white rounded-none px-8 py-7 text-sm lg:text-base tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm bg-transparent'
                        >
                          Lihat Katalog Pertunjukan
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-6 py-32 text-center relative'>
        <div className='absolute inset-0 bg-[radial-linear(circle_at_center,_var(--tw-linear-stops))] from-[#b27457]/5 via-transparent to-transparent -z-10 pointer-events-none'></div>
        <div className='max-w-4xl mx-auto border border-[#b27457]/20 bg-neutral-900/60 p-12 md:p-20 rounded-2xl backdrop-blur-md relative overflow-hidden group'>
          {/* Decorative subtle corner linears inside CTA box */}
          <div className='absolute top-0 right-0 w-32 h-32 bg-[#f09a73]/10 blur-3xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150'></div>
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-[#d58058]/10 blur-3xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150'></div>

          <h2 className='font-cormorant-garamond text-4xl lg:text-5xl mb-6 text-[#f09a73]'>
            Siap Mewujudkan Acara Anda?
          </h2>
          <p className='font-sans text-neutral-300 text-lg lg:text-xl mb-12 font-light max-w-2xl mx-auto'>
            Mari diskusikan kebutuhan pertunjukan untuk momen spesial Anda
            bersama tim Nada Upacara Bali.
          </p>
          <Link href='/contact'>
            <Button className='font-outfit bg-[#d58058] hover:bg-[#b27457] text-white rounded-none px-12 py-7 text-sm lg:text-base tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(213,128,88,0.2)] hover:shadow-[0_0_30px_rgba(213,128,88,0.4)]'>
              Hubungi Kami Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
