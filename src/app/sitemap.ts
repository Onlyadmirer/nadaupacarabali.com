import type { MetadataRoute } from "next";
import { blogData } from "@/constants/blog";
import { siteUrl } from "@/constants/contact";

const BULAN: Record<string, number> = {
  Januari: 0,
  Februari: 1,
  Maret: 2,
  April: 3,
  Mei: 4,
  Juni: 5,
  Juli: 6,
  Agustus: 7,
  September: 8,
  Oktober: 9,
  November: 10,
  Desember: 11,
};

/** Parses dates written as "15 Juni 2026" into a Date. */
function parseDateId(value: string): Date {
  const [day, month, year] = value.split(" ");
  return new Date(Number(year), BULAN[month] ?? 0, Number(day));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/catalog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogData.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: parseDateId(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
