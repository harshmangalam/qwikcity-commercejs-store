import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="relative overflow-hidden bg-white">
      <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Qwik store are finally here
            </h1>
            <p class="mt-4 text-xl text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              explicabo architecto sapiente accusantium rerum, enim velit eos
              eaque. Quo, animi?
            </p>
          </div>
          <div>
            <div class="mt-10">
              <div
                aria-hidden="true"
                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div class="absolute transform sm:left-1/2 hidden sm:block sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          width={"100%"}
                          height={"100%"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          width={"100%"}
                          height={"100%"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          width={"100%"}
                          height={"100%"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          width={"100%"}
                          height={"100%"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          width={"100%"}
                          height={"100%"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          width={"100%"}
                          height={"100%"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          width={"100%"}
                          height={"100%"}
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex sm:flex-row flex-col gap-6">
                <Link
                  href="/products"
                  class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  View Products
                </Link>
                <Link
                  href="/collections"
                  class="inline-block rounded-md border px-8 py-3 text-center font-medium hover:bg-gray-100"
                >
                  View Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
