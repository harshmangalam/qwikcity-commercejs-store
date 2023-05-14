import { component$ } from "@builder.io/qwik";

import { Link } from "@builder.io/qwik-city";
import { CartItem } from "~/components/cart-item";

export default component$(() => {
  return (
    <div class="max-w-2xl w-full mx-auto shadow border rounded-md">
      <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
          Shopping cart
        </h2>

        <div class="mt-8">
          <ul role="list" class="-my-6 divide-y divide-gray-200">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-200 px-4 py-6 sm:px-6 sticky bottom-0 bg-white rounded-b-md">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div class="mt-6">
          <Link
            href="/checkout"
            class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </Link>
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
