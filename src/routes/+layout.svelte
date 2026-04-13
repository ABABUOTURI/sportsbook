<script lang="ts">
	import '../app.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import ToastHost from '$lib/components/ui/ToastHost.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
<ToastHost />
