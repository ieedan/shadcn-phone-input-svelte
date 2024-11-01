<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
	class={cn(
		'inline-flex items-center justify-center whitespace-nowrap border-b-2 border-transparent px-3 py-[10px] text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-foreground data-[state=active]:text-foreground data-[state=active]:shadow-sm',
		className
	)}
	{...restProps}
/>
