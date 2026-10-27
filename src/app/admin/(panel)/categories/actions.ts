"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { FormState } from "@/lib/form-state";
import {
  categoryInputSchema,
  toFieldErrors,
} from "@/lib/validations/catalog";

function revalidateCategories() {
  revalidatePath("/admin");
  revalidatePath("/admin/categories");
  revalidatePath("/admin/catalog");
  revalidatePath("/catalog");
}

function readCategoryForm(formData: FormData) {
  return {
    label: String(formData.get("label") ?? ""),
    slug: String(formData.get("slug") ?? ""),
    serviceId: String(formData.get("serviceId") ?? ""),
    order: String(formData.get("order") ?? "0"),
  };
}

export async function createCategory(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await requireAdmin();

  const parsed = categoryInputSchema.safeParse(readCategoryForm(formData));

  if (!parsed.success) {
    return { ok: false, fieldErrors: toFieldErrors(parsed.error) };
  }

  const data = parsed.data;
  const slugTaken = await prisma.category.findUnique({
    where: { slug: data.slug },
    select: { id: true },
  });

  if (slugTaken) {
    return { ok: false, fieldErrors: { slug: "Slug sudah dipakai kategori lain." } };
  }

  try {
    await prisma.category.create({
      data: {
        label: data.label,
        slug: data.slug,
        serviceId: data.serviceId?.trim() ? data.serviceId.trim() : null,
        order: data.order,
      },
    });
  } catch (error) {
    console.error("Gagal membuat kategori:", error);
    return { ok: false, error: "Kategori gagal disimpan. Silakan coba lagi." };
  }

  revalidateCategories();
  redirect("/admin/categories?saved=1");
}

export async function updateCategory(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  if (!id) return { ok: false, error: "ID kategori tidak valid." };

  const parsed = categoryInputSchema.safeParse(readCategoryForm(formData));

  if (!parsed.success) {
    return { ok: false, fieldErrors: toFieldErrors(parsed.error) };
  }

  const data = parsed.data;
  const slugTaken = await prisma.category.findFirst({
    where: { slug: data.slug, NOT: { id } },
    select: { id: true },
  });

  if (slugTaken) {
    return { ok: false, fieldErrors: { slug: "Slug sudah dipakai kategori lain." } };
  }

  try {
    await prisma.category.update({
      where: { id },
      data: {
        label: data.label,
        slug: data.slug,
        serviceId: data.serviceId?.trim() ? data.serviceId.trim() : null,
        order: data.order,
      },
    });
  } catch (error) {
    console.error("Gagal memperbarui kategori:", error);
    return { ok: false, error: "Kategori gagal diperbarui. Silakan coba lagi." };
  }

  revalidateCategories();
  redirect("/admin/categories?saved=1");
}

export async function deleteCategory(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  if (!id) return { ok: false, error: "ID kategori tidak valid." };

  const usedBy = await prisma.catalogItem.count({ where: { categoryId: id } });

  if (usedBy > 0) {
    return {
      ok: false,
      error: `Kategori masih dipakai ${usedBy} item. Pindahkan item tersebut dulu.`,
    };
  }

  try {
    await prisma.category.delete({ where: { id } });
  } catch (error) {
    console.error("Gagal menghapus kategori:", error);
    return { ok: false, error: "Kategori gagal dihapus. Silakan coba lagi." };
  }

  revalidateCategories();
  redirect("/admin/categories?deleted=1");
}
