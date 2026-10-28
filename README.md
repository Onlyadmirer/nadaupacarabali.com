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
| Database | PostgreSQL + Prisma 7 (`@prisma/adapter-pg`) |

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
| `DATABASE_URL` | Ya | Connection string PostgreSQL (Neon). Dipakai Prisma CLI dan Prisma Client. |
| `ADMIN_PASSWORD` | Ya | Password untuk masuk ke panel admin `/admin`. |
| `AUTH_SECRET` | Ya | Kunci HMAC untuk menandatangani cookie sesi admin. Buat dengan `openssl rand -base64 32`. |
| `BLOB_READ_WRITE_TOKEN` | Ya | Token Vercel Blob untuk upload gambar katalog. |
| `NEXT_PUBLIC_SITE_URL` | Tidak | Domain kanonik situs (dipakai untuk `metadataBase`, sitemap, robots, dan JSON-LD). Default: `https://nadaupacarabali.com`. |

Contoh `.env`:

```bash
DATABASE_URL=postgresql://user:password@host/db?sslmode=require
ADMIN_PASSWORD=ganti-dengan-password-kuat
AUTH_SECRET=hasil-openssl-rand-base64-32
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...
NEXT_PUBLIC_SITE_URL=https://nadaupacarabali.com
```

## Database & Seed

Katalog pertunjukan disimpan di PostgreSQL melalui Prisma 7. Konfigurasi Prisma
berada di `prisma7.config.ts` (bukan `prisma.config.ts`), jadi CLI perlu flag
`--config`:

```bash
bun run db:migrate    # buat/terapkan migrasi
bun run db:seed       # isi kategori & 16 item katalog awal (idempotent)
bun run db:studio     # buka Prisma Studio
```

Seed membaca data awal dari `src/constants/catalog.ts`. Item dengan slug yang
sama akan diperbarui, item lain tidak dihapus.

## Panel Admin

Panel admin tersedia di `/admin` dan dilindungi cookie sesi bertanda tangan HMAC
(7 hari, `httpOnly`).

| Halaman | Fungsi |
| --- | --- |
| `/admin` | Ringkasan statistik dan item terbaru |
| `/admin/catalog` | Tabel produk: cari, filter, publikasi, hapus |
| `/admin/catalog/new` | Tambah item katalog + paket harga |
| `/admin/catalog/[id]` | Edit item katalog |
| `/admin/categories` | CRUD kategori dan pemetaan ke layanan |

Catatan:

- Item berstatus **draft** tidak tampil di `/catalog`.
- Perubahan langsung memicu `revalidatePath` untuk halaman publik.
- Gambar diunggah dari perangkat lewat form item katalog. File dikonversi ke
  WebP (maks. 1600 px, kualitas 82) lalu disimpan di Vercel Blob pada folder
  `catalog/`. Batas unggah 4 MB (JPG, PNG, WebP, AVIF, HEIC).
- Store Blob **public**: URL CDN Blob disimpan langsung. Store Blob **private**:
  gambar disajikan lewat route `/media/catalog/...` (token hanya di server).
  Keduanya terdeteksi otomatis saat upload. Untuk gambar katalog publik, store
  public lebih hemat (tanpa Function per gambar).
- Saat gambar diganti atau item dihapus, file lama di Vercel Blob ikut dihapus
  jika tidak dipakai item lain. Gambar lama di `/images/...` dan Cloudinary
  tidak disentuh.
- URL bisa juga diisi manual (toggle **Tempel URL**): path lokal
  (`/images/...`), Cloudinary (`res.cloudinary.com`), atau Vercel Blob. Host
  lain perlu ditambahkan ke `remotePatterns` di `next.config.ts` dan ke
  `ALLOWED_IMAGE_HOSTS`/`ALLOWED_IMAGE_HOST_SUFFIXES` di
  `src/lib/validations/catalog.ts`.
- Logout tersedia di sidebar. Menghapus cookie di browser juga mengakhiri sesi.

## Struktur Proyek

```
src/
├── app/
│   ├── layout.tsx          # Metadata global, font, JSON-LD
│   ├── (public)/           # Route publik (URL tidak berubah)
│   │   ├── layout.tsx      # MenuBar & Footer
│   │   ├── page.tsx        # Beranda
│   │   ├── about/          # Tentang kami
│   │   ├── services/       # Kategori layanan
│   │   ├── catalog/        # Katalog dari database + filter & deep link
│   │   ├── gallery/        # Galeri + lightbox
│   │   ├── blog/           # Daftar blog + halaman [slug]
│   │   ├── contact/        # Kontak + form WhatsApp
│   │   ├── privacy-policy/
│   │   └── terms-of-service/
│   ├── admin/              # Panel admin (login + panel terproteksi)
│   ├── api/admin/upload/   # Endpoint upload gambar (auth + validasi)
│   ├── media/[...path]/    # Penyaji gambar untuk store Blob private
│   ├── sitemap.ts          # Sitemap dinamis
│   └── robots.ts           # Robots.txt (admin di-disallow)
├── components/
│   ├── layouts/            # MenuBar & Footer
│   ├── ui/                 # Komponen shadcn/ui
│   ├── Reveal.tsx          # Animasi muncul saat scroll
│   └── StaggerContainer.tsx
├── constants/              # Konten statis non-katalog + data seed katalog
│   ├── catalog.ts          # Data awal seed (sumber tabel katalog)
│   ├── services.ts
│   ├── gallery.ts
│   ├── blog.ts
│   ├── contact.ts          # Kontak, sosial, situs, helper waLink()
│   └── images.ts
├── lib/
│   ├── prisma.ts           # Prisma Client + driver adapter
│   ├── auth.ts             # Sesi cookie & guard admin
│   ├── catalog.ts          # Query katalog publik & admin
│   ├── validations/        # Skema Zod
│   └── utils.ts            # cn() dan formatRupiah()
├── types/catalog.ts        # Tipe view model katalog
└── proxy.ts                # Proteksi route /admin (pengganti middleware di Next 16)

prisma/
├── schema.prisma           # User, Category, CatalogItem, Package
├── migrations/
└── seed.ts
```

## Mengubah Konten

- **Katalog, paket harga, kategori**: kelola lewat panel admin `/admin`.
  Perubahan langsung tampil di situs, tanpa deploy ulang.
- **Nomor WhatsApp / kontak**: `src/constants/contact.ts`. Gunakan helper
  `waLink(pesan?)` untuk membuat tautan WhatsApp agar nomor tidak perlu
  di-hardcode di komponen.
- **Artikel blog**: `src/constants/blog.ts`. Halaman detail dibuat otomatis
  lewat `generateStaticParams`.
- **Layanan, galeri, dan teks halaman**: `src/constants/` dan
  `src/app/(public)/`.

## Catatan

- Panduan gaya, warna, dan tipografi ada di [`GEMINI.md`](./GEMINI.md).
- Gambar eksternal diizinkan dari `res.cloudinary.com` (lihat `next.config.ts`).
