import { component$ } from "@builder.io/qwik";
import { ImageGallery } from "./image-gallery";
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
    <div class="bg-white">
      <div class="pt-6">
        <ImageGallery />

        <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div class="mt-4 lg:row-span-3 lg:mt-0">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">
              ${product.price}
            </p>

            <form class="mt-10">
              <button
                type="submit"
                class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 class="sr-only">Description</h3>

              <div class="space-y-6">
                <p class="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
