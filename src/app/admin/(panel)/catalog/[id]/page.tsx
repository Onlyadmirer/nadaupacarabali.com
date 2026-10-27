import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAdminCatalogItem, getAdminCategories } from "@/lib/catalog";
import PageHeader from "../../_components/PageHeader";
import ProductForm from "../_components/ProductForm";

export default async function EditCatalogItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [item, categories] = await Promise.all([
    getAdminCatalogItem(id),
    getAdminCategories(),
  ]);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Link
        href='/admin/catalog'
        className='font-outfit mb-5 inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground'
      >
        <ArrowLeft className='size-3.5' />
        Kembali ke katalog
      </Link>

      <PageHeader
        eyebrow='Katalog'
        title={item.title}
        description={`Mengubah item #${item.slug}. Perubahan langsung tampil di katalog publik setelah disimpan.`}
      />

      <ProductForm
        categories={categories.map((category) => ({
          id: category.slug,
          label: category.label,
        }))}
        item={{
          id: item.id,
          title: item.title,
          slug: item.slug,
          categoryId: item.category.slug,
          description: item.description,
          duration: item.duration,
          personnel: item.personnel,
          image: item.image,
          published: item.published,
          order: item.order,
          packages: item.packages.map((pkg) => ({
            name: pkg.name,
            price: pkg.price,
          })),
        }}
      />
    </>
  );
}
