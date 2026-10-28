"use client";

import { useEffect, useState, useMemo } from "react";
import type {
  CatalogCategoryView,
  CatalogItemView,
} from "@/types/catalog";
import CatalogCard from "./CatalogCard";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import Container from "@/components/site/Container";

interface CatalogGridProps {
  categories: CatalogCategoryView[];
  items: CatalogItemView[];
}

export default function CatalogGrid({ categories, items }: CatalogGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    const applyHash = (rawHash: string, scrollDelay = 0) => {
      const hash = rawHash.replace("#", "");
      if (!hash) {
        setActiveFilter("all");
        return;
      }

      const matchedItem = items.find((item) => item.id === hash);
      if (matchedItem) {
        setActiveFilter("all");
        const scroll = () => {
          const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          document
            .getElementById(hash)
            ?.scrollIntoView({
              behavior: reduceMotion ? "auto" : "smooth",
              block: "center",
            });
        };
        if (scrollDelay) setTimeout(scroll, scrollDelay);
        else requestAnimationFrame(scroll);
        return;
      }

      const matchedCategoryById = categories.find((cat) => cat.id === hash);
      if (matchedCategoryById) {
        setActiveFilter(matchedCategoryById.id);
        return;
      }

      const matchedCategoryByService = categories.find(
        (cat) => cat.serviceId === hash,
      );
      if (matchedCategoryByService) {
        setActiveFilter(matchedCategoryByService.id);
        return;
      }

      setActiveFilter("all");
    };

    applyHash(window.location.hash);

    const onHashChange = () => applyHash(window.location.hash, 150);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [categories, items]);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return items;
    return items.filter((item) => item.categoryId === activeFilter);
  }, [activeFilter, items]);

  const handleFilterChange = (id: string) => {
    if (id === "all") {
      setActiveFilter("all");
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }

    const matchedCategory = categories.find((c) => c.id === id);
    if (matchedCategory) {
      setActiveFilter(matchedCategory.id);
      window.history.replaceState(null, "", `#${matchedCategory.id}`);
      return;
    }

    setActiveFilter("all");
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <section className='section-spacing'>
      <Container>
        <div
          role='group'
          aria-label='Filter kategori pertunjukan'
          className='mb-12 flex flex-wrap justify-center gap-2 md:mb-16'
        >
          <FilterButton
            label='Semua'
            active={activeFilter === "all"}
            onClick={() => handleFilterChange("all")}
          />
          {categories.map((cat) => (
            <FilterButton
              key={cat.id}
              label={cat.label}
              active={activeFilter === cat.id}
              onClick={() => handleFilterChange(cat.id)}
            />
          ))}
        </div>

        <p className='sr-only' aria-live='polite'>
          Menampilkan {filteredItems.length} pertunjukan.
        </p>

        {filteredItems.length > 0 ? (
          <StaggerContainer
            key={activeFilter}
            className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'
          >
            {filteredItems.map((item) => (
              <StaggerItem key={item.id} className='h-full'>
                <CatalogCard item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className='rounded-2xl border border-dashed border-border bg-card/60 px-6 py-20 text-center'>
            <p className='font-heading text-2xl text-foreground'>
              Belum ada pertunjukan di kategori ini.
            </p>
            <p className='mt-2 font-body text-sm text-muted-foreground'>
              Coba lihat kategori lain atau tampilkan semua pertunjukan.
            </p>
            <button
              type='button'
              onClick={() => handleFilterChange("all")}
              className='mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-6 font-ui text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-primary-hover'
            >
              Tampilkan Semua
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-11 rounded-full px-5 font-ui text-xs font-semibold tracking-[0.16em] uppercase ring-1 transition-all duration-200 ${
        active
          ? "bg-primary text-primary-foreground ring-primary shadow-[0_10px_35px_-18px_rgba(139,94,60,0.95)]"
          : "bg-transparent text-muted-foreground ring-border hover:text-foreground hover:ring-primary/40"
      }`}
    >
      {label}
    </button>
  );
}
