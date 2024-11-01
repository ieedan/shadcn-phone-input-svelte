<script lang="ts">
	import { Check, Copy } from 'lucide-svelte';
	import { scale } from 'svelte/transition';

	type Props = {
		copied: boolean;
	};

	let { copied }: Props = $props();
</script>

{#if !copied}
	<div in:scale={{ duration: 150, start: 0.5 }}>
		<Copy class="size-3" />
	</div>
{:else}
	<div in:scale={{ duration: 150, start: 0.5 }}>
		<Check class="size-3" />
	</div>
{/if}
