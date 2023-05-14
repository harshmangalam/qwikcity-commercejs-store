import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { NavLink } from "./nav-link";

export const Navbar = component$(
  ({ cartQuantity }: { cartQuantity: number }) => {
    return (
      <header class="relative bg-white">
        <p class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Open source ecommerce store build with qwikcity
        </p>

        <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="border-b border-gray-200">
            <div class="flex h-16 items-center">
              <button
                type="button"
                class="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span class="sr-only">Open menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              <div class="ml-4 flex lg:ml-0">
                <Link href="/">
                  <span class="sr-only">Ecommerce</span>
                  <img
                    class="h-8 w-auto"
                    src="https://qwik.builder.io/logos/qwik-logo.svg"
                    alt=""
                    height={32}
                    width={"auto"}
                  />
                </Link>
              </div>

              <div class="hidden lg:ml-8 lg:block lg:self-stretch">
                <div class="flex h-full space-x-8">
                  <NavLink href="/products" name="Products" />
                  <NavLink href="/collections" name="Collections" />
                </div>
              </div>

              <div class="ml-auto flex items-center">
                <div class="ml-4 flow-root lg:ml-6">
                  <Link href="/carts" class="group -m-2 flex items-center p-2">
                    <svg
                      class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cartQuantity}
                    </span>
                    <span class="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
);
