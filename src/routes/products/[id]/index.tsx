import { component$ } from "@builder.io/qwik";
import {
  Form,
  routeAction$,
  routeLoader$,
  z,
  zod$,
} from "@builder.io/qwik-city";
import commerce from "~/lib/commerce";

export const useProduct = routeLoader$(async ({ params, error }) => {
  const product = await commerce.products.retrieve(params.id);
  if (!product) {
    throw error(404, "Plant not found");
  }
  return {
    product,
  };
});

export const useAddToCart = routeAction$(
  async () => {
    setTimeout(() => {}, 2000);
    return null;
  },
  zod$({
    id: z.string().nonempty("Product id is required"),
  })
);
export default component$(() => {
  const productLoader = useProduct();
  const addToCartAction = useAddToCart();
  const product = productLoader.value.product;
  return (
    <div class="grid max-w-5xl mx-auto w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
      <div class="rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-6">
        <img
          src={product.assets[0].url}
          alt={product.name}
          class="object-cover object-center"
          width="100%"
          height="100%"
        />
      </div>
      <div class="sm:col-span-8 lg:col-span-6 flex flex-col space-y-4">
        <h2 class="text-2xl font-bold text-gray-900">{product.name}</h2>
        <p class="text-2xl text-gray-900">
          {product.price.formatted_with_symbol}
        </p>

        <Form action={addToCartAction}>
          <button
            type="submit"
            class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-700/80"
            disabled={addToCartAction.isRunning}
          >
            {addToCartAction.isRunning ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="animate-spin"
                >
                  <path
                    fill="currentColor"
                    d="M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0Zm0-2a9.001 9.001 0 0 1 17.89 0h-2.016A7.002 7.002 0 0 0 5.07 11H3.055Z"
                  />
                </svg>
              </div>
            ) : (
              "Add to cart"
            )}
          </button>
        </Form>

        <div class="flex flex-col space-y-2">
          <h4 class="text-lg">Description</h4>
          <p
            class=" text-gray-600"
            dangerouslySetInnerHTML={product.description}
          />
        </div>
      </div>
    </div>
  );
});
