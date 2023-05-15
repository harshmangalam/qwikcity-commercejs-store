import {
  type NoSerialize,
  component$,
  noSerialize,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
  zod$,
  z,
  routeAction$,
  Form,
} from "@builder.io/qwik-city";
import { CartItem } from "~/components/cart-item";
import commerce from "~/lib/commerce";
import {
  type Stripe,
  type StripeCardElement,
  loadStripe,
} from "@stripe/stripe-js";
import { Button } from "~/components/button";

export const useListServices = routeLoader$(async () => {
  const countriesData = await commerce.services.localeListCountries();
  const subdivionsData = await commerce.services.localeListSubdivisions("IN");
  return {
    countries: countriesData.countries,
    subdivions: subdivionsData.subdivisions,
  };
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

export const useCreateOrder = routeAction$(
  async ({
    address,
    country,
    city,
    email,
    firstName,
    lastName,
    phone,
    pinCode,
    state,
    stripePaymentId,
    checkoutTokenId,
  }) => {
    const token = await commerce.checkout.getToken(checkoutTokenId);

    const order = await commerce.checkout.capture(checkoutTokenId, {
      line_items: token.live.line_items,
      customer: {
        email,
        firstname: firstName,
        lastname: lastName,
        phone,
      },
      shipping: {
        name: "Primary",
        street: address,
        country,
        town_city: city,
        postal_zip_code: pinCode,
        county_state: state,
      },
      fulfillment: {
        shipping_method: "",
      },
      payment: {
        gateway: "stripe",
        stripe: {
          payment_method_id: stripePaymentId,
        },
      },
    });

    console.log(order);
  },
  zod$({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    address: z.string(),
    country: z.string(),
    city: z.string(),
    state: z.string(),
    pinCode: z.string(),
    phone: z.string(),
    stripePaymentId: z.string(),
    checkoutTokenId: z.string(),
  })
);

export const useCheckout = routeLoader$(async () => {
  const cart = await commerce.cart.retrieve();
  const token = await commerce.checkout.generateToken(cart.id, {
    type: "cart",
  });

  return token;
});

export default component$(() => {
  const servicesLoader = useListServices();
  const countries = servicesLoader.value.countries;
  const subdivisonsLoader = useListSubDivisions();
  const checkoutLoader = useCheckout();
  const createOrderAction = useCreateOrder();

  const states =
    (subdivisonsLoader.value as any) || servicesLoader.value.subdivions || {};

  const stripe = useSignal<NoSerialize<Stripe | null>>();
  const elementRef = useSignal<HTMLDivElement>();
  const cardElement = useSignal<NoSerialize<StripeCardElement>>();

  useVisibleTask$(async () => {
    const initStripe = await loadStripe(
      import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    );

    if (initStripe) {
      stripe.value = noSerialize(initStripe);
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => stripe.value);

    if (stripe.value) {
      const elements = stripe.value.elements();
      const element = elements.create("card");
      element.mount(elementRef.value as HTMLDivElement);
      cardElement.value = noSerialize(element);
    }
  });

  return (
    <Form
      action={createOrderAction}
      class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
    >
      <input
        type="hidden"
        name="checkoutTokenId"
        value={checkoutLoader.value.id}
      />
      <div>
        <div class="grid grid-cols-2 gap-4">
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

          <label for="country" class="flex flex-col space-y-2">
            <span class="text-gray-700">Country</span>
            <select
              name="country"
              id="country"
              disabled={subdivisonsLoader.isRunning}
              onChange$={(e) =>
                subdivisonsLoader.submit({ countryCode: e.target.value })
              }
            >
              {Object.keys(countries).map((key) => (
                <option key={key} value={key} selected={key === "IN"}>
                  {countries[key]}
                </option>
              ))}
            </select>
          </label>
          <label for="state" class="flex flex-col space-y-2">
            <span class="text-gray-700">State</span>
            <select name="state" id="state">
              {Object.keys(states).map((key) => (
                <option key={key} value={key} selected={key === "BR"}>
                  {states[key]}
                </option>
              ))}
            </select>
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

          <label for="phone" class="flex flex-col space-y-2 col-span-2">
            <span class="text-gray-700">Payment</span>
            <div ref={elementRef}>Stripe</div>
          </label>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6 shadow border rounded-md">
        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
          Order summary
        </h2>

        <ul role="list" class="divide-y divide-gray-200">
          {checkoutLoader.value.line_items.map((item) => (
            <CartItem
              key={item.id}
              isCheckout
              id={item.id}
              imageSrc={(item.image as any)?.url as string}
              name={item.name}
              price={item.price.formatted_with_symbol}
              quantity={item.quantity}
              productId={item.product_id}
            />
          ))}
        </ul>
        <div class="border-t border-gray-200">
          <ul class="flex flex-col space-y-4 mt-4">
            <li class="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{checkoutLoader.value.live.subtotal.formatted_with_symbol}</p>
            </li>
          </ul>

          <div class="mt-6">
            <Button
              label={`Pay ${checkoutLoader.value.live.subtotal.formatted_with_symbol}`}
              isLoading={createOrderAction.isRunning}
              type="submit"
            />
          </div>
        </div>
      </div>
    </Form>
  );
});

export const head: DocumentHead = {
  title: "Checkout",
};
