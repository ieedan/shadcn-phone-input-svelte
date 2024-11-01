<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
	}

	let { children, ...rest }: Props & DialogPrimitive.PortalProps = $props();
</script>

<DialogPrimitive.Portal {...rest}>
	{@render children?.()}
</DialogPrimitive.Portal>
