"use client";

import { useActionState, useRef, useState } from "react";
import Link from "next/link";
import {
  Loader2,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { initialFormState } from "@/lib/form-state";
import { formatRupiah } from "@/lib/utils";
import { createCatalogItem, updateCatalogItem } from "../actions";
import ImageUploader from "./ImageUploader";

interface CategoryOption {
  id: string;
  label: string;
}

interface PackageValue {
  name: string;
  price: number;
}

export interface ProductFormValues {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  description: string;
  duration: string;
  personnel: string | null;
  image: string;
  published: boolean;
  order: number;
  packages: PackageValue[];
}

interface ProductFormProps {
  categories: CategoryOption[];
  item?: ProductFormValues | null;
}

interface PackageRow {
  key: number;
  name: string;
  price: string;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className='mt-1.5 font-outfit text-xs text-destructive'>{message}</p>
  );
}

function Card({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className='rounded-xl bg-card p-5 ring-1 ring-border/70 sm:p-6'>
      <header className='mb-5'>
        <h2 className='font-outfit text-[11px] tracking-[0.22em] text-muted-foreground uppercase'>
          {title}
        </h2>
        {description && (
          <p className='font-outfit mt-1 text-xs text-muted-foreground'>
            {description}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}

export default function ProductForm({ categories, item }: ProductFormProps) {
  const editing = Boolean(item);
  const [state, formAction, pending] = useActionState(
    editing ? updateCatalogItem : createCatalogItem,
    initialFormState,
  );

  const [title, setTitle] = useState(item?.title ?? "");
  const [slug, setSlug] = useState(item?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(editing);
  const [image, setImage] = useState(item?.image ?? "");
  const [uploadingImage, setUploadingImage] = useState(false);

  const nextKey = useRef(item?.packages.length ?? 1);
  const [packages, setPackages] = useState<PackageRow[]>(() => {
    const initial = item?.packages.length
      ? item.packages
      : [{ name: "", price: 0 }];

    return initial.map((pkg, index) => ({
      key: index,
      name: pkg.name,
      price: String(pkg.price),
    }));
  });

  const errors = state.fieldErrors ?? {};

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  };

  const handleSlugChange = (value: string) => {
    setSlugTouched(true);
    setSlug(value);
  };

  const addPackage = () => {
    setPackages((current) => [
      ...current,
      { key: nextKey.current++, name: "", price: "" },
    ]);
  };

  const removePackage = (key: number) => {
    setPackages((current) =>
      current.length <= 1 ? current : current.filter((row) => row.key !== key),
    );
  };

  const updatePackage = (
    key: number,
    field: "name" | "price",
    value: string,
  ) => {
    setPackages((current) =>
      current.map((row) => (row.key === key ? { ...row, [field]: value } : row)),
    );
  };

  return (
    <form action={formAction} className='space-y-5'>
      {item && <input type='hidden' name='id' value={item.id} />}
      <input type='hidden' name='image' value={image} />

      {state.error && (
        <p
          role='alert'
          className='rounded-lg bg-destructive/10 px-4 py-3 font-outfit text-sm text-destructive ring-1 ring-destructive/20'
        >
          {state.error}
        </p>
      )}

      <div className='grid gap-5 lg:grid-cols-3'>
        <div className='space-y-5 lg:col-span-2'>
          <Card title='Informasi Pertunjukan'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='title'>Judul</Label>
                <Input
                  id='title'
                  name='title'
                  value={title}
                  onChange={(event) => handleTitleChange(event.target.value)}
                  placeholder='Contoh: Rindik'
                  autoFocus
                  required
                  aria-invalid={Boolean(errors.title)}
                />
                <FieldError message={errors.title} />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='slug'>Slug</Label>
                <Input
                  id='slug'
                  name='slug'
                  value={slug}
                  onChange={(event) => handleSlugChange(event.target.value)}
                  placeholder='contoh-rindik'
                  required
                  aria-invalid={Boolean(errors.slug)}
                />
                <p className='font-outfit text-xs text-muted-foreground'>
                  Dipakai sebagai tautan langsung:{" "}
                  <code className='font-mono'>/catalog#{slug || "slug-item"}</code>
                </p>
                <FieldError message={errors.slug} />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='categoryId'>Kategori</Label>
                <Select
                  name='categoryId'
                  defaultValue={item?.categoryId ?? categories[0]?.id}
                  required
                >
                  <SelectTrigger
                    id='categoryId'
                    className='h-9 w-full'
                    aria-invalid={Boolean(errors.categoryId)}
                  >
                    <SelectValue placeholder='Pilih kategori' />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.categoryId} />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='description'>Deskripsi</Label>
                <Textarea
                  id='description'
                  name='description'
                  defaultValue={item?.description ?? ""}
                  placeholder='Jelaskan pertunjukan ini secara singkat dan menarik...'
                  rows={5}
                  required
                  aria-invalid={Boolean(errors.description)}
                />
                <FieldError message={errors.description} />
              </div>

              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <Label htmlFor='duration'>Durasi</Label>
                  <Input
                    id='duration'
                    name='duration'
                    defaultValue={item?.duration ?? ""}
                    placeholder='Contoh: 2 - 3 Jam'
                    required
                    aria-invalid={Boolean(errors.duration)}
                  />
                  <FieldError message={errors.duration} />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='personnel'>Jumlah Personel (opsional)</Label>
                  <Input
                    id='personnel'
                    name='personnel'
                    defaultValue={item?.personnel ?? ""}
                    placeholder='Contoh: 12 Penabuh'
                    aria-invalid={Boolean(errors.personnel)}
                  />
                  <FieldError message={errors.personnel} />
                </div>
              </div>
            </div>
          </Card>

          <Card
            title='Paket & Harga'
            description='Minimal satu paket. Harga dalam Rupiah tanpa titik atau koma.'
          >
            {errors.packages && <FieldError message={errors.packages} />}

            <div className='space-y-3'>
              {packages.map((row, index) => (
                <div
                  key={row.key}
                  className='grid gap-3 rounded-lg bg-secondary/40 p-3 ring-1 ring-border/60 sm:grid-cols-[1fr_170px_auto]'
                >
                  <div className='space-y-1.5'>
                    <Label
                      htmlFor={`packageName-${row.key}`}
                      className='font-outfit text-[10px] tracking-[0.15em] text-muted-foreground uppercase'
                    >
                      Nama Paket {index + 1}
                    </Label>
                    <Input
                      id={`packageName-${row.key}`}
                      name='packageName'
                      value={row.name}
                      onChange={(event) =>
                        updatePackage(row.key, "name", event.target.value)
                      }
                      placeholder='Contoh: Eka Swara'
                    />
                  </div>

                  <div className='space-y-1.5'>
                    <Label
                      htmlFor={`packagePrice-${row.key}`}
                      className='font-outfit text-[10px] tracking-[0.15em] text-muted-foreground uppercase'
                    >
                      Harga (Rp)
                    </Label>
                    <Input
                      id={`packagePrice-${row.key}`}
                      name='packagePrice'
                      type='number'
                      inputMode='numeric'
                      min={0}
                      step={1}
                      value={row.price}
                      onChange={(event) =>
                        updatePackage(row.key, "price", event.target.value)
                      }
                      placeholder='850000'
                    />
                    {Number(row.price) > 0 && (
                      <p className='font-outfit text-[11px] text-muted-foreground'>
                        {formatRupiah(Number(row.price))}
                      </p>
                    )}
                  </div>

                  <div className='flex items-end justify-end'>
                    <Button
                      type='button'
                      variant='ghost'
                      size='icon'
                      onClick={() => removePackage(row.key)}
                      disabled={packages.length <= 1}
                      aria-label={`Hapus paket ${index + 1}`}
                      className='text-muted-foreground hover:bg-destructive/10 hover:text-destructive'
                    >
                      <Trash2 className='size-4' />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              type='button'
              variant='outline'
              size='sm'
              onClick={addPackage}
              className='font-outfit mt-4 tracking-[0.1em] uppercase'
            >
              <Plus className='size-4' />
              Tambah Paket
            </Button>
          </Card>
        </div>

        <div className='space-y-5'>
          <Card title='Publikasi'>
            <div className='space-y-5'>
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <Label htmlFor='published' className='cursor-pointer'>
                    Tampilkan di katalog
                  </Label>
                  <p className='font-outfit mt-1 text-xs text-muted-foreground'>
                    Jika nonaktif, item disimpan sebagai draft.
                  </p>
                </div>
                <Switch
                  id='published'
                  name='published'
                  defaultChecked={item?.published ?? true}
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='order'>Urutan Tampil</Label>
                <Input
                  id='order'
                  name='order'
                  type='number'
                  min={0}
                  step={1}
                  defaultValue={item?.order ?? 0}
                  aria-invalid={Boolean(errors.order)}
                />
                <p className='font-outfit text-xs text-muted-foreground'>
                  Angka lebih kecil tampil lebih dulu.
                </p>
                <FieldError message={errors.order} />
              </div>
            </div>
          </Card>

          <Card title='Gambar'>
            <ImageUploader
              value={image}
              onChange={setImage}
              onBusyChange={setUploadingImage}
            />
            <div className='mt-2'>
              <FieldError message={errors.image} />
            </div>
          </Card>
        </div>
      </div>

      <div className='flex flex-col-reverse gap-3 border-t border-border/70 pt-5 sm:flex-row sm:justify-end'>
        <Button
          asChild
          type='button'
          variant='outline'
          className='font-outfit tracking-[0.12em] uppercase'
        >
          <Link href='/admin/catalog'>Batal</Link>
        </Button>
        <Button
          type='submit'
          disabled={pending || uploadingImage}
          className='font-outfit tracking-[0.12em] uppercase'
        >
          {uploadingImage ? (
            <>
              <Loader2 className='size-4 animate-spin' />
              Menunggu gambar
            </>
          ) : pending ? (
            <>
              <Loader2 className='size-4 animate-spin' />
              Menyimpan
            </>
          ) : (
            <>
              <Save className='size-4' />
              {editing ? "Simpan Perubahan" : "Simpan Item"}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
