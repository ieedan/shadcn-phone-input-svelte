<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { tv } from 'tailwind-variants';
	import CopyIcon from './copy-icon.svelte';
	import { cn } from '$lib/utils';
	import { rootContext } from '.';
	import Button from '../button/button.svelte';

	const style = tv({
		base: 'absolute right-5 top-[11px] size-8 flex place-items-center justify-center rounded-md text-foreground/75 transition-colors hover:bg-border',
	});

	type SnippetOption = {
		name: string;
		code: string;
	};

	interface Props {
		class?: string | null | undefined;
		code?: string | undefined | SnippetOption[];
	}

	let { class: className = undefined, code = $bindable(undefined) }: Props =
		$props();

	const context = rootContext.get();

	if (code == undefined) {
		// get from context
		code = $context.code;
	}

	let copied = $state(false);

	const copy = async (selected: string | SnippetOption) => {
		if (typeof selected == 'string') {
			await navigator.clipboard.writeText(selected);
		} else {
			await navigator.clipboard.writeText(selected.code);
		}

		copied = true;
		setTimeout(() => (copied = false), 1000);
	};
</script>

{#if typeof code == 'string'}
	<Button
		onclick={() => copy(code)}
		variant="ghost"
		size="icon"
		class={cn(style(), className)}
	>
		<CopyIcon {copied} />
	</Button>
{:else if code != undefined}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button
					variant="ghost"
					size="icon"
					class={cn(style(), className)}
					{...props}
				>
					<CopyIcon {copied} />
				</Button>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			{#each code as { name, code: snippet }}
				<DropdownMenu.Item onclick={() => copy(snippet)}>
					{name}
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{/if}
