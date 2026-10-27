"use client";

import { useEffect, useState, useMemo } from "react";
import { catalogData, catalogCategories } from "@/constants/catalog";
import CatalogCard from "./CatalogCard";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

export default function CatalogGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    const applyHash = (rawHash: string, scrollDelay = 0) => {
      const hash = rawHash.replace("#", "");
      if (!hash) {
        setActiveFilter("all");
        return;
      }

      // 1) item id -> scroll to item and show all
      const matchedItem = catalogData.find((item) => item.id === hash);
      if (matchedItem) {
        setActiveFilter("all");
        const scroll = () =>
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        if (scrollDelay) setTimeout(scroll, scrollDelay);
        else requestAnimationFrame(scroll);
        return;
      }

      // 2) category id -> select category
      const matchedCategoryById = catalogCategories.find(
        (cat) => cat.id === hash,
      );
      if (matchedCategoryById) {
        setActiveFilter(matchedCategoryById.id);
        return;
      }

      // 3) service id -> pick first category that belongs to this service
      const matchedCategoryByService = catalogCategories.find(
        (cat) => cat.serviceId === hash,
      );
      if (matchedCategoryByService) {
        setActiveFilter(matchedCategoryByService.id);
        return;
      }

      // fallback: show all
      setActiveFilter("all");
    };

    applyHash(window.location.hash);

    const onHashChange = () => applyHash(window.location.hash, 150);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return catalogData;
    return catalogData.filter((item) => item.categoryId === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (id: string) => {
    if (id === "all") {
      setActiveFilter("all");
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }

    // id is category id: set filter and set hash to category id
    const matchedCategory = catalogCategories.find((c) => c.id === id);
    if (matchedCategory) {
      setActiveFilter(matchedCategory.id);
      window.history.replaceState(null, "", `#${matchedCategory.id}`);
      return;
    }

    // fallback: set as all
    setActiveFilter("all");
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-28 sm:py-32'>
      {/* Filter Tabs */}
      <div className='flex flex-wrap gap-2 mb-14 md:mb-16 justify-center'>
        <button
          onClick={() => handleFilterChange("all")}
          className={`font-outfit text-xs tracking-[0.2em] uppercase px-6 py-2.5 rounded-full ring-1 transition-all duration-300 ${
            activeFilter === "all"
              ? "bg-primary text-primary-foreground ring-primary shadow-[0_10px_40px_-15px_rgba(139,94,60,0.9)]"
              : "bg-transparent text-muted-foreground ring-border/70 hover:text-foreground hover:ring-primary/40"
          }`}
        >
          Semua
        </button>
        {catalogCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleFilterChange(cat.id)}
            className={`font-outfit text-xs tracking-[0.2em] uppercase px-6 py-2.5 rounded-full ring-1 transition-all duration-300 ${
              activeFilter === cat.id
                ? "bg-primary text-primary-foreground ring-primary shadow-[0_10px_40px_-15px_rgba(139,94,60,0.9)]"
                : "bg-transparent text-muted-foreground ring-border/70 hover:text-foreground hover:ring-primary/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredItems.length > 0 ? (
        <StaggerContainer
          key={activeFilter}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
        >
          {filteredItems.map((item) => (
            <StaggerItem key={item.id} className='h-full'>
              <CatalogCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className='text-center py-24'>
          <p className='font-cormorant-garamond text-muted-foreground text-lg md:text-xl'>
            Tidak ada pertunjukan dalam kategori ini.
          </p>
        </div>
      )}
    </section>
  );
}
