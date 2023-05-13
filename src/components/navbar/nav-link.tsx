import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface NavLinkProps {
  href: string;
  name: string;
}
export const NavLink = component$((props: NavLinkProps) => {
  const { href, name } = props;
  return (
    <Link
      href={href}
      class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
    >
      {name}
    </Link>
  );
});
