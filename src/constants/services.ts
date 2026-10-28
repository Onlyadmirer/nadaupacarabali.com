

export interface ServiceSection {
  title: string;
  text?: string;
  items?: string[];
}

export interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  sections: ServiceSection[];
}

export const servicesData: Service[] = [
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
    image: "/images/services/image.png",
    description:
      "Presenting Balinese culture in refined and elegant settings. Bali dikenal di mata dunia sebagai pulau dengan seni dan budaya yang memikat. Kami menghadirkan kekayaan tersebut dalam format yang terstruktur, rapi, dan siap panggung, untuk memenuhi kebutuhan event modern, mulai dari acara formal perusahaan hingga perhelatan internasional.",
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

export const serviceCategories = [
  {
    title: "Upacara Adat & Keagamaan",
    description:
      "Menghadirkan musik dan pertunjukan sakral yang sesuai pakem untuk melengkapi kesakralan prosesi adat.",
    image: "/images/services/upacara-adat.jpg",
    link: "/services#upacara-adat",
  },
  {
    title: "Bali Wedding Performance",
    description:
      "Sajian musik dan tarian elegan untuk mendukung suasana khidmat pada pernikahan adat maupun resepsi modern.",
    image: "/images/services/wedding.jpg",
    link: "/services#pernikahan-tradisi-bali",
  },
  {
    title: "Corporate & International Event",
    description:
      "Menghadirkan kekayaan seni budaya Bali dalam format yang elegan, terstruktur, dan siap panggung.",
    image: "/images/services/international-events.png",
    link: "/services#corporate-events",
  },
  {
    title: "Cultural Workshop & Education",
    description:
      "Program interaktif untuk memperkenalkan budaya Bali secara langsung kepada masyarakat dan tamu internasional.",
    image: "/images/services/edukasi-budaya.jpg",
    link: "/services#kolaborasi-edukasi",
  },
];
