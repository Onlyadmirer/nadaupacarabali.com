import { image } from "./images";

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

export const galleryImages: GalleryImage[] = [
  { src: image.homeBg, alt: "Pementasan Gamelan", category: "Gamelan" },
  { src: image.aboutBg, alt: "Pementasan Tari Tradisional Bali", category: "Tari" },
  { src: image.img1, alt: "Pementasan Gender Wayang", category: "Gamelan" },
  { src: image.img2, alt: "Suasana Upacara Adat Bali", category: "Upacara" },
  { src: image.img3, alt: "Pementasan Gamelan Semarandana", category: "Gamelan" },
  { src: image.img4, alt: "Tari Sambutan Sekar Jagat", category: "Tari" },
  { src: image.img5, alt: "Musik Gamelan di Acara Pernikahan", category: "Gamelan" },
  { src: image.img6, alt: "Pementasan Gamelan Angklung", category: "Gamelan" },
  { src: image.img7, alt: "Tari Wali Topeng Sakral", category: "Topeng" },
  { src: image.img8, alt: "Pementasan Wayang Kulit Bali", category: "Wayang" },
  { src: "/images/catalog/gamelan.png", alt: "Pementasan Gamelan Semarandana", category: "Gamelan" },
  { src: "/images/catalog/gamelan-selonding.png", alt: "Gamelan Selonding Tradisi Bali Aga", category: "Gamelan" },
  { src: "/images/catalog/pajegan.png", alt: "Topeng Pajegan Sakral", category: "Topeng" },
  { src: "/images/catalog/panca.png", alt: "Topeng Panca Lima Karakter", category: "Topeng" },
  { src: "/images/catalog/prabangkara-hanoman.png", alt: "Tari Prabangkara Hanoman", category: "Tari" },
  { src: "/images/catalog/smaradahana.png", alt: "Tari Smaradahana Duet", category: "Tari" },
  { src: "/images/catalog/tari-penyambutan.png", alt: "Tari Penyambutan Pendet", category: "Tari" },
  { src: "/images/catalog/wayang-lemah.png", alt: "Wayang Lemah Tanpa Kelir", category: "Wayang" },
  { src: "/images/catalog/wayang-peteng.png", alt: "Wayang Peteng Tradisi", category: "Wayang" },
  { src: "/images/catalog/widyadari-panggih.png", alt: "Tari Widyadari Panggih", category: "Tari" },
  { src: "/images/featured/sang-pajegan.png", alt: "Sang Pajegan Solo Mask Dance", category: "Topeng" },
  { src: "/images/featured/prabangkara-hanoman.png", alt: "Prabangkara Hanoman Tari Solo", category: "Tari" },
  { src: "/images/services/upacara-adat.jpg", alt: "Upacara Adat", category: "Upacara" },
  { src: "/images/services/wedding.jpg", alt: "Wedding", category: "Upacara" },
];
