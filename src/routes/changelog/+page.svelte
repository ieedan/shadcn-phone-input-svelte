<script lang="ts">
	export let data;
</script>

<main class="flex min-h-svh w-full px-6 py-20">
	<div
		class="flex w-full flex-grow flex-col place-items-center justify-start gap-10"
	>
		<div
			class="flex w-full max-w-2xl flex-col place-items-start justify-center"
		>
			<div class="flex flex-col gap-3 pb-10">
				<h1 class="w-full text-start text-5xl font-bold">Changelog</h1>
				<p class="text-muted-foreground text-lg">Latest updates and announcements.</p>
			</div>
			<div class="prose prose-zinc dark:prose-invert">
				{@html data.content}
			</div>
		</div>
	</div>
</main>
