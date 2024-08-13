<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource/geist-mono';
	import '@fontsource/geist-sans';
	import '../app.pcss';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<Toaster />
<ModeWatcher />
<slot />
