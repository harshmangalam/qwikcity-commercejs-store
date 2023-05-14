import { component$ } from "@builder.io/qwik";
import { Form, Link } from "@builder.io/qwik-city";
import { useRemoveFromCart } from "~/routes/carts";

interface CartItemProps {
  id: string;
  productId: string;
  isCheckout?: boolean;
  name: string;
  price: string;
  imageSrc: string;
  quantity: number;
}
export const CartItem = component$((props: CartItemProps) => {
  const {
    id,
    productId,
    isCheckout = false,
    name,
    price,
    imageSrc,
    quantity,
  } = props;

  const removeFromCartAction = useRemoveFromCart();
  return (
    <li class="flex py-6">
      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={imageSrc}
          alt={name}
          class="h-full w-full object-cover object-center"
          width="100%"
          height="100%"
        />
      </div>

      <div class="ml-4 flex flex-1 flex-col">
        <div>
          <div class="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link href={`/products/${productId}`}>{name}</Link>
            </h3>
            <p class="ml-4">{price}</p>
          </div>
          <p class="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        {!isCheckout && (
          <div class="flex flex-1 items-end justify-between text-sm">
            <select value={quantity} class="py-1 text-sm rounded-md">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <div class="flex">
              <Form action={removeFromCartAction}>
                <input type="hidden" name="id" value={id} />
                <button
                  type="submit"
                  class="font-medium text-indigo-600 hover:text-indigo-500 disabled:text-indigo-600/60"
                  disabled={removeFromCartAction.isRunning}
                >
                  Remove
                </button>
              </Form>
            </div>
          </div>
        )}
      </div>
    </li>
  );
});
