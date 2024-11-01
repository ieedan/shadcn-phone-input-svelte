<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	import { onMount } from 'svelte';

	type $$Props = TabsPrimitive.ListProps;

	interface Props {
		class?: $$Props['class'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
	
	let el: HTMLDivElement = $state();

	let showBlur = $state(false);

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

		return () => {
			el.removeEventListener('scroll', scroll);
		};
	});
</script>

<TabsPrimitive.List
	class={cn(
		'scrollbar-hide flex h-10 place-items-center justify-start overflow-x-auto border-b text-muted-foreground',
		className
	)}
	bind:el
	{...rest}
>
	{@render children?.()}
	{#if showBlur}
		<span class="absolute right-6 h-10 w-6 bg-background bg-opacity-80 blur-lg"
		></span>
	{/if}
</TabsPrimitive.List>
