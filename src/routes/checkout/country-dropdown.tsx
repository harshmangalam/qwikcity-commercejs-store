import { component$ } from "@builder.io/qwik";
import { useListCountries } from ".";

export const CountryDropdown = component$(() => {
  const loader = useListCountries();
  const countries = loader.value;
  return (
    <label for="country" class="flex flex-col space-y-2">
      <span class="text-gray-700">Country</span>
      <select name="country" id="country">
        {Object.keys(countries).map((key) => (
          <option key={key} value={key}>
            {countries[key]}
          </option>
        ))}
      </select>
    </label>
  );
});
