<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = null;
	export { className as class };
	export let title: string | undefined = undefined;
</script>

<div class="flex w-full flex-col gap-3">
	{#if title}
		<h3 class="w-full text-start text-lg font-semibold">{title}</h3>
	{/if}
	<div
		{...$$restProps}
		class={cn(
			'flex w-full flex-col place-items-center justify-center gap-5 rounded-lg border border-border',
			className
		)}
	>
		<slot />
	</div>
</div>
