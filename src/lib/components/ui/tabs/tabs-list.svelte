<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	import { onMount } from 'svelte';

	type $$Props = TabsPrimitive.ListProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	let el: HTMLDivElement;

	let showBlur = false;

	const scroll = () => {
		if (el.offsetWidth + el.scrollLeft < el.scrollWidth) {
			showBlur = true;
		} else {
			showBlur = false;
		}
	};

	onMount(() => {
		scroll();
		el.addEventListener('scroll', scroll);
	});
</script>

<TabsPrimitive.List
	class={cn(
		'scrollbar-hide flex h-10 place-items-center justify-start overflow-x-auto border-b text-muted-foreground',
		className
	)}
	bind:el
	{...$$restProps}
>
	<slot />
	{#if showBlur}
		<span class="absolute right-6 h-10 w-6 bg-background bg-opacity-80 blur-lg"
		></span>
	{/if}
</TabsPrimitive.List>
