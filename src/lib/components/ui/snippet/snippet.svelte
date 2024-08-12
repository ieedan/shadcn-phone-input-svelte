<script lang="ts">
	import { Check, Copy } from 'lucide-svelte';
	import { scale } from 'svelte/transition';

	export let code: string;

	let copied = false;

	const copy = async () => {
		await navigator.clipboard.writeText(code);
		copied = true;
		setTimeout(() => (copied = false), 500);
	};
</script>

<div class="relative">
	<pre
		class="rounded-lg border border-border bg-zinc-100 p-4 font-serif text-sm text-muted-foreground dark:bg-zinc-900">
<code>{code}</code></pre>
	<button
		on:click={copy}
		class="absolute right-5 top-[11px] flex size-8 place-items-center justify-center text-muted-foreground hover:bg-accent transition-colors rounded-md"
	>
		{#if !copied}
			<div in:scale={{ duration: 150, start: 0.5 }}>
				<Copy class="size-3" />
			</div>
		{:else}
			<div in:scale={{ duration: 150, start: 0.5 }}>
				<Check class="size-3" />
			</div>
		{/if}
	</button>
</div>
