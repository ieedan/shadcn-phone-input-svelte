<script lang="ts" context="module">
	import { z } from 'zod';

	export const formSchema = z.object({
		phoneNumber: z.string().min(2).max(50),
	});
	export type FormSchema = typeof formSchema;
</script>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PhoneInput from '$lib/components/ui/phone-input';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import ThemeSelector from '$lib/components/ui/theme-selector/theme-selector.svelte';
	import type { DetailedValue, E164Number } from 'svelte-tel-input/types';
	import ExampleContainer from './example-container.svelte';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { browser } from '$app/environment';
	import { Label } from '$lib/components/ui/label';
	import Link from '$lib/components/ui/link';
	import * as Snippet from '$lib/components/ui/snippet';
	import { cn } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import * as Tabs from '$lib/components/ui/tabs';
	import PhoneInputRaw from '$lib/components/ui/phone-input/phone-input.svelte?raw';
	import FlagRaw from '$lib/components/ui/phone-input/flag.svelte?raw';
	import IndexRaw from '$lib/components/ui/phone-input/index.ts?raw';
	import CountrySelectorRaw from '$lib/components/ui/phone-input/country-selector.svelte?raw';

	let value: E164Number;
	let detailedValue: DetailedValue;
	let valid = false;

	let showInvalid = false;

	export let data;

	$: if (valid) {
		showInvalid = false;
	}

	const {
		form: formData,
		message,
		enhance,
	} = superForm(data.form, {
		validators: zodClient(formSchema),
		onSubmit: ({ cancel }) => {
			if (!valid) {
				showInvalid = true;
				cancel();
			}
		},
	});

	message.subscribe((message) => {
		if (message) {
			toast.success(message.text, {
				description: 'Your phone number has been submitted.',
			});
		}
	});
</script>

<svelte:head>
	<title>Shadcn Phone Input</title>
</svelte:head>

<header
	class="sticky top-0 z-[50] flex place-items-center justify-end px-6 py-4"
>
	<ThemeSelector />
</header>
<main class="flex w-full place-items-center px-6 py-20">
	<div
		class="flex w-full flex-grow flex-col place-items-center justify-center gap-10"
	>
		<div
			class="flex w-full max-w-4xl flex-col place-items-center justify-center gap-10"
		>
			<section
				class="flex max-w-[450px] flex-col place-items-center justify-center gap-5"
			>
				<h1 class="text-center text-4xl font-bold">
					Shadcn Phone Input Svelte
				</h1>
				<p class="text-center text-muted-foreground">
					An implementation of a Phone Input component built on top of Shadcn
					UI's input component.
				</p>
				<div class="flex place-items-center gap-2">
					<Button href="#try-it-out">Try it out</Button>
					<Button
						variant="secondary"
						href={'https://github.com/ieedan/shadcn-phone-input-svelte'}
					>
						GitHub
					</Button>
				</div>
			</section>
			<ExampleContainer id="try-it-out" class="min-h-[350px]">
				<form
					method="POST"
					use:enhance
					class="flex w-full flex-col place-items-center justify-center gap-5"
				>
					<div class="flex flex-col gap-2">
						<Label class={cn({ 'text-destructive': showInvalid })}
							>Phone Number</Label
						>
						<PhoneInput
							bind:valid
							bind:value={$formData.phoneNumber}
							name="phoneNumber"
							placeholder="Enter a phone number"
						/>
						{#if showInvalid}
							<span class="text-destructive">Invalid Phone Number</span>
						{/if}
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
					<h3 class="w-full text-start text-lg font-semibold">
						Install shadcn-svelte via CLI
					</h3>
					<p>
						Run the <code class="rounded-md bg-accent px-1 py-[2px]"
							>shadcn-svelte</code
						> init command to setup your project:
					</p>
					<Snippet.Root code={'npx shadcn-svelte@latest init'}>
						<Snippet.CopyButton
							code={[
								{ name: 'npm', code: 'npx shadcn-svelte@latest init' },
								{ name: 'pnpm', code: 'pnpm dlx shadcn-svelte@latest init' },
								{ name: 'bun', code: 'bunx shadcn-svelte@latest init' },
								{ name: 'yarn', code: 'yarn dlx shadcn-svelte@latest init' },
							]}
						/>
					</Snippet.Root>
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="w-full text-start text-lg font-semibold">
						Install necessary components
					</h3>
					<p>
						Run the <code class="rounded-md bg-accent px-1 py-[2px]"
							>shadcn-svelte</code
						> add command to add the necessary components to your project:
					</p>
					<Snippet.Root
						code={`npx shadcn-svelte@latest add button
npx shadcn-svelte@latest add command
npx shadcn-svelte@latest add popover
npx shadcn-svelte@latest add scroll-area`}
					>
						<Snippet.CopyButton
							code={[
								{
									name: 'npm',
									code: 'npx shadcn-svelte@latest add button\nnpx shadcn-svelte@latest add command\nnpx shadcn-svelte@latest add popover\nnpx shadcn-svelte@latest add scroll-area',
								},
								{
									name: 'pnpm',
									code: 'pnpm dlx shadcn-svelte@latest add button\npnpm dlx shadcn-svelte@latest add command\npnpm dlx shadcn-svelte@latest add popover\npnpm dlx shadcn-svelte@latest add scroll-area',
								},
								{
									name: 'bun',
									code: 'bunx shadcn-svelte@latest add button\nbunx shadcn-svelte@latest add command\nbunx shadcn-svelte@latest add popover\nbunx shadcn-svelte@latest add scroll-area',
								},
								{
									name: 'yarn',
									code: 'yarn dlx shadcn-svelte@latest add button\nyarn dlx shadcn-svelte@latest add command\nyarn dlx shadcn-svelte@latest add popover\nyarn dlx shadcn-svelte@latest add scroll-area',
								},
							]}
						/>
					</Snippet.Root>
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="w-full text-start text-lg font-semibold">
						Install Svelte Tel Input
					</h3>
					<Snippet.Root code={'npm install svelte-tel-input@latest'}>
						<Snippet.CopyButton
							code={[
								{ name: 'npm', code: 'npm install svelte-tel-input@latest' },
								{ name: 'pnpm', code: 'pnpm install svelte-tel-input@latest' },
								{ name: 'bun', code: 'bun install svelte-tel-input@latest' },
								{ name: 'yarn', code: 'yarn add svelte-tel-input@latest' },
							]}
						/>
					</Snippet.Root>
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="w-full text-start text-lg font-semibold">Copy the code</h3>
					<p>
						You can find the code <Link
							href="https://github.com/ieedan/shadcn-phone-input-svelte/tree/main/src/lib/components/ui/phone-input"
							>here</Link
						>. Or copy it below.
					</p>
					<code>`lib/components/ui/phone-input`</code>
					<Tabs.Root value="phone-input">
						<Tabs.List>
							<Tabs.Trigger value="phone-input" class="font-serif text-xs">
								phone-input.svelte
							</Tabs.Trigger>
							<Tabs.Trigger value="country-selector" class="font-serif text-xs">
								country-selector.svelte
							</Tabs.Trigger>
							<Tabs.Trigger value="flag" class="font-serif text-xs">
								flag.svelte
							</Tabs.Trigger>
							<Tabs.Trigger value="index" class="font-serif text-xs">
								index.ts
							</Tabs.Trigger>
						</Tabs.List>
						<Tabs.Content value="phone-input">
							<Snippet.Root code={PhoneInputRaw} class="h-[400px]" />
						</Tabs.Content>
						<Tabs.Content value="country-selector">
							<Snippet.Root code={CountrySelectorRaw} class="h-[400px]" />
						</Tabs.Content>
						<Tabs.Content value="flag">
							<Snippet.Root code={FlagRaw} class="h-[400px]" />
						</Tabs.Content>
						<Tabs.Content value="index">
							<Snippet.Root code={IndexRaw} class="h-[400px]" />
						</Tabs.Content>
					</Tabs.Root>
				</div>
			</div>
			<div class="flex w-full flex-col gap-5">
				<div>
					<h2 class="w-full py-2 text-start text-2xl font-semibold">
						Examples
					</h2>
					<Separator />
				</div>
				<ExampleContainer class="min-h-[200px]" title="Basic">
					<PhoneInput bind:value placeholder="Enter a phone number" />
				</ExampleContainer>
				<ExampleContainer class="min-h-[200px]" title="Default Country">
					<PhoneInput
						bind:value
						placeholder="Enter a phone number"
						defaultCountry="US"
					/>
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
					<PhoneInput
						bind:value
						bind:detailedValue
						placeholder="Enter a phone number"
					/>
					<div class="flex w-full max-w-[272px] flex-col gap-1 text-sm">
						<span>
							National: {detailedValue?.nationalNumber
								? detailedValue.nationalNumber
								: ''}
						</span>
						<span>
							International: {detailedValue?.formatInternational
								? detailedValue.formatInternational
								: ''}
						</span>
						<span>
							Country Code: {detailedValue?.countryCode
								? detailedValue.countryCode
								: ''}
						</span>
						<span>
							Dial Code: {detailedValue?.countryCallingCode
								? detailedValue.countryCallingCode
								: ''}
						</span>
					</div>
				</ExampleContainer>
			</div>
		</div>
	</div>
</main>
<footer
	class="flex h-[96px] place-items-center justify-center gap-1 border-t border-border"
>
	<div
		class="flex w-full max-w-2xl place-items-center justify-start gap-1 text-muted-foreground"
	>
		Crafted by <Link href="https://github.com/omeralpi">Omer Alpi</Link>. Ported
		to <Link href="https://github.com/sveltejs/svelte" class="text-[#f96743]"
			>Svelte</Link
		>
		by <Link href="https://github.com/ieedan">Aidan Bleser</Link>.
	</div>
</footer>
