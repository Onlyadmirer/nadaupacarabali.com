"use client";

import { useEffect, useState, useMemo } from "react";
import { catalogData, catalogCategories } from "@/constants/catalog";
import CatalogCard from "./CatalogCard";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

export default function CatalogGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const matchedItem = catalogData.find((item) => item.id === hash);
      if (matchedItem) {
        setActiveFilter("all");
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      } else {
        const matched = catalogCategories.find((cat) => cat.serviceId === hash);
        if (matched) setActiveFilter(matched.id);
      }
    }

    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const matchedItem = catalogData.find((item) => item.id === hash);
        if (matchedItem) {
          setActiveFilter("all");
          setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 150);
        } else {
          const matched = catalogCategories.find((cat) => cat.serviceId === hash);
          if (matched) setActiveFilter(matched.id);
        }
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return catalogData;
    return catalogData.filter((item) => item.categoryId === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    const hash = id === "all" ? "" : catalogCategories.find((c) => c.id === id)?.serviceId;
    if (hash) {
      window.history.replaceState(null, "", `#${hash}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24'>
      {/* Filter Tabs */}
      <div className='flex flex-wrap gap-2 mb-12 justify-center'>
        <button
          onClick={() => handleFilterChange("all")}
          className={`font-outfit text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
            activeFilter === "all"
              ? "bg-[#a05530] text-white border-[#a05530]"
              : "bg-transparent text-neutral-400 border-neutral-700 hover:border-[#a05530]/50 hover:text-[#a05530]"
          }`}
        >
          Semua
        </button>
        {catalogCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleFilterChange(cat.id)}
            className={`font-outfit text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
              activeFilter === cat.id
                ? "bg-[#d58058] text-white border-[#d58058]"
                : "bg-transparent text-neutral-400 border-neutral-700 hover:border-[#d58058]/50 hover:text-[#d58058]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredItems.length > 0 ? (
        <StaggerContainer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {filteredItems.map((item) => (
            <StaggerItem key={item.id}><CatalogCard item={item} /></StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className='text-center py-20'>
          <p className='font-cormorant-garamond text-neutral-500 text-lg'>
            Tidak ada pertunjukan dalam kategori ini.
          </p>
        </div>
      )}
    </section>
  );
}
