import { component$ } from "@builder.io/qwik";

export const CollectionItem = component$(() => {
  return (
    <div class="group relative">
      <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
          class="h-full w-full object-cover object-center"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <h3 class="mt-6 text-sm text-gray-500">
        <a href="#">
          <span class="absolute inset-0"></span>
          Desk and Office
        </a>
      </h3>
      <p class="text-base font-semibold text-gray-900">
        Work from home accessories
      </p>
    </div>
  );
});
