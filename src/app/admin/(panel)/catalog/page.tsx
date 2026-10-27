import Link from "next/link";
import { CheckCircle2, Eye, EyeOff, Plus, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAdminCatalog, getAdminCategories } from "@/lib/catalog";
import { formatRupiah } from "@/lib/utils";
import { getStartingPrice } from "@/types/catalog";
import PageHeader from "../_components/PageHeader";
import { toggleCatalogItemPublished } from "./actions";
import DeleteItemButton from "./_components/DeleteItemButton";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function first(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function buildQuery(params: Record<string, string | undefined>) {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value) query.set(key, value);
  }

  const result = query.toString();
  return result ? `?${result}` : "";
}

export default async function CatalogListPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const q = first(params.q).trim();
  const category = first(params.category) || "all";
  const status = first(params.status) || "all";
  const page = Math.max(1, Number.parseInt(first(params.page), 10) || 1);
  const notice = first(params.created)
    ? "created"
    : first(params.updated)
      ? "updated"
      : first(params.deleted)
        ? "deleted"
        : "";

  const [categories, data] = await Promise.all([
    getAdminCategories(),
    getAdminCatalog({ q, category, status, page }),
  ]);

  const hasFilters = Boolean(q) || category !== "all" || status !== "all";
  const filterParams = {
    q: q || undefined,
    category: category !== "all" ? category : undefined,
    status: status !== "all" ? status : undefined,
  };

  return (
    <>
      <PageHeader
        eyebrow='Katalog'
        title='Kelola Pertunjukan'
        description='Tambah, ubah, publikasikan, atau hapus item katalog beserta paket harganya.'
        action={
          <Button asChild className='font-outfit tracking-[0.15em] uppercase'>
            <Link href='/admin/catalog/new'>
              <Plus className='size-4' />
              Tambah Item
            </Link>
          </Button>
        }
      />

      {notice && (
        <div className='mb-5 flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-emerald-800 ring-1 ring-emerald-200'>
          <CheckCircle2 className='size-4 shrink-0' />
          <p className='font-outfit text-sm'>
            {notice === "created"
              ? "Item baru berhasil ditambahkan."
              : notice === "updated"
                ? "Perubahan item berhasil disimpan."
                : "Item berhasil dihapus."}
          </p>
        </div>
      )}

      <form
        method='GET'
        className='mb-5 flex flex-col gap-3 rounded-xl bg-card p-4 ring-1 ring-border/70 sm:flex-row sm:items-center'
      >
        <div className='relative flex-1'>
          <Search className='pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />
          <Input
            name='q'
            defaultValue={q}
            placeholder='Cari judul atau slug...'
            className='pl-9'
          />
        </div>

        <select
          name='category'
          defaultValue={category}
          className='font-outfit h-9 rounded-md border border-input bg-transparent px-3 text-sm text-foreground shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:w-48'
        >
          <option value='all'>Semua kategori</option>
          {categories.map((item) => (
            <option key={item.id} value={item.slug}>
              {item.label}
            </option>
          ))}
        </select>

        <select
          name='status'
          defaultValue={status}
          className='font-outfit h-9 rounded-md border border-input bg-transparent px-3 text-sm text-foreground shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:w-36'
        >
          <option value='all'>Semua status</option>
          <option value='published'>Published</option>
          <option value='draft'>Draft</option>
        </select>

        <div className='flex items-center gap-2'>
          <Button
            type='submit'
            variant='secondary'
            className='font-outfit tracking-[0.1em] uppercase'
          >
            Filter
          </Button>
          {hasFilters && (
            <Button
              asChild
              type='button'
              variant='ghost'
              size='icon'
              aria-label='Reset filter'
            >
              <Link href='/admin/catalog'>
                <X className='size-4' />
              </Link>
            </Button>
          )}
        </div>
      </form>

      <div className='overflow-hidden rounded-xl bg-card ring-1 ring-border/70'>
        <Table>
          <TableHeader>
            <TableRow className='bg-secondary/50'>
              <TableHead className='font-outfit text-[10px] tracking-[0.2em] uppercase'>
                Produk
              </TableHead>
              <TableHead className='font-outfit hidden text-[10px] tracking-[0.2em] uppercase md:table-cell'>
                Kategori
              </TableHead>
              <TableHead className='font-outfit hidden text-right text-[10px] tracking-[0.2em] uppercase sm:table-cell'>
                Mulai dari
              </TableHead>
              <TableHead className='font-outfit text-center text-[10px] tracking-[0.2em] uppercase'>
                Status
              </TableHead>
              <TableHead className='font-outfit text-right text-[10px] tracking-[0.2em] uppercase'>
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className='py-16 text-center'>
                  <p className='font-cormorant-garamond text-lg text-muted-foreground'>
                    {hasFilters
                      ? "Tidak ada item yang cocok dengan filter."
                      : "Belum ada item katalog."}
                  </p>
                  {hasFilters && (
                    <Button
                      asChild
                      variant='link'
                      className='font-outfit mt-2 text-xs tracking-[0.15em] uppercase'
                    >
                      <Link href='/admin/catalog'>Reset filter</Link>
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ) : (
              data.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className='size-11 shrink-0 rounded-md object-cover ring-1 ring-border/70'
                      />
                      <div className='min-w-0'>
                        <p className='font-outfit max-w-[22ch] truncate text-sm font-medium text-foreground sm:max-w-[32ch]'>
                          {item.title}
                        </p>
                        <p className='font-outfit mt-0.5 truncate text-xs text-muted-foreground'>
                          #{item.slug}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className='font-outfit hidden text-sm text-muted-foreground md:table-cell'>
                    {item.category.label}
                  </TableCell>
                  <TableCell className='font-outfit hidden text-right text-sm tabular-nums sm:table-cell'>
                    {formatRupiah(getStartingPrice(item))}
                  </TableCell>
                  <TableCell className='text-center'>
                    <form action={toggleCatalogItemPublished}>
                      <input type='hidden' name='id' value={item.id} />
                      <button
                        type='submit'
                        title={
                          item.published
                            ? "Klik untuk jadikan draft"
                            : "Klik untuk publikasikan"
                        }
                        className={`font-outfit inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase transition-colors ${
                          item.published
                            ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-100"
                            : "bg-secondary text-muted-foreground ring-1 ring-border/70 hover:bg-border/40"
                        }`}
                      >
                        {item.published ? (
                          <Eye className='size-3' />
                        ) : (
                          <EyeOff className='size-3' />
                        )}
                        {item.published ? "Published" : "Draft"}
                      </button>
                    </form>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center justify-end gap-1'>
                      <Button
                        asChild
                        variant='ghost'
                        size='sm'
                        className='font-outfit text-[11px] tracking-[0.12em] uppercase'
                      >
                        <Link href={`/admin/catalog/${item.id}`}>Edit</Link>
                      </Button>
                      <DeleteItemButton id={item.id} title={item.title} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className='mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row'>
        <p className='font-outfit text-xs text-muted-foreground'>
          Menampilkan {data.items.length} dari {data.total} item · halaman{" "}
          {data.page} / {data.totalPages}
        </p>
        <div className='flex items-center gap-2'>
          <Button
            asChild
            variant='outline'
            size='sm'
            className='font-outfit text-[11px] tracking-[0.12em] uppercase'
            aria-disabled={data.page <= 1}
          >
            <Link
              href={`/admin/catalog${buildQuery({
                ...filterParams,
                page: data.page > 1 ? String(data.page - 1) : undefined,
              })}`}
              className={data.page <= 1 ? "pointer-events-none opacity-50" : ""}
            >
              Sebelumnya
            </Link>
          </Button>
          <Button
            asChild
            variant='outline'
            size='sm'
            className='font-outfit text-[11px] tracking-[0.12em] uppercase'
          >
            <Link
              href={`/admin/catalog${buildQuery({
                ...filterParams,
                page:
                  data.page < data.totalPages
                    ? String(data.page + 1)
                    : undefined,
              })}`}
              className={
                data.page >= data.totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            >
              Berikutnya
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
