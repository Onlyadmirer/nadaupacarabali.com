import { z } from "zod";

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const slugSchema = z
  .string()
  .trim()
  .min(2, "Slug minimal 2 karakter.")
  .max(80, "Slug maksimal 80 karakter.")
  .regex(
    SLUG_PATTERN,
    "Slug hanya boleh huruf kecil, angka, dan tanda hubung (contoh: tari-penyambutan).",
  );

/**
 * next/image only optimizes local files and hosts listed in next.config.ts.
 * Keep admin input within those bounds so the public page never breaks.
 */
const ALLOWED_IMAGE_HOSTS = ["res.cloudinary.com"];
const ALLOWED_IMAGE_HOST_SUFFIXES = [
  ".public.blob.vercel-storage.com",
  ".blob.vercel-storage.com",
];

function isAllowedImageUrl(value: string): boolean {
  if (value.startsWith("/")) return !value.startsWith("//");

  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return false;

    return (
      ALLOWED_IMAGE_HOSTS.includes(url.hostname) ||
      ALLOWED_IMAGE_HOST_SUFFIXES.some((suffix) =>
        url.hostname.endsWith(suffix),
      )
    );
  } catch {
    return false;
  }
}

const imageSchema = z
  .string()
  .trim()
  .min(1, "URL gambar wajib diisi.")
  .refine(
    isAllowedImageUrl,
    "Gunakan path lokal (/images/...), Cloudinary, atau URL Vercel Blob.",
  );

export const packageInputSchema = z.object({
  name: z.string().trim().min(1, "Nama paket wajib diisi.").max(80),
  price: z.coerce
    .number()
    .int("Harga harus bilangan bulat.")
    .min(0, "Harga tidak boleh negatif.")
    .max(1_000_000_000, "Harga terlalu besar."),
});

export const catalogItemInputSchema = z.object({
  title: z.string().trim().min(2, "Judul minimal 2 karakter.").max(120),
  slug: slugSchema,
  categoryId: z.string().trim().min(1, "Kategori wajib dipilih."),
  description: z
    .string()
    .trim()
    .min(10, "Deskripsi minimal 10 karakter.")
    .max(4000),
  duration: z.string().trim().min(1, "Durasi wajib diisi.").max(80),
  personnel: z.string().trim().max(80).optional(),
  image: imageSchema,
  published: z.boolean(),
  order: z.coerce.number().int().min(0).max(9999),
  packages: z
    .array(packageInputSchema)
    .min(1, "Minimal satu paket harga.")
    .max(20, "Maksimal 20 paket."),
});

export const categoryInputSchema = z.object({
  label: z.string().trim().min(2, "Nama kategori minimal 2 karakter.").max(80),
  slug: slugSchema,
  serviceId: z.string().trim().max(80).optional(),
  order: z.coerce.number().int().min(0).max(9999),
});

export type CatalogItemInput = z.infer<typeof catalogItemInputSchema>;
export type CategoryInput = z.infer<typeof categoryInputSchema>;

/** Turns a ZodError into a `{ field: message }` map for form display. */
export function toFieldErrors(error: z.ZodError): Record<string, string> {
  const result: Record<string, string> = {};

  for (const issue of error.issues) {
    const key = issue.path.join(".") || "form";
    if (!result[key]) result[key] = issue.message;
  }

  return result;
}
