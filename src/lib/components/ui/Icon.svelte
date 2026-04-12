<script lang="ts">
	import type { ComponentType } from 'svelte';

	interface Props {
		icon: ComponentType;
		size?: number;
		strokeWidth?: number;
		class?: string;
	}

	const { icon, size = 18, strokeWidth = 1.8, class: className = '' }: Props = $props();
</script>

{#if icon}
	<svelte:component this={icon} {size} {strokeWidth} class={className} />
{/if}
