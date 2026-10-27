import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { catalogCategories, catalogData } from "../src/constants/catalog";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set. Add it to your .env file.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main() {
  for (const [index, category] of catalogCategories.entries()) {
    await prisma.category.upsert({
      where: { slug: category.id },
      create: {
        slug: category.id,
        label: category.label,
        serviceId: category.serviceId,
        order: index,
      },
      update: {
        label: category.label,
        serviceId: category.serviceId,
        order: index,
      },
    });
  }

  for (const [index, item] of catalogData.entries()) {
    const category = await prisma.category.findUniqueOrThrow({
      where: { slug: item.categoryId },
    });

    await prisma.catalogItem.upsert({
      where: { slug: item.id },
      create: {
        slug: item.id,
        title: item.title,
        description: item.description,
        duration: item.duration,
        personnel: item.personnel ?? null,
        image: item.image,
        categoryId: category.id,
        order: index,
        published: true,
        packages: {
          create: item.packages.map((pkg, pkgIndex) => ({
            name: pkg.name,
            price: pkg.price,
            order: pkgIndex,
          })),
        },
      },
      update: {
        title: item.title,
        description: item.description,
        duration: item.duration,
        personnel: item.personnel ?? null,
        image: item.image,
        categoryId: category.id,
        order: index,
        packages: {
          deleteMany: {},
          create: item.packages.map((pkg, pkgIndex) => ({
            name: pkg.name,
            price: pkg.price,
            order: pkgIndex,
          })),
        },
      },
    });
  }

  const [categories, items, packages] = await Promise.all([
    prisma.category.count(),
    prisma.catalogItem.count(),
    prisma.package.count(),
  ]);

  console.log(
    `Seed selesai: ${categories} kategori, ${items} item katalog, ${packages} paket.`,
  );
}

main()
  .catch((error) => {
    console.error("Seed gagal:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
