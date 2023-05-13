import { component$ } from "@builder.io/qwik";

interface ProductItemProps {
  id: any;
  href: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  price: string;
}
export const ProductItem = component$((props: ProductItemProps) => {
  const { href, id, imageAlt, imageSrc, name, price } = props;
  return (
    <a key={id} href={href} class="group">
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={imageSrc}
          alt={imageAlt}
          class="h-full w-full object-cover object-center group-hover:opacity-75"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <h3 class="mt-4 text-sm text-gray-700">{name}</h3>
      <p class="mt-1 text-lg font-medium text-gray-900">{price}</p>
    </a>
  );
});
