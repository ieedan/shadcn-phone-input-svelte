<script lang="ts">
	import { cn } from '$lib/utils';
	import { rootContext } from '.';
	import CopyButton from './copy-button.svelte';

	let className: string | null | undefined = undefined;
	export { className as class };
	export let code: string;
	export let showCopy = true;

	rootContext.init({ code });
</script>

<div class="relative">
	<pre
		class={cn(
			'overflow-x-auto rounded-lg border border-border bg-zinc-100 p-4 font-serif text-sm text-foreground/75 dark:bg-zinc-900',
			className
		)}>
<code>{code}</code></pre>
	<slot>
		{#if showCopy}
			<CopyButton />
		{/if}
	</slot>
</div>
