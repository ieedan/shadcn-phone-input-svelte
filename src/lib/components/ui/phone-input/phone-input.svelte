<script lang="ts">
	import type { Country } from ".";
	import CountrySelector from "./country-selector.svelte";
  import { Input } from "$lib/components/ui/input";

  export let countries: Country[];

  export let country: Country | null = null;

  export let el: HTMLInputElement;

  export const focus = () => {
    el.focus();
  }
</script>

<div class="flex place-items-center">
  <CountrySelector focusOnClose={el} {countries} bind:country on:select={focus}/>
  <Input bind:el class="border-border border-s-none rounded-s-none rounded-e-lg w-[212px]"/>
</div>