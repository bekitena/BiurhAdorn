import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import type { ProductCategory } from "../types/product";
// import { link } from "fs";

const categories: ProductCategory[] = ["All", "Necklaces", "Earrings", "Rings", "Bracelets"];

function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All");
  const [search, setSearch] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = `${product.name} ${product.description} ${product.material}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    
    <main className="min-h-screen bg-[linear-gradient(135deg,#fffdf9_0%,#f8efe0_100%)] px-4 py-20 text-[#161616] sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="rounded-[32px] border border-[#ebddbf] bg-[#fffaf1] px-6 py-10 shadow-[0_20px_70px_rgba(22,22,22,0.06)] sm:px-10 lg:px-14 lg:py-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c9a96e]">
                Biruh Adorn Collection
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[0.02em] text-[#161616] sm:text-5xl">
                Handcrafted pieces for luminous evenings.
              </h1>
              <p className="mt-4 text-base leading-7 text-[#5f5348] sm:text-lg">
                Discover sculptural jewelry inspired by Ethiopian heritage, designed for modern heirlooms and unforgettable occasions.
              </p>
            </div>

            <div className="rounded-[20px] border border-[#ecdbbf] bg-white/80 px-5 py-4 text-sm text-[#5f5348] shadow-sm">
              <p className="font-semibold text-[#161616]">New arrivals</p>
              <p className="mt-1">Limited masterworks released seasonally.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeCategory === category
                    ? "border-[#c9a96e] bg-[#c9a96e] text-[#161616] shadow-[0_10px_25px_rgba(201,169,110,0.25)]"
                    : "border-[#e6d7b7] bg-white/80 text-[#5f5348] hover:border-[#c9a96e] hover:text-[#161616]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-3 rounded-full border border-[#e6d7b7] bg-white/90 px-4 py-3 shadow-sm">
            <span className="text-lg text-[#c9a96e]">⌕</span>
            <input
              type="search"
              placeholder="Search pieces"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full bg-transparent text-sm text-[#161616] outline-none placeholder:text-[#8f806e]"
            />
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-[#e7d9bb] bg-white/70 px-6 py-10 text-center text-[#5f5348]">
            No pieces match that search yet. Try another category or keyword.
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default Products;
