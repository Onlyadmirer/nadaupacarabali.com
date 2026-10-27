import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { contactInfo } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Nada Upacara Bali",
  description:
    "Kebijakan privasi Nada Upacara Bali — bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
};

const sections = [
  {
    title: "Informasi Umum",
    content:
      "Nada Upacara Bali adalah penyedia jasa pertunjukan seni tradisional Bali yang berkomitmen melindungi privasi pengunjung website. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi yang Anda berikan saat menggunakan website kami.",
  },
  {
    title: "Data yang Kami Kumpulkan",
    content:
      "Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat menghubungi kami melalui formulir kontak, WhatsApp, atau saluran komunikasi lainnya. Informasi tersebut dapat meliputi nama lengkap, alamat email, nomor telepon, detail acara, dan informasi lain yang Anda berikan dalam rangka pemesanan atau pertanyaan layanan.",
  },
  {
    title: "Penggunaan Data",
    items: [
      "Merespons pertanyaan dan permintaan Anda",
      "Memproses pemesanan dan mengatur jadwal pertunjukan",
      "Mengirimkan informasi terkait layanan yang Anda pesan",
      "Meningkatkan kualitas layanan dan pengalaman pengguna",
      "Keperluan administrasi dan pencatatan internal",
    ],
  },
  {
    title: "Penyimpanan & Keamanan Data",
    content:
      "Kami menyimpan data pribadi Anda secara aman dan hanya untuk jangka waktu yang diperlukan sesuai tujuan pengumpulan data. Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran.",
  },
  {
    title: "Pengungkapan kepada Pihak Ketiga",
    content:
      "Kami tidak menjual, memperdagangkan, atau mentransfer data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum atau peraturan yang berlaku.",
  },
  {
    title: "Hak Anda",
    items: [
      "Mengakses data pribadi yang kami miliki tentang Anda",
      "Meminta koreksi jika terdapat kesalahan data",
      "Meminta penghapusan data pribadi Anda",
      "Menolak penggunaan data untuk tujuan tertentu",
    ],
  },
  {
    title: "Perubahan Kebijakan",
    content:
      "Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Setiap perubahan akan diinformasikan melalui halaman ini. Kami menyarankan Anda untuk meninjau halaman ini secara berkala.",
  },
  {
    title: "Kontak",
    content:
      "Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau ingin menggunakan hak Anda terkait data pribadi, silakan hubungi kami melalui:",
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className='min-h-screen bg-background text-foreground relative overflow-hidden'>
      {/* Hero */}
      <Reveal><section className='relative pt-32 pb-20 md:pb-28 px-6 border-b border-border'>
        <div
          className='absolute inset-0 -z-10 pointer-events-none'
          style={{
            background:
              "radial-gradient(circle at center, rgba(178,116,87,0.12) 0%, transparent 70%)",
          }}
        ></div>
        <div className='container mx-auto max-w-4xl text-center'>
          <span className='font-outfit uppercase tracking-[0.2em] text-sm text-[#c05621] font-semibold'>
            Legal
          </span>
          <h1 className='font-libre-baskerville italic text-4xl md:text-5xl font-bold mt-4 mb-4 text-[#9a3412]'>
            Kebijakan Privasi
          </h1>
          <div className='flex justify-center mb-6'>
            <div className='w-16 h-px bg-linear-to-r from-transparent via-[#d58058] to-transparent'></div>
          </div>
          <p className='font-cormorant-garamond text-[#6f6055] text-lg max-w-2xl mx-auto'>
            Nada Upacara Bali menghargai privasi Anda. Dokumen ini menjelaskan
            bagaimana kami menangani informasi pribadi Anda.
          </p>
        </div>
      </section></Reveal>

      {/* Content */}
      <Reveal><section className='py-16 md:py-24 px-6'>
        <div className='container mx-auto max-w-4xl'>
          <div className='space-y-12'>
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className='font-libre-baskerville italic text-2xl md:text-3xl text-[#c05621] mb-4'>
                  {section.title}
                </h2>
                {section.content && (
                  <p className='font-cormorant-garamond text-[#4e4239] text-lg leading-relaxed'>
                    {section.content}
                  </p>
                )}
                {section.items && (
                  <ul className='mt-3 space-y-2'>
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className='font-cormorant-garamond text-[#4e4239] text-lg leading-relaxed flex items-start gap-3'
                      >
                        <span className='text-[#b27457] mt-1.5 shrink-0'>
                          ✦
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.contact && (
                  <div className='mt-4 font-cormorant-garamond text-[#4e4239] text-lg leading-relaxed space-y-1'>
                    <p>WhatsApp: {contactInfo.phone}</p>
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className='text-[#c05621] hover:text-[#9a3412] transition-colors'
                      >
                        {contactInfo.email}
                      </a>
                    </p>
                    <p>{contactInfo.address}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='mt-16 pt-8 border-t border-border'>
            <p className='font-cormorant-garamond text-[#8a7a6d] text-sm'>
              Terakhir diperbarui: Juli 2026
            </p>
          </div>
        </div>
      </section></Reveal>
    </main>
  );
}
