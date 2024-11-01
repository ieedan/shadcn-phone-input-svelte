<script lang="ts">
	import { Command as CommandPrimitive } from 'cmdk-sv';
	import { cn } from '$lib/utils';

	type $$Props = CommandPrimitive.ItemProps;


	interface Props {
		asChild?: boolean;
		class?: string | undefined | null;
		children?: import('svelte').Snippet<[any]>;
		[key: string]: any
	}

	let { asChild = false, class: className = undefined, children, ...rest }: Props = $props();
	
</script>

<CommandPrimitive.Item
	{asChild}
	class={cn(
		'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
	{...rest}
	
	
>
	{#snippet children({ action, attrs })}
		{@render children?.({ action, attrs, })}
	{/snippet}
</CommandPrimitive.Item>
