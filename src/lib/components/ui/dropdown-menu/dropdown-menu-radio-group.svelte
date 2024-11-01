<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type $$Props = DropdownMenuPrimitive.RadioGroupProps;

	interface Props {
		value?: $$Props['value'];
		children?: Snippet;
	}

	let { value = $bindable(undefined), children, ...rest }: Props = $props();
</script>

<DropdownMenuPrimitive.RadioGroup {...rest} bind:value>
	{@render children?.()}
</DropdownMenuPrimitive.RadioGroup>
