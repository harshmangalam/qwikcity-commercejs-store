import { type QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";

type ButtonProps = QwikIntrinsicElements["button"] & {
  isLoading?: boolean;
  label?: string;
};
export const Button = component$((props: ButtonProps) => {
  const { isLoading, label, ...rest } = props;
  return (
    <button
      class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-700/80"
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="animate-spin"
          >
            <path
              fill="currentColor"
              d="M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0Zm0-2a9.001 9.001 0 0 1 17.89 0h-2.016A7.002 7.002 0 0 0 5.07 11H3.055Z"
            />
          </svg>
        </div>
      ) : (
        label ?? <Slot />
      )}
    </button>
  );
});
