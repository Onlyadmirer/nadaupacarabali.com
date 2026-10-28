"use client";

import { useActionState, useRef, useState } from "react";
import { Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { initialFormState } from "@/lib/form-state";
import { createCategory, deleteCategory, updateCategory } from "../actions";

export interface CategoryRow {
  id: string;
  slug: string;
  label: string;
  serviceId: string | null;
  order: number;
  itemCount: number;
}

const serviceOptions = [
  { value: "", label: "Tidak terkait layanan" },
  { value: "upacara-adat", label: "Upacara Adat & Keagamaan" },
  { value: "pernikahan-tradisi-bali", label: "Pernikahan Tradisi Bali" },
  { value: "corporate-events", label: "Corporate & International Events" },
  { value: "kolaborasi-edukasi", label: "Kolaborasi & Edukasi Budaya" },
];

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

function CategoryForm({ category }: { category: CategoryRow | null }) {
  const [state, formAction, pending] = useActionState(
    category ? updateCategory : createCategory,
    initialFormState,
  );
  const [label, setLabel] = useState(category?.label ?? "");
  const [slug, setSlug] = useState(category?.slug ?? "");
  const slugTouched = useRef(Boolean(category));
  const [serviceId, setServiceId] = useState(category?.serviceId ?? "");

  const errors = state.fieldErrors ?? {};

  return (
    <form action={formAction} className='space-y-4'>
      {category && <input type='hidden' name='id' value={category.id} />}

      {state.error && (
        <p className='rounded-md bg-destructive/10 px-3 py-2 font-outfit text-sm text-destructive'>
          {state.error}
        </p>
      )}

      <div className='space-y-2'>
        <Label htmlFor='category-label'>Nama Kategori</Label>
        <Input
          id='category-label'
          name='label'
          value={label}
          onChange={(event) => {
            setLabel(event.target.value);
            if (!slugTouched.current) setSlug(slugify(event.target.value));
          }}
          placeholder='Contoh: Gamelan & Musik Tradisional'
          autoFocus
          required
        />
        <FieldError message={errors.label} />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='category-slug'>Slug</Label>
        <Input
          id='category-slug'
          name='slug'
          value={slug}
          onChange={(event) => {
            slugTouched.current = true;
            setSlug(event.target.value);
          }}
          placeholder='gamelan-musik'
          required
        />
        <p className='font-outfit text-xs text-muted-foreground'>
          Dipakai pada filter publik:{" "}
          <code className='font-mono'>/catalog#{slug || "slug"}</code>
        </p>
        <FieldError message={errors.slug} />
      </div>

      <div className='grid gap-4 sm:grid-cols-[1fr_110px]'>
        <div className='space-y-2'>
          <Label htmlFor='category-service'>Layanan Terkait</Label>
          <select
            id='category-service'
            name='serviceId'
            value={serviceId}
            onChange={(event) => setServiceId(event.target.value)}
            className='font-outfit h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50'
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='category-order'>Urutan</Label>
          <Input
            id='category-order'
            name='order'
            type='number'
            min={0}
            step={1}
            defaultValue={category?.order ?? 0}
          />
          <FieldError message={errors.order} />
        </div>
      </div>

      <DialogFooter className='pt-2'>
        <DialogClose asChild>
          <Button type='button' variant='outline' disabled={pending}>
            Batal
          </Button>
        </DialogClose>
        <Button
          type='submit'
          disabled={pending}
          className='font-outfit tracking-[0.1em] uppercase'
        >
          {pending && <Loader2 className='size-4 animate-spin' />}
          {category ? "Simpan" : "Tambah"}
        </Button>
      </DialogFooter>
    </form>
  );
}

function DeleteCategoryButton({ category }: { category: CategoryRow }) {
  const [open, setOpen] = useState(false);
  const [state, formAction, pending] = useActionState(
    deleteCategory,
    initialFormState,
  );

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='text-muted-foreground hover:bg-destructive/10 hover:text-destructive'
          aria-label={`Hapus kategori ${category.label}`}
        >
          <Trash2 className='size-4' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus kategori?</AlertDialogTitle>
          <AlertDialogDescription>
            Kategori <span className='font-medium text-foreground'>{category.label}</span>{" "}
            akan dihapus permanen.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {state.error && (
          <p className='rounded-md bg-destructive/10 px-3 py-2 font-outfit text-sm text-destructive'>
            {state.error}
          </p>
        )}

        <form action={formAction}>
          <input type='hidden' name='id' value={category.id} />
          <AlertDialogFooter>
            <AlertDialogCancel type='button' disabled={pending}>
              Batal
            </AlertDialogCancel>
            <Button
              type='submit'
              variant='destructive'
              disabled={pending}
              className='font-outfit tracking-[0.1em] uppercase'
            >
              {pending && <Loader2 className='size-4 animate-spin' />}
              Hapus
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function CategoriesManager({
  categories,
}: {
  categories: CategoryRow[];
}) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CategoryRow | null>(null);

  const openCreate = () => {
    setEditing(null);
    setOpen(true);
  };

  const openEdit = (category: CategoryRow) => {
    setEditing(category);
    setOpen(true);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setEditing(null);
  };

  return (
    <>
      <div className='mb-5 flex items-center justify-between'>
        <p className='font-outfit text-xs text-muted-foreground'>
          {categories.length} kategori · {categories.reduce((total, row) => total + row.itemCount, 0)}{" "}
          item terkelola
        </p>
        <Button
          onClick={openCreate}
          className='font-outfit tracking-[0.12em] uppercase'
        >
          <Plus className='size-4' />
          Tambah Kategori
        </Button>
      </div>

      <div className='overflow-hidden rounded-xl bg-card ring-1 ring-border/70'>
        <Table>
          <TableHeader>
            <TableRow className='bg-secondary/50'>
              <TableHead className='font-outfit text-[10px] tracking-[0.2em] uppercase'>
                Kategori
              </TableHead>
              <TableHead className='font-outfit hidden text-[10px] tracking-[0.2em] uppercase md:table-cell'>
                Layanan
              </TableHead>
              <TableHead className='font-outfit text-center text-[10px] tracking-[0.2em] uppercase'>
                Item
              </TableHead>
              <TableHead className='font-outfit hidden text-center text-[10px] tracking-[0.2em] uppercase sm:table-cell'>
                Urutan
              </TableHead>
              <TableHead className='font-outfit text-right text-[10px] tracking-[0.2em] uppercase'>
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className='py-16 text-center'>
                  <p className='font-body text-lg text-muted-foreground'>
                    Belum ada kategori.
                  </p>
                </TableCell>
              </TableRow>
            ) : (
              categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <p className='font-outfit text-sm font-medium text-foreground'>
                      {category.label}
                    </p>
                    <p className='font-outfit mt-0.5 text-xs text-muted-foreground'>
                      #{category.slug}
                    </p>
                  </TableCell>
                  <TableCell className='font-outfit hidden text-xs text-muted-foreground md:table-cell'>
                    {serviceOptions.find(
                      (option) => option.value === (category.serviceId ?? ""),
                    )?.label ?? category.serviceId}
                  </TableCell>
                  <TableCell className='font-outfit text-center text-sm tabular-nums'>
                    {category.itemCount}
                  </TableCell>
                  <TableCell className='font-outfit hidden text-center text-sm tabular-nums sm:table-cell'>
                    {category.order}
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center justify-end gap-1'>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => openEdit(category)}
                        aria-label={`Edit kategori ${category.label}`}
                      >
                        <Pencil className='size-4' />
                      </Button>
                      <DeleteCategoryButton category={category} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='font-heading text-2xl italic'>
              {editing ? "Edit Kategori" : "Tambah Kategori"}
            </DialogTitle>
            <DialogDescription className='font-outfit'>
              Kategori mengelompokkan item katalog dan menjadi filter di halaman
              publik.
            </DialogDescription>
          </DialogHeader>

          <CategoryForm key={editing?.id ?? "new"} category={editing} />
        </DialogContent>
      </Dialog>
    </>
  );
}
