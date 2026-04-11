<script lang="ts">
	import { onMount } from 'svelte';
	import { groupedMatches, loadMatches } from '$lib/stores/matches';
	import type { PageData } from './$types';
	import TopNav from '$lib/components/layout/TopNav.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import BetslipPanel from '$lib/components/layout/BetslipPanel.svelte';
	import BannerCarousel from '$lib/components/banners/BannerCarousel.svelte';
	import FilterTabs from '$lib/components/matches/FilterTabs.svelte';
	import SportSection from '$lib/components/matches/SportSection.svelte';

	let isLoading = true;
	const loadDelayMs = 3000;
	const { data } = $props<PageData>();

	onMount(() => {
		loadMatches(data.matches);
		const timer = setTimeout(() => {
			isLoading = false;
		}, loadDelayMs);

		return () => clearTimeout(timer);
	});
</script>

{#if isLoading}
	<section class="flex min-h-screen items-center justify-center bg-[#0F172A]">
		<div class="flex items-end gap-2" aria-label="Loading" role="status">
			<span
				class="h-6 w-2 origin-bottom rounded-pill bg-primary animate-bounce [animation-delay:0ms]"
			></span>
			<span
				class="h-10 w-2 origin-bottom rounded-pill bg-accent animate-bounce [animation-delay:120ms]"
			></span>
			<span
				class="h-7 w-2 origin-bottom rounded-pill bg-primary animate-bounce [animation-delay:240ms]"
			></span>
			<span
				class="h-12 w-2 origin-bottom rounded-pill bg-accent animate-bounce [animation-delay:360ms]"
			></span>
			<span
				class="h-8 w-2 origin-bottom rounded-pill bg-primary animate-bounce [animation-delay:480ms]"
			></span>
			<span
				class="h-10 w-2 origin-bottom rounded-pill bg-accent animate-bounce [animation-delay:600ms]"
			></span>
		</div>
	</section>
{:else}
	<section class="min-h-screen bg-[#0F172A] text-textPrimary">
		<div class="border-b border-border/60">
			<TopNav />
		</div>
		<div class="grid min-h-[calc(100vh-64px)] grid-cols-[224px_1fr_320px]">
			<aside class="sticky top-0 h-[calc(100vh-64px)] overflow-y-auto border-r border-border/60">
				<Sidebar />
			</aside>
			<main class="min-h-[calc(100vh-64px)] overflow-y-auto px-6 py-6">
				<div class="flex flex-col gap-6">
					<BannerCarousel />
					<FilterTabs />
					{#if $groupedMatches.length === 0}
						<div class="rounded-card border border-border/40 bg-surfaceLight/20 p-6 text-sm text-textMuted">
							No matches available.
						</div>
					{:else}
						{#each $groupedMatches as group}
							<SportSection />
						{/each}
					{/if}
				</div>
			</main>
			<aside class="sticky top-0 h-[calc(100vh-64px)] overflow-y-auto border-l border-border/60">
				<BetslipPanel />
			</aside>
		</div>
	</section>
{/if}
