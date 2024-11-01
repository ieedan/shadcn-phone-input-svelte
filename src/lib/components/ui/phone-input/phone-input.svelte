<script lang="ts">
	import CountrySelector from './country-selector.svelte';
	import { defaultOptions, type Props } from '.';
	import { cn } from '$lib/utils';
	import { TelInput, normalizedCountries } from 'svelte-tel-input';
	import 'svelte-tel-input/styles/flags.css';

	const countries = normalizedCountries;

	type $$Props = Props;

	interface Props_1 {
		class?: $$Props['class'];
		defaultCountry?: $$Props['defaultCountry'];
		country?: $$Props['country'];
		options?: $$Props['options'];
		placeholder?: $$Props['placeholder'];
		readonly?: $$Props['readonly'];
		disabled?: $$Props['disabled'];
		value?: $$Props['value'];
		valid?: $$Props['valid'];
		detailedValue?: $$Props['detailedValue'];
		order?: $$Props['order'];
		name?: $$Props['name'];
		[key: string]: any
	}

	let {
		class: className = undefined,
		defaultCountry = null,
		country = $bindable(defaultCountry),
		options = defaultOptions,
		placeholder = $bindable(undefined),
		readonly = $bindable(false),
		disabled = $bindable(false),
		value = $bindable(null),
		valid = $bindable(false),
		detailedValue = $bindable(null),
		order = undefined,
		name = undefined,
		...rest
	}: Props_1 = $props();
	

	let el: HTMLInputElement = $state();

	export const focus = () => {
		// sort of an after update kinda thing
		setTimeout(() => {
			el.focus();
		}, 0);
	};
</script>

<div class="flex place-items-center">
	<CountrySelector
		{order}
		{countries}
		bind:selected={country}
		on:select={focus}
	/>
	<TelInput
		{...rest}
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
