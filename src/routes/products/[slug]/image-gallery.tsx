import { component$ } from "@builder.io/qwik";

export const ImageGallery = component$(() => {
  return (
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img
          width="100%"
          height="100%"
          src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
          alt="Two each of gray, white, and black shirts laying flat."
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            width="100%"
            height="100%"
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
            alt="Model wearing plain black basic tee."
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            width="100%"
            height="100%"
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
            alt="Model wearing plain gray basic tee."
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img
          width="100%"
          height="100%"
          src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
          alt="Model wearing plain white basic tee."
          class="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
});
