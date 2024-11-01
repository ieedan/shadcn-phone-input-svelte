<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: TabsPrimitive.ListProps = $props();
</script>

<TabsPrimitive.List
	bind:ref
	class={cn(
		'scrollbar-hide flex h-10 place-items-center justify-start overflow-x-auto border-b text-muted-foreground',
		className
	)}
	{...restProps}
/>
