import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Nada Upacara Bali",
  description:
    "Kebijakan privasi Nada Upacara Bali: bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
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
    <LegalPage
      title='Kebijakan Privasi'
      description='Nada Upacara Bali menghargai privasi Anda. Dokumen ini menjelaskan bagaimana kami menangani informasi pribadi Anda.'
      updatedAt='Juli 2026'
      sections={sections}
    />
  );
}
