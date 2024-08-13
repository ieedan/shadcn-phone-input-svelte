<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource/geist-mono';
	import '@fontsource/geist-sans';
	import '../app.pcss';
	import { Toaster } from '$lib/components/ui/sonner';
	import ThemeSelector from '$lib/components/ui/theme-selector/theme-selector.svelte';
	import Link from '$lib/components/ui/link';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from 'lucide-svelte';
	import { page } from '$app/stores';
</script>

<Toaster />
<ModeWatcher />
<header
	class="sticky top-0 z-[50] flex place-items-center justify-between px-6 py-4"
>
	<div>
		{#if $page.url.pathname != '/'}
			<Button href="/" variant="outline" size="icon" class="rounded-full">
				<ArrowLeft />
			</Button>
		{/if}
	</div>
	<ThemeSelector />
</header>
<slot />
<footer
	class="flex place-items-center justify-center gap-1 border-t border-border px-6 py-10"
>
	<div
		class="flex w-full max-w-4xl flex-col justify-between gap-4 md:flex-row md:place-items-center"
	>
		<p class="text-muted-foreground">
			Crafted by <Link href="https://github.com/omeralpi">Omer Alpi</Link>.
			Ported to <Link
				href="https://github.com/sveltejs/svelte"
				class="text-[#f96743]">Svelte</Link
			>
			by <Link href="https://github.com/ieedan">Aidan Bleser</Link>.
		</p>
		<div class="flex place-items-center gap-4 text-muted-foreground">
			<Link href="https://github.com/ieedan/shadcn-phone-input-svelte"
				>GitHub</Link
			>
			<Link href="/changelog">Changelog</Link>
		</div>
	</div>
</footer>
