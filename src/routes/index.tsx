import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { ImageGallery } from "~/components/image-gallery";

export default component$(() => {
  return (
    <div class="relative overflow-hidden bg-white">
      <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Green Up Your Living Space
            </h1>
            <p class="mt-4 text-xl text-gray-500">
              Welcome to our plant store, your one-stop destination for all
              things green and beautiful. Our hand-picked selection of plants
              and accessories are carefully chosen to enhance your living space
              and bring nature indoors
            </p>
          </div>
          <div>
            <div class="mt-10">
              <div
                aria-hidden="true"
                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <ImageGallery />
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
