import necklace from "../assets/Necklace.jpg";
import meskel from "../assets/Meskel.jpg";
import biruh from "../assets/biruh.png";
import type { Product } from "../types/product";
import ring from "../assets/Ring.jpg";
import bracelet from "../assets/Bracelet.jpg";
import pendant from "../assets/Pendant.jpg";
import hareg from "../assets/Hareg.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Chain Necklace",
    price: "ETB 5,500",
    description: "Ahand-crafted copper wire with a deep red crystal.",
    material: "Copper",
    category: "Necklaces",
    stock: "In Stock",
    image: necklace,
  },
  {
    id: 2,
    name: "Meskel Earrings",
    price: "ETB 1,400",
    description: "Layered drop earrings with hand-set crystals and a soft brushed finish.",
    material: "Copper",
    category: "Earrings",
    stock: "Limited",
    image: meskel,
  },
  {
    id: 3,
    name: "Crystal Ring",
    price: "ETB 950",
    description: "A statement ring designed with a bold oval centerpiece and radiant detailing.",
    material: "Copper",
    category: "Rings",
    stock: "In Stock",
    image: ring,
  },
  {
    id: 4,
    name: "Bracelet",
    price: "ETB 1,800",
    description: "A refined cuff bracelet with warm metallic polish and sculptural elegance.",
    material: "Copper",
    category: "Bracelets",
    stock: "Made to Order",
    image: bracelet,
  },
  {
    id: 5,
    name: "Nubia Pendant",
    price: "ETB 2,800",
    description: "An heirloom-inspired pendant featuring delicate detailing and rich color contrast.",
    material: "1Copper · Opal",
    category: "Necklaces",
    stock: "In Stock",
    image: pendant,
  },
  {
    id: 6,
    name: "Hareg Earrings",
    price: "ETB 1,200",
    description: "Minimalist hoops with a luminous finish that pairs beautifully with eveningwear.",
    material: "Copper . Crystal",
    category: "Earrings",
    stock: "Limited",
    image: hareg,
  },
];
