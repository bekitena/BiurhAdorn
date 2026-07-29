export type ProductCategory = "All" | "Necklaces" | "Earrings" | "Rings" | "Bracelets";

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  material: string;
  category: Exclude<ProductCategory, "All">;
  stock: "In Stock" | "Limited" | "Made to Order";
  image: string;
}
