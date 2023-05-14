import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
interface CollectionItemProps {
  imageSrc: string;
  name: string;
  slug: string;
}
export const CollectionItem = component$((props: CollectionItemProps) => {
  const { imageSrc, name, slug } = props;
  return (
    <div class="group relative">
      <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          src={imageSrc}
          alt={name}
          class="h-full w-full object-cover object-center"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <h3 class="mt-2 font-semibold text-center">
        <Link href={`/products/?collection=${slug}`}>
          <span class="absolute inset-0"></span>
          {name}
        </Link>
      </h3>
    </div>
  );
});
