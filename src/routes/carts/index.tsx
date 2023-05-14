import { component$ } from "@builder.io/qwik";

import {
  Link,
  routeAction$,
  routeLoader$,
  z,
  zod$,
} from "@builder.io/qwik-city";
import { CartItem } from "~/components/cart-item";
import commerce from "~/lib/commerce";

export const useCart = routeLoader$(async () => {
  const cart = await commerce.cart.retrieve();
  return cart;
});

export const useRemoveFromCart = routeAction$(
  async ({ id }, { redirect }) => {
    try {
      await commerce.cart.remove(id);
      redirect(303, "/carts");
    } catch (error) {
      console.log(error);
      redirect(303, "/carts");
    }
  },
  zod$({
    id: z.string().nonempty("Item id is required"),
  })
);

export const useUpdateCart = routeAction$(
  async ({ id, quantity }, { redirect }) => {
    try {
      const data = await commerce.cart.update(id, {
        quantity,
      });
      if (data) {
        await commerce.cart.refresh();
      }
      redirect(303, "/carts");
    } catch (error) {
      console.log(error);
      redirect(303, "/carts");
    }
  },
  zod$({
    id: z.string().nonempty("Item id is required"),
    quantity: z.number().min(1).max(5),
  })
);
export default component$(() => {
  const cartLoader = useCart();

  const cart = cartLoader.value;
  return (
    <div class="max-w-2xl w-full mx-auto shadow border rounded-md">
      <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
          Shopping cart
        </h2>

        <div class="mt-8">
          {cart.line_items.length ? (
            <ul role="list" class="-my-6 divide-y divide-gray-200">
              {cart.line_items.map((item) => (
                <CartItem
                  key={item.id}
                  productId={item.product_id}
                  name={item.product_name}
                  price={item.line_total.formatted_with_symbol}
                  imageSrc={item.image?.url as string}
                  quantity={item.quantity}
                  id={item.id}
                />
              ))}
            </ul>
          ) : (
            <p class=" text-gray-600">Empty cart</p>
          )}
        </div>
      </div>

      <div class="border-t border-gray-200 px-4 py-6 sm:px-6 sticky bottom-0 bg-white rounded-b-md">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>{cart.subtotal.formatted_with_symbol}</p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div class="mt-6">
          {cart.line_items.length ? (
            <Link
              href="/checkout"
              class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          ) : null}
        </div>
        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
          <Link
            href="/products"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
});
