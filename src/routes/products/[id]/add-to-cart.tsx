import { $, component$, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/button";
import commerce from "~/lib/commerce";

export const AddToCart = component$(({ productId }: { productId: string }) => {
  const isRunning = useSignal(false);
  const navigate = useNavigate();
  const addToCart = $(async () => {
    {
      try {
        isRunning.value = true;
        await commerce.cart.add(productId, 1);
        await navigate("/carts");
      } catch (error) {
        console.log(error);
      } finally {
        isRunning.value = false;
      }
    }
  });
  return (
    <Button
      onClick$={addToCart}
      label="Add to cart"
      isLoading={isRunning.value}
    />
  );
});
