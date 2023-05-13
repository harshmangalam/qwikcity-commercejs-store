import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/navbar";

export default component$(() => {
  return (
    <div>
      <Navbar />
      <main class="">
        <Slot />
      </main>
    </div>
  );
});
