<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | null | undefined = undefined;
	export { className as class };
	export let href: string;
</script>

<a {href} class={cn('font-medium underline underline-offset-4', className)}>
	<slot />
</a>
