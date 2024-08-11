<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import LightSwitch from '$lib/components/ui/light-switch';
	import PhoneInput from '$lib/components/ui/phone-input';
	import countries from '$lib/components/ui/phone-input/countries';
	import ThemeSelector from '$lib/components/ui/theme-selector/theme-selector.svelte';
</script>

<header class="sticky top-0 flex place-items-center justify-end px-6 py-4">
	<ThemeSelector />
</header>
<main class="flex w-full place-items-center py-20">
	<div class="flex w-full flex-grow flex-col place-items-center justify-center gap-10">
		<div class="flex w-full max-w-2xl flex-col place-items-center justify-center gap-10">
			<section class="flex max-w-[450px] flex-col place-items-center justify-center gap-5">
				<h1 class="text-center text-4xl font-bold">Shadcn Phone Input Svelte</h1>
				<p class="text-center text-muted-foreground">
					An implementation of a Phone Input component built on top of Shadcn UI's input component.
				</p>
				<div class="flex place-items-center gap-2">
					<Button>Try it out</Button>
					<Button variant="secondary" href={'https://github.com/ieedan/shadcn-phone-input-svelte'}>
						GitHub
					</Button>
				</div>
			</section>
			<div
				class="flex h-[350px] w-full place-items-center justify-center rounded-lg border border-border"
			>
				<PhoneInput {countries} />
			</div>
		</div>
	</div>
</main>
