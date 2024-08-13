<script lang="ts">
	import CountrySelector from './country-selector.svelte';
	import { defaultOptions, type Props } from '.';
	import { cn } from '$lib/utils';
	import { createEventDispatcher, onMount } from 'svelte';
	import { TelInput, normalizedCountries } from 'svelte-tel-input';
	import 'svelte-tel-input/styles/flags.css';

	const dispatch = createEventDispatcher();

	const countries = normalizedCountries;

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export let defaultCountry: $$Props['defaultCountry'] = null;
	export let country: $$Props['country'] = defaultCountry;
	export let options: $$Props['options'] = defaultOptions;
	export let placeholder: $$Props['placeholder'] = undefined;
	export let readonly: $$Props['readonly'] = false;
	export let disabled: $$Props['disabled'] = false;
	export let value: $$Props['value'] = null;
	export let valid: $$Props['valid'] = false;
	export let detailedValue: $$Props['detailedValue'] = null;
	export let order: $$Props['order'] = undefined;
	export let name: $$Props['name'] = undefined;
	export { className as class };

	let el: HTMLInputElement;

	export const focus = () => {
		// sort of an after update kinda thing
		setTimeout(() => {
			el.focus();
		}, 0);
	};
</script>

<div class="flex place-items-center">
	<CountrySelector {order} {countries} bind:selected={country} on:select={focus} />
	<!--
	     The country binding currently has a type error 
	 	 may open a PR on svelte-tel-input in the future to resolve.
	-->
	<TelInput
		{...$$restProps}
		{name}
		bind:country
		bind:detailedValue
		bind:value
		bind:valid
		bind:readonly
		bind:disabled
		bind:placeholder
		bind:el
		{options}
		required
		class={cn(
			'flex h-10 w-[212px] rounded-lg rounded-l-none border border-l-0 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
			className
		)}
	/>
</div>
