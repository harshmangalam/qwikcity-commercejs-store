import { component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
  zod$,
  z,
  routeAction$,
} from "@builder.io/qwik-city";
import { CartItem } from "~/components/cart-item";
import commerce from "~/lib/commerce";
import { CountryDropdown } from "./country-dropdown";

export const useListCountries = routeLoader$(async () => {
  const data = await commerce.services.localeListCountries();
  return data.countries;
});

export const useListSubDivisions = routeAction$(
  async ({ countryCode }) => {
    const data = await commerce.services.localeListSubdivisions(countryCode);
    return data.subdivisions;
  },
  zod$({
    countryCode: z.string().nonempty("Country code is required"),
  })
);

export default component$(() => {
  const countriesLoader = useListCountries();

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div>
        <form class="grid grid-cols-2 gap-4">
          <label for="email" class="flex flex-col space-y-2 col-span-2">
            <span class="text-gray-700">Email address</span>
            <input
              class="w-full rounded-md"
              type="email"
              name="email"
              id="email"
            />
          </label>

          <label for="firstName" class="flex flex-col space-y-2">
            <span class="text-gray-700">First name</span>
            <input
              class="w-full rounded-md"
              type="text"
              name="firstName"
              id="firstName"
            />
          </label>
          <label for="lastName" class="flex flex-col space-y-2">
            <span class="text-gray-700">Last name</span>
            <input
              class="w-full rounded-md"
              type="text"
              name="lastName"
              id="lastName"
            />
          </label>
          <label for="address" class="flex flex-col space-y-2 col-span-2">
            <span class="text-gray-700">Address</span>
            <textarea
              class="w-full rounded-md"
              rows={4}
              name="address"
              id="address"
            />
          </label>

          <label for="city" class="flex flex-col space-y-2">
            <span class="text-gray-700">City</span>
            <input
              class="w-full rounded-md"
              type="text"
              name="city"
              id="city"
            />
          </label>

          <CountryDropdown />
          <label for="state" class="flex flex-col space-y-2">
            <span class="text-gray-700">State</span>
            <input
              class="w-full rounded-md"
              type="text"
              name="state"
              id="state"
            />
          </label>
          <label for="pinCode" class="flex flex-col space-y-2">
            <span class="text-gray-700">Pin code</span>
            <input
              class="w-full rounded-md"
              type="text"
              name="pinCode"
              id="pinCode"
            />
          </label>
          <label for="phone" class="flex flex-col space-y-2 col-span-2">
            <span class="text-gray-700">Phone</span>
            <input
              class="w-full rounded-md"
              type="tel"
              name="phone"
              id="phone"
            />
          </label>
        </form>
      </div>
      <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6 shadow border rounded-md">
        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
          Order summary
        </h2>

        <ul role="list" class="divide-y divide-gray-200">
          <CartItem isCheckout />
          <CartItem isCheckout />
        </ul>
        <div class="border-t border-gray-200">
          <ul class="flex flex-col space-y-4 mt-4">
            <li class="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </li>
            <li class="flex justify-between text-base font-medium text-gray-900">
              <p>Shipping</p>
              <p>$10.00</p>
            </li>
            <hr />
            <li class="flex justify-between text-base font-medium text-gray-900">
              <p>Total</p>
              <p>$279.00</p>
            </li>
          </ul>

          <div class="mt-6">
            <button class="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Pay $279
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Checkout",
};
