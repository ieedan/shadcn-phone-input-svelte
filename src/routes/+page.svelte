<script lang="ts" context="module">
	import { z } from 'zod';

	export const formSchema = z.object({
		phoneNumber: z.string().min(2).max(50)
	});
	export type FormSchema = typeof formSchema;
</script>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PhoneInput, { defaultOptions } from '$lib/components/ui/phone-input';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import ThemeSelector from '$lib/components/ui/theme-selector/theme-selector.svelte';
	import type { CountryCode, DetailedValue, E164Number } from 'svelte-tel-input/types';
	import ExampleContainer from './example-container.svelte';
	import SuperDebug, { type Infer, type SuperValidated, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { browser } from '$app/environment';
	import { Label } from '$lib/components/ui/label';
	import Link from '$lib/components/ui/link';
	import Snippet from '$lib/components/ui/snippet/snippet.svelte';

	let value: E164Number;
	let detailedValue: DetailedValue;

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(formSchema),
		onUpdated: ({ form: f }) => {
			// validate
		}
	});

	const { form: formData, enhance } = form;
</script>

<svelte:head>
	<title>Shadcn Phone Input</title>
</svelte:head>

<header class="sticky top-0 z-[50] flex place-items-center justify-end px-6 py-4">
	<ThemeSelector />
</header>
<main class="flex w-full place-items-center px-6 py-20">
	<div class="flex w-full flex-grow flex-col place-items-center justify-center gap-10">
		<div class="flex w-full max-w-2xl flex-col place-items-center justify-center gap-10">
			<section class="flex max-w-[450px] flex-col place-items-center justify-center gap-5">
				<h1 class="text-center text-4xl font-bold">Shadcn Phone Input Svelte</h1>
				<p class="text-center text-muted-foreground">
					An implementation of a Phone Input component built on top of Shadcn UI's input component.
				</p>
				<div class="flex place-items-center gap-2">
					<Button href="#try-it-out">Try it out</Button>
					<Button variant="secondary" href={'https://github.com/ieedan/shadcn-phone-input-svelte'}>
						GitHub
					</Button>
				</div>
			</section>
			<ExampleContainer id="try-it-out" class="min-h-[350px]">
				<form
					action="/?/phone-number"
					method="POST"
					use:enhance
					class="flex w-full flex-col place-items-center justify-center gap-5"
				>
					<div class="flex flex-col gap-2">
						<Label>Phone Number</Label>
						<PhoneInput bind:value={$formData.phoneNumber} placeholder="Enter a phone number" />
					</div>
					<div class="flex w-full max-w-[300px] flex-col justify-start gap-5">
						{#if browser}
							<SuperDebug data={$formData} />
						{/if}
						<Button type="submit" class="w-fit">Submit</Button>
					</div>
				</form>
			</ExampleContainer>
			<div class="flex w-full flex-col gap-5">
				<div>
					<h2 class="w-full py-2 text-start text-2xl font-semibold">Setup</h2>
					<Separator />
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="w-full text-start text-lg font-semibold">Install shadcn-svelte via CLI</h3>
					<p>
						Run the <code class="rounded-md bg-accent px-1 py-[2px]">shadcn-svelte</code> init command
						to setup your project:
					</p>
					<Snippet code={'npx shadcn-svelte@latest init'} />
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="w-full text-start text-lg font-semibold">Install necessary components</h3>
					<p>
						Run the <code class="rounded-md bg-accent px-1 py-[2px]">shadcn-svelte</code> add command
						to add the components to your project:
					</p>
					<Snippet
						code={`npx shadcn-svelte@latest add button
npx shadcn-svelte@latest add command
npx shadcn-svelte@latest add popover
npx shadcn-svelte@latest add scroll-area`}
					/>
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="w-full text-start text-lg font-semibold">Install Svelte Tel Input</h3>
					<Snippet code={'npm install svelte-tel-input'} />
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="w-full text-start text-lg font-semibold">Copy the code</h3>
					<p>
						You can find the most recent code <Link
							href="https://github.com/ieedan/shadcn-phone-input-svelte/tree/main/src/lib/components/ui/phone-input"
							>here</Link
						>.
					</p>
				</div>
			</div>
			<div class="flex w-full flex-col gap-5">
				<div>
					<h2 class="w-full py-2 text-start text-2xl font-semibold">Examples</h2>
					<Separator />
				</div>
				<ExampleContainer class="min-h-[200px]" title="Basic">
					<PhoneInput bind:value placeholder="Enter a phone number" />
				</ExampleContainer>
				<ExampleContainer class="min-h-[200px]" title="Default Country">
					<PhoneInput bind:value placeholder="Enter a phone number" defaultCountry="US" />
				</ExampleContainer>
				<ExampleContainer class="min-h-[200px]" title="Custom Ordering">
					<PhoneInput
						bind:value
						placeholder="Enter a phone number"
						order={(a, b) => {
							if (a.iso2 == 'US') return -1;
							if (b.iso2 == 'US') return 1;
							if (a.iso2 == 'CN') return -1;
							if (b.iso2 == 'CN') return 1;

							return a.name.localeCompare(b.name);
						}}
					/>
				</ExampleContainer>
				<ExampleContainer class="min-h-[200px]" title="Detailed Value">
					<PhoneInput bind:value bind:detailedValue placeholder="Enter a phone number" />
					<div class="flex w-full max-w-[272px] flex-col gap-1 text-sm">
						<span>
							National: {detailedValue?.nationalNumber ? detailedValue.nationalNumber : ''}
						</span>
						<span>
							International: {detailedValue?.formatInternational
								? detailedValue.formatInternational
								: ''}
						</span>
						<span>
							Country Code: {detailedValue?.countryCode ? detailedValue.countryCode : ''}
						</span>
						<span>
							Dial Code: {detailedValue?.countryCallingCode ? detailedValue.countryCallingCode : ''}
						</span>
					</div>
				</ExampleContainer>
			</div>
		</div>
	</div>
</main>
<footer class="flex h-[96px] place-items-center justify-center gap-1 border-t border-border">
	<div class="flex w-full max-w-2xl place-items-center justify-start gap-1 text-muted-foreground">
		Crafted by <Link href="https://github.com/omeralpi">Omer Alpi</Link>. Ported to <Link
			href="https://github.com/sveltejs/svelte"
			class="text-[#f96743]">Svelte</Link
		>
		by <Link href="https://github.com/ieedan">Aidan Bleser</Link>.
	</div>
</footer>
