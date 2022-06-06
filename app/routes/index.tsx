import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getProducts } from "~/models/product.server";
import { useLoaderData } from "@remix-run/react";
import type { Product } from "~/models/product.server";

export const loader: LoaderFunction = async () => {
  const products = getProducts();

  return json({
    products,
  });
};

export default function Index() {
  const { products } = useLoaderData();

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map(({ id, name, price, pictures }: Product) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>{price}</p>
            {pictures &&
              pictures.length > 0 &&
              pictures?.map((picture) => (
                <img key={picture} src={`/images/${picture}`} alt={picture} />
              ))}
          </li>
        ))}
      </ul>
    </main>
  );
}
