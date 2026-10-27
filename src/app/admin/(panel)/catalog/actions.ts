"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { FormState } from "@/lib/form-state";
import {
  catalogItemInputSchema,
  toFieldErrors,
} from "@/lib/validations/catalog";

function revalidateCatalog() {
  revalidatePath("/admin");
  revalidatePath("/admin/catalog");
  revalidatePath("/catalog");
  revalidatePath("/");
}

function toNullable(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function readPackages(formData: FormData) {
  const names = formData.getAll("packageName").map((value) => String(value));
  const prices = formData.getAll("packagePrice").map((value) => String(value));
  const rows = Math.max(names.length, prices.length);

  return Array.from({ length: rows }, (_, index) => ({
    name: (names[index] ?? "").trim(),
    price: (prices[index] ?? "").trim(),
  })).filter((row) => row.name !== "" || row.price !== "");
}

function readItemForm(formData: FormData) {
  return {
    title: String(formData.get("title") ?? ""),
    slug: String(formData.get("slug") ?? ""),
    categoryId: String(formData.get("categoryId") ?? ""),
    description: String(formData.get("description") ?? ""),
    duration: String(formData.get("duration") ?? ""),
    personnel: String(formData.get("personnel") ?? ""),
    image: String(formData.get("image") ?? ""),
    published: formData.get("published") === "on",
    order: String(formData.get("order") ?? "0"),
    packages: readPackages(formData),
  };
}

async function resolveCategoryId(slug: string) {
  const category = await prisma.category.findUnique({
    where: { slug },
    select: { id: true },
  });

  return category?.id ?? null;
}

export async function createCatalogItem(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await requireAdmin();

  const parsed = catalogItemInputSchema.safeParse(readItemForm(formData));

  if (!parsed.success) {
    return { ok: false, fieldErrors: toFieldErrors(parsed.error) };
  }

  const data = parsed.data;
  const categoryId = await resolveCategoryId(data.categoryId);

  if (!categoryId) {
    return { ok: false, fieldErrors: { categoryId: "Kategori tidak ditemukan." } };
  }

  const slugTaken = await prisma.catalogItem.findUnique({
    where: { slug: data.slug },
    select: { id: true },
  });

  if (slugTaken) {
    return {
      ok: false,
      fieldErrors: { slug: "Slug sudah dipakai item lain." },
    };
  }

  try {
    await prisma.catalogItem.create({
      data: {
        slug: data.slug,
        title: data.title,
        description: data.description,
        duration: data.duration,
        personnel: toNullable(data.personnel),
        image: data.image,
        published: data.published,
        order: data.order,
        categoryId,
        packages: {
          create: data.packages.map((pkg, index) => ({
            name: pkg.name,
            price: pkg.price,
            order: index,
          })),
        },
      },
    });
  } catch (error) {
    console.error("Gagal membuat item katalog:", error);
    return {
      ok: false,
      error: "Item gagal disimpan. Silakan coba lagi.",
    };
  }

  revalidateCatalog();
  redirect("/admin/catalog?created=1");
}

export async function updateCatalogItem(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");

  if (!id) {
    return { ok: false, error: "ID item tidak valid." };
  }

  const parsed = catalogItemInputSchema.safeParse(readItemForm(formData));

  if (!parsed.success) {
    return { ok: false, fieldErrors: toFieldErrors(parsed.error) };
  }

  const data = parsed.data;
  const categoryId = await resolveCategoryId(data.categoryId);

  if (!categoryId) {
    return { ok: false, fieldErrors: { categoryId: "Kategori tidak ditemukan." } };
  }

  const slugTaken = await prisma.catalogItem.findFirst({
    where: { slug: data.slug, NOT: { id } },
    select: { id: true },
  });

  if (slugTaken) {
    return {
      ok: false,
      fieldErrors: { slug: "Slug sudah dipakai item lain." },
    };
  }

  try {
    await prisma.catalogItem.update({
      where: { id },
      data: {
        slug: data.slug,
        title: data.title,
        description: data.description,
        duration: data.duration,
        personnel: toNullable(data.personnel),
        image: data.image,
        published: data.published,
        order: data.order,
        categoryId,
        packages: {
          deleteMany: {},
          create: data.packages.map((pkg, index) => ({
            name: pkg.name,
            price: pkg.price,
            order: index,
          })),
        },
      },
    });
  } catch (error) {
    console.error("Gagal memperbarui item katalog:", error);
    return {
      ok: false,
      error: "Perubahan gagal disimpan. Silakan coba lagi.",
    };
  }

  revalidateCatalog();
  redirect("/admin/catalog?updated=1");
}

export async function deleteCatalogItem(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");

  if (!id) {
    return { ok: false, error: "ID item tidak valid." };
  }

  try {
    await prisma.catalogItem.delete({ where: { id } });
  } catch (error) {
    console.error("Gagal menghapus item katalog:", error);
    return { ok: false, error: "Item gagal dihapus. Silakan coba lagi." };
  }

  revalidateCatalog();
  redirect("/admin/catalog?deleted=1");
}

export async function toggleCatalogItemPublished(
  formData: FormData,
): Promise<void> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const item = await prisma.catalogItem.findUnique({
    where: { id },
    select: { published: true },
  });

  if (!item) return;

  await prisma.catalogItem.update({
    where: { id },
    data: { published: !item.published },
  });

  revalidateCatalog();
}
