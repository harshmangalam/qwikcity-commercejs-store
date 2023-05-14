import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { CollectionItem } from "~/components/collection-item";
import commerce from "~/lib/commerce";

export const useCollections = routeLoader$(async () => {
  const collections = await commerce.categories.list();
  return collections;
});
export default component$(() => {
  const collectionsLoader = useCollections();

  return (
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {collectionsLoader?.value?.data?.map((collection) => (
          <CollectionItem
            key={collection.id}
            name={collection.name}
            slug={collection.slug}
            imageSrc={(collection as any).assets[0]?.url}
          />
        ))}
      </div>
    </div>
  );
});
