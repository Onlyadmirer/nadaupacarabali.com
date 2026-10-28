import { randomUUID } from "node:crypto";
import { del, get, put } from "@vercel/blob";
import sharp from "sharp";

/** Vercel Functions reject request bodies above 4.5 MB. Keep a safety margin. */
export const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const BLOB_HOST_SUFFIXES = [
  ".public.blob.vercel-storage.com",
  ".blob.vercel-storage.com",
];

/**
 * Private Blob stores require a token to read, so their images are served
 * through `/media/catalog/<uuid>.webp` instead of the raw Blob URL.
 */
const PRIVATE_MEDIA_PREFIX = "/media/";
const CATALOG_PATHNAME_PATTERN =
  /^catalog\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.webp$/;

export class UploadError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "UploadError";
    this.status = status;
  }
}

function getToken(): string | null {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  return token && token.length > 0 ? token : null;
}

export function isBlobConfigured(): boolean {
  return getToken() !== null;
}

/** True for Blob URLs created while the store was public. */
export function isBlobImageUrl(url: string | null | undefined): boolean {
  if (!url) return false;

  try {
    const { hostname } = new URL(url);
    return BLOB_HOST_SUFFIXES.some((suffix) => hostname.endsWith(suffix));
  } catch {
    return false;
  }
}

/** True for `/media/catalog/<uuid>.webp` paths backed by a private store. */
export function isPrivateMediaUrl(url: string | null | undefined): boolean {
  if (!url || !url.startsWith(PRIVATE_MEDIA_PREFIX)) return false;
  return CATALOG_PATHNAME_PATTERN.test(url.slice(PRIVATE_MEDIA_PREFIX.length));
}

function privateBlobPathname(url: string): string | null {
  if (!isPrivateMediaUrl(url)) return null;
  return url.slice(PRIVATE_MEDIA_PREFIX.length);
}

function isPrivateStoreError(error: unknown): boolean {
  return error instanceof Error && /private store/i.test(error.message);
}

export interface UploadedImage {
  url: string;
  width: number;
  height: number;
  bytes: number;
}

/**
 * Re-encodes the uploaded file to WebP (also validates the real content) and
 * stores it in Vercel Blob under `catalog/`.
 *
 * Public stores return the CDN URL directly. Private stores return a relative
 * `/media/...` URL that the media route streams with the store token.
 */
export async function uploadCatalogImage(file: File): Promise<UploadedImage> {
  const token = getToken();

  if (!token) {
    throw new UploadError(
      503,
      "Penyimpanan gambar belum dikonfigurasi. Set BLOB_READ_WRITE_TOKEN di server.",
    );
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    throw new UploadError(
      400,
      "Format tidak didukung. Gunakan JPG, PNG, WebP, AVIF, atau HEIC.",
    );
  }

  if (file.size <= 0) {
    throw new UploadError(400, "File kosong.");
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    throw new UploadError(
      413,
      `Ukuran gambar maksimal ${MAX_UPLOAD_BYTES / (1024 * 1024)} MB.`,
    );
  }

  const input = Buffer.from(await file.arrayBuffer());

  let output: Buffer;
  let width: number;
  let height: number;

  try {
    const result = await sharp(input, { failOn: "error" })
      .rotate()
      .resize({
        width: 1600,
        height: 1600,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 82 })
      .toBuffer({ resolveWithObject: true });

    output = result.data;
    width = result.info.width;
    height = result.info.height;
  } catch (error) {
    console.error("Gagal memproses gambar:", error);
    throw new UploadError(
      400,
      "File tidak dikenali sebagai gambar yang valid. Coba JPG atau PNG.",
    );
  }

  const pathname = `catalog/${randomUUID()}.webp`;
  const commonOptions = {
    contentType: "image/webp",
    addRandomSuffix: false,
    allowOverwrite: false,
    cacheControlMaxAge: 60 * 60 * 24 * 365,
    token,
  } as const;

  try {
    const blob = await put(pathname, output, {
      ...commonOptions,
      access: "public",
    });

    return { url: blob.url, width, height, bytes: output.byteLength };
  } catch (error) {
    if (!isPrivateStoreError(error)) {
      console.error("Gagal mengunggah ke Vercel Blob:", error);
      throw new UploadError(
        502,
        "Gambar gagal diunggah ke penyimpanan. Silakan coba lagi.",
      );
    }
  }

  try {
    await put(pathname, output, {
      ...commonOptions,
      access: "private",
    });

    return {
      url: `${PRIVATE_MEDIA_PREFIX}${pathname}`,
      width,
      height,
      bytes: output.byteLength,
    };
  } catch (error) {
    console.error("Gagal mengunggah ke Vercel Blob (private):", error);
    throw new UploadError(
      502,
      "Gambar gagal diunggah ke penyimpanan. Silakan coba lagi.",
    );
  }
}

/** Reads a catalog image from a private store. Returns null when not found. */
export async function readCatalogImage(pathname: string) {
  const token = getToken();

  if (!token || !CATALOG_PATHNAME_PATTERN.test(pathname)) return null;

  return get(pathname, { access: "private", token });
}

/**
 * Deletes an image from Blob storage. Safe to call with non-Blob URLs
 * (legacy /images or Cloudinary) — those are left untouched.
 */
export async function deleteBlobImage(
  url: string | null | undefined,
): Promise<boolean> {
  const token = getToken();

  if (!token || !url) return false;

  const target = isBlobImageUrl(url) ? url : privateBlobPathname(url);

  if (!target) return false;

  try {
    await del(target, { token });
    return true;
  } catch (error) {
    // Never fail the DB operation because of storage cleanup.
    console.error("Gagal menghapus gambar dari Vercel Blob:", error);
    return false;
  }
}
