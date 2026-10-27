export interface CatalogPackageView {
  name: string;
  /** Harga paket dalam Rupiah, tanpa pemisah. */
  price: number;
}

export interface CatalogCategoryView {
  /** Slug kategori, dipakai sebagai id pada filter publik. */
  id: string;
  label: string;
  serviceId?: string;
}

export interface CatalogItemView {
  /** Slug item, dipakai sebagai id pada deep-link publik. */
  id: string;
  categoryId: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  personnel?: string;
  packages: CatalogPackageView[];
  image: string;
}

/** Harga terendah dari seluruh paket sebuah item katalog. */
export function getStartingPrice(item: Pick<CatalogItemView, "packages">): number {
  if (item.packages.length === 0) return 0;
  return Math.min(...item.packages.map((pkg) => pkg.price));
}
