import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { UploadError, uploadCatalogImage } from "@/lib/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const forwardedHost = request.headers.get("x-forwarded-host");
  const host =
    forwardedHost?.split(",")[0]?.trim() ||
    request.headers.get("host") ||
    new URL(request.url).host;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json(
      { error: "Sesi tidak valid. Silakan login ulang." },
      { status: 401 },
    );
  }

  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Origin tidak diizinkan." }, { status: 403 });
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Permintaan tidak valid." },
      { status: 400 },
    );
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "File gambar tidak ditemukan." },
      { status: 400 },
    );
  }

  try {
    const result = await uploadCatalogImage(file);
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof UploadError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    console.error("Upload gambar gagal:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengunggah gambar." },
      { status: 500 },
    );
  }
}
