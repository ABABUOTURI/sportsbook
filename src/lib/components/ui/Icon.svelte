<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	export let icon: ComponentType;
	export let size: number = 18;
	export let strokeWidth: number = 1.8;
	export let class: string = '';
</script>

<svelte:component this={icon} {size} {strokeWidth} class={$$props.class} />
