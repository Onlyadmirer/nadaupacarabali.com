import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | Nada Upacara Bali",
  description:
    "Syarat dan ketentuan layanan Nada Upacara Bali: panduan pemesanan, pembayaran, pembatalan, dan hak serta kewajiban pengguna.",
};

const sections = [
  {
    title: "Penerimaan Syarat",
    content:
      "Dengan menggunakan website dan layanan Nada Upacara Bali, Anda menyetujui syarat dan ketentuan yang tercantum dalam halaman ini. Jika Anda tidak setuju dengan sebagian atau seluruh syarat dan ketentuan ini, mohon untuk tidak menggunakan layanan kami.",
  },
  {
    title: "Deskripsi Layanan",
    content:
      "Nada Upacara Bali menyediakan layanan pertunjukan seni tradisional Bali, termasuk namun tidak terbatas pada: gamelan, tari tradisional, wayang, topeng sakral, dan berbagai pertunjukan seni budaya Bali lainnya. Layanan tersedia untuk keperluan upacara adat, pernikahan, acara perusahaan, dan edukasi budaya.",
  },
  {
    title: "Pemesanan & Pembayaran",
    items: [
      "Pemesanan dilakukan melalui konsultasi dengan tim kami untuk menyesuaikan kebutuhan acara",
      "Setelah kesepakatan tercapai, pemesanan dikonfirmasi dengan pembayaran DP (uang muka)",
      "Besaran DP dan sisa pembayaran akan diinformasikan saat konsultasi",
      "Pembayaran dapat dilakukan melalui metode transfer bank yang akan diinformasikan",
      "Harga yang tercantum dalam katalog dapat berubah tanpa pemberitahuan sebelumnya",
    ],
  },
  {
    title: "Pembatalan & Pengembalian Dana",
    items: [
      "Pembatalan dari pihak pemesan harus disampaikan minimal 7 hari sebelum hari pelaksanaan",
      "DP yang telah dibayarkan tidak dapat dikembalikan untuk pembatalan yang dilakukan kurang dari 7 hari sebelum acara",
      "Pembatalan sepihak dari Nada Upacara Bali karena keadaan darurat (force majeure) akan mendapatkan pengembalian dana penuh",
      "Nada Upacara Bali berhak membatalkan pertunjukan jika terjadi situasi di luar kendali kami, seperti bencana alam, kerusuhan, atau pandemi",
    ],
  },
  {
    title: "Hak & Kewajiban Pelanggan",
    items: [
      "Memberikan informasi yang akurat dan lengkap mengenai acara",
      "Memastikan lokasi acara siap dan aman untuk pertunjukan",
      "Menyediakan akses yang memadai untuk persiapan dan pelaksanaan acara",
      "Memberitahukan perubahan jadwal atau detail acara sesegera mungkin",
    ],
  },
  {
    title: "Hak & Kewajiban Nada Upacara Bali",
    items: [
      "Menampilkan pertunjukan dengan standar profesionalisme dan kualitas terbaik",
      "Hadir tepat waktu sesuai dengan jadwal yang telah disepakati",
      "Menjaga kerapihan penampilan dan etika selama acara berlangsung",
      "Menyediakan peralatan dan sound system yang sesuai dengan kebutuhan pertunjukan",
    ],
  },
  {
    title: "Batasan Tanggung Jawab",
    content:
      "Nada Upacara Bali tidak bertanggung jawab atas kerugian yang timbul akibat keterlambatan, pembatalan, atau perubahan yang disebabkan oleh keadaan di luar kendali kami (force majeure). Tanggung jawab kami terbatas pada nilai layanan yang telah dibayarkan oleh pelanggan.",
  },
  {
    title: "Hak Kekayaan Intelektual",
    content:
      "Seluruh konten dalam website ini, termasuk teks, gambar, logo, dan materi lainnya, adalah milik Nada Upacara Bali dan dilindungi oleh hak cipta. Dilarang menggunakan, menyalin, atau mendistribusikan konten tanpa izin tertulis dari kami.",
  },
  {
    title: "Perubahan Ketentuan",
    content:
      "Nada Upacara Bali berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diinformasikan melalui halaman ini. Penggunaan layanan setelah perubahan dianggap sebagai penerimaan terhadap syarat dan ketentuan yang baru.",
  },
  {
    title: "Kontak",
    content: "Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi kami:",
    contact: true,
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title='Syarat & Ketentuan'
      description='Dengan menggunakan layanan Nada Upacara Bali, Anda menyetujui syarat dan ketentuan yang berlaku.'
      updatedAt='Juli 2026'
      sections={sections}
    />
  );
}
