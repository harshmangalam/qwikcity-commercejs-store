import { component$ } from "@builder.io/qwik";

export const ImageGallery = component$(() => {
  return (
    <div class="absolute transform sm:left-1/2 hidden sm:block sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
      <div class="flex items-center space-x-6 lg:space-x-8">
        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
            <img
              width={"100%"}
              height={"100%"}
              src="https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="h-64 w-44 overflow-hidden rounded-lg">
            <img
              width={"100%"}
              height={"100%"}
              src="https://plus.unsplash.com/premium_photo-1673203734691-cdebcf12f003?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="h-64 w-44 overflow-hidden rounded-lg">
            <img
              width={"100%"}
              height={"100%"}
              src="https://images.unsplash.com/photo-1555511844-51bed8c7e58a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="h-64 w-44 overflow-hidden rounded-lg">
            <img
              width={"100%"}
              height={"100%"}
              src="https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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
              src="https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="h-64 w-44 overflow-hidden rounded-lg">
            <img
              width={"100%"}
              height={"100%"}
              src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
});
