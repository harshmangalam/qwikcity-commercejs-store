import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/navbar";

export default component$(() => {
  return (
    <div>
      <Navbar />
      <main class="py-6">
        <Slot />
      </main>
    </div>
  );
});
