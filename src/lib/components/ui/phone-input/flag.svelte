<script lang="ts">
	import type { Country } from '.';

	export let country: Country | null = null;
</script>

<span class="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20">
	{#if country}
		<img src={country.flags.svg} alt="{country.name.common}'s flag" />
	{/if}
</span>
