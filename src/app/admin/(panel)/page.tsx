import Link from "next/link";
import {
  ArrowRight,
  EyeOff,
  Eye,
  ListMusic,
  Plus,
  Tags,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAdminCatalog, getAdminStats } from "@/lib/catalog";
import { formatRupiah } from "@/lib/utils";
import { getStartingPrice } from "@/types/catalog";
import PageHeader from "./_components/PageHeader";
import StatCard from "./_components/StatCard";

export default async function AdminDashboardPage() {
  const [stats, recent] = await Promise.all([
    getAdminStats(),
    getAdminCatalog({ pageSize: 5 }),
  ]);

  return (
    <>
      <PageHeader
        eyebrow='Dashboard'
        title='Selamat datang kembali'
        description='Ringkasan katalog pertunjukan dan akses cepat untuk mengelola konten.'
        action={
          <Button asChild className='font-outfit tracking-[0.15em] uppercase'>
            <Link href='/admin/catalog/new'>
              <Plus className='size-4' />
              Tambah Item
            </Link>
          </Button>
        }
      />

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        <StatCard
          label='Total Item'
          value={stats.total}
          hint={`${stats.packages} paket harga`}
          icon={ListMusic}
          accent
        />
        <StatCard
          label='Published'
          value={stats.published}
          hint='Tampil di halaman publik'
          icon={Eye}
        />
        <StatCard
          label='Draft'
          value={stats.draft}
          hint='Disembunyikan dari publik'
          icon={EyeOff}
        />
        <StatCard
          label='Kategori'
          value={stats.categories}
          hint='Kelompok pertunjukan'
          icon={Tags}
        />
      </div>

      <section className='mt-10'>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='font-outfit text-[11px] tracking-[0.25em] text-muted-foreground uppercase'>
            Item terbaru
          </h2>
          <Link
            href='/admin/catalog'
            className='font-outfit inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] text-primary uppercase hover:text-foreground'
          >
            Kelola semua
            <ArrowRight className='size-3.5' />
          </Link>
        </div>

        {recent.items.length === 0 ? (
          <div className='rounded-xl border border-dashed border-border bg-card/60 px-6 py-14 text-center'>
            <p className='font-cormorant-garamond text-lg text-muted-foreground'>
              Belum ada item katalog. Mulai dengan menambahkan pertunjukan
              pertama.
            </p>
          </div>
        ) : (
          <div className='overflow-hidden rounded-xl bg-card ring-1 ring-border/70'>
            <ul className='divide-y divide-border/70'>
              {recent.items.map((item) => (
                <li
                  key={item.id}
                  className='flex items-center gap-4 px-4 py-3 sm:px-5'
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className='size-12 shrink-0 rounded-md object-cover ring-1 ring-border/70'
                  />
                  <div className='min-w-0 flex-1'>
                    <p className='font-outfit truncate text-sm font-medium text-foreground'>
                      {item.title}
                    </p>
                    <p className='font-outfit mt-0.5 truncate text-xs text-muted-foreground'>
                      {item.category.label} · mulai{" "}
                      {formatRupiah(getStartingPrice(item))}
                    </p>
                  </div>
                  <span
                    className={`font-outfit hidden rounded-full px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase sm:inline-flex ${
                      item.published
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                        : "bg-secondary text-muted-foreground ring-1 ring-border/70"
                    }`}
                  >
                    {item.published ? "Published" : "Draft"}
                  </span>
                  <Button
                    asChild
                    variant='ghost'
                    size='sm'
                    className='font-outfit text-[11px] tracking-[0.15em] uppercase'
                  >
                    <Link href={`/admin/catalog/${item.id}`}>Edit</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
