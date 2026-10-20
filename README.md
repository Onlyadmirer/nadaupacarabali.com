# Nada Upacara Bali

Website profil dan katalog untuk **Nada Upacara Bali**, cultural performance
house di Denpasar yang menyediakan pertunjukan seni tradisional Bali — gamelan,
tari, wayang, dan topeng sakral — untuk upacara adat, pernikahan, corporate
event, dan program edukasi budaya.

Website ini bersifat lead-generation: pengunjung menjelajahi layanan dan katalog,
lalu diarahkan ke WhatsApp untuk konsultasi dan pemesanan. Tidak ada transaksi
atau pembayaran di dalam aplikasi.

## Tech Stack

| Lapisan | Teknologi |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4, shadcn/ui |
| Bahasa | TypeScript |
| Animasi | `motion` (`motion/react`) |
| Ikon | `lucide-react` |

## Menjalankan Proyek

Prasyarat: Node.js 20+ dan [Bun](https://bun.sh) (lockfile proyek memakai Bun).

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # build production
bun run start    # jalankan hasil build
bun run lint     # ESLint
```

Jika memakai npm, hapus `bun.lock` terlebih dahulu agar tidak terjadi
ketidakcocokan dependensi.

## Variabel Lingkungan

| Variabel | Wajib | Keterangan |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Tidak | Domain kanonik situs (dipakai untuk `metadataBase`, sitemap, robots, dan JSON-LD). Default: `https://nadaupacarabali.com`. |

Contoh `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://nadaupacarabali.com
```

## Struktur Proyek

```
src/
├── app/                    # Route App Router
│   ├── layout.tsx          # Metadata global, font, JSON-LD, MenuBar & Footer
│   ├── page.tsx            # Beranda
│   ├── about/              # Tentang kami
│   ├── services/           # Kategori layanan
│   ├── catalog/            # Katalog + harga (filter & deep link via hash)
│   ├── gallery/            # Galeri + lightbox
│   ├── blog/               # Daftar blog + halaman [slug]
│   ├── contact/            # Kontak + form WhatsApp
│   ├── privacy-policy/
│   ├── terms-of-service/
│   ├── sitemap.ts          # Sitemap dinamis
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layouts/            # MenuBar & Footer
│   ├── ui/                 # Komponen shadcn/ui
│   ├── Reveal.tsx          # Animasi muncul saat scroll
│   └── StaggerContainer.tsx
├── constants/              # Sumber konten (tanpa CMS/database)
│   ├── catalog.ts          # Item katalog + paket + harga
│   ├── services.ts
│   ├── gallery.ts
│   ├── blog.ts
│   ├── contact.ts          # Kontak, sosial, situs, helper waLink()
│   └── images.ts
└── lib/utils.ts            # cn() dan formatRupiah()
```

## Mengubah Konten

Semua konten bersifat statis di `src/constants/`. Perubahan konten atau harga
memerlukan commit dan deploy ulang.

- **Harga & paket**: `src/constants/catalog.ts` — setiap paket punya `price`
  dalam Rupiah (tanpa pemisah). Harga "mulai dari" dihitung otomatis dari
  paket termurah.
- **Nomor WhatsApp / kontak**: `src/constants/contact.ts`. Gunakan helper
  `waLink(pesan?)` untuk membuat tautan WhatsApp agar nomor tidak perlu
  di-hardcode di komponen.
- **Artikel blog**: `src/constants/blog.ts`. Halaman detail dibuat otomatis
  lewat `generateStaticParams`.

## Catatan

- Panduan gaya, warna, dan tipografi ada di [`GEMINI.md`](./GEMINI.md).
- Gambar eksternal diizinkan dari `res.cloudinary.com` (lihat `next.config.ts`).
