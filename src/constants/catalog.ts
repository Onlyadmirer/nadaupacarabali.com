export interface CatalogPackage {
  name: string;
  /** Harga paket dalam Rupiah, tanpa pemisah. */
  price: number;
}

export interface CatalogItem {
  id: string;
  categoryId: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  personnel?: string;
  packages: CatalogPackage[];
  image: string;
}

import { image } from "./images";

export const catalogCategories = [
  { id: "gamelan-musik", label: "Gamelan & Musik Tradisional", serviceId: "upacara-adat" },
  { id: "wayang", label: "Wayang", serviceId: "upacara-adat" },
  { id: "tari-tradisional", label: "Tari Tradisional", serviceId: "pernikahan-tradisi-bali" },
  { id: "topeng-sakral", label: "Topeng & Pertunjukan Sakral", serviceId: "kolaborasi-edukasi" },
];

export const catalogData: CatalogItem[] = [
  {
    id: "rindik",
    categoryId: "gamelan-musik",
    category: "Gamelan & Musik Tradisional",
    title: "Rindik",
    description:
      "Sajian live performance alat musik tradisional Bali berbahan bambu, menghasilkan nada yang hangat dan menenangkan. Cocok untuk iringan santai, welcoming guest, dan suasana elegan.",
    duration: "Max 3 Jam",
    image: image.img2,
    packages: [
      { name: "Eka Swara", price: 850000 },
      { name: "Dwi Nada", price: 1250000 },
      { name: "Nada Agung", price: 1650000 },
      { name: "Kumara Talenta", price: 900000 },
    ],
  },
  {
    id: "gender-wayang",
    categoryId: "gamelan-musik",
    category: "Gamelan & Musik Tradisional",
    title: "Gender Wayang",
    description:
      "Pertunjukan musik tradisional Bali yang dimainkan dengan alat musik bilah perunggu. Suaranya lembut, berlapis, dan khas — sering digunakan dalam upacara Dewa Yadnya, Manusa Yadnya, dan Pitra Yadnya.",
    duration: "Max 3 Jam",
    image: image.img3,
    packages: [
      { name: "Dwi Wicara", price: 1500000 },
      { name: "Catur Swara", price: 2200000 },
      { name: "Gender Bade", price: 1500000 },
      { name: "Kumara Gender", price: 900000 },
    ],
  },
  {
    id: "gamelan-semarandana-alit",
    categoryId: "gamelan-musik",
    category: "Gamelan & Musik Tradisional",
    title: "Gamelan Semarandana Alit",
    description:
      "Gamelan Bali serbaguna dengan formasi 12 penabuh. Ideal untuk tempat dengan area terbatas namun tetap menghadirkan harmoni gamelan yang utuh.",
    duration: "2 - 3 Jam",
    image: "/images/catalog/gamelan.png",
    personnel: "12 Penabuh",
    packages: [{ name: "Paket Lengkap", price: 4000000 }],
  },
  {
    id: "gamelan-semarandana-agung",
    categoryId: "gamelan-musik",
    category: "Gamelan & Musik Tradisional",
    title: "Gamelan Semarandana Agung",
    description:
      "Ensambel gamelan modern khas Bali yang memadukan skala pelog dan selendro. Formasi 23 penabuh menghadirkan suara megah dan penuh kedalaman.",
    duration: "2 - 3 Jam",
    image: "/images/catalog/gamelan.png",
    personnel: "23 Penabuh",
    packages: [{ name: "Paket Lengkap", price: 8000000 }],
  },
  {
    id: "gamelan-angklung",
    categoryId: "gamelan-musik",
    category: "Gamelan & Musik Tradisional",
    title: "Gamelan Angklung",
    description:
      "Pertunjukan sakral untuk iringan upacara duka dengan bunyi lembut dan tenang. Formasi 18 penabuh siap menghadirkan suasana khidmat.",
    duration: "2 - 3 Jam",
    image: "/images/catalog/gamelan.png",
    personnel: "18 Penabuh",
    packages: [{ name: "Paket Lengkap", price: 4500000 }],
  },
  {
    id: "gamelan-selonding",
    categoryId: "gamelan-musik",
    category: "Gamelan & Musik Tradisional",
    title: "Gamelan Selonding",
    description:
      "Gamelan kuno dari tradisi Bali Aga yang terbuat dari bilah besi, menghasilkan suara khas yang sakral dan penuh sejarah.",
    duration: "2 - 3 Jam",
    image: "/images/catalog/gamelan-selonding.png",
    personnel: "8 Penabuh",
    packages: [{ name: "Paket Lengkap", price: 3500000 }],
  },
  {
    id: "wayang-lemah",
    categoryId: "wayang",
    category: "Wayang",
    title: "Wayang Lemah",
    description:
      "Pertunjukan wayang sakral khas Bali yang dimainkan tanpa kelir dan tanpa lampu damar. Biasanya untuk melengkapi prosesi tertentu dalam upacara adat.",
    duration: "1 - 2 Jam",
    image: "/images/catalog/wayang-lemah.png",
    personnel: "1 Dalang & 2 Penabuh",
    packages: [{ name: "Paket Lengkap", price: 5000000 }],
  },
  {
    id: "wayang-peteng-tradisi",
    categoryId: "wayang",
    category: "Wayang",
    title: "Wayang Peteng Tradisi",
    description:
      "Pertunjukan wayang kulit klasik Bali yang dibawakan dengan kelir dan lampu damar, menghadirkan suasana magis dan autentik.",
    duration: "1 - 2 Jam",
    image: "/images/catalog/wayang-peteng.png",
    personnel: "1 Dalang & 2 Penabuh",
    packages: [{ name: "Paket Lengkap", price: 6000000 }],
  },
  {
    id: "wayang-peteng-inovatif",
    categoryId: "wayang",
    category: "Wayang",
    title: "Wayang Peteng Inovatif",
    description:
      "Wayang kulit modern yang memadukan tradisi klasik dengan konsep visual kreatif menggunakan layar proyektor.",
    duration: "1 - 2 Jam",
    image: "/images/catalog/wayang-peteng.png",
    personnel: "1 Dalang & 2 Penabuh",
    packages: [{ name: "Paket Lengkap", price: 7500000 }],
  },
  {
    id: "prabangkara-hanoman",
    categoryId: "tari-tradisional",
    category: "Tari Tradisional",
    title: "Prabangkara Hanoman",
    description:
      "Tarian solo dinamis yang membawakan karakter Hanoman. Cocok sebagai pembuka prosesi masuk pengantin atau penyemangat acara.",
    duration: "5 Menit",
    image: "/images/catalog/prabangkara-hanoman.png",
    personnel: "1 Penari",
    packages: [{ name: "Paket Lengkap", price: 1700000 }],
  },
  {
    id: "smaradahana",
    categoryId: "tari-tradisional",
    category: "Tari Tradisional",
    title: "Smaradahana",
    description:
      "Tarian duet pria dan wanita yang menggambarkan kisah cinta, terinspirasi dari Dewa Kamajaya dan Dewi Ratih. Romantis dan anggun.",
    duration: "5 Menit",
    image: "/images/catalog/smaradahana.png",
    personnel: "2 Penari",
    packages: [{ name: "Paket Lengkap", price: 2500000 }],
  },
  {
    id: "widyadari-panggih",
    categoryId: "tari-tradisional",
    category: "Tari Tradisional",
    title: "Widyadari Panggih",
    description:
      "Tarian penyambutan sakral yang menggambarkan turunnya bidadari ke bumi. Ditarikan dengan gerakan anggun dan magis.",
    image: "/images/catalog/widyadari-panggih.png",
    duration: "5 Menit",
    packages: [
      { name: "4 Penari", price: 3000000 },
      { name: "8 Penari", price: 5500000 },
    ],
  },
  {
    id: "tari-penyambutan",
    categoryId: "tari-tradisional",
    category: "Tari Tradisional",
    title: "Tari Penyambutan",
    description:
      "Tari Pendet, Tari Sekar Jagat, atau Tari Cendrawasih — tarian penyambutan khas Bali yang penuh kehangatan dan keindahan.",
    image: "/images/catalog/tari-penyambutan.png",
    duration: "10 - 15 Menit",
    packages: [
      { name: "5 Penari", price: 3000000 },
      { name: "10 Penari", price: 6000000 },
    ],
  },
  {
    id: "topeng-pajegan",
    categoryId: "topeng-sakral",
    category: "Topeng & Pertunjukan Sakral",
    title: "Topeng Pajegan (Tradisi)",
    description:
      "Seni pertunjukan sakral yang dibawakan oleh satu orang penari dengan berganti topeng, mewakili berbagai karakter dalam kehidupan.",
    duration: "1 - 2 Jam",
    image: "/images/catalog/pajegan.png",
    personnel: "1 Penari",
    packages: [{ name: "Paket Lengkap", price: 2000000 }],
  },
  {
    id: "topeng-panca",
    categoryId: "topeng-sakral",
    category: "Topeng & Pertunjukan Sakral",
    title: "Topeng Panca",
    description:
      "Pertunjukan yang dibawakan beberapa penari dengan lima karakter utama, menghadirkan cerita yang lebih kaya dan dinamis.",
    duration: "1 - 2 Jam",
    image: "/images/catalog/panca.png",
    packages: [{ name: "Paket Lengkap", price: 5000000 }],
  },
  {
    id: "sang-pajegan",
    categoryId: "topeng-sakral",
    category: "Topeng & Pertunjukan Sakral",
    title: "Sang Pajegan",
    description:
      "The Sacred Solo Mask Dance of Bali — menjelajahi tiga wajah utama budaya Bali dalam pertunjukan solo yang dramatis dan penuh makna.",
    duration: "15 Menit",
    image: "/images/services/international-events.png",
    packages: [{ name: "Paket Lengkap", price: 3000000 }],
  },
];

/** Harga terendah dari seluruh paket sebuah item katalog. */
export function getStartingPrice(item: CatalogItem): number {
  return Math.min(...item.packages.map((pkg) => pkg.price));
}
