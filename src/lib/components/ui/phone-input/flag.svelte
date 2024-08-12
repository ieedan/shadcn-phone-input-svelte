<script lang="ts">
	import type { Country } from 'svelte-tel-input/types';

	export let country: Country | null = null;
</script>

<span class="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20">
	{#if country}
		<span
			aria-label="{country.name} flag."
			class="flag flag-{country.iso2.toLowerCase()} mr-3 flex-shrink-0"
		/>
	{/if}
</span>
