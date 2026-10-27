import { getAdminCategories } from "@/lib/catalog";
import PageHeader from "../../_components/PageHeader";
import ProductForm from "../_components/ProductForm";

export default async function NewCatalogItemPage() {
  const categories = await getAdminCategories();

  return (
    <>
      <PageHeader
        eyebrow='Katalog'
        title='Tambah Item'
        description='Lengkapi informasi pertunjukan, paket harga, dan gambar. Item bisa disimpan sebagai draft terlebih dahulu.'
      />

      {categories.length === 0 ? (
        <div className='rounded-xl bg-card px-6 py-12 text-center ring-1 ring-border/70'>
          <p className='font-cormorant-garamond text-lg text-muted-foreground'>
            Belum ada kategori. Buat kategori terlebih dahulu sebelum menambah
            item katalog.
          </p>
        </div>
      ) : (
        <ProductForm
          categories={categories.map((category) => ({
            id: category.slug,
            label: category.label,
          }))}
        />
      )}
    </>
  );
}
