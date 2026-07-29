import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-[#e8d8b4]/70 bg-white/90 shadow-[0_20px_60px_rgba(22,22,22,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(22,22,22,0.15)]">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-120 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-[#c9a96e]">
              {product.category}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-[#161616]">{product.name}</h3>
          </div>
          <span className="text-sm font-semibold text-[#161616]">{product.price}</span>
        </div>

        <p className="text-sm leading-6 text-[#4b433b]">{product.description}</p>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#eadfca] pt-4 text-sm text-[#4b433b]">
          <span className="font-medium text-[#161616]">{product.material}</span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
              product.stock === "In Stock"
                ? "bg-[#f3e7c9] text-[#7a5b18]"
                : product.stock === "Limited"
                  ? "bg-[#efe2cf] text-[#915c15]"
                  : "bg-[#f7e9dc] text-[#7b5b3b]"
            }`}
          >
            {product.stock}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
