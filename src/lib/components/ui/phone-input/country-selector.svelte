<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Check, ChevronsUpDown } from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import Flag from './flag.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { Country } from '.';

	const dispatch = createEventDispatcher();

	/** List of countries */
	export let countries: Country[];
	export let disabled = false;
	export let country: Country | null = null;
	/** Default ordering is alphabetical by country name supply this function to customize the sorting behavior  */
	export let order: (a: Country, b: Country) => number = (a, b) => {
		return a.name.localeCompare(b.name);
	};
	export let focusOnClose: HTMLInputElement;

	let open = false;

	const selectCountry = (selected: Country) => {
		country = selected;
		open = false;
		dispatch('select', country);
	};
</script>

<Popover.Root
	bind:open
	onOpenChange={(open) => {
		if (!open) focusOnClose.focus();
	}}
	openFocus={focusOnClose}
>
	<Popover.Trigger asChild let:builder>
		<Button
			type="button"
			variant="outline"
			builders={[builder]}
			class={cn('flex gap-1 rounded-e-none rounded-s-lg px-3')}
			{disabled}
		>
			<Flag {country} />
			<ChevronsUpDown class={cn('-mr-2 h-4 w-4 opacity-50', disabled ? 'hidden' : 'opacity-100')} />
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-[300px] p-0">
		<Command.Root>
			<Command.List>
				<ScrollArea class="h-72">
					<Command.Input placeholder="Search country..." />
					<Command.Empty>No country found.</Command.Empty>
					<Command.Group>
						{#each countries.sort(order) as country}
							<Command.Item
								class="gap-2"
								value={country.name}
								onSelect={() => selectCountry(country)}
							>
								<Flag {country} />
								<span class="flex-1 text-sm">{country.name}</span>
								<span class="text-sm text-foreground/50">
									+{country.callCode}
								</span>
								<Check class="size-4" />
							</Command.Item>
						{/each}
					</Command.Group>
				</ScrollArea>
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
