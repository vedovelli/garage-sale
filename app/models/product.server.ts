import products from "~/data/products.json";
import { convertCurrency } from "~/utils";

export type Product = {
  id: string;
  name: string;
  price: number;
  video?: string;
  pictures?: string[];
};

export function getProducts() {
  return products.map((product) => ({
    ...product,
    price: convertCurrency(product.price),
  }));
}
