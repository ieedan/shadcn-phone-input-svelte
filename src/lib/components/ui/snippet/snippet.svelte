<script lang="ts">
	import { Copy } from 'lucide-svelte';

	export let code: string;
</script>

<div class="relative">
	<pre
		class="rounded-lg border border-border bg-zinc-100 p-4 font-serif text-sm text-muted-foreground dark:bg-zinc-900">
<code>{code}</code></pre>
	<button
		class="absolute right-5 top-[11px] flex size-8 place-items-center justify-center text-muted-foreground"
	>
		<Copy class="size-3" />
	</button>
</div>
