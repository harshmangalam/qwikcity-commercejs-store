import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useProduct = routeLoader$(() => {
  const product = {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    description: ` The Basic Tee 6-Pack allows you to fully express your vibrant
      personality with three grayscale options. Feeling adventurous?
      Put on a heather gray tee. Want to be a trendsetter? Try our
      exclusive colorway. Need to add an extra
      pop of color to your outfit? Our white tee has you covered.`,
  };

  return {
    product,
  };
});
export default component$(() => {
  const productLoader = useProduct();
  const product = productLoader.value.product;
  return (
    <div class="grid max-w-5xl mx-auto w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
      <div class="rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-6">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          class="object-cover object-center"
          width="100%"
          height="100%"
        />
      </div>
      <div class="sm:col-span-8 lg:col-span-6 flex flex-col space-y-4">
        <h2 class="text-2xl font-bold text-gray-900">{product.name}</h2>
        <p class="text-2xl text-gray-900">{product.price}</p>

        <button
          type="submit"
          class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to cart
        </button>

        <div class="flex flex-col space-y-2">
          <h4 class="text-lg">Description</h4>
          <p class=" text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
});
