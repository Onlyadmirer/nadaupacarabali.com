import { prisma } from "@/lib/prisma";
import type { CatalogCategoryView, CatalogItemView } from "@/types/catalog";

export interface CatalogData {
  categories: CatalogCategoryView[];
  items: CatalogItemView[];
}

function toCategoryView(category: {
  slug: string;
  label: string;
  serviceId: string | null;
}): CatalogCategoryView {
  return {
    id: category.slug,
    label: category.label,
    serviceId: category.serviceId ?? undefined,
  };
}

function toItemView(item: {
  slug: string;
  title: string;
  description: string;
  duration: string;
  personnel: string | null;
  image: string;
  category: { slug: string; label: string };
  packages: { name: string; price: number }[];
}): CatalogItemView {
  return {
    id: item.slug,
    categoryId: item.category.slug,
    category: item.category.label,
    title: item.title,
    description: item.description,
    duration: item.duration,
    personnel: item.personnel ?? undefined,
    image: item.image,
    packages: item.packages.map((pkg) => ({ name: pkg.name, price: pkg.price })),
  };
}

/** Katalog yang tampil di halaman publik (hanya item berstatus published). */
export async function getPublishedCatalog(): Promise<CatalogData> {
  const [categories, items] = await Promise.all([
    prisma.category.findMany({ orderBy: [{ order: "asc" }, { label: "asc" }] }),
    prisma.catalogItem.findMany({
      where: { published: true },
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
      include: {
        category: { select: { slug: true, label: true } },
        packages: { orderBy: [{ order: "asc" }, { price: "asc" }] },
      },
    }),
  ]);

  return {
    categories: categories.map(toCategoryView),
    items: items.map(toItemView),
  };
}

export interface AdminCatalogFilters {
  q?: string;
  category?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export async function getAdminCatalog(filters: AdminCatalogFilters = {}) {
  const { q, category, status } = filters;
  const page = Math.max(1, filters.page ?? 1);
  const pageSize = Math.min(50, Math.max(5, filters.pageSize ?? 10));

  const where = {
    ...(q
      ? {
          OR: [
            { title: { contains: q, mode: "insensitive" as const } },
            { slug: { contains: q, mode: "insensitive" as const } },
          ],
        }
      : {}),
    ...(category && category !== "all"
      ? { category: { slug: category } }
      : {}),
    ...(status === "published"
      ? { published: true }
      : status === "draft"
        ? { published: false }
        : {}),
  };

  const [total, items] = await Promise.all([
    prisma.catalogItem.count({ where }),
    prisma.catalogItem.findMany({
      where,
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        category: { select: { slug: true, label: true } },
        packages: { orderBy: [{ order: "asc" }, { price: "asc" }] },
      },
    }),
  ]);

  return {
    items,
    total,
    page,
    pageSize,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  };
}

export async function getAdminCatalogItem(id: string) {
  return prisma.catalogItem.findUnique({
    where: { id },
    include: {
      category: { select: { slug: true, label: true } },
      packages: { orderBy: [{ order: "asc" }, { price: "asc" }] },
    },
  });
}

export async function getAdminCategories() {
  return prisma.category.findMany({
    orderBy: [{ order: "asc" }, { label: "asc" }],
    include: { _count: { select: { items: true } } },
  });
}

export async function getAdminStats() {
  const [total, published, categories, packages] = await Promise.all([
    prisma.catalogItem.count(),
    prisma.catalogItem.count({ where: { published: true } }),
    prisma.category.count(),
    prisma.package.count(),
  ]);

  return { total, published, draft: total - published, categories, packages };
}
