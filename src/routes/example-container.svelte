<script lang="ts">
	import { cn } from '$lib/utils';

	
	interface Props {
		class?: string | undefined | null;
		title?: string | undefined;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { class: className = null, title = undefined, children, ...rest }: Props = $props();
</script>

<div class="flex w-full flex-col gap-3">
	{#if title}
		<h3 class="w-full text-start text-lg font-semibold">{title}</h3>
	{/if}
	<div
		{...rest}
		class={cn(
			'flex w-full flex-col place-items-center justify-center gap-5 rounded-lg border border-border',
			className
		)}
	>
		{@render children?.()}
	</div>
</div>
