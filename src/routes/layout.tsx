import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar";
import commerce from "~/lib/commerce";

export const useLoader = routeLoader$(async () => {
  const cart = await commerce.cart.retrieve();
  return {
    cartQuantity: cart.total_items,
  };
});
export default component$(() => {
  const loader = useLoader();
  return (
    <div>
      <Navbar cartQuantity={loader.value.cartQuantity} />
      <main class="py-6 px-4">
        <Slot />
      </main>
    </div>
  );
});
