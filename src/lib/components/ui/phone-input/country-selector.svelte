<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Check, ChevronsUpDown } from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import type { Country } from '.';
	import Flag from './flag.svelte';

	export let countries: Country[];
	export let disabled = false;

	export let country: Country | null = null;
</script>

<Popover.Root>
	<Popover.Trigger asChild>
		<Button
			type="button"
			variant="outline"
			class={cn('flex gap-1 rounded-e-none rounded-s-lg px-3')}
			{disabled}
		>
			<Flag {country}/>
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
						{#each countries as country}
							<Command.Item class="gap-2" value={country.name.official}>
								<Flag {country}/>
                                <span class="flex-1 text-sm">{country.name.official}</span>
								<span class="text-sm text-foreground/50">
									+{country.idd.root}
								</span>
								<Check class="size-4" />
							</Command.Item>
						{/each}
						<!-- {options
                .filter((x) => x.value)
                .map((option) => (
                  <CommandItem
                    className="gap-2"
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <FlagComponent
                      country={option.value}
                      countryName={option.label}
                    />
                    <span className="flex-1 text-sm">{option.label}</span>
                    {option.value && (
                      <span className="text-sm text-foreground/50">
                        {`+${RPNInput.getCountryCallingCode(option.value)}`}
                      </span>
                    )}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        option.value === value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))} -->
					</Command.Group>
				</ScrollArea>
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
