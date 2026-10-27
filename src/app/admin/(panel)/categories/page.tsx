import { CheckCircle2 } from "lucide-react";
import { getAdminCategories } from "@/lib/catalog";
import PageHeader from "../_components/PageHeader";
import CategoriesManager from "./_components/CategoriesManager";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function first(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const notice = first(params.saved)
    ? "saved"
    : first(params.deleted)
      ? "deleted"
      : "";

  const categories = await getAdminCategories();

  return (
    <>
      <PageHeader
        eyebrow='Kategori'
        title='Kelola Kategori'
        description='Kategori dipakai untuk mengelompokkan item katalog dan menjadi tab filter di halaman publik.'
      />

      {notice && (
        <div className='mb-5 flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-emerald-800 ring-1 ring-emerald-200'>
          <CheckCircle2 className='size-4 shrink-0' />
          <p className='font-outfit text-sm'>
            {notice === "saved"
              ? "Kategori berhasil disimpan."
              : "Kategori berhasil dihapus."}
          </p>
        </div>
      )}

      <CategoriesManager
        categories={categories.map((category) => ({
          id: category.id,
          slug: category.slug,
          label: category.label,
          serviceId: category.serviceId,
          order: category.order,
          itemCount: category._count.items,
        }))}
      />
    </>
  );
}
