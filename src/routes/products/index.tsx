import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { type ProductCollection } from "@chec/commerce.js/features/products";
import { ProductItem } from "~/components/product-item";
import commerce from "~/lib/commerce";

export const useProducts = routeLoader$(async ({ query }) => {
  const collectionSlug = query.get("collection");
  let products: ProductCollection;

  if (collectionSlug) {
    products = await commerce.products.list({
      category_slug: collectionSlug,
    });
  } else {
    products = await commerce.products.list();
    return products;
  }

  return products;
});
export default component$(() => {
  const productsLoader = useProducts();
  const products = productsLoader.value.data;
  return (
    <div class="mx-auto max-w-6xl w-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products === undefined ||
          (products?.length === 0 && <p>No products</p>)}
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            imageSrc={product.assets[0].url}
            price={product.price.formatted_with_symbol}
          />
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
