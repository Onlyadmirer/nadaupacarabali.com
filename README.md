# Nada Upacara Bali

<p align="center">
  <strong>Cultural performance house Bali</strong><br />
  Website profil, katalog, dan lead generation untuk pertunjukan seni tradisional Bali.
</p>

<p align="center">
  <a href="https://nadaupacarabali.com">
    <img src="https://img.shields.io/badge/Live_Demo-nadaupacarabali.com-8B5E3C?style=for-the-badge" alt="Live Demo" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-149ECA" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Prisma-7-2D3748" alt="Prisma 7" />
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1" alt="PostgreSQL" />
</p>

<p align="center">
  <img src="docs/screenshots/home-desktop.webp" alt="Beranda Nada Upacara Bali" width="100%" />
</p>

## Tentang Proyek

Nada Upacara Bali adalah website profil dan katalog untuk cultural performance
house di Denpasar, Bali. Website ini memperkenalkan layanan pertunjukan seni
tradisional Bali, menampilkan katalog lengkap, dan mengarahkan calon pelanggan
ke WhatsApp untuk konsultasi.

Fokus repositori ini adalah showcase implementasi website dan panel admin:

- Pengalaman publik yang responsif dan aksesibel.
- Katalog pertunjukan yang dikelola lewat database.
- Panel admin untuk mengelola katalog, kategori, paket, dan gambar.
- Optimasi SEO untuk halaman publik.
- Alur lead generation tanpa transaksi atau pembayaran di dalam aplikasi.

## Sorotan

### Pengalaman publik

- Beranda sinematik dengan hero image, CTA WhatsApp, layanan, dan pertunjukan unggulan.
- Halaman layanan dengan kategori Upacara Adat, Pernikahan, Corporate, dan Edukasi Budaya.
- Katalog pertunjukan dengan filter kategori, pencarian visual, harga paket, dan deep link.
- Galeri foto dengan lightbox yang mendukung keyboard, Escape, dan navigasi panah.
- Blog dengan halaman detail yang dibuat otomatis dari slug.
- Halaman kontak dengan form validasi dan handoff ke WhatsApp.
- Halaman legal, 404, sitemap, robots, metadata, Open Graph, dan JSON-LD.
- Dukungan `prefers-reduced-motion`, skip link, focus ring, dan target sentuh minimal 44px.

### Panel admin

- Login dengan cookie sesi HMAC, `httpOnly`, dan masa berlaku 7 hari.
- CRUD item katalog, paket harga, dan kategori.
- Status publikasi draft dan published.
- Upload gambar ke Vercel Blob dengan konversi WebP, batas ukuran, dan validasi tipe file.
- Revalidasi halaman publik setelah data berubah.
- Halaman statistik ringkas dan daftar item terbaru.

### Fondasi teknis

- Next.js 16 App Router dengan React Server Components.
- TypeScript strict dan validasi form menggunakan Zod.
- Prisma 7 dengan PostgreSQL dan driver adapter `@prisma/adapter-pg`.
- Tailwind CSS v4 dan komponen shadcn/ui berbasis Radix UI.
- Animasi ringan menggunakan `motion`.
- Desain responsif dengan identitas visual Bali: cream, brown, dan gold.

## Tampilan

<p align="center">
  <img src="docs/screenshots/home-desktop.webp" alt="Beranda desktop" width="49%" />
  <img src="docs/screenshots/catalog-desktop.webp" alt="Katalog desktop" width="49%" />
</p>

<p align="center">
  <img src="docs/screenshots/home-mobile.webp" alt="Beranda mobile" width="280" />
</p>

## Tech Stack

| Lapisan | Teknologi |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19, Tailwind CSS v4, shadcn/ui, Radix UI |
| Bahasa | TypeScript |
| Animasi | `motion` |
| Ikon | `lucide-react` |
| Database | PostgreSQL, Prisma 7, `@prisma/adapter-pg` |
| Storage | Vercel Blob |
| Validasi | Zod |
| Deployment | Vercel |

## Menjalankan Proyek

### Prasyarat

- Node.js 20 atau lebih baru
- [Bun](https://bun.sh) sebagai package manager
- Database PostgreSQL

### Langkah menjalankan

```bash
git clone https://github.com/Onlyadmirer/nadaupacarabali.com.git
cd nadaupacarabali.com
bun install
cp .env.example .env
```

Di Windows PowerShell, gunakan:

```powershell
Copy-Item .env.example .env
```

Isi `.env` terlebih dahulu, lalu jalankan migrasi dan seed:

```bash
bun run db:migrate
bun run db:seed
bun run dev
```

Website berjalan di `http://localhost:3000`.

Jika memakai npm, hapus `bun.lock` terlebih dahulu agar dependensi tidak
bercampur. Proyek ini tetap disarankan memakai Bun karena lockfile utama
menggunakan Bun.

## Environment Variables

| Variabel | Wajib | Keterangan |
| --- | --- | --- |
| `DATABASE_URL` | Ya | Connection string PostgreSQL untuk Prisma CLI dan Prisma Client. |
| `ADMIN_PASSWORD` | Ya | Password login panel admin `/admin`. |
| `AUTH_SECRET` | Ya | Kunci HMAC untuk cookie sesi admin. Buat dengan `openssl rand -base64 32`. |
| `BLOB_READ_WRITE_TOKEN` | Untuk upload | Token Vercel Blob untuk upload gambar katalog. |
| `NEXT_PUBLIC_SITE_URL` | Tidak | Domain kanonik untuk metadata, sitemap, robots, dan JSON-LD. Default: `https://nadaupacarabali.com`. |

Contoh isi `.env`:

```bash
DATABASE_URL=postgresql://user:password@host/db?sslmode=require
ADMIN_PASSWORD=ganti-dengan-password-kuat
AUTH_SECRET=hasil-openssl-rand-base64-32
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...
NEXT_PUBLIC_SITE_URL=https://nadaupacarabali.com
```

Jangan pernah commit file `.env` atau kredensial asli. Gunakan `.env.example`
sebagai template.

## Database dan Seed

Katalog disimpan di PostgreSQL melalui Prisma 7. Konfigurasi Prisma berada di
`prisma7.config.ts`, sehingga perintah CLI perlu flag `--config`.

```bash
bun run db:migrate    # buat dan terapkan migrasi
bun run db:seed       # isi kategori dan 16 item katalog awal
bun run db:studio     # buka Prisma Studio
```

Seed bersifat idempotent. Data awal dibaca dari `src/constants/catalog.ts`.
Item dengan slug yang sama akan diperbarui tanpa menghapus item lain.

Untuk production, gunakan migrasi deploy:

```bash
bunx prisma migrate deploy --config prisma7.config.ts
bun run db:seed
```

## Panel Admin

Panel admin tersedia di `/admin` dan dilindungi cookie sesi bertanda tangan HMAC.

| Halaman | Fungsi |
| --- | --- |
| `/admin` | Ringkasan statistik dan item terbaru |
| `/admin/catalog` | Pencarian, filter, publikasi, dan hapus item |
| `/admin/catalog/new` | Tambah item katalog dan paket harga |
| `/admin/catalog/[id]` | Edit item katalog |
| `/admin/categories` | CRUD kategori dan pemetaan ke layanan |

Catatan:

- Item draft tidak tampil di halaman publik `/catalog`.
- Perubahan data memicu `revalidatePath` untuk halaman terkait.
- Upload gambar dikonversi ke WebP, maksimal 1600px, kualitas 82, dan batas 4MB.
- Store Vercel Blob public menyimpan URL CDN langsung. Store private menyajikan
  gambar melalui route `/media/catalog/...`.
- Kredensial admin tidak disertakan di repositori ini.

## Struktur Proyek

```text
src/
├── app/
│   ├── layout.tsx              # Metadata global, font, skip link
│   ├── not-found.tsx           # Halaman 404
│   ├── (public)/               # Route publik
│   │   ├── layout.tsx          # MenuBar dan Footer
│   │   ├── page.tsx            # Beranda
│   │   ├── about/              # Tentang kami
│   │   ├── services/           # Layanan
│   │   ├── catalog/            # Katalog dari database
│   │   ├── gallery/            # Galeri dan lightbox
│   │   ├── blog/               # Daftar dan detail blog
│   │   ├── contact/            # Kontak dan form WhatsApp
│   │   ├── privacy-policy/
│   │   └── terms-of-service/
│   ├── admin/                  # Login dan panel admin
│   ├── api/admin/upload/       # Endpoint upload gambar
│   ├── media/[...path]/        # Penyaji gambar Blob private
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layouts/                # MenuBar, Footer, nav-items
│   ├── site/                   # PageHero, SectionHeading, CtaBanner, dll
│   ├── ui/                     # Komponen shadcn/ui
│   ├── Reveal.tsx
│   └── StaggerContainer.tsx
├── constants/                  # Konten statis dan data seed
├── lib/                        # Prisma, auth, katalog, validasi, utils
├── types/                      # Tipe view model
└── proxy.ts                    # Proteksi route admin
prisma/
├── schema.prisma
├── migrations/
└── seed.ts
docs/
└── screenshots/                # Screenshot showcase README
```

## Deployment

1. Siapkan database PostgreSQL, misalnya Neon atau Supabase.
2. Import repositori ke Vercel.
3. Tambahkan environment variables di dashboard Vercel.
4. Jalankan migrasi deploy dan seed ke database production.
5. Aktifkan Vercel Blob jika fitur upload gambar akan dipakai.
6. Deploy aplikasi.
7. Set `NEXT_PUBLIC_SITE_URL` ke domain production.
8. Arahkan domain dan verifikasi metadata Open Graph.

Build production:

```bash
bun run build
bun run start
```

## Mengubah Konten

- Katalog, paket harga, dan kategori: kelola melalui panel admin `/admin`.
- Nomor WhatsApp dan kontak: `src/constants/contact.ts`.
- Artikel blog: `src/constants/blog.ts`.
- Layanan, galeri, dan data seed katalog: `src/constants/`.
- Teks halaman: `src/app/(public)/`.
- Token warna, tipografi, dan style dasar: `src/app/globals.css`.

## Keamanan

- `.env` diabaikan oleh Git. Hanya `.env.example` yang boleh masuk repositori.
- Gunakan password admin yang kuat dan `AUTH_SECRET` acak.
- Jangan membagikan `BLOB_READ_WRITE_TOKEN` atau connection string database.
- Jika kredensial pernah terekspos, rotasi seluruh secret sebelum repo dibuat publik.
- Upload gambar dibatasi berdasarkan tipe file, ukuran, dan validasi server.

## Lisensi dan Penggunaan

Repositori ini dipublikasikan untuk keperluan showcase. Tidak ada lisensi open
source yang diberikan.

Nama, logo, foto, teks, dan seluruh aset merek Nada Upacara Bali tetap menjadi
milik Nada Upacara Bali. Jangan menggunakan ulang aset atau konten tersebut
tanpa izin tertulis.

## Kontak

- Website: [nadaupacarabali.com](https://nadaupacarabali.com)
- Instagram: [@nadaupacarabali](https://www.instagram.com/nadaupacarabali/)
- YouTube: [@NadaUpacaraBali](https://www.youtube.com/@NadaUpacaraBali)
- TikTok: [@nadaupacarabali](https://www.tiktok.com/@nadaupacarabali)
