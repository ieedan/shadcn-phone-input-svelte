<script lang="ts">
	import type { Country } from ".";
	import CountrySelector from "./country-selector.svelte";
  import { Input } from "$lib/components/ui/input";

  export let countries: Country[];

  export const focus = () => {
    // el.focus();
  }
</script>

<div class="flex place-items-center">
  <CountrySelector {countries} on:select={focus}/>
  <Input class="border-border border-s-none rounded-s-none rounded-e-lg w-[212px]"/>
</div>