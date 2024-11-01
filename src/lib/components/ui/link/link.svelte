<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	
	interface Props {
		class?: string | null | undefined;
		href: string;
		children?: Snippet;
	}

	let { class: className = undefined, href, children }: Props = $props();
</script>

<a {href} class={cn('font-medium underline underline-offset-4', className)}>
	{@render children?.()}
</a>
