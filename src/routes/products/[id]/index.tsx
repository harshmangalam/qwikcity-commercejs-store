import { component$ } from "@builder.io/qwik";
import {
  Form,
  routeAction$,
  routeLoader$,
  z,
  zod$,
} from "@builder.io/qwik-city";
import { Button } from "~/components/button";
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
  async ({ id }, { redirect }) => {
    try {
      await commerce.cart.add(id, 1);
      redirect(303, "/carts");
    } catch (error) {
      console.log(error);
      redirect(303, "/carts");
    }
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
          <input type="hidden" name="id" value={product.id} />
          <Button
            type="submit"
            label="Add to cart"
            isLoading={addToCartAction.isRunning}
          />
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
