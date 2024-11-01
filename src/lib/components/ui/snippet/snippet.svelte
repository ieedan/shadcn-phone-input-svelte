<script lang="ts">
	import { cn } from '$lib/utils';
	import { rootContext } from '.';
	import CopyButton from './copy-button.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string | null | undefined;
		code: string;
		showCopy?: boolean;
		children?: Snippet;
	}

	let {
		class: className = undefined,
		code,
		showCopy = true,
		children,
	}: Props = $props();

	rootContext.init({ code });
</script>

<div class="relative">
	<pre
		class={cn(
			'overflow-x-auto rounded-lg border border-border bg-zinc-100 p-4 font-serif text-sm text-foreground/75 dark:bg-zinc-900',
			className
		)}><code>{code}</code></pre>
	{#if children}
		{@render children()}
	{:else if showCopy}
		<CopyButton />
	{/if}
</div>
