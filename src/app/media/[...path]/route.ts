import { isBlobConfigured, readCatalogImage } from "@/lib/blob";

export const runtime = "nodejs";

interface RouteContext {
  params: Promise<{ path: string[] }>;
}

/**
 * Streams catalog images from a private Vercel Blob store. Public stores use
 * their CDN URL directly, so this route is only hit for `/media/...` paths.
 */
export async function GET(_request: Request, context: RouteContext) {
  const { path } = await context.params;
  const pathname = path.join("/");

  if (!isBlobConfigured()) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const result = await readCatalogImage(pathname);

    if (!result || result.statusCode !== 200) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType || "image/webp",
        "Content-Length": String(result.blob.size),
        "Cache-Control":
          "public, max-age=31536000, s-maxage=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Gagal membaca gambar dari Vercel Blob:", error);
    return new Response("Gagal memuat gambar", { status: 502 });
  }
}
