<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource/geist-mono';
	import '@fontsource/geist-sans';
	import '../app.css';
	import { Toaster } from 'svelte-sonner';
</script>

<Toaster/>
<ModeWatcher />
<slot />
